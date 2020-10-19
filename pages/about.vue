<template>
  <div class="container">
    <h1>About</h1>
    <ul>
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
    </ul>
  </div>
</template>

<script>
export default {
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