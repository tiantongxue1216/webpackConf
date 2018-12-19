import Hello from '@view/hello.vue'
import Home from '@view/home.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [{
            path: 'hello',
            component: Hello
        }]
    }
]

export default routes