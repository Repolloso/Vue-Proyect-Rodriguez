<template lang="html">

  <section class="register-proyecto">
    <h1>Register</h1>

      <div class="container">
        <label for="username"><b>Name</b></label>
        <input type="text" placeholder="Enter Username" name="name" v-model="user.name" required>

        <label for="username"><b>Surname</b></label>
        <input type="text" placeholder="Enter Surname" name="surname" v-model="user.surname" required>

        <label for="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" v-model="user.username" required>

        <label for="pwd"><b>Password</b></label>
        <!-- v-model to change the username an password values in data. -->
        <input type="password" placeholder="Enter Password" name="pwd" v-model="user.pwd" required>
          
        <button @click="register">Register</button>
      </div>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'register-proyecto',
    props: [],
    mounted () {

    },
    data () {
      return {
        user: {
          name:'',
          surname:'',
          username:'',
          pwd:''
        }
      }
    },
    methods: {
      register () {
          this.$emit('sendRegister', this.user);
      }
    },
    computed: {

    }
}


</script>

<style scoped>
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.container {
  padding: 16px;
}
span.psw {
  float: right;
  padding-top: 16px;
}
</style>
