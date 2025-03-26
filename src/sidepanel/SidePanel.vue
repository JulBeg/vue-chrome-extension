<script setup lang="ts">
import { ref, onMounted } from 'vue'

const countSync = ref(0)

onMounted(() => {
  chrome.storage.sync.get(['count'], (result) => {
    countSync.value = result.count ?? 0
  })

  chrome.runtime.onMessage.addListener((request) => {
    if (request.type === 'COUNT') {
      countSync.value = request?.count ?? 0
    }
  })
})
</script>

<template>
  <main class="px-4 py-8 flex flex-col items-center gap-6">
    <img src="../assets/icon.svg" alt="icon" class="w-12 h-12" />

    <h3 class="text-2xl text-cyan-500 font-medium">SidePanel Page</h3>

    <p>Count from Popup: {{ countSync }}</p>
  </main>
</template>
