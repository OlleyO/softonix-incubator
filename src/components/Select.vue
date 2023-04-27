<template>
  <div class="relative bg-white  max-w-max rounded-lg">
    <div
      class="p-4 bg-inherit rounded-[inherit] hover:cursor-pointer"
      :class="{'border-b border-gray-light': open}"
      @click="$attrs.click"
    >
      {{ multi ? label : options.find ((option) => option.value === modelValue)?.label }}
    </div>
    <div v-if="open" class="flex flex-col absolute z-[999] bg-inherit shadow rounded-sm">
      <div
        v-for="option in options"
        :key="option.value"
        class="p-4 hover:bg-blue-500 hover:text-white select-none"
        :class="[{'bg-blue-600 text-white': multi ? modelValue.includes(option.value) : modelValue === option.value}]"
        @click.stop="onSelect(option.value)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface IOption {
  label: string
  value: string
}

interface IProps {
  label: string
  multi?: boolean
  options?: IOption[]
  modelValue: string[] | string
  open: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  multi: false,
  options: () => []
})

const emit = defineEmits(['update:modelValue'])

function onSelect (value: string) {
  if (props.multi) {
    const index = props.modelValue.indexOf(value)

    if (index === -1) {
      emit('update:modelValue', [...props.modelValue, value])
    } else {
      const copy = [...props.modelValue]
      copy.splice(index, 1)
      emit('update:modelValue', copy)
    }
  } else {
    if (props.modelValue) {
      emit('update:modelValue', value)
    } else {
      emit('update:modelValue', null)
    }
  }
}
</script>
