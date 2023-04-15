<template>
  <div class="max-w-laptop-l px-34.1 my-0 mx-auto pt-6 ">
    <header class="flex items-center justify-between mb-[34px]">
      <div class="flex items-center gap-18">
        <router-link class="flex items-center font-sen font-bold text-xl leading-none text-gray-dark" to="/">
          <i class=" text-[35px] icon-logo mr-1.5" />
          Salty
        </router-link>
        <navigation />
      </div>
      <button
        class="min-w-button border-1.4 rounded-27 py-[19px] flex justify-center
         items-center gap-1.5 font-poppins font-medium text-base leading-none"
      >
        Book Now
        <i class="icon-send" />
      </button>
    </header>
    <router-view />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss"></style>
