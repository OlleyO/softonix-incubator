<template>
  <div :class="['location-card', props.class]">
    <div
      class="location-card__rating px-[10px] py-[5px]
         text-gray-dark text-sm leading-none font-medium bg-white rounded-xl"
    >
      {{ props.data.score }}
    </div>
    <div class="location-card__location text-white">
      <div class="location-card__location__country text-xl  font-semibold leading-none">{{ props.data.country }}</div>
      <div class="location-card__location__location text-sm leading-none">{{ props.data.location }}</div>
    </div>
    <img :src="props.data.imgUrl" alt="">
  </div>
</template>

<script lang="ts" setup>
import type { ITopDestination } from '@/core/types'

interface IProps {
  data: ITopDestination
  class: string
}

const props = defineProps<IProps>()

</script>

<style lang="scss">
.location-card {
    position: relative;

    &__rating {
      top: 24px;
      left: 24px;
      position: absolute;
    }

    &__location {
      position: absolute;
      left: 24px;
      bottom: 24px;

        &__country {
          margin-bottom: 10px;

        }

        &__location {

        }
    }
  }
</style>
