<template>
  <a-layout style="background-color: #f5f5f5">
    <Header />
    <div class="content">
      <Scroll
        class="scroll"
        style="margin: 0 0 20px 0; box-shadow: 0 1px 3px rgba(18 18 18 0.1)"
      />
      <div class="info-area">
        <SubjectList />
        <div class="tool-box">

        </div>
      </div>
    </div>
  </a-layout>
</template>

<script>
import Header from "@/components/Home/Header";
import Scroll from "@/components/Home/Scroll";
import SubjectList from "@/components/Home/SubjectList";

export default {
  name: "Home",
  components: {
    Header,
    Scroll,
    SubjectList,
  },
};
</script>
<style lang="scss">
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 10%;
}

.scroll {
  width: 90%;
}

.info-area {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
