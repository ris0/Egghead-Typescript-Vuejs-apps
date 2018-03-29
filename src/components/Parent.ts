import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Parent extends Vue {
    parentClicked() {
        console.log('Parent clicked');
    }
}