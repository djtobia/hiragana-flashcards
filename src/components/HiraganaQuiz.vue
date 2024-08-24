<template>
  <v-container fluid class="fill-height justify-center">
    <v-card width="500px">
      <v-card-title>Hiragana Quiz!</v-card-title>
      <v-card-text class="mh-500">
        <v-img :src="hiragana.src" v-if="store.images.length" />
        <v-row v-else><v-col>You're done-zo</v-col></v-row>

        <PossibleAnswers
          v-if="store.images.length"
          :hiragana="hiragana"
          :incorrectAnswer="store.getIncorrectAnswer"
          @correct="correct"
          @incorrect="incorrect"
        />
        <v-row>
          <v-col>
            <v-btn
              @click="store.setIncorrectAsImages"
              v-if="store.images.length === 0 && store.incorrect.length > 0"
              >Retry the ones you got wrong?</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-spacer />
          <v-col cols="4"> Correct {{ store.correctAnswers }} </v-col>
          <v-spacer />
          <v-col cols="4">Incorrect {{ store.incorrectAnswers }}</v-col>
          <v-spacer />

          <v-col cols="4"><v-btn @click="store.$reset">Reset?</v-btn></v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PossibleAnswers from './PossibleAnswers.vue'
import { useImagesStore } from '@/stores/images'
const store = useImagesStore()
const hiragana = computed(() => store.currentImage)
const correct = () => {
  store.updateCorrect(hiragana.value)
}

const incorrect = () => {
  store.updateIncorrect(hiragana.value)
}
</script>

<style scoped>
.mh-500 {
  height: 550px;
}
</style>
