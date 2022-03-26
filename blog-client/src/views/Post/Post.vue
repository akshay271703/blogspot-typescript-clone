<template>
  <div id="post">
    <h2 class="title">{{ post.title }}</h2>
    <section class="tags my-5">
      <v-chip
        v-for="(tag, index) in getTags"
        :key="index"
        class="mr-3"
        color="success"
        outlined
        >{{ tag }}</v-chip
      >
    </section>

    <p v-html="post.html"></p>
  </div>
</template>

<script>
import { fetchPost } from '@/api/httpClient';
export default {
  data() {
    return {
      post: {},
    };
  },
  async created() {
    const result = await fetchPost(this.$route.params.postId);
    this.post = result.data.post;
  },
  computed: {
    getTags() {
      if (!this.post || !this.post.tags) {
        return [];
      }
      return this.post.tags.split(':');
    },
  },
};
</script>

<style scoped>
#post {
  padding: 20px;
}
</style>
