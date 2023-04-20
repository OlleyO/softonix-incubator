<template>
  <div class="carousel">
    <ul ref="inner" class="inner" :style="innerStyles">
      <li v-for="item in cards" :key="item.id" class="card">
        <slot name="item" v-bind="item" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

interface IProps {
  cards: any[]
  cardWidth?: string
}

const props = defineProps<IProps>()
const innerStyles = reactive<any>({})
const step = ref<string>()
const inner = ref<HTMLElement | null>(null)
const isTransitioning = ref(false)
const cards = toRef(props, 'cards')

const setStep = () => {
  if (inner.value === null) return
  const innerWidth = inner.value.scrollWidth
  const totalCards = props.cards.length

  step.value = `${innerWidth / totalCards}px`
}

const moveLeft = () => {
  innerStyles.transform = `translateX(-${step.value})
  translateX(-${step.value})`
}

const moveRight = () => {
  innerStyles.transform = `translateX(${step.value})
  translateX(-${step.value})`
}

const goBack = () => {
  if (isTransitioning.value) return

  isTransitioning.value = true

  moveRight()

  afterTransition(() => {
    const card = cards.value.pop()
    cards.value.unshift(card)
    resetTranslate()
    isTransitioning.value = false
  })
}

const goForward = () => {
  if (isTransitioning.value) return

  isTransitioning.value = true

  moveLeft()

  afterTransition(() => {
    const card = cards.value.shift()
    cards.value.push(card)

    resetTranslate()

    isTransitioning.value = false
  })
}

const resetTranslate = () => {
  innerStyles.transition = 'none'
  innerStyles.transform = `translateX(-${step.value})`
}

const afterTransition = (callback: () => void) => {
  const listener = () => {
    callback()
    inner.value?.removeEventListener('transitionend', listener)
  }

  inner.value?.addEventListener('transitionend', listener)
}

const useCarousel = () => ({
  goBack,
  goForward
})

onMounted(() => {
  setStep()
})

defineExpose({
  useCarousel
})

</script>

<style lang="scss" scoped>
.carousel {
  width: 100vw;
  overflow: hidden;
}

.inner {
  display: flex;
  gap: 30px;
  white-space: nowrap;
  transition: transform 0.2s;
}
</style>
