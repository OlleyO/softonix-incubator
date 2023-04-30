interface IDepartment {
  name: string
  value: string
}

interface IJobOpening {
  title: string
  id: string
  departments: string[]
  isClosed: boolean
  url: string
}

interface IGroupedOpenings {
  [key: string]: {
  name: IDepartment['name']
  value: IDepartment['value']
  jobOpenings: IJobOpening[]
  }
}

interface IGroupedOpeningsWithOthers extends IGroupedOpenings {
  other: {
    name: 'Other',
    value: 'other',
    jobOpenings: IJobOpening[]
  }
}

interface IDepartmentWithJobOpenings {
  name: IDepartment['name']
  value: IDepartment['value']
  jobOpenings: IJobOpening[]
}