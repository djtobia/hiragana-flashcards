import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Image, instantiateImages } from '@/models/image'

export const useImagesStore = defineStore('images', () => {
  const images = reactive<Image[]>(instantiateImages())
  const correct = ref<Image[]>([])
  const incorrect = ref<Image[]>([])
  const currentImage = ref<Image>(getImage())
  const correctAnswers = computed(() => correct.value.length)
  const incorrectAnswers = computed(() => incorrect.value.length)

  function $reset() {
    for (let i = 0; i < images.length; i++) {
      images.pop()
    }
    images.push(...instantiateImages())
    correct.value = []
    incorrect.value = []
    currentImage.value = getImage()
  }
  function getImage() {
    if (images.length > 0) return images[Math.floor(Math.random() * images.length)]

    return { character: '', src: '' }
  }
  const getIncorrectAnswer = computed(() => {
    const allAnswers = [
      ...images.map((image) => image.character),
      ...correct.value.map((image) => image.character),
      ...incorrect.value.map((image) => image.character)
    ].filter((item) => item !== currentImage.value.character)
    return allAnswers[Math.floor(Math.random() * allAnswers.length)]
  })
  function updateCorrect(hiragana: Image) {
    correct.value.push(hiragana)
    updateImages(hiragana)
  }

  function updateIncorrect(hiragana: Image) {
    incorrect.value.push(hiragana)
    updateImages(hiragana)
  }
  function updateImages(hiragana: Image) {
    const index = images.findIndex((image: Image) => image.character === hiragana.character)
    images.splice(index, 1)
    currentImage.value = getImage()
  }

  function setIncorrectAsImages() {
    images.push(...incorrect.value)
    incorrect.value = []
    currentImage.value = getImage()
  }

  return {
    correct,
    incorrect,
    correctAnswers,
    incorrectAnswers,
    updateCorrect,
    updateIncorrect,
    getIncorrectAnswer,
    currentImage,
    images,
    setIncorrectAsImages,
    $reset
  }
})
