<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error.message }}</div>
    <ul v-else>
      <li v-for="post in posts" :key="post.id"> {{ post.id }}-{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Posts',
  computed: {
    ...mapState(['posts', 'loading', 'error'])
  },
  methods: {
    ...mapActions(['fetchPosts'])
  },
  created() {
    this.fetchPosts();
  }
};
</script>
