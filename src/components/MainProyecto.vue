<template lang="html">

    <div>
        <h1 class="mb-5">🥥🍍Greengrocery🍓🍇</h1>
        <h6>The cart will be displayed below the list of products*</h6>
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-3" v-for="(item, i) in data" :key="i">
                <div class="card" style="width: 18rem;">
                  <!-- <img :src="item.img" class="card-img-top" alt="..."> -->
                  <div class="card-body">
                    <h5 class="card-title">{{item.name}}</h5>
                    <p class="card-text">Price: {{item.price}}</p>
                    <a href="javascript:void(0)" @click="addToCart(item.id)" class="btn btn-primary">Add to Cart</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>

</template>

<script lang="js">

  export default  {
    name: 'main-proyecto',
    props: {
      data: Array
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      addToCart(item) {
        this.$emit('addToCart', item);
      }
    },
    computed: {

    }
}

</script>

<style scoped>

</style>
