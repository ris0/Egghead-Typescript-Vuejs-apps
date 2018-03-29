<template>
  <div class="hello">
    <h1>{{ fullMessage }}</h1>
    <button @click="clicked">Click</button>
    <button @click="parentClicked">Parent Click</button>
    <router-link to="hello-ts">Hello TS</router-link>
  </div>
</template>

<script lang="ts">
import Parent from './Parent'
import Component from 'vue-class-component'

@Component({})
export default class Hello extends Parent {
  message: string = 'Hello Vue'

  get fullMessage() {
    return `${this.message} from TypeScript`
  }

  created() {
    console.log('Created');
  }

  clicked() {
    console.log('Clicked')
  }
  
  // in order to use these hooks, we'll need to pass these args
  beforeRouteEnter(to, from, next) {
    console.log('Enter')
    next()
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
