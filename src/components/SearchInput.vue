<template>
  <input
    class="p-2 rounded-sm"
    type="text"
    :value="modelValue"
    placeholder="Search Contact..."
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>

<script lang="ts" setup>
defineProps<{
  modelValue?: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>
