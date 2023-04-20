<template>
  <footer
    class="flex flex-col-reverse justify-between
   lg:flex-row lg:items-start items-center gap-16 lg:gap-0"
  >
    <div class="flex justify-start items-center w-[100%] lg:block lg:w-auto gap-5 lg:gap-0">
      <router-link class="flex items-center font-sen font-bold text-xl leading-none text-gray-dark lg:mb-[28px]" to="/">
        <i class=" text-[35px] icon-logo mr-1.5" />
        Salty
      </router-link>
      <p
        class="text-base leading-162 text-gray-light
       lg:mb-[40px] max-w-[141px]  mr-auto lg:mr-0"
      >
        Enjoy the touring with Salty
      </p>
      <ul class="flex gap-[14px] text-gray-light">
        <li>
          <a class="w-8 h-8 flex items-center justify-center border rounded-full border-gray-light" href="">
            <i class="icon-facebook" />
          </a>
        </li>
        <li>
          <a class="w-8 h-8 flex items-center justify-center border rounded-full border-gray-light" href="">
            <i class="icon-instagram" />
          </a>
        </li>
        <li>
          <a class="w-8 h-8 flex items-center justify-center border rounded-full border-gray-light" href="">
            <i class="icon-twitter" />
          </a>
        </li>
      </ul>
    </div>
    <div class="lg:gap-113 lg:justify-end gap-10 justify-between flex w-[100%]">
      <section>
        <h3 class="mb-[22px] text-lg leading-none text-gray-dark font-medium">Resources</h3>
        <ul class="text-sm leading-243 text-gray-2">
          <li>
            <router-link to="/download">Download</router-link>
          </li>
          <li>
            <router-link to="/help-center">Help Center</router-link>
          </li>
          <li>
            <router-link to="/guide-book">Guide Book</router-link>
          </li>
          <li>
            <router-link to="/app-directory">App Directory</router-link>
          </li>
        </ul>
      </section>
      <section>
        <h3 class="mb-[22px] text-lg leading-none text-gray-dark font-medium">Travellers</h3>
        <ul class="text-sm leading-243 text-gray-2">
          <li>
            <router-link to="/why-us">Why Travellers</router-link>
          </li>
          <li>
            <router-link to="/enterprice">Enterprice</router-link>
          </li>
          <li>
            <router-link to="/customer-stories">Customer Stories</router-link>
          </li>
          <li>
            <router-link to="/instagram-post">Instagram Post</router-link>
          </li>
        </ul>
      </section>
      <section>
        <h3 class="mb-[22px] text-lg leading-none text-gray-dark font-medium">Company</h3>
        <ul class="text-sm leading-243 text-gray-2">
          <li>
            <router-link to="/travelling">Travelling</router-link>
          </li>
          <li>
            <router-link to="/about-locato">About Locato</router-link>
          </li>
          <li>
            <router-link to="/success">Success</router-link>
          </li>
          <li>
            <router-link to="/information">Information</router-link>
          </li>
        </ul>
      </section>
      <section>
        <h3 class="mb-[22px] text-lg leading-none text-gray-dark font-medium">Get App</h3>
        <ul class="text-sm leading-243 text-gray-2">
          <li>
            <a href="">App Store</a>
          </li>
          <li>
            <a href="">Google Play Store</a>
          </li>
        </ul>
      </section>
    </div>
  </footer>
</template>
