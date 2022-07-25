<template lang="html">

  <section class="nav-bar-proyecto mb-5">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="javascript:void(0)" @click="showMain">Catalogue</a>
            <a class="nav-link active" aria-current="page" href="javascript:void(0)" @click="hideMain">Cart</a>
          </div>  
        </div>
      </div>
    </nav>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'nav-bar-proyecto',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
    hideMain() {
      this.$emit("hideMain");
    },
    showMain() {
      this.$emit("showMain");
    },
    },
    computed: {

    }
}


</script>

<style scoped>
.navbar-nav {
  justify-content: center !important;
  margin: 0px auto !important;
  font-size: 20px;
}
</style>
