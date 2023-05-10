<template>
  <div ref="wrapper">
    <img v-show="loaded" ref="img" :alt="src" :data-url="src" @load="onLoad" @error="onError">
    <slot v-if="!loaded && hasError" name="error" />
    <slot v-if="!loaded && !hasError" name="loading" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  src?: string
  imgClass?: string
}>()
const emit = defineEmits(['error', 'load'])

const observer = ref<IntersectionObserver | null>(null)
const wrapper = ref<HTMLDivElement | null>(null)
const img = ref<HTMLImageElement | null>(null)

const loaded = ref(false)
const hasError = ref(false)

function loadImage () {
  if (img.value) {
    img.value.src = img.value.dataset.url || ''
  }
}

onMounted(() => {
  if (window.IntersectionObserver) {
    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage()
          if (wrapper.value) {
            observer.unobserve(wrapper.value)
          }
        }
      })
    }

    observer.value = new IntersectionObserver(handleIntersect, {
      threshold: 1,
      rootMargin: '300px'
    })

    if (wrapper.value) {
      observer.value.observe(wrapper.value)
    }
  } else {
    loadImage()
  }
})

onUnmounted(() => {
  if (wrapper.value && observer.value) {
    observer.value.unobserve(wrapper.value)
  }
})

function onError () {
  hasError.value = true
  loaded.value = false
  emit('error')
}

function onLoad () {
  hasError.value = false
  loaded.value = true
  emit('load')
}
</script>
