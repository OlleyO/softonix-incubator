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

interface IGroupedJobOpeningsAndDepartments {
  jobOpenings: {[key: string]: IJobOpening[]}
  departments: IDepartment[]
}

interface IDepartmentWithJobOpenings {
  name: IDepartment['name']
  value: IDepartment['value']
  jobOpenings: IJobOpening[]
}