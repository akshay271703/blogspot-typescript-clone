<template>
  <div class="app">
    <header>
      <input
        type="text"
        class="article-title"
        placeholder="Article Title"
        v-model="formData.title"
      />
      <section class="article-options">
        <v-select
          :items="compute_coverName"
          label="Article Collection"
          v-model="collection"
          solo
        ></v-select>
      </section>
    </header>
    <section class="tags">
      <input
        type="text"
        class="add-tags"
        placeholder="Add tags"
        @keydown.enter="addTagHandler"
        v-model="current_tag"
      />
      <div class="tag-list">
        <v-chip
          small
          color="teal"
          dark
          class="mr-2"
          v-for="tag in formData.tags"
          :key="tag"
          @click="removeTagHandler(tag)"
          >{{ tag }}</v-chip
        >
      </div>
    </section>
    <v-textarea
      solo
      label="Summary"
      rows="2"
      class="mt-3"
      v-model="formData.summary"
    ></v-textarea>
    <vue-editor v-model="formData.html" class="mt-5"></vue-editor>
    <v-btn color="teal" dark class="mt-5" @click="addPostHandler">Submit</v-btn>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import { addNewPost } from '@/api/httpClient';
import { mapGetters } from 'vuex';
export default {
  components: {
    VueEditor,
  },

  data() {
    return {
      current_tag: '',
      collection: '',
      ui: {
        add_category: false,
      },
      formData: {
        summary: '',
        coverId: '',
        title: '',
        tags: [],
        html: '',
      },
    };
  },
  methods: {
    addTagHandler() {
      if (!this.formData.tags.includes(this.current_tag.toLowerCase().trim())) {
        this.formData.tags.push(this.current_tag.toLowerCase().trim());
      }
      this.current_tag = '';
    },
    removeTagHandler(tag) {
      this.formData.tags = this.formData.tags.filter((tagg) => tagg != tag);
    },
    async addPostHandler() {
      const foundCover = this.vuex_getCovers.filter(
        (cover) => cover.name === this.collection
      );
      this.formData.coverId = foundCover[0].coverId;
      this.formData.tags = this.formData.tags.join(':');
      try {
        await addNewPost(this.formData);
      } catch (error) {
        console.error(error.response);
      }
    },
  },
  computed: {
    ...mapGetters(['vuex_getCovers']),
    compute_coverName() {
      let coverNames = [];
      this.vuex_getCovers.forEach((cover) => {
        coverNames.push(cover.name);
      });
      return coverNames;
    },
  },
};
</script>

<style scoped>
header {
  margin: 20px 0 0 0;
  display: grid;
  grid-template-columns: 3fr 1fr;
}
.app {
  max-width: 90%;
  margin: auto;
}
input.article-title {
  font-size: 40px;
  width: 100%;
}
input.add-tags {
  font-size: 25px;
}
input:focus {
  outline: none;
  border: none;
}
</style>
