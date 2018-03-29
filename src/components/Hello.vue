<template>
  <div class="hello">
  <div> {{ fullMessage }}</div>
    <!-- <h1 v-colorDirective.background="{ color: 'white', background: 'blue', isRichSexy: true }"> {{ message }} </h1> -->
  </div>
</template>

<script lang="ts">
import Parent from "./Parent";
import Vue from "vue"
// import colorDirective from "../color-directive";
import { Component, Prop } from 'vue-property-decorator';

// @Component({
  // props: {
  //   msg: String
  // },
  // directives: {
  //   colorDirective
  // }
// })

@Component({})
export default class Hello extends Vue {
  message: string = "Hello";

  @Prop({type: String, default: ' Vue'}) msg: string

  get fullMessage() {
    return `${this.message}${this.msg}`;
  }

  // created() {
  //   console.log("Created");
  // }

  // clicked() {
  //   console.log("Clicked");
  // }

  // // in order to use these hooks, we'll need to pass these args
  // beforeRouteEnter(to, from, next) {
  //   console.log("Enter");
  //   next();
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
