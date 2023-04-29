<template>
  <AppHeader class="mb-5">
    <template #suffix>
      <h2 class="font-medium text-lg ml-auto">See Job Openings</h2>
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

  <div class="flex flex-col max-w-2xl gap-12 py-5 mx-auto">
    <DepartmentGroupItem
      v-for="group in filteredJobOpenings"
      :key="group.value"
      :jobOpenings="group.jobOpenings"
      :department="{name: group.name, value: group.value}"
    />
  </div>
</template>

<script lang="ts" setup>
import { useJobOpeningsStore } from './job-openings.store'
import DepartmentGroupItem from './components/DepartmentGroupItem.vue'

const jobOpeningStore = useJobOpeningsStore()
const { selectedDepartments, filteredJobOpenings, groupedJobOpenings } = storeToRefs(jobOpeningStore)

console.log(groupedJobOpenings.value)

</script>
