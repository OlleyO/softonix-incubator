<template>
  <nav class="flex items-center text-blue-dark text-base font-poppins font-normal">
    <ul class="flex items-center gap-9">
      <li>
        <router-link :class="['link', {'active': currentRouteName === '/'} ]" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="link" to="/about-us">About Us</router-link>
      </li>
      <li>
        <router-link class="link" to="/destinations">Destinations</router-link>
      </li>
      <li>
        <router-link class="link" to="/tours">Tours</router-link>
      </li>
      <li>
        <router-link class="link" to="/blog">Blog</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const router = useRouter()
const currentRouteName = computed(() => router.currentRoute.value.name)
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  position: relative;

  &::after {
      position: absolute;
      content: "";
      bottom: -6px;
      left: 0;
      width: 12px;
      height: 2px;
      background-color: #f66f4d;
  }
}
</style>
