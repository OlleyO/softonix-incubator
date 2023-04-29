import { departments as departmentsData } from '@/_homework/departments'
import { jobOpenings as jobOpeningsData } from '@/_homework/job-openings'

export const useJobOpeningsStore = defineStore('jobOpeningsStore', () => {
  const departments = ref<IDepartment[]>(departmentsData)
  const jobOpenings = ref<IJobOpening[]>(jobOpeningsData)
  const selectedDepartments = ref<string[]>([])

  const filteredJobOpenings = computed(() => {
    return !selectedDepartments.value.length
      ? { ...groupedJobOpenings.value }
      : groupedJobOpenings.value.filter(({ value }) => selectedDepartments.value.includes(value))
  })

  const groupedJobOpenings = computed(() => {
    let other: IJobOpening[] = []
    const departmentsWithJobs: {[index: string]: IDepartment} = {}
    const withDepartments = jobOpenings.value.reduce((prev, jo) => {
      if (jo.departments.length) {
        for (let i = 0; i < jo.departments.length; i++) {
          const dep = jo.departments[i]
          const department = departments.value.find(({ value }) => dep === value)

          if (department) {
            if (!prev[dep]) {
              prev[dep] = {
                ...department,
                jobOpenings: [{ ...jo }]
              }
            } else {
              prev[dep].jobOpenings = [...prev[dep].jobOpenings, { ...jo }]
            }
            departmentsWithJobs[department.name] = { ...department }
          }
        }
      } else {
        other = [...other, { ...jo }]
      }

      return prev
    }, { } as IGroupedOpenings)

    const sortedDepartments = []

    for (const key in departmentsWithJobs) {
      sortedDepartments.push(departmentsWithJobs[key])
    }

    sortedDepartments.sort((a, b) => a.value.replace(/\W+/, '').localeCompare(b.value.replace(/\W+/, ''
    )))

    const sortedJobOpenings: IDepartmentWithJobOpenings[] = []

    sortedDepartments.forEach(dep => sortedJobOpenings.push(withDepartments[dep.value]))

    sortedJobOpenings.push({
      name: 'Other',
      value: 'other',
      jobOpenings: [...other]
    })

    return sortedJobOpenings
  })

  return {
    departments,
    jobOpenings,
    groupedJobOpenings,
    selectedDepartments,
    filteredJobOpenings
  }
})
