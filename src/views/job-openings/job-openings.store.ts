import { jobOpeningsService } from './job-openings.service'

export const useJobOpeningsStore = defineStore('jobOpeningsStore', () => {
  const departments = ref<IDepartment[]>(jobOpeningsService.getDepartments())
  const jobOpenings = ref<IJobOpening[]>(jobOpeningsService.getJobOpenings())
  const selectedDepartments = ref<string[]>([])
  const visibleJobOpeningsNumber = ref(0)

  const groupedJobOpenings = computed<IDepartmentWithJobOpenings[]>(() => {
    return jobOpeningsService.groupAndSortJobOpeningsByDepartments(jobOpenings.value, departments.value)
  })

  const totalJobOpeningsNumber = computed(() => {
    return filteredJobOpenings.value.reduce((acc, curr) => acc + curr.jobOpenings.length, 0)
  })

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
