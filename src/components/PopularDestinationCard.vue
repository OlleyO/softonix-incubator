<template>
  <div class="popular-destination-card p-3 rounded-2xl border-[2px] border-white pb-9 min-w-386">
    <img class="mb-6 popular-destination-card__image" :src="props.data.imgUrl" alt="">
    <div class="px-3">
      <h3
        class="text-2xl leading-none
           text-gray-dark font-semibold mb-[14px] popular-destination-card__title"
      >
        {{ props.data.eventName }}
      </h3>
      <p
        class="text-sm leading-none text-gray-light popular-destination-card__location
             mb-[27px]"
      >
        {{ props.data.location }}
      </p>
      <div class="flex justify-between items-center">
        <div class="flex">
          <div
            class="popular-destination-card__price
                 text-2xl leading-5 font-semibold text-gray-dark mr-2"
          >
            ${{ props.data.pricePerPerson }}
          </div>
          <div class="text-base leading-5 text-gray-light">/Person</div>
        </div>
        <button class="px-4 py-3 rounded-[46px] bg-gray-dark text-white text-sm leading-none">Book Now</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IPopularDestination } from '@/core/types'

interface IProps {
  data: IPopularDestination
}

const props = defineProps<IProps>()

</script>

<style lang="scss" scoped></style>
