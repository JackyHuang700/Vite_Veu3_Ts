<script setup lang="ts">

import { useCounterStore } from "@/stores/counter";
import { reactive } from 'vue'

defineProps<{
  msg: string  
}>()


const counter = useCounterStore()
const input_aa: IInput = reactive({
  value: 'asf',
  attrs: {
    loading: true
  },
  listeners: {
    change: () => console.log('change')
  },
})

interface IInput<T = string>{
  value: T
  attrs: {
    loading: boolean
  }
  listeners: {
    change: {
      (): void
    }
  }
}

</script>

<template>
  <div class="greetings">
    <a-input v-model:value="input_aa.value" 
    
      v-bind="{
        ...input_aa.attrs,
        placeholder:'Basic usage' 
      }"
      v-on="input_aa.listeners"
    />

    <h1 class="green">{{ msg }}</h1>
    <h2>
      <span>pinia store</span>
      <span>{{counter.count}}</span>


      <button @click="counter.increment">按我</button>
    </h2>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
