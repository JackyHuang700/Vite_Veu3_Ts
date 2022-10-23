<script setup lang="ts">

import type { IInput } from "@/composables/useAntDesignVue/types";
import { useCounterStore } from "@/stores/counter";
import { reactive } from 'vue'

import usePopover from "@/composables/useAntDesignVue/popover";
import useSpin from "@/composables/useAntDesignVue/spin";

/** */
const { popper_init: popper_com1 } = usePopover({
  // visible: false,
  // attrs: {
  // trigger:  '',
  // title: '標題',
  // content: '內容',
  // },
})

/** */
const {spin_init: spin_com} = useSpin({
  // attrs: {
  //   spinning: true,
  //   tip: 'Loading...',
  //   size: 'small',
  //   class: '',
  //   style: '',
  // }
})


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



</script>

<template>

  <div>
    <span style="margin-right: 2px;">spin</span>
    <span><a-spin v-bind="spin_com.attrs"/></span>
    <button @click="spin_com!.attrs!.spinning = !spin_com!.attrs!.spinning">切換spin顯示</button>
  </div>

  <div>

    <!-- v-model:visible="popper_bmo1.visible" -->
    <a-popover v-bind="popper_com1.attrs">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <template #title v-if="false">
        <span>Title</span>
      </template>
      <button>button</button>
    </a-popover>
  </div>


  <div class="greetings">
    <a-input v-model:value="input_aa.value" v-bind="{
      ...input_aa.attrs,
      placeholder:'Basic usage' 
    }" v-on="input_aa.listeners" />

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
