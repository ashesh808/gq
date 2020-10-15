<template>
  <div class="container">
    <h1>{{ question }}</h1>
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
  name: "Local",
  data() {
    return {
      data: "",
      message: "",
      question: "",
      questions: [],
      questions_count: "",
      status: "",
      kys: [],
    };
  },
  created() {
    this.$axios
      .get("http://similarbin.com:8000/status?id=2")
      .then(({ data }) => {
        this.data = data.data;
        this.questions = data.data[Object.keys(data.data)[0]];
        this.message = data.message;
        this.question = data.question;
        this.questions_count = data.questions_count;
        this.status = data.status;
      });
  },
};
</script>

<style scoped>
</style>