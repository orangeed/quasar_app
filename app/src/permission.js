import router from './router'
import pageTitle from './utils/get-page-title'

router.beforeEach(async (to, form, next) => {
    document.title = pageTitle(to.meta.title)
    next()
})