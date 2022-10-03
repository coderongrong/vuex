<template>
  <h1>HelloWorld...</h1>
  <h1>{{ store.state.count }}</h1>
  <button @click="handleAdd">+</button>
  <button @click="handleAddAsnc">+handleAddAsnc</button>
</template>

<script setup>
import { useStore } from '../vuex';

const store = useStore()

const handleAdd = () => {
  store.commit('add', 10)
}

const handleAddAsnc = () => {
  store.dispatch('asyncAdd', 20)
}
</script>
