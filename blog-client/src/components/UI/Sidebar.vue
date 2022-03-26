<template>
  <div id="sidebar" class="flex-vertical">
    <div class="brand"></div>
    <div class="icons flex-vertical">
      <v-icon color="#999" size="30px" class="hoverable" @click="redirect('/')"
        >mdi-home-outline</v-icon
      >
      <v-icon class="my-5 hoverable" color="#999" size="30px"
        >mdi-bell-outline</v-icon
      >
      <v-icon color="#999" size="30px" class="hoverable"
        >mdi-heart-outline</v-icon
      >
    </div>
    <div class="profile flex-vertical">
      <v-icon color="#999" size="30px" class="hoverable"
        >mdi-account-outline</v-icon
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirect(path) {
      if (window.location.pathname === path) {
        return;
      }
      this.$router.push(`${path || ''}`);
    },
  },
};
</script>

<style scoped>
#sidebar {
  width: 80px;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid #ccc;
}
.flex-vertical {
  display: flex;
  flex-direction: column;
}
.brand {
  padding: 30px 0;
}
.profile {
  padding: 30px 0;
  justify-content: flex-end;
}
.hoverable {
  cursor: pointer;
}
</style>
