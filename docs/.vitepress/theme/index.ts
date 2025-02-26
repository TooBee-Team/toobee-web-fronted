import DefaultTheme from 'vitepress/theme'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  components, directives,
  theme: {
    defaultTheme: 'dark',
    /*themes: {
      light: {
        variables: {
          bb1: '#ff88ff',
        },
      },
      dark: {
        dark: true,
        variables: {
          bb1: '#008800',
        },
      }
    },
    */
  },
})

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(vuetify)
  },
}