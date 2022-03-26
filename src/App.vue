<template>
  <p>Hey!</p>
  <newGreeting />
  <newUser :age="age"/>
</template>

<script>
import newGreeting from "./components/Greeting.vue";
import newUser from './components/User.vue';
export default {
  name: 'App',
  components: {
    newGreeting,
    newUser
  },
  data() {
    return {
      age: 20
    }
  }
};
</script>

