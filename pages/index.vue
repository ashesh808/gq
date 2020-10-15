<template>
  <div class="container">
    <SearchNav />
    <div class="tab-content" id="vendorTabContent">
      <Tabs
        title-text="This is Alphabet"
        tab-id="alphabet"
        tab-status="tab-pane fade show active"
      />
      <Tabs
        title-text="This is Comparision"
        tab-id="comparision"
        tab-status="tab-pane fade"
      />
      <Tabs
        title-text="This is Local"
        tab-id="local"
        tab-status="tab-pane fade"
      />
      <Tabs
        title-text="This is Numbers"
        tab-id="numbers"
        tab-status="tab-pane fade "
      />
      <Tabs
        title-text="This is Phrases"
        tab-id="phrases"
        tab-status="tab-pane fade "
      />
      <Tabs
        title-text="This is Questions"
        tab-id="questions"
        tab-status="tab-pane fade "
      />
      <Tabs
        title-text="This is Research"
        tab-id="research"
        tab-status="tab-pane fade "
      />
      <Tabs
        title-text="This is Shopping"
        tab-id="shopping"
        tab-status="tab-pane fade "
      />
    </div>
    <!-- <ul>
      <li
        v-for="(secondLvlQuestionObj, secondLvlQuestion) in questions"
        :key="secondLvlQuestion"
      >
        <span>{{ secondLvlQuestion }}</span>
        <ul>
          <li
            v-for="(thirdLvlQuestionObj,
            thirdLvlQuestion) in secondLvlQuestionObj"
            :key="thirdLvlQuestion"
          >
            <span>{{ thirdLvlQuestion }}</span>
            <ul class="laslLvl">
              <li
                v-for="lastLvlQuestion in thirdLvlQuestionObj"
                :key="lastLvlQuestion"
              >
                {{ lastLvlQuestion }}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul> -->
   <!-- <Graphs /> -->
  </div>
</template>

<script>
import SearchNav from "@/components/SearchNav";
import Tabs from "@/components/Tabs";
import Graphs from "@/components/Graphs";

export default {
  components: {
    SearchNav,
    Tabs,
    Graphs,
  },
  data() {
    return {
      questions: [],
    };
  },
  created() {
    this.$axios
      .get("http://similarbin.com:8000/status?id=5")
      .then(({ data }) => {
        this.questions = data.data[Object.keys(data.data)[0]];
      });
  },
};
</script>
<style scoped>
</style>