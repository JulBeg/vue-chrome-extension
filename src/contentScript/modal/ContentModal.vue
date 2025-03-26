<script setup lang="ts">
import { ref, onMounted } from 'vue'
import icon from '../../assets/icon.svg'

const countSync = ref(0)
const showModal = ref(true)

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
  <div>
    <button
      @click="showModal = true"
      class="px-4 py-2 bg-cyan-500 text-white rounded fixed top-0 right-0"
    >
      Open Modal
    </button>

    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-[99999]">
      <div class="bg-[var(--bg-color-dark)] p-8 rounded-lg max-w-2xl w-full mx-4 shadow-xl">
        <div class="flex justify-between items-center mb-6">
          <h4 class="text-2xl font-bold text-cyan-500">Content Script App</h4>
          <img :src="icon" alt="icon" class="w-12 h-12" />
        </div>
        <div>
          <p>Count from Popup: {{ countSync }}</p>
          <div class="flex justify-end gap-4">
            <button
              @click="showModal = false"
              class="cursor-pointer px-4 py-2 border border-zinc-600 text-white rounded hover:border-zinc-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showModal"
      class="fixed inset-0 bg-[var(--bg-color-light)]/75 dark:bg-[var(--bg-color-dark)]/75 transition-opacity z-[99998]"
      aria-hidden="true"
    ></div>
  </div>
</template>
