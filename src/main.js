import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);
Vue.config.productionTip = false

Vue.mixin({
  data() {
    return {
      products: [
        {id: 1, name: 'Banana', price: 20,}, 
        {id: 2, name: 'Orange', price: 30,}, 
        {id: 3, name: 'Apple', price: 40,}, 
        {id: 4, name: 'Pear', price: 50,}, 
        {id: 5, name: 'Pineapple', price: 60,}, 
        {id: 6, name: 'Strawberry', price: 70, }, 
        {id: 7, name: 'Watermelon', price: 80},
        {id: 8, name: 'Coconut', price: 90,},
        {id: 9, name: 'Mango', price: 100, },
        {id: 10, name: 'Papaya', price: 110,},
        {id: 11, name: 'Pomegranate', price: 120, },
        {id: 12, name: 'Guava', price: 130,},
        {id: 13, name: 'Jackfruit', price: 140, },
        {id: 14, name: 'Pineapple', price: 150, },
        {id: 15, name: 'Strawberry', price: 160,},
      ]
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
