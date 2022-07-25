<template lang="html">

  <section class="cart-proyecto d-flex justify-content-center mt-3 border-top">
    <div class="card" style="width: 18rem;">
      <div class="card-header">To Buy</div>
      <ul class="list-group list-group-flush">
        <div v-for="(item, i) in cart" :key="i">
          <li class="list-group-item mb-2 mt-2 border-dark"><strong>Product: </strong>{{item.name}} ➡ {{item.cant}}</li>
          <!-- <li class="list-group-item"></li> -->
        </div>
      </ul>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'cart-proyecto',
    props: ['cart'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
</style>
