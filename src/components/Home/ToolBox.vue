<template>
  <a-card :title="$t('tool_box.title')">
    <a-card-grid style="width: 50%; text-align: center" :hoverable="false">
      <div class="icon-pack">
        <EditFilled class="icon" style="color: rgb(15, 136, 235)" />
        <span class="description">
          {{ $t("tool_box.start") }}
        </span>
      </div>
    </a-card-grid>
    <a-card-grid style="width: 50%; text-align: center" :hoverable="false">
      <div class="icon-pack">
        <BugFilled class="icon" style="color: rgb(67, 212, 128)" />
        <span class="description">
          {{ $t("tool_box.reportBug") }}
        </span>
      </div>
    </a-card-grid>
  </a-card>
</template>

<script>
import { BugFilled, EditFilled } from "@ant-design/icons-vue";

export default {
  name: "ToolBox",
  components: {
    BugFilled,
    EditFilled,
  },
};
</script>

<style lang="scss">
.icon-pack {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.icon {
  font-size: 1.8em;
  margin: 5px;
}

.description {
  font-size: 15px;
  color: #8590a6;
  margin-top: 5px;
}
</style>
