<template>
  <section class="flex gap-67 items-center mb-[150px]">
    <div class="flex-1">
      <h1 class="font-sen font-bold text-h1 leading-102 mb-[26px] text-gray-dark">Discover the Best Lovely Places</h1>
      <p class="text-lg text-gray-light mb-[44px]">
        Plan and book your perfect trip
        with expert advice, travel tips, destination information and inspiration from us.
      </p>
      <form
        class="flex bg-white-bright max-w-fit
        border rounded-38 border-transparent
        px-5 py-[11px] min-h-[76px]
        items-center
        gap-[57px]
        "
      >
        <div class="flex flex-1 gap-[34px] flex-wrap">
          <div class="flex  flex-col gap-2">
            <label class="text-gray-dark font-medium text-lg leading-[17px]" for="trip-destination">
              Where
            </label>
            <div class="flex gap-[26px] items-center">
              <input
                id="trip-destination" class="truncate text-xs leading-none max-w-[102px]"
                name="trip-destination" placeholder="Center Point, London, UK" type="text"
              >
              <i class="icon-location-mark" />
            </div>
          </div>
          <div class="border border-border" />
          <div class="flex  flex-col gap-2">
            <label class="text-gray-dark font-medium text-lg leading-[17px]" for="trip-date">
              Date
            </label>
            <div class="flex gap-[26px] items-center">
              <input
                id="trip-date" class="text-xs leading-none max-w-[100px]"
                name="trip-date" placeholder="09th March, 2021" type="text"
              >
              <i class="icon-calendar" />
            </div>
          </div>
        </div>
        <button
          class="w-[54px] h-[54px] rounded-full bg-primary  p-[13.06px]" @click.prevent
        >
          <i class="icon-magnifying-glass text-[27px] text-white" />
        </button>
      </form>
    </div>
    <div class="flex-1">
      <img
        src="/assets/images/hero-img.png" alt="Hero Section Image"
      >
    </div>
  </section>
  <section>
    <div class="flex justify-between mb-6">
      <h2 class="text-h2 text-gray-dark font-semibold">Categories</h2>
      <div class="flex gap-4" role="group">
        <button
          class="border-1.5 text-gray-dark
         border-gray-dark rounded-full flex
          justify-center items-center
           w-[54px] h-[54px]"
        >
          <i class="icon-arrow-left" />
        </button>
        <button
          class="border-1.5 bg-gray-dark
         border-gray-dark rounded-full flex
          justify-center items-center
           w-[54px] h-[54px] text-yellow-bonnet"
        >
          <i class="icon-arrow-right" />
        </button>
      </div>
    </div>
    <p class="text-gray-light text-base leading-162 max-w-[370px] mb-[60px]">
      Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.
    </p>
    <ul>
      <li>
        <!-- Category Item -->
      </li>
    </ul>
  </section>
  <section class="flex ml-[-70px] gap-[157px] items-center justify-between">
    <div class="flex-1">
      <img src="/assets/images/stories-have-adventures.png" alt="">
    </div>
    <div class="flex flex-col gap-10 flex-1">
      <div class="flex flex-col gap-5">
        <h3 class="font-semibold text-xl leading-none tracking-the-widest">Our Experience</h3>
        <h2 class="font-semibold text-h2 text-gray-dark leading-118">Our Stories Have Adventures</h2>
        <p class="text-base leading-162 text-gray-light max-w-[467px]">
          We are experienced in bringing adventures to stay
          their journey, with all outdoor destinations in
          the world as our specialties. Start your adventure now! Nature has already called you!
        </p>
      </div>
      <div class="flex gap-5">
        <div class="flex p-[26px] pt-[30px] flex-col gap-[18px] rounded-[14px] bg-white-gray flex-1">
          <h2 class="text-2.875 font-semibold leading-none">12K+</h2>
          <p class="text-[21px] leading-138 text-gray-lighter">Success Journey</p>
        </div>
        <div class="flex p-[26px] pt-[30px] flex-col gap-[18px] rounded-[14px] bg-white-gray flex-1">
          <h2 class="text-2.875 font-semibold leading-none">16+</h2>
          <p class="text-[21px] leading-138 text-gray-lighter">Awards Winning</p>
        </div>
        <div class="flex p-[26px] pt-[30px] flex-col gap-[18px] rounded-[14px] bg-white-gray flex-1">
          <h2 class="text-2.875 font-semibold leading-none">20+</h2>
          <p class="text-[21px] leading-138 text-gray-lighter">Years Of Experience</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss"></style>
