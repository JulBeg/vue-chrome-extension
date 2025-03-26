<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const getTime = () => {
  const date = new Date()
  const hour = String(date.getHours()).padStart(2, '0')
  const minute = String(date.getMinutes()).padStart(2, '0')
  return `${hour}:${minute}`
}

const time = ref(getTime())
let intervalor: NodeJS.Timeout | null = null

onMounted(() => {
  intervalor = setInterval(() => {
    time.value = getTime()
  }, 1000)
})

onUnmounted(() => {
  if (intervalor) {
    clearInterval(intervalor)
  }
})
</script>

<template>
  <section class="w-screen h-screen flex flex-col items-center justify-center">
    <h1 class="text-8xl text-cyan-500 font-bold">{{ time }}</h1>
  </section>
</template>

<style>
section::before {
  content: '';
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-image: url('https://picsum.photos/1600/900?grayscale&blur=10');
  background-size: cover;
  opacity: 0.5;
}
</style>
