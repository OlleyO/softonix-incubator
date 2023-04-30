import { departments } from '@/_homework/departments'
import { jobOpenings } from '@/_homework/job-openings'

class JobOpeningsService {
  getJobOpenings () {
    return jobOpenings
  }

  getDepartments () {
    return departments
  }

  groupAndSortJobOpeningsByDepartments (jobOpenings: IJobOpening[], departments: IDepartment[]) {
    const initialOther: IGroupedOpeningsWithOthers['other'] = {
      name: 'Other',
      value: 'other',
      jobOpenings: []
    }

    // Decided to first create an object and then transform it into an array,
    // 'cause otherwise I should check if the array contains department using find
    // for every new department before inserting,
    // which is slower than accessing object key
    const withDepartments = jobOpenings.reduce((prev, jo) => {
      jo.departments.forEach(dep => {
        const department = departments.find(({ value }) => dep === value)
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
      })

      prev.other.jobOpenings = [...prev.other.jobOpenings, { ...jo }]

      return prev
    }, {
      other: initialOther
    } as IGroupedOpeningsWithOthers)

    // Putting 'other' in the end of the group
    const keys = Object.keys(withDepartments).sort((a, b) => [a, b].some(key => key === initialOther.value)
      ? -1
      : StringUtils.removeNonWords(a).localeCompare(StringUtils.removeNonWords(b)))

    return keys.map(key => withDepartments[key])
  }

  filterGroupedJobOpenings (groupedJobOpenings: IDepartmentWithJobOpenings[], selectedDepartments: string[]) {
    return !selectedDepartments.length
      ? [...groupedJobOpenings]
      : groupedJobOpenings.filter(({ value }) => selectedDepartments.includes(value))
  }
}

export const jobOpeningsService = new JobOpeningsService()
