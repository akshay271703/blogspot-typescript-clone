<template>
  <div class="backdrop">
    <div class="content elevation-5" :class="theme">
      <span class="close" @click="triggerEmit('close')">
        <v-icon color="error">mdi-close-thick</v-icon></span
      >
      <slot></slot>
      <footer class="text-end">
        <v-btn color="success" outlined @click="triggerEmit(false)">{{
          no
        }}</v-btn>
        <v-btn color="success" class="ml-8" @click="triggerEmit(true)">{{
          yes
        }}</v-btn>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ['theme', 'yes', 'no'],
  methods: {
    triggerEmit(val) {
      if (val === 'close') {
        this.$emit('close');
        return;
      }
      this.$emit('action', val);
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
}
.content {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vh;
  z-index: 3;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
span.close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
.content.light {
  background: #fff;
}
.content.dark {
  background: #222;
}
</style>
