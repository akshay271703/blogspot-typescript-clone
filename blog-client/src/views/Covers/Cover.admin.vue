<template>
  <div id="admin-cover" class="pa-7">
    <AddCover v-if="show_addCover" @close="refreshCovers" />
    <header>
      <h1 class="display-1 text-uppercase">Covers</h1>
      <v-btn color="success" outlined @click="show_addCover = true"
        >Add Cover</v-btn
      >
    </header>
    <div class="covers">
      <section
        class="cover elevation-4"
        v-for="cover in vuex_getCovers"
        :key="cover.coverId"
      >
        <p>{{ cover.name }}</p>
        <div class="d-flex">
          <v-icon>mdi-pencil</v-icon>
          <v-icon class="ml-5">mdi-delete</v-icon>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AddCover from '@/components/Covers/AddCover.vue';
import { mapGetters } from 'vuex';
export default {
  components: { AddCover },
  data() {
    return {
      show_addCover: false,
    };
  },
  methods: {
    refreshCovers() {
      this.show_addCover = false;
      this.$store.dispatch('vuex_getCovers');
    },
  },
  computed: {
    ...mapGetters(['vuex_getCovers']),
  },
};
</script>

<style scoped>
p {
  margin: 0;
}
.cover {
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cover:hover {
  background: #eee;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
