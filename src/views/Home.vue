<template>
  <section class="flex gap-67 items-center mb-150">
    <div class="flex-1">
      <h1 class="font-sen font-bold text-h1 leading-102 mb-[26px] text-gray-dark">Discover the Best Lovely Places</h1>
      <p class="text-lg text-gray-light mb-[44px]">
        Plan and book your perfect trip
        with expert advice, travel tips, destination information and inspiration from us.
      </p>
      <form
        class="flex bg-white-bright max-w-500
        border rounded-38 border-transparent
        px-5 py-[11px] min-h-76
        items-center
        gap-57
        "
      >
        <div class="flex gap-34">
          <div class="flex  flex-col gap-2 ">
            <label class="text-gray-dark font-medium text-lg leading-[17px]" for="trip-destination">
              Where
            </label>
            <div class="flex gap-[26px] items-center">
              <input
                id="trip-destination" class="truncate text-xs leading-none max-w-100"
                name="trip-destination" placeholder="Center Point, London, UK" type="text"
              >
              <i class="icon-location-mark" />
            </div>
          </div>
          <div class="border border-border " />
          <div class="flex  flex-col gap-2 ">
            <label class="text-gray-dark font-medium text-lg leading-[17px]" for="trip-date">
              Date
            </label>
            <div class="flex gap-[26px] items-center">
              <input
                id="trip-date" class="text-xs leading-none max-w-100"
                name="trip-date" placeholder="09th March, 2021" type="text"
              >
              <i class="icon-calendar" />
            </div>
          </div>
        </div>
        <button
          class="w-54 h-54 flex items-center justify-center rounded-full bg-primary  p-13.06" @click.prevent
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
  <section class="mb-[140px]">
    <div class="flex justify-between mb-6 items-center">
      <h2 class="text-h2 text-gray-dark font-semibold">Categories</h2>
      <div class="flex gap-4" role="group">
        <button
          class="border-1.5 text-gray-dark
         border-gray-dark rounded-full flex
          justify-center items-center
           w-[54px] h-[54px]"
          @click="categoryCarouselHandlers.prev"
        >
          <i class="icon-arrow-left" />
        </button>
        <button
          class="border-1.5 bg-gray-dark
         border-gray-dark rounded-full flex
          justify-center items-center
           w-[54px] h-[54px] text-yellow-bonnet"
          @click="categoryCarouselHandlers.next"
        >
          <i class="icon-arrow-right" />
        </button>
      </div>
    </div>
    <p class="text-gray-light text-base leading-162 max-w-[370px] mb-[60px]">
      Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.
    </p>
    <carousel ref="categoryCarousel" :cards="categories">
      <template #item="category">
        <img class="min-w-170" :src="category.imgUrl">
      </template>
    </carousel>
  </section>
  <section class="flex ml--70  lg:gap-157 gap-70 items-center justify-between mb-[55px]">
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
          <p class="text-21 leading-138 text-gray-lighter">Success Journey</p>
        </div>
        <div class="flex p-[26px] pt-[30px] flex-col gap-[18px] rounded-[14px] bg-white-gray flex-1">
          <h2 class="text-2.875 font-semibold leading-none">16+</h2>
          <p class="text-21 leading-138 text-gray-lighter">Awards Winning</p>
        </div>
        <div class="flex p-[26px] pt-[30px] flex-col gap-[18px] rounded-[14px] bg-white-gray flex-1">
          <h2 class="text-2.875 font-semibold leading-none">20+</h2>
          <p class="text-21 leading-138 text-gray-lighter">Years Of Experience</p>
        </div>
      </div>
    </div>
  </section>
  <section class="mb-[140px]">
    <div class="flex justify-between mb-6 items-center">
      <h2 class="text-h2 text-gray-dark font-semibold max-w-[400px] leading-118">Find Popular Destination</h2>
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
    <carousel :cards="popularDestinations">
      <template #item="popularDestination">
        <PopularDestinationCard :data="popularDestination" />
      </template>
    </carousel>
  </section>
  <section class="flex flex-col items-center mb-[140px]">
    <h2 class="text-h2 text-gray-dark font-semibold leading-118 mb-4">Top Destinations</h2>
    <p
      class="text-base text-gray-light leading-none mb-7"
    >
      Sost Brilliant reasons Entrada should be your one-stop-shop!
    </p>
    <ul class="flex gap-[14px] mb-[51px]">
      <li>
        <button class="destination-card--active">London</button>
      </li>
      <li>
        <button class="destination-card">Bangkok</button>
      </li>
      <li>
        <button class="destination-card">England</button>
      </li>
      <li>
        <button class="destination-card">Singapore</button>
      </li>
      <li>
        <button class="destination-card">Italy</button>
      </li>
    </ul>
    <div class="gallery">
      <LocationCard
        v-for="destination in topDestinations"
        :key="destination.id" :data="destination" :class="`gallery__item-${destination.id}`"
      />
    </div>
  </section>
  <section class="flex items-center justify-between gap-60 mb-[140px]">
    <div class="ml-[60px]">
      <img src="/assets/images/about-us.png" alt="">
    </div>
    <div class="max-w-537">
      <h2
        class="text-h2 font-semibold leading-118 text-gray-dark
        with-top-decorative-line mb-[26px]"
      >
        A Customer Said About Us:
      </h2>
      <div class="bg-white rounded-[14px] px-[30px] pb-[30px] pt-8">
        <p class="text-gray-light text-lg leading-167 mb-[27px]">
          Salty helped me a lot in finding the best
          place for our first outdoor adventure trip.
          They responded very quickly and gave me a
          detailed account of the place—its history, as well as its best features.
        </p>
        <ul
          class="flex gap-[3.64px] text-[16.5px]
          leading-4 text-gold mb-[17px]" role="img" aria-label="Customer's rating: 5 out of 5 stars"
        >
          <li><i class="icon-star" /></li>
          <li><i class="icon-star" /></li>
          <li><i class="icon-star" /></li>
          <li><i class="icon-star" /></li>
          <li><i class="icon-star" /></li>
        </ul>
        <div class="flex justify-between items-end">
          <div class="flex flex-col gap-2">
            <p class="font-medium text-xl leading-none text-gray-dark">Adnrew Sarma</p>
            <p class="text-xs leading-none  text-gray-light">Enterpreneur</p>
          </div>
          <div class="flex gap-4 " role="group">
            <button
              class="border-1.5 text-gray-dark
         border-gray-dark rounded-full flex
          justify-center items-center
           w-[40px] h-[40px]"
            >
              <i class="icon-arrow-left" />
            </button>
            <button
              class="border-1.5 bg-gray-dark
         border-gray-dark rounded-full flex
          justify-center items-center
           w-[40px] h-[40px] text-yellow-bonnet"
            >
              <i class="icon-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="sign-up-form text-center  py-[75px]
    bg-gold-light justify-items-center rounded-[30px] grid justify-center mb-[140px]"
  >
    <h2 class=" text-2.5 text-gray-dark font-semibold leading-none mb-4 tracking-tiniest">Sign up to our newsletter</h2>
    <p
      class="mb-10 text-gray-light
      text-base leading-162 max-w-[415px]"
    >
      Receive latest news, update, and many other things every week.
    </p>
    <form class="bg-white flex py-[10px] pr-3 justify-self-stretch mx-[19px] rounded-xl gap-3">
      <input class="bg-transparent rounded-inherit flex-1 pl-[26px]" type="text" placeholder="Enter Your email address">
      <button class="sign-up-form__submit-button w-10 h-10 flex items-center justify-center" @click.prevent>
        <i class="icon-send text-white" />
      </button>
    </form>
  </section>
  <Footer />
</template>

<script lang="ts" setup>
import type CarouselVue from '@/components/Carousel.vue'
import { categories, popularDestinations, topDestinations } from '@/core/data/index'

const categoryCarousel = ref<InstanceType<typeof CarouselVue> | null>(null)

const categoryCarouselHandlers = reactive<any>({})

onMounted(() => {
  categoryCarouselHandlers.next = categoryCarousel.value?.useCarousel().goForward

  categoryCarouselHandlers.prev = categoryCarousel.value?.useCarousel().goBack
})
</script>

<style lang="scss">
  .destination-card {
    @apply border rounded-[30px] px-5 py-[10px] text-gray-dark
       border-button-border font-poppins text-sm leading-none;
    &--active {
      @extend .destination-card;
      @apply text-white bg-gray-dark
    }
  }

  .gallery {
    display: grid;
    grid-template-rows: 1fr 0.052fr 0.052fr 1fr;
    grid-template-columns: 1fr 1.37fr 0.6296fr 1fr;
    column-gap: 30px;

    &__item-1 {
      grid-row: 1 / 2;
    }

    &__item-2 {
      grid-row: 4 / 5;
    }

    &__item-3 {
      grid-row: 1 / 5;
    }

    &__item-4 {
      grid-row: 1 / 2;
      grid-column: 3 / 5;
    }

    &__item-5 {
      grid-row: 3 / 5;
      grid-column: 3 / 4;
    }

    &__item-6 {
      grid-row: 3 / 5;
      grid-column: 4 / 5;
    }

  }

  .with-top-decorative-line {
    position: relative;

    &::after {
      content: '';
      width: 67px;
      height: 8px;
      position: absolute;
      left: 0;
      top: -12px;
      border-radius: 4px;
      background: linear-gradient(159.99deg, #FFD482 13.35%, #FFBE82 118.92%);
      box-shadow: 0px 2px 6px rgba(229, 137, 24, 0.15);
    }

  }

  .sign-up-form {
      background-image: url('/assets/images/bg-pattern.png');
      grid-template-rows: auto auto auto;

      &__submit-button {
        background-color: #f66f4d;
        box-shadow: 0px 5px 14px rgba(247, 103, 67, 0.25);
        border-radius: 12px;
      }
    }

    .carousel {
      &::-webkit-scrollbar {
  width: 0;
}

&::-webkit-scrollbar-track {
  background: transparent;
}

&::-webkit-scrollbar-thumb {
  background: transparent;
  border: none;
}

& {
  -ms-overflow-style: none;
}
    }
</style>
