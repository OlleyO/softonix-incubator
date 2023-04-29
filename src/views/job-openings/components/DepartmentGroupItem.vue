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
      <AppButton v-if="jobOpenings.length > 5" :disabled="!hasMoreItems" @click="showMore">
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

const jobOpeningGroupSize = 5

interface IProps {
  department: IDepartment
  jobOpenings: IJobOpening[]
}

const currentIndex = ref(jobOpeningGroupSize)

const visibleJobOpenings = computed(() =>
  props.jobOpenings.slice(0, currentIndex.value))

const hasMoreItems = computed(() => visibleJobOpenings.value.length < props.jobOpenings.length)

function showMore () {
  currentIndex.value += jobOpeningGroupSize
}

function hide () {
  currentIndex.value = jobOpeningGroupSize
}

const props = defineProps<IProps>()
</script>
