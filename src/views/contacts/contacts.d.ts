interface IContact {
  id: number
  name: string
  description: string
  image?: string
}

interface IContactCreateRequest {
  name: string
  description: string
}

interface IContactUpdateRequest {
  id: number
  name: string
  description: string
}