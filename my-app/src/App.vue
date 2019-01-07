<template>
  <div class="container">
    <nav>
      <ul class="nav nav-justified">
        <!-- Replace Foo with your resource name -->
        <li class="active"><router-link :to="{ name: 'ProjectList' }">Projects</router-link></li>
        <li class="active"><router-link :to="{ name: 'UserList' }">Users</router-link></li>
      </ul>
    </nav>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
