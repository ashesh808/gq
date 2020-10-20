<template>
  <div class="container-fluid bg-gray" id="accordion-style-1">
    <div class="container">
      <section>
        <div class="row">
          <div class="col-12">
            <h1 class="text-green mb-4 text-center">{{ question }}</h1>
          </div>
          <div class="col-10 mx-auto">
            <div
              class="accordion"
              id="accordionExample"
              v-for="(secondLvlQuestionObj, secondLvlQuestion) in questions"
              :key="secondLvlQuestion"
            >
              <div class="card">
                <div class="card-header" id="accordionExample">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left"
                      type="button"
                      aria-expanded="true"
                      aria-controls="secondLvlQuestion"
                    >
                      {{ secondLvlQuestion }}
                    </button>
                  </h5>
                </div>
                <!-- <div v-for="(thirdLvlQuestionObj,
                      thirdLvlQuestion) in secondLvlQuestionObj"
                      :key="thirdLvlQuestion" v-if=" thirdLvlQuestionObj !== null"> -->
                <div
                  v-for="(thirdLvlQuestionObj,
                  thirdLvlQuestion) in secondLvlQuestionObj"
                  :key="thirdLvlQuestion"
                >
                  <div
                    class="card-body"
                    v-if="thirdLvlQuestionObj in secondLvlQuestionObj !== null"
                  >
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
export default {
  name: "Results",
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
      .get("http://similarbin.com:8000/status?id=5")
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
@import url("https://fonts.googleapis.com/css?family=Tajawal");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

section {
  padding: 60px 0;
}

#accordion-style-1 h1,
#accordion-style-1 a {
  color: #343b3f;
}
#accordion-style-1 .btn-link {
  font-weight: 400;
  color: #343b3f;
  background-color: transparent;
  text-decoration: none !important;
  font-size: 16px;
  font-weight: bold;
  padding-left: 25px;
}

#accordion-style-1 .card-body {
  border-bottom: 2px solid #343b3f;
}

#accordion-style-1 .card-header .btn.collapsed .fa.main {
  display: none;
}

#accordion-style-1 .card-header .btn .fa.main {
  background: #343b3f;
  padding: 13px 11px;
  color: #ffffff;
  width: 35px;
  height: 41px;
  position: absolute;
  left: -1px;
  top: 10px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  display: block;
}
</style>