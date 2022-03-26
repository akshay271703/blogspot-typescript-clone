<template>
  <div id="coverItems">
    <section class="cover-items">
      <h4 class="text-center display-1 mb-5">Content List</h4>
      <section
        class="cover-item"
        v-for="item in coverItems"
        :key="item.postId"
        @click="navigate(item.postId)"
      >
        <section>
          <h4 class="post-title">{{ item.title }}</h4>
          <p class="post-summary">
            {{ item.summary }}
          </p>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import { getCoverListItems } from '@/api/httpClient';
export default {
  async created() {
    const coverId = this.$route.params.coverId;
    const result = await getCoverListItems(coverId);
    if (result.success) {
      this.coverItems = result.data.results;
    }
  },
  data() {
    return {
      coverItems: [],
    };
  },
  methods: {
    navigate(postId) {
      this.$router.push(`/post/${postId}`);
    },
  },
};
</script>

<style scoped>
.cover-items {
  padding: 50px;
  max-width: 900px;
}
.cover-item {
  display: flex;
  align-items: flex-start;
  padding: 20px 10px;
  border-bottom: 1px solid #bbb;
  cursor: pointer;
}
.cover-item:hover {
  background: #f2f2f2;
}
p {
  margin-bottom: 0;
}
.post-title {
  margin-left: 20px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 300;
}
.card-image {
  width: 125px;
  height: 125px;
  object-fit: cover;
}
.post-summary {
  margin-left: 20px;
}
</style>
