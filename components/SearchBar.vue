<template>
  <div>
    <Nav />
    <section class="jumbotron text-center">
      <div class="container">
        <h1>Keyword Bin</h1>
        <div class="input-group">
          <input
            type="text"
            class="form-control search-bar"
            placeholder="Search for the keyword"
            v-model="keyword"
            @keyup.enter="search"
          />
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button" value="Search">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
        <p class="lead text-muted my-2">
          Search for your keyword and we will take care of the rest
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  name: "SearchBar",
  components: {
    Nav,
  },
   data() {
    return {
      keyword: "",
    };
  },
  created() {
    
     this.$axios
      .get("http://similarbin.com:8000/search?question=" + this.keyword)
      .then(function (response) {
        console.log(response);
      })}

  //  methods: {
  //   search() {
  //     this.$router.push(`/products?search=${this.keyword}`);
  //   },
  // },
};
 
</script>

<style scoped>
.search-bar {
  padding: 0.8em 1em;
}
</style>