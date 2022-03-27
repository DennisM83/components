<template>
  <p>Hey!</p>
  <button type="button" @click="age++">Update Age</button>
  <newGreeting :age="age"/>

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

