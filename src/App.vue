<template>
  <div id="app">
    <img src="./assets/logo.png">
    <MyCheckbox :title="checkbox.title" :value="checkbox.value" v-model="checkbox.checked"/>
    <!-- <router-view></router-view> -->
  </div>
</template>


<script lang="ts">
// Vue models, v-model, allow us to use two-way data binding, which is useful in some cases such as forms. This lesson shows how to use it by creating a custom checkbox component using the @Model decorator in TypeScript
// v-model implictly sets a value property and listens to an event?

import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import MyCheckbox from './components/MyCheckbox.vue'

@Component({
  components: {
    MyCheckbox
  }
})

export default class App extends Vue {
  checkbox = {
    title: 'Fancy checkbox',
    value: 'checkbox-id',
    checked: true
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
</style>
