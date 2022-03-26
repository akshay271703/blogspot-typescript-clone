<template>
  <div id="covers">
    <h1 class="display-1 my-5 ml-5">Resources List</h1>
    <div class="covers">
      <section
        class="cover"
        v-for="cover in vuex_getCovers"
        :key="cover.coverId"
        @click="redirectToCoverItems(cover.coverId)"
      >
        <img :src="cover.image" :alt="cover.name" class="post-cover mr-5" />
        <div class="post-content">
          <h4 class="cover-title">{{ cover.name }}</h4>
          <p v-if="cover.description">
            {{ cover.description }}
          </p>
          <p v-else>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            labore aliquam enim a cumque rerum veritatis officia earum inventore
            esse ipsum, neque nemo exercitationem. Hic!
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['vuex_getCovers']),
  },
  methods: {
    redirectToCoverItems(coverId) {
      this.$router.push(`/covers/${coverId}`);
    },
  },
};
</script>

<style scoped>
.covers {
  max-width: 900px;
}
.cover {
  padding: 20px;
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid #bbb;
}
.cover:hover {
  background: #f5f5f5;
}
.cover-title {
  font-size: 24px;
  font-weight: 400;
}
.cover p {
  text-align: justify;
  font-weight: 300;
}
.post-content {
  margin-right: 20px;
}
.post-cover {
  /* max-height: 100px; */
  max-width: 100px;
  height: auto;
}
</style>
