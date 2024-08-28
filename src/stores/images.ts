import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Image } from '@/models/image'
import hiragana from '@/utility/hiragana'

export const useImagesStore = defineStore('images', () => {
  const images = ref<Image[]>(hiragana())
  const correct = ref<Image[]>([])
  const incorrect = ref<Image[]>([])
  const currentImage = ref<Image>(getImage())
  const correctAnswers = computed(() => correct.value.length)
  const incorrectAnswers = computed(() => incorrect.value.length)

  function $reset() {

    images.value = hiragana();
    correct.value = []
    incorrect.value = []
    currentImage.value = getImage()
  }
  function getImage() {
    if (images.value.length > 0) return images.value[Math.floor(Math.random() * images.value.length)]

    return { character: '', src: '' }
  }
  const getIncorrectAnswer = computed(() => {
    const allAnswers = [
      ...images.value.map((image) => image.character),
      ...correct.value.map((image) => image.character),
      ...incorrect.value.map((image) => image.character)
    ].filter((item) => item !== currentImage.value.character)
    return allAnswers[Math.floor(Math.random() * allAnswers.length)]
  })
  function updateCorrect(hiragana: Image) {
    correct.value.push(hiragana)
  }

  function updateIncorrect(hiragana: Image) {
    incorrect.value.push(hiragana)
  }

  function nextCard() {
    updateImages(currentImage.value)
  }
  function updateImages(hiragana: Image) {
    const index = images.value.findIndex((image: Image) => image.character === hiragana.character)
    images.value.splice(index, 1)
    currentImage.value = getImage()
  }

  function setIncorrectAsImages() {
    images.value.push(...incorrect.value)
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
    nextCard,
    $reset
  }
})
