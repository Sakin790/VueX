<template>
  <div>
    <input v-model="bookName" type="text">
    <button @click="addBook">Add</button>
    <ul>
      <li v-for="(book, index) in bookList" :key="index">
        {{ book }}
        <button @click="deleteBook(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>


<script>
export default {

  data() {
    return {
      bookName: ""
    }
  },

  computed: {
    bookList() {
      return this.$store.state.bookList
    }
  }
  ,

  methods: {
    addBook() {
      this.$store.dispatch("Add_Book_Action", this.bookName)
    },
    deleteBook(index) {
      this.$store.dispatch("delete_Book", index)
    }
  },

}
</script>