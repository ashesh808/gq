<template>
  <div class="row">
    <div class="col"><Results /></div>
    <div class="col"><Graphs /></div>
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
</template>

<script>
import Results from "@/components/Results";
import Graphs from "@/components/Graphs";

export default {
  components: {
    Results,
    Graphs,
  },
};
</script>
<style scoped>
</style>