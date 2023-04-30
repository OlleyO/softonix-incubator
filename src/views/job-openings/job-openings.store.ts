import { departments as departmentsData } from '@/_homework/departments'
import { jobOpenings as jobOpeningsData } from '@/_homework/job-openings'

export const useJobOpeningsStore = defineStore('jobOpeningsStore', () => {
  const departments = ref<IDepartment[]>(departmentsData)
  const jobOpenings = ref<IJobOpening[]>(jobOpeningsData)
  const selectedDepartments = ref<string[]>([])
  const visibleJobOpeningsNumber = ref(0)

  const groupedJobOpenings = computed<IDepartmentWithJobOpenings[]>(() => {
    const initialOther: IGroupedOpeningsWithOthers['other'] = {
      name: 'Other',
      value: 'other',
      jobOpenings: []
    }

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
          }
        }
      } else {
        prev.other.jobOpenings = [...prev.other.jobOpenings, { ...jo }]
      }

      return prev
    }, {
      other: initialOther
    } as IGroupedOpeningsWithOthers)

    // Putting 'other' in the end of the group
    const keys = Object.keys(withDepartments).sort((a, b) => a === 'other' || b === 'other'
      ? -1
      : a.replace(/\W+/, '').localeCompare(b.replace(/\W+/, ''
      )))

    return keys.map(key => withDepartments[key])
  })

  const totalJobOpeningsNumber = computed(() => {
    return groupedJobOpenings.value.reduce((acc, curr) => acc + curr.jobOpenings.length, 0)
  })

  const visibleJobOpeningSizeMgs =
   computed(() => `Showing ${visibleJobOpeningsNumber.value} out of ${totalJobOpeningsNumber.value}`)

  const filteredJobOpenings = computed(() =>
    !selectedDepartments.value.length
      ? [...groupedJobOpenings.value]
      : groupedJobOpenings.value.filter(({ value }) => selectedDepartments.value.includes(value))
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
