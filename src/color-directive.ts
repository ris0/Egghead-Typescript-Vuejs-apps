import { DirectiveOptions } from 'vue'

const directive: DirectiveOptions = {
    // takes 2 parameters: el (html) and node (directive)
    inserted(el, node) {
        // if (node.modifiers.background) {
        //     el.style.backgroundColor = node.value
        // } else {
        //     el.style.color = node.value
        // }
        console.log('this our node', node);
        el.style.backgroundColor = node.value.background
        el.style.color = node.value.color
    }
}

// directives have different life style hooks
export default directive