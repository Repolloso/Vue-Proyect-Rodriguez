<template lang="html">

    <div class="container">
      <label for="username"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="username" v-model="username" required>

      <label for="pwd"><b>Password</b></label>
      <!-- v-model to change the username an password values in data. -->
      <input type="password" placeholder="Enter Password" name="pwd" v-model="pwd" required>
        
      <button @click="hideLogin">Login</button>
    </div>

</template>

<script>

  export default  {
    name: 'login-proyecto',
    props: {
      users: Array
    },
    mounted () {

    },
    data () {
      return {
          username:'',
          pwd:''
      }
    },
    methods: {
      hideLogin () {
        let flag = this.users.filter(user => user.username == this.username && user.pwd == this.pwd);

        if(flag != ''){
          this.$emit('hideLogin')
        } else
          alert('Invalid username or password');
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
