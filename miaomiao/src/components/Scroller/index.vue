<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroller",
  props: {
    handleToScroll: {
      type: Function,
      default: function () { }
    },
    handleToTouchEnd: {
      type: Function,
      default: function () { }
    }
  },
  mounted() {
    var scroll222 = new BScroll(this.$refs.wrapper, {
      tap: true,
      // click: true,
      probeType: 1
    });

    this.scroll = scroll222;

    scroll222.on("scroll", pos => {
      this.handleToScroll(pos);
    });

    scroll222.on("touchEnd", pos => {
      this.handleToTouchEnd(pos);
    });
  },
  methods: {
    toScrollTop(y) {
      this.scroll.scrollTo(0, y);
    }
  }
};
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
