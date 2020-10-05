<template>
  <div :class="tabStatus" :id="tabId" role="tabpanel">
    <h1>{{ titleText }}</h1>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: ["titleText", "tabId", "tabStatus"],
};
</script>
<style scoped>
</style>