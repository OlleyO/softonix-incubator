<template>
  <div :class="['relative', props.class]">
    <div
      class="absolute top-6 left-6 px-10 py-[5px]
         text-gray-dark text-sm leading-none font-medium bg-white rounded-xl"
    >
      {{ props.data.score }}
    </div>
    <div class="absolute bottom-6 left-6 text-white">
      <div class="mb-10 text-xl  font-semibold leading-none">{{ props.data.country }}</div>
      <div class="text-sm leading-none">{{ props.data.location }}</div>
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

</style>
