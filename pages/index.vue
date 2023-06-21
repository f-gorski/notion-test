<template>
  <div class="container">
    <div>
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
  </div>
</template>

<script>
export default {
  async asyncData() {
    const notion = await require("../netlify/functions/notion");

    const response = await notion.handler().then((res) => JSON.parse(res.body));
    return { tasksList: response };
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mr-1 {
  margin-right: 1em;
}
.bold {
  font-weight: bold;
}
</style>
