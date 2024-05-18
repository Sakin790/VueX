<script>
import Todo from './components/Todo.vue';

export default {

  data() {
    return {
      bookName: ""
    }
  },
  components: {
    Todo
  },

  computed: {
    books() {
      return this.$store.state.bookList
    },
  },

  methods: {
    addBook() {
      this.$store.dispatch("addBook", this.bookName)

    },
    deleteTodo(index) {
      console.log(index);
      this.$store.dispatch("deleteTodo", index)
    }
  }

}

</script>


<template>
  <div>

    <input v-model="bookName" type="text">
    <button @click="addBook">Add</button>
    <ul>
      <li v-for=" (book, index) in books" :key="index">{{ book }}
        <button @click="deleteTodo(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>
