<template>
  <div class="container">
    <h1>{{ question }}</h1>
    <ul>
      <li v-for="ky in kys" :key="ky">{{ ky }}</li>
    </ul>
    <ul>
      <li v-for="secky in skys" :key="secky">{{ secky }}</li>
    </ul>
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
      kys: [],
      skys: [],
    };
  },
  created() {
    this.$axios
      .get("http://similarbin.com:8000/status?id=2")
      .then(({ data }) => {
        this.data = data.data;
        this.processKeys(data.data);
        this.kys = Object.keys(this.data);
        this.seckys = Object.keys(this.kys);
        console.log(this.skys);
        this.message = data.message;
        this.question = data.question;
        this.questions_count = data.questions_count;
        this.status = data.status;
      });
  },
  mouted() {},
  methods: {
    
    },
  },
};
</script>
<style scoped>
</style>