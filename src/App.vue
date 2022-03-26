<template>
  <p>Hey!</p>
  <newGreeting />
  <newUser/>
</template>

<script>
import newGreeting from './components/Greeting.vue';
import newUser from './components/User.vue';
export default {
  name: 'App',
  components: {
    newGreeting,
    newUser
  }
};
</script>

