<template>
  <div class="container">
    <h1>{{ question }}</h1>
    <p>{{ data }}</p><br>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Local",
  data() {
    return {
      data: "",
      message: "",
      question: "",
      questions_count: "",
      status: "",
    };
  },
  created() {
    this.$axios
      .get("http://similarbin.com:8000/status?id=2")
      .then(({ data }) => {
        this.data = data.data;
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