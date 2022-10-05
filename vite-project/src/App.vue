<template>
  <h1>app...</h1>
  <h1>{{ store.state.count }}</h1>
  <button @click="handleAdd">+</button>
  <button @click="handleAddAsnc">+handleAddAsnc</button>
  <!-- <HelloWorld /> -->

  <div>123</div>



  <div>devvelop</div>
  <div>feature</div>
</template>

<script setup>
import { useStore } from 'vuex';
// import HelloWorld from '@/components/HelloWorld.vue'



const store = useStore()

const handleAdd = () => {
  store.commit('add', 10)
}


const handleAddAsnc = () => {
  store.dispatch('asyncAdd', 20)
}


</script>
