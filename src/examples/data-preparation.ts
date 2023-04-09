class CountryService {
  createHashedCities (data: any[]) {
    return data.reduce((acc: any, curr: any) => {
      acc[curr.id] = curr

      return acc
    }, {} as any)
  }

  async getCountries () {
    await this.timer()

    return [{ name: 'Ukraine', id: '1', cities: ['101', '102', '103'] }, { name: 'USA', id: '2', cities: ['104', '105'] }]
  }

  async getCities () {
    await this.timer(2000)

    return [{ name: 'Kyiv', id: '101' }, { name: 'Lviv', id: '102' }, { name: 'Kherson', id: '103' }, { name: 'New York', id: '104' }, { name: 'San Fransisco', id: '105' }]
  }

  timer (timeout = 1000) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('')
      }, timeout)
    })
  }
}

export const countryService = new CountryService()
