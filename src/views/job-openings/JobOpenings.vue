<template>
  <AppHeader class="mb-5">
    <template #suffix>
      <h2 id="heading" ref="heading" class="font-medium text-lg ml-auto">See Job Openings</h2>
    </template>
  </AppHeader>
  <ElSelect
    v-model="selectedDepartments"
    :max-collapse-tags="5"
    placeholder="Select Departments"
    collapse-tags
    multiple
  >
    <ElOption
      v-for="{name, value} in groupedJobOpenings"
      :key="value"
      :label="name"
      :value="value"
    />
  </ElSelect>

  <p>Showing {{ visibleJobOpeningsSize }} out of {{ totalNumber }} </p>
  <div class="flex flex-col max-w-2xl gap-12 py-5 mx-auto">
    <DepartmentGroupItem
      v-for="group in filteredJobOpenings"
      :key="group.value"
      :jobOpenings="group.jobOpenings"
      :department="{name: group.name, value: group.value}"
    />
  </div>
  <a
    v-if="showToTop"
    href="#heading"
    class="fixed bottom-5 right-5 bg-blue-600 p-5 text-white rounded"
  >
    Go top
  </a>
</template>

<script lang="ts" setup>
import { useJobOpeningsStore } from './job-openings.store'
import DepartmentGroupItem from './components/DepartmentGroupItem.vue'
import { useIntersectionObserver } from '@vueuse/core'

const heading = ref<HTMLAnchorElement | null>(null)
const showToTop = ref(false)

useIntersectionObserver(heading, ([{ isIntersecting }]) => {
  showToTop.value = !isIntersecting
})

const jobOpeningStore = useJobOpeningsStore()
const {
  selectedDepartments, filteredJobOpenings,
  groupedJobOpenings, visibleJobOpeningsSize, totalNumber
} = storeToRefs(jobOpeningStore)
</script>
