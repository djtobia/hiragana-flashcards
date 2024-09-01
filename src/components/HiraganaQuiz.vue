<template>
  <v-container fluid class="fill-height justify-center">
    <v-card width="500px" color="grey-darken-3">
      <v-card-title>Hiragana Quiz!</v-card-title>
      <v-card-text v-if="!viewCorrect">
        <v-img :src="hiragana.src" v-if="store.images.length" />
        <v-row v-else justify="center"><v-col class="text-center">You're done-zo</v-col></v-row>
        <v-row v-if="showCorrect" justify="center"
          ><v-col cols="12" class="text-center">You got that one right!</v-col>

          <v-col cols="12" class="text-center"
            >The answer was {{ hiragana.character }}</v-col
          ></v-row
        >
        <v-row v-if="showIncorrect" justify="center">
          <v-col cols="12" class="text-center">
            You got that one wrong. The correct answer was {{ hiragana.character }}
          </v-col>
        </v-row>
        <v-row v-show="showCorrect || showIncorrect" justify="center">
          <v-col cols="12" class="text-center">
            <v-btn @click="nextCard" color="purple-lighten-4">Next Card</v-btn>
          </v-col>
        </v-row>
        <PossibleAnswers
          v-if="store.images.length && !showCorrect && !showIncorrect"
          :hiragana="hiragana"
          :incorrectAnswer="store.getIncorrectAnswer"
          @correct="correct"
          @incorrect="incorrect"
        />
        <v-row class="mt-10">
          <v-col class="text-center">
            <v-btn
              @click="store.setIncorrectAsImages"
              v-if="store.images.length === 0 && store.incorrect.length > 0"
              color="orange-darken-4"
              class="mb-3"
            >
              Retry the ones you got wrong?
            </v-btn>
            <v-btn @click="viewCorrect = true" color="green-darken-4" v-if="store.correct.length">
              View your correct answers?
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text v-else>
        <v-row>
          <v-col
            v-for="hiragana of store.correct.sort((a, b) => a.character.localeCompare(b.character))"
            :key="hiragana.character"
            cols="4"
          >
            <v-img :src="hiragana.src" /> <label>{{ hiragana.character }}</label>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center">
            <v-btn @click="viewCorrect = false">Back to the quiz</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-row align="baseline">
          <v-spacer />
          <v-col cols="4"> Correct {{ store.correctAnswers }} </v-col>
          <v-spacer />
          <v-col cols="4">Incorrect {{ store.incorrectAnswers }}</v-col>
          <v-spacer />
          <v-col cols="4"><v-btn @click="reset" color="red">Reset?</v-btn></v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PossibleAnswers from './PossibleAnswers.vue'
import { useImagesStore } from '@/stores/images'
const store = useImagesStore()
const hiragana = computed(() => store.currentImage)
const showCorrect = ref(false)
const showIncorrect = ref(false)
const viewCorrect = ref(false)
const correct = () => {
  showCorrect.value = true
  store.updateCorrect(hiragana.value)
}

const incorrect = () => {
  showIncorrect.value = true
  store.updateIncorrect(hiragana.value)
}

const nextCard = () => {
  showCorrect.value = false
  showIncorrect.value = false
  store.nextCard()
}

const reset = () => {
  store.$reset()
  viewCorrect.value = false
}
</script>
