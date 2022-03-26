<template>
  <Backdrop @action="handleAction" @close="close" yes="Add cover" no="Cancel">
    <h2 class="display-1 mb-5">Add New Cover</h2>
    <v-text-field
      label="Cover Name"
      v-model="formData.name"
      solo
    ></v-text-field>
    <v-text-field
      label="Cover Image URL"
      v-model="formData.image"
      solo
    ></v-text-field>
    <v-textarea
      solo
      label="Description"
      v-model="formData.description"
      rows="2"
    ></v-textarea>
  </Backdrop>
</template>

<script>
import Backdrop from '@/components/UI/Backdrop.vue';
import { addCoverList } from '@/api/httpClient';
export default {
  components: { Backdrop },
  data: () => {
    return {
      formData: {
        name: '',
        image: '',
        description: '',
      },
    };
  },
  methods: {
    async handleAction(val) {
      if (val) {
        try {
          await addCoverList(this.formData);
          this.$emit('close');
        } catch (error) {
          console.log(error.response.data);
        }
      }
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped></style>
