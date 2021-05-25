<template>
  <div>
    <Header />
    <div class="content">
      <Scroll class="scroll card" style="margin: 0 0 20px 0" />
      <div class="info-area">
        <SubjectList class="card" />
        <div class="tool-box">
          <ToolBox class="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Scroll from "@/components/Home/Scroll";
import SubjectList from "@/components/Home/SubjectList";
import ToolBox from "@/components/Home/ToolBox";

export default {
  name: "Home",
  components: {
    Header,
    Scroll,
    SubjectList,
    ToolBox,
  },
};
</script>

<style lang="scss">
.content {
  display: flex;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

$view_width: 75%;

.scroll {
  width: $view_width;
  transition: all 0.25s ease-in-out;
}

.info-area {
  transition: all 0.25s ease-in-out;
  width: $view_width;
  display: flex;
  justify-content: space-between;
  align-items: start;
}

@media screen and(max-width: 1000px) {
  .scroll {
    width: 95vw;
  }
  .info-area {
    width: 95vw;
  }
}

.tool-box {
  width: 30%;
}

@media screen and(max-width: 800px) {
  .tool-box {
    display: none;
  }
}

.card {
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
}

@media screen and(max-width: 600px) {
  .content {
    padding: 10px 10px;
  }
  .scroll {
    width: calc(100vw - 20px);
  }
  .info-area {
    width: calc(100vw - 20px);
  }
}
</style>
