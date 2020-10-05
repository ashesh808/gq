<template>
  <div class="container">
    <SearchNav />
    <div class="tab-content" id="vendorTabContent">
      <Alphabet />
      <Comparision />
      <Local />
      <Numbers />
      <Phrases />
      <Questions />
      <Research />
      <Shopping />
    </div>
  </div>
</template>

<script>
import SearchNav from "@/components/SearchNav";
import Alphabet from "@/components/Alphabet";
import Comparision from "@/components/Comparision";
import Local from "@/components/Local";
import Numbers from "@/components/Numbers";
import Phrases from "@/components/Phrases";
import Questions from "@/components/Questions";
import Research from "@/components/Research";
import Shopping from "@/components/Shopping";

export default {
  components: {
    Alphabet,
    Comparision,
    Local,
    Numbers,
    Phrases,
    Questions,
    Research,
    Shopping,
  },
};
</script>

<style scoped>

</style>