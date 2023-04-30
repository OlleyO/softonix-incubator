<template>
  <div class="border border-blue-600 rounded-2xl p-5">
    <h2 class="text-xl font-semibold mb-5 flex gap-2 text-blue-600">
      {{ department.name }}
    </h2>
    <div class="flex flex-col gap-10 items-center">
      <JobOpeningItem
        v-for="jobOpening in visibleJobOpenings"
        :key="jobOpening.id"
        :jobOpening="jobOpening"
      />
      <AppButton v-if="jobOpenings.length > jobOpeningGroupSize" :disabled="!hasMoreItems" @click="showMore">
        Show More
      </AppButton>
      <AppButton v-if="!(currentIndex === jobOpeningGroupSize)" @click="hide">
        Hide
      </AppButton>
    </div>
  </div>
  <br>
</template>

<script lang="ts" setup>
import JobOpeningItem from './JobOpeningItem.vue'

const props = defineProps<{
  department: IDepartment
  jobOpenings: IJobOpening[]
}>()

const jobOpeningsStore = useJobOpeningsStore()
const { setVisibleSize } = jobOpeningsStore

const jobOpeningGroupSize = 5

const currentIndex = ref(jobOpeningGroupSize)

const visibleJobOpenings = computed(() =>
  props.jobOpenings.slice(0, currentIndex.value)
)

const hasMoreItems = computed(() => visibleJobOpenings.value.length < props.jobOpenings.length)

function showMore () {
  currentIndex.value += jobOpeningGroupSize
  setVisibleSize(visibleJobOpenings.value.length % jobOpeningGroupSize || jobOpeningGroupSize)
}

onMounted(() => {
  setVisibleSize(visibleJobOpenings.value.length)
})

onUnmounted(() => {
  setVisibleSize(-visibleJobOpenings.value.length)
})

function hide () {
  setVisibleSize(-(visibleJobOpenings.value.length - jobOpeningGroupSize))
  currentIndex.value = jobOpeningGroupSize
}
</script>
