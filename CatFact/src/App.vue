<script>
import { mapState, mapActions } from 'vuex';

export default {



  computed: {
    ...mapState({
      data: state => state.api.data, // Map state properties
      loading: state => state.api.loading || "data",
      error: state => state.api.error,
    }),
  },
  methods: {
    ...mapActions('api', ['fetchData']), // Map actions
  },
};

</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else>
    <p>{{ data.fact }}</p>
  </div>
  <button @click="fetchData">Fetch Data</button>
</template>
