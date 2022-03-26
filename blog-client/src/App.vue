<template>
  <v-app>
    <Sidebar />
    <Loading v-if="vuex_GET_httpPending" />
    <v-main class="view-constraint">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from '@/components/UI/Sidebar.vue';
import Loading from '@/components/UI/Loading.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  components: { Sidebar, Loading },
  created() {
    this.$store.dispatch('vuex_getCover');
  },
  computed: {
    ...mapGetters(['vuex_GET_httpPending']),
  },
};
</script>

<style>
.view-constraint {
  margin-left: 80px;
  max-width: calc(100vw - 80px);
}
</style>
