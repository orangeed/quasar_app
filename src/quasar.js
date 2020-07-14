import Vue from 'vue'

import './styles/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, QIcon } from 'quasar'
import iconSet from 'quasar/icon-set/fontawesome-v5'

Vue.use(Quasar, QIcon, {
    iconSet: iconSet,
    config: {},
    components: { /* not needed if importStrategy is not 'manual' */ },
    directives: { /* not needed if importStrategy is not 'manual' */ },
    plugins: {}
})