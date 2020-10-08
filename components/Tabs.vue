<template>
  <div :class="tabStatus" :id="tabId" role="tabpanel">
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