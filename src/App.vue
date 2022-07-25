<template>
  <div id="app">
      <NavBarProyecto @hideMain="mainFalse" @showMain="mainTrue" v-if="showMain" />
      <!-- if flag is false you cant go out from login-->
      <LoginProyecto v-if="showLogin" @hideLogin="btnLogin" :users="listUsers"></LoginProyecto>
      <!-- if flag is true you will go to the main page -->
      <MainProyecto :data="products" @addToCart="addToCart" v-if="showMain"></MainProyecto>
      <CartProyecto v-if="showCart" :cart="cart"></CartProyecto>
      <RegisterProyecto v-if="showRegister" @sendRegister="recivedRegister"></RegisterProyecto>
  </div>
</template>

<script>
import LoginProyecto from './components/LoginProyecto.vue';
import MainProyecto from './components/MainProyecto.vue';
import NavBarProyecto from './components/NavBarProyecto.vue';
import CartProyecto from './components/CartProyecto.vue';
import RegisterProyecto from './components/RegisterProyecto.vue';

export default {
  name: 'App',
  components: {
    LoginProyecto,
    MainProyecto,
    NavBarProyecto,
    CartProyecto,
    RegisterProyecto
  },
  data(){
    return {
      showLogin: false,
      showMain: false,
      showCart: false,
      showNavBar: true,
      showRegister: true,
      cart: [],
      listUsers: [],
    }
  },
  methods: {
    btnLogin(){
      this.showLogin = false;
      this.showMain = true;
    },
    recivedRegister(user){
      this.listUsers.push(user);
      this.showRegister = false;
      this.showLogin = true;
    },
    mainTrue() {
      if (this.showCart == false && this.showLogin == false) {
        this.showMain = true;
        this.showCart = false
      }
    },
    mainFalse() {
      this.showMain = false;
      this.showCart = true;
    },
    async addToCart(id) {
      let vm = this
      const cart = await this.cart.filter(function (prod, i) {
        if (prod.id == id) {
          vm.cart[i].cant++
          return prod;
        } 
      })
      if (!cart[0]) {
        const product = await this.products.filter(function (prod) {
          if (prod.id == id) {
            return prod;
          }
        })
        product[0].cant = 1
        this.cart.push(product[0]);
      }
      this.showCart = false
      setTimeout(()=>{
        vm.showCart = true 
      }, 100)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
