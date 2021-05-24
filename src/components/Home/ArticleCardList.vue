<template>
  <div>
    <div v-if="articleList.length === 0">
      <a-skeleton
        v-for="i in 2"
        v-bind:key="i"
        :paragraph="{ rows: 4 }"
        active
      />
    </div>
    <div v-else>
      <a-list item-layout="vertical" size="large" :data-source="articleList">
        <template #renderItem="{ item }">
          <a-list-item>
            <template #actions>
              <span>
                <LikeOutlined />
                <span class="hidden-when-thin">
                  {{ $t("article_card.agree") }}:
                </span>
                {{ item.agree }}
              </span>
              <span>
                <MehOutlined />
                <span class="hidden-when-thin">
                  {{ $t("article_card.neutral") }}:
                </span>
                {{ item.neutral }}
              </span>
              <span>
                <DislikeOutlined />
                <span class="hidden-when-thin">
                  {{ $t("article_card.disagree") }}:
                </span>
                {{ item.disagree }}
              </span>
            </template>
            <template #extra>
              <img
                class="thin-hidden"
                @click="getDetail(item.topicID)"
                style="cursor: pointer"
                height="150"
                alt="logo"
                :src="item.posterURL"
              />
            </template>
            <a-list-item-meta
              :description="item.senderName + ' · ' + item.startTime"
            >
              <template #title style="margin-bottom: 0">
                <a
                  @click="getDetail(item.topicID)"
                  style="cursor: pointer; font-size: 1.2em"
                >
                  {{ item.title }}
                </a>
              </template>
            </a-list-item-meta>
            <span class="content-article" @click="getDetail(item.topicID)">
              {{ item.content }}
            </span>
          </a-list-item>
        </template>
        <template #loadMore>
          <div
            :style="{
              textAlign: 'center',
              marginTop: '12px',
              height: '32px',
              lineHeight: '32px',
            }"
          >
            <span v-if="!is_more">没有更多了！</span>
            <a-button v-if="!load_for_more && is_more" @click="loadMore">
              加载更多
            </a-button>
          </div>
        </template>
        <a-skeleton
          v-if="load_for_more"
          style="margin-top: 10px"
          :paragraph="{ rows: 4 }"
          active
        />
      </a-list>
    </div>
  </div>
</template>

<script>
import { DislikeOutlined, LikeOutlined, MehOutlined } from "@ant-design/icons-vue";

export default {
  name: "ArticleCardList",
  components: {
    LikeOutlined,
    DislikeOutlined,
    MehOutlined,
  },
  data() {
    return {
      is_more: false,
      load_for_more: false,
      articleList: [
        {
          title: "北大附中的自习课规定教室是否应该!",
          senderUID: 32423,
          topicID: 1,
          senderAvatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          posterURL: "https://z3.ax1x.com/2021/05/24/gj49L4.jpg",
          senderName: "何天阳",
          startTime: "5-15",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".substr(
              0,
              200,
            ) + "...",
          agree: 102,
          disagree: 201,
          neutral: 20,
        },
        {
          title: "北大附中的自习课规定教室是否应该!",
          senderUID: 32423,
          topicID: 1,
          senderAvatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          posterURL: "https://z3.ax1x.com/2021/05/24/gj49L4.jpg",
          senderName: "何天阳",
          startTime: "5-15",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".substr(
              0,
              200,
            ) + "...",
          agree: 102,
          disagree: 201,
          neutral: 20,
        },
        {
          title: "北大附中的自习课规定教室是否应该!",
          senderUID: 32423,
          topicID: 1,
          senderAvatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          posterURL: "https://z3.ax1x.com/2021/05/24/gj49L4.jpg",
          senderName: "何天阳",
          startTime: "5-15",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".substr(
              0,
              200,
            ) + "...",
          agree: 102,
          disagree: 201,
          neutral: 20,
        },
        {
          title: "北大附中的自习课规定教室是否应该!",
          senderUID: 32423,
          topicID: 1,
          senderAvatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          posterURL: "https://z3.ax1x.com/2021/05/24/gj49L4.jpg",
          senderName: "何天阳",
          startTime: "5-15",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".substr(
              0,
              200,
            ) + "...",
          agree: 102,
          disagree: 201,
          neutral: 20,
        },
      ],
    };
  },
  methods: {
    loadMore: function() {
      this.load_for_more = true;
      setTimeout(() => {
        this.load_for_more = false;
      }, 1000);
    },
    getDetail: function(topicID) {
      console.log(topicID);
    },
    tabChange: function(id) {
      this.articleList = [];
      console.log(id);
    },
  },
};
</script>

<style lang="scss">
.content-article:hover {
  color: #1890ff;
  cursor: pointer;
}

.content-article {
  padding-top: 0;
}

@media screen and(max-width: 1170px) and(min-width: 1000px) {
  .hidden-when-thin {
    display: none;
  }
}

@media screen and(max-width: 960px) and(min-width: 800px) {
  .hidden-when-thin {
    display: none;
  }
}

@media screen and(max-width: 830px) and(min-width: 800px) {
  .thin-hidden {
    display: none;
  }
}

@media screen and(max-width: 650px) and(min-width: 500px) {
  .thin-hidden {
    display: none;
  }
}
</style>
