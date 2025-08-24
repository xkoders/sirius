import { createApp } from 'vue'
import ExamplePage from '../src/ExamplePage.vue'
import '../src/index.scss'
import './style.css'

const app = createApp(ExamplePage)
app.mount('#app')
