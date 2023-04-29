<template>
  <header>
    <nav class="flex items-center justify-between">
      <ul class="flex items-center gap-4">
        <li>
          <RouterLink
            class="p-2 pl-0  hover:text-blue-700"
            :to="{name: $routeNames.contacts}"
          >
            Contacts
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="p-2 pl-0 hover:text-blue-700"
            :to="{name: $routeNames.jobOpenings}"
          >
            Job Openings
          </RouterLink>
        </li>
      </ul>
      <slot name="suffix" />
    </nav>
  </header>
</template>

<script lang="ts" setup>
const { $routeNames } = useGlobalProperties()
</script>

<style lang="scss" scoped>
.router-link-active {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    width: 30px;
    height: 5px;
    left: 0;
    border-radius: 16px;
    @apply bg-blue-500;
  }

  &:hover {
    &::after {
      @apply bg-blue-700;
    }
  }
}
</style>
