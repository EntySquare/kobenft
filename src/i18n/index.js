import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ElementLocale from 'element-ui/lib/locale'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import koLocale from 'element-ui/lib/locale/lang/ko'
import jaLocale from 'element-ui/lib/locale/lang/ja'

import langZh from '../languages/zh'
import langEN from '../languages/en'
import langKO from '../languages/ko'
import langJA from '../languages/ja'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': {...langZh, ...zhLocale},
    'en': {...langEN, ...enLocale},
    'ko': {...langKO, ...koLocale},
    'ja': {...langJA, ...jaLocale}
  }
})
ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
