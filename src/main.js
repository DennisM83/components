import { createApp } from 'vue'
import App from './App.vue'
// import Greeting from './components/Greeting.vue'



const vm = createApp(App)

// vm.component('newGreeting', Greeting);

vm.mount('#app')
