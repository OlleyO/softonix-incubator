<template>
  <Card class="p-10">
    <template #title>
      <div class="flex justify-between items-center mb-5">
        <h3 class="font-bold">{{ jobOpening.title }}</h3>
      </div>
    </template>
    <template #footer>
      <p class="text-sm text-gray">Check Link Below</p>
      <a class="text-xs text-blue-500 hover:text-blue-700 py-3" :href="jobOpening.url">{{ jobOpening.url }}</a>
    </template>
  </Card>
</template>

<script lang="ts" setup>
interface IProps {
  jobOpening: IJobOpening
}

defineProps<IProps>()
</script>
