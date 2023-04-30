import { jobOpeningsService } from './job-openings.service'

export const useJobOpeningsStore = defineStore('jobOpeningsStore', () => {
  const departments = ref<IDepartment[]>(jobOpeningsService.getDepartments())
  const jobOpenings = ref<IJobOpening[]>(jobOpeningsService.getJobOpenings())
  const selectedDepartments = ref<string[]>([])
  const visibleJobOpeningsNumber = ref(0)

  const groupedJobOpenings = computed<IDepartmentWithJobOpenings[]>(() =>
    jobOpeningsService.groupAndSortJobOpeningsByDepartments(jobOpenings.value, departments.value)
  )

  const totalJobOpeningsNumber = computed<number>(() =>
    jobOpeningsService.getTotalGroupedJobOpeningsNumber(filteredJobOpenings.value)
  )

  const visibleJobOpeningSizeMgs =
   computed(() => `Showing ${visibleJobOpeningsNumber.value} out of ${totalJobOpeningsNumber.value}`)

  const filteredJobOpenings = computed(() =>
    jobOpeningsService.filterGroupedJobOpenings(groupedJobOpenings.value, selectedDepartments.value)
  )

  function increaseVisibleJobOpeningsNumber (num: number) {
    visibleJobOpeningsNumber.value += num
  }

  return {
    departments,
    jobOpenings,
    groupedJobOpenings,
    selectedDepartments,
    filteredJobOpenings,
    visibleJobOpeningSizeMgs,
    increaseVisibleJobOpeningsNumber
  }
})
