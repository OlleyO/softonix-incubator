export interface ICategories {
  id: number
  imgUrl: string
}

export interface IPopularDestination {
  id: number
  imgUrl: string
  eventName: string
  location: string
  pricePerPerson: number
}

export interface ITopDestination {
  id: number
  imgUrl: string
  country: string
  location: string
  score: number
}
