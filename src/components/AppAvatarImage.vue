<template>
  <div>
    <span
      v-if="imageHasError || !$attrs.src"
      class="font-medium uppercase"
    >{{ nameAbbrv }}
    </span>

    <el-image
      v-else
      class="object-cover"
      :src="$attrs.src as string"
      alt="contact-logo"
      @error="imageHasError = true"
      @load="imageHasError = false"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string
}>()

const imageHasError = ref(false)
const nameAbbrv = computed(() => {
  return props.name.split(' ').reduce((acc, cur) => {
    if (acc.length < 2) {
      acc = acc.concat(cur[0])
    }
    return acc
  }, '')
})
</script>
