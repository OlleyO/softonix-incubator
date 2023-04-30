<template>
  <LayoutWithHeader>
    <template #headerSuffix>
      <h2 id="heading" ref="heading" class="font-medium text-lg ml-auto">See Job Openings</h2>
    </template>
    <div class="flex items-center gap-5">
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
      <p class="text-sm text-gray">{{ visibleJobOpeningSizeMgs }}</p>
    </div>
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
  </LayoutWithHeader>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core'

import { useJobOpeningsStore } from './job-openings.store'

import LayoutWithHeader from '@/layouts/LayoutWithHeader.vue'

import DepartmentGroupItem from './components/DepartmentGroupItem.vue'

const heading = ref<HTMLAnchorElement | null>(null)
const showToTop = ref(false)

const jobOpeningStore = useJobOpeningsStore()
const {
  selectedDepartments, filteredJobOpenings,
  groupedJobOpenings, visibleJobOpeningSizeMgs
} = storeToRefs(jobOpeningStore)

useIntersectionObserver(heading, ([{ isIntersecting }]) => {
  showToTop.value = !isIntersecting
})
</script>
