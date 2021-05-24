<template>
  <a-carousel>
    <div v-for="imgcard in ImgList" v-bind:key="imgcard" class="outer-box" @click="getAD(imgcard.link)">
      <div
        class="img-holder"
        :style="{
          backgroundImage: 'url(' + imgcard.url + ')',
          backgroundSize: 'contain',
        }"
      ></div>
      <div
        class="img-content"
        :style="{
          backgroundImage: 'url(' + imgcard.url + ')',
        }"
      />
      <div class="inner-shadow">
        <span class="img-description">
          {{ imgcard.description }}
        </span>
      </div>
    </div>
  </a-carousel>
</template>

<script>
export default {
  name: "Scroll",
  data() {
    return {
      ImgList: [
        {
          url: "https://i.loli.net/2021/05/15/PeL9qITRQwzgYVN.png",
          description: "银杏时报-夏至",
          link: "about:blank",
        },
        {
          url: "https://i.loli.net/2021/05/15/KW38uaO6QrnvNYy.png",
          description: "银杏时报-谷雨",
          link: "about:blank",
        },
      ],
    };
  },
  methods: {
    getAD: (link) => {
      window.open(link);
    },
  },
  activated() {
    console.log("onload Card Scroll");
  },
};
</script>

<style lang="scss">
$scroll_height: 30vh;

.outer-box {
  transition: all .25s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  background-color: white;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: $scroll_height;
}

.img-holder {
  transition: all .25s ease-in-out;
  height: $scroll_height;
  margin-bottom: -$scroll_height;
  width: 100%;
  filter: blur(5px);
}

.img-content {
  transition: all .25s ease-in-out;
  box-shadow: 0 0 30px 30px rgba(0, 0, 0, .6) inset;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  z-index: 1;
  height: $scroll_height;
}

$bottom_text_holder_height: 60px;

.inner-shadow {
  transition: all .25s ease-in-out;
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: $bottom_text_holder_height;
  width: 100%;
  z-index: 2;
  margin-top: -$bottom_text_holder_height;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
}

@media screen and(max-width: 600px) {
  .inner-shadow {
    padding: 0 10px;
  }
}

.img-description {
  transition: all .25s ease-in-out;
  font-size: 20px;
  font-weight: 600;
  color: white;
}
</style>
