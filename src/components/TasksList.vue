<script setup lang="ts">
import { ref, onMounted } from "vue"

const tasksList = ref([])

onMounted(async () => {
  const response = await fetch("../../.netlify/functions/notion").then((res) =>
    res.json()
  )

  tasksList.value = response
})
</script>

<template>
  <div v-if="tasksList.length">
    <div>
      <span class="mr-1 bold">No.</span>
      <span class="mr-1 bold">Task Name</span>
      <span class="mr-1 bold">Due Date</span>
    </div>
    <div v-for="(task, k) in tasksList" :key="k">
      <span class="mr-1">{{ k + 1 }}.</span>
      <span class="mr-1">{{ task.name }}</span>
      <span class="mr-1">{{ task.start_date }}</span>
    </div>
  </div>

  <div v-else>Loading...</div>
</template>

<style scoped>
.mr-1 {
  margin-right: 1em;
}
.bold {
  font-weight: bold;
}
</style>
