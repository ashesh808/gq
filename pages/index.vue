<template>
  <div class="container">
    <SearchNav />
    <div class="tab-content" id="vendorTabContent">
      <Tabs title-text="This is Alphabet" tab-id="alphabet" tab-status = "tab-pane fade show active" />
      <Tabs title-text="This is Comparision" tab-id="comparision" tab-status = "tab-pane fade"/>
      <Tabs title-text="This is Local" tab-id="local"  tab-status = "tab-pane fade"/>
      <Tabs title-text="This is Numbers" tab-id="numbers" tab-status = "tab-pane fade "/>
      <Tabs title-text="This is Phrases" tab-id="phrases" tab-status = "tab-pane fade "/>
      <Tabs title-text="This is Questions" tab-id="questions" tab-status = "tab-pane fade "/>
      <Tabs title-text="This is Research" tab-id="research" tab-status = "tab-pane fade "/>
      <Tabs title-text="This is Shopping" tab-id="shopping" tab-status = "tab-pane fade "/>
    </div>
  </div>
</template>

<script>
import SearchNav from "@/components/SearchNav";
import Tabs from "@/components/Tabs";

export default {
  components: {
    SearchNav,
    Tabs,
  },
};
</script>
<style scoped>
</style>