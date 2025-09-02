import DefaultTheme from 'vitepress/theme'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import '@mdi/font/css/materialdesignicons.css' 

const vuetify = createVuetify({
  components, directives,
  icons: { defaultSet: 'mdi', aliases, sets: { mdi } },
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