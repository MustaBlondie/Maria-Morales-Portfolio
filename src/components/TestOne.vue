<script setup lang="ts">
import { useCounterStore } from '@/store/counter'

const counter = useCounterStore()

const plus = () => {
  counter.increment()
  console.log('soy positivo')
}

const minus = () => {
  counter.decrement()
  console.log('soy negativo')
}
</script>

<template>
  <div>
    <button @click="plus" class="mr-4">MAS</button>

    <button @click="minus">MENOS</button>
    <h2>Current Count: {{ counter.count }}</h2>
  </div>
</template>
