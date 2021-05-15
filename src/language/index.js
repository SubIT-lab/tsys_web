import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "zh-CN",
  messages: {
    "zh-CN": require("./zh-CN"),
    en: require("./en"),
  },
});

export default i18n;
