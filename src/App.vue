<template>
  <div id="sticky-panel" class="sticky-panel p-4 pb-0">
    <h3 class="font-medium">Countries</h3>

    <hr class="mt-2">
  </div>

  <div class="p-4 h-[2000px] flex flex-col">
    <p v-if="loading">Loading...</p>
    <p v-else-if="!countries">Error happened during countries fetch </p>

    <ul v-else class="list-disc list-inside">
      <li v-for="country in countries" :key="country.id">
        {{ country.name }}

        <ol>
          <li v-for="city in country.cities" v-show="hashedCities[city]?.name" :key="city" class="ml-4">
            - {{ hashedCities[city]?.name }}
          </li>
        </ol>
      </li>
    </ul>

    <div id="bottom-item" class="mt-auto">Bottom</div>
  </div>
</template>

<script lang="ts" setup>
import { countryService } from '@/examples/data-preparation'
import { intersectionService } from '@/examples/intersection'

const countries = ref()
const cities = ref()
const hashedCities = ref<any>({})
const loading = ref(false)

// const loadData = () => {
//   return Promise.all([countryService.getCities(), countryService.getCountries()]).then(res => {
//     cities.value = res[0]
//     countries.value = res[1]
//     hashedCities.value = countryService.createHashedCities(res[0])
//   }).finally(() => { loading.value = false })
// }

const loadDataSettled = () => {
  loading.value = true

  return Promise.allSettled([countryService.getCities(), countryService.getCountries()]).then(res => {
    if (res[0].status === 'fulfilled') {
      cities.value = res[0].value
      hashedCities.value = countryService.createHashedCities(res[0].value)
    }

    if (res[1].status === 'fulfilled') {
      countries.value = res[1].value
    }
  }).finally(() => { loading.value = false })
}

// loadData()
loadDataSettled()

onMounted(() => {
  intersectionService.detectElementByScroll()
  intersectionService.detectElementByIntersection()
})

</script>

<style lang="scss">
.sticky-panel {
  width: 100%;
  position: fixed;
  background: white;
  top: 0;
}

.sticky-panel+div {
  padding-top: 64px;
}
</style>
