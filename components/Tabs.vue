<template>
  <div :class="tabStatus" :id="tabId" role="tabpanel">
    <div v-if=" tabId === 'alphabet' ">
      <Local />
    </div>
  </div>
</template>

<script>
import Local from "@/components/Local";
export default {
  name: "Tabs",
  props: ["titleText", "tabId", "tabStatus"],
  components: {
    Local
  },
};
</script>
<style scoped>
</style>