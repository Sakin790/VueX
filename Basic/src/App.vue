<script>
  export default {
    data() {
      return {
        count: this.$store.state.count,
      };
    },

    methods: {
      increment() {
        this.$store.commit("increment");
        console.log(this.$store.state.count);
      },
    },
  };
</script>

<template>
  <div>
    <h1>VueX : {{ this.$store.state.count }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>
