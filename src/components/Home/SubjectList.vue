<template>
  <a-card
    class="info-list"
    :tab-list="tabListNoTitle"
    :active-tab-key="noTitleKey"
    @tabChange="(key) => onTabChange(key)"
  >
    <template #customRender="item">
      <span>
        <FireOutlined />
        {{ item.title }}
      </span>
    </template>
    <p v-if="noTitleKey === 'article'">article content</p>
    <p v-else-if="noTitleKey === 'update'">app content</p>
    <p v-else>project content</p>
  </a-card>
</template>

<script>
import { FireOutlined } from "@ant-design/icons-vue";

export default {
  name: "SubjectList",
  components: {
    FireOutlined,
  },
  data() {
    return {
      tabListNoTitle: [
        {
          key: "article",
          title: this.$t("main_card.HotInfo"),
          slots: { tab: "customRender" },
        },
        {
          key: "update",
          tab: this.$t("main_card.RecentlyUpdated"),
        },
      ],
      noTitleKey: "article",
    };
  },
  methods: {
    onTabChange: function(value) {
      console.log(value);
      this.noTitleKey = value;
    },
  },
};
</script>

<style lang="scss">
.info-list {
  width: 70%;
}

@media screen and(max-width: 600px) {
  .info-list {
    width: 100%;
  }
}
</style>
