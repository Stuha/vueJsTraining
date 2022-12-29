const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>Home page</p>' }
const About = { template: '<p>About page</p>' }

const routes = {
    '/VuejsTraining/vueJsRouting/': Home,
    '/VuejsTraining/vueJsRouting/about': About
}

// const routes = {
//     '/': Home,
//     '/about': About
// }

new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent () {
            console.log(this.currentRoute);
            return routes[this.currentRoute] || NotFound
        }
    },
    render (h) { return h(this.ViewComponent) }
})
