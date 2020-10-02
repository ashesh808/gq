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
          />
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button">
              <i class="fa icon-magnifier"></i>
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
};
</script>

<style scoped>
.search-bar {
  padding: 0.8em 1em;
}
</style>