<script>
import { computed } from 'vue';
export default {

  computed: {
    Value() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      return this.$store.dispatch("increment")
    },
    decrement() {

    },
    reset() {

    }
  }
}


</script>



<template>
  <div>
    <h1>Counter : {{ Value }}</h1>
    <button @click="increment">Increment</button>
    <button>Decrement</button>
    <button>Reset</button>
  </div>
</template>