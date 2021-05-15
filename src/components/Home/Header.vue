<template>
  <a-layout-header id="header">
    <a-row
      style="justify-content: space-around; flex-wrap: nowrap"
      class="aRow"
    >
      <div style="display: flex; align-items: center">
        <a-button
          @click="drawerVisible = !drawerVisible"
          shape="round"
          class="menu-button"
          style="
            height: 43px;
            margin-right: 20px;
            padding: 9px 10px;
            margin-left: 10px;
          "
        >
          <UnorderedListOutlined style="font-size: 23px" />
        </a-button>
        <div id="logo">
          <img src="../../assets/logo.png" alt="" style="height: 63px" />
        </div>
      </div>
      <a-menu v-model:selectedKeys="current" mode="horizontal" id="Main-Menu">
        <a-menu-item key="Home" class="spacer">
          <HomeOutlined />
          <span>{{ $t("header_menu.mainPage") }}</span>
        </a-menu-item>
        <a-menu-item key="Find" class="spacer">
          <BulbOutlined />
          <span>{{ $t("header_menu.FindMore") }}</span>
        </a-menu-item>
      </a-menu>
      <div class="search-box vertical_center">
        <a-input-search
          class="search-box-header"
          v-model:value="searchBox"
          :placeholder="$t('header_menu.SearchBoxHint')"
          enter-button
          @search="onSearch"
        />
      </div>
      <div class="vertical_center standard-height account-info">
        <a-badge :count="unreadMessage">
          <BellOutlined style="font-size: 23px" />
        </a-badge>
        <a-avatar :size="30" id="avatar">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </div>
    </a-row>
  </a-layout-header>
  <a-drawer
    :title="$t('header_menu.Menu')"
    placement="left"
    :closable="false"
    :visible="drawerVisible"
    @close="drawerVisible = !drawerVisible"
  >
    <a-menu
      style="margin: -24px"
      v-model:selectedKeys="current"
      @click="tabChange"
    >
      <a-menu-item key="Home" class="spacer">
        <HomeOutlined />
        <span>{{ $t("header_menu.mainPage") }}</span>
      </a-menu-item>
      <a-menu-item key="Find" class="spacer">
        <BulbOutlined />
        <span>{{ $t("header_menu.FindMore") }}</span>
      </a-menu-item>
    </a-menu>
  </a-drawer>
</template>

<script>
import {
  BellOutlined,
  BulbOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";

export default {
  name: "Header",
  components: {
    HomeOutlined,
    BulbOutlined,
    BellOutlined,
    UserOutlined,
    UnorderedListOutlined,
  },
  data() {
    return {
      current: "Home",
      searchBox: "",
      drawerVisible: false,
      unreadMessage: 0,
    };
  },
  methods: {
    onSearch: function () {
      console.log(this.searchBox);
    },
    tabChange: function () {
      this.drawerVisible = false;
      this.$emit("onChange", this.current);
    },
  },
};
</script>

<style lang="scss">
$header_height: 64px;

#header {
  transition: all 0.25s ease-in-out;
  background-color: #fff !important;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
}

.standard-height {
  height: $header_height;
}

#Main-Menu {
  height: $header_height - 1;
  line-height: $header_height - 2;
  border-bottom: 0;
}

#avatar {
  margin-left: 30px !important;
}

.vertical_center {
  display: flex !important;
  align-items: center;
}

.search-box {
  height: $header_height;
}

.search-box-header {
  width: 25vw !important;
}

@media screen and (max-width: 700px) {
  #header {
    padding: 0 !important;
  }
}

.menu-button {
  display: none !important;
}

@media screen and (max-width: 600px) {
  .search-box {
    display: none !important;
  }
  #Main-Menu {
    display: none;
  }
  .aRow {
    justify-content: space-between !important;
  }
  .menu-button {
    display: block !important;
  }
  .account-info {
    margin-right: 10px;
  }
}
</style>
