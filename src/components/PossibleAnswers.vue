<template>
  <v-container class="justify-center">
    <v-row>
      <v-col
        v-for="(value, index) of createButtonValues()"
        :key="value.answer"
        cols="6"
        :class="index === 0 ? 'text-end' : 'text-start'"
      >
        <v-btn @click="$emit(value.emit)">{{ value.answer }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import { type Image } from '@/models/image'
import { shuffle } from '@/utility/shuffle'
const props = defineProps({
  hiragana: {
    type: Object as PropType<Image>,
    default: () => {
      character: ''
    }
  },
  incorrectAnswer: {
    type: String,
    default: ''
  }
})

defineEmits(['correct', 'incorrect'])

const createButtonValues = () => {
  //return array of two objects, one with the correct answer one with the wrong, then shuffle them
  const correct = { answer: props.hiragana.character, emit: 'correct' }
  const incorrect = { answer: props.incorrectAnswer, emit: 'incorrect' }
  const buttonValues = [correct, incorrect]
  return shuffle(buttonValues)
}
</script>
