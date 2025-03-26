<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const count = ref(0)

const minus = () => {
  if (count.value > 0) count.value--
}
const add = () => count.value++

onMounted(() => {
  chrome.storage.sync.get(['count'], (result) => {
    count.value = result.count ?? 0
  })
})

watch(count, (newCount) => {
  chrome.storage.sync.set({ count: newCount })

  chrome.runtime.sendMessage({ type: 'COUNT', count: count.value })
})
</script>

<template>
  <main class="min-w-xs px-4 py-8 flex flex-col items-center gap-6">
    <img src="../assets/icon.svg" alt="icon" class="w-12 h-12" />

    <h3 class="text-2xl text-cyan-500 font-medium">Popup Page</h3>

    <div class="flex gap-4 items-center justify-center">
      <button
        @click="minus"
        :disabled="count <= 0"
        class="border border-gray-500 rounded-lg px-4 py-2 hover:border-gray-300 disabled:opacity-50 text-lg cursor-pointer"
      >
        -
      </button>
      <label>{{ count }}</label>
      <button
        @click="add"
        class="border border-gray-500 rounded-lg px-4 py-2 hover:border-gray-300 disabled:opacity-50 text-lg cursor-pointer"
      >
        +
      </button>
    </div>
  </main>
</template>
