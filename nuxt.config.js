export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "keyword",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: ""
      }
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "http://fonts.googleapis.com/css?family=Raleway"
      },
      {
        rel: "stylesheet",
        href: "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"
      },
    

    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js",
        type: "text/javascript"
      },
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src: "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "http://d3js.org/d3.v3.min.js",
        type: "text/javascript"
      },
      

    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/graphs.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
  ],
  
  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'ttp://localhost:3000'
        : 'http://localhost:3000',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

};
