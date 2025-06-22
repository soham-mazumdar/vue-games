<template>
    <Header></Header>
    <hr />
  <div class="container">
    <div class="offset-md-3 col-md-6 col">
    <BookForm
      :title="title"
      :author="author"
      :totalPages="totalPages"
      @update:title="title = $event"
      @update:author="author = $event"
      @update:totalPages="totalPages = $event"
      @add="addBook"
    />

    <BookFilter v-model="filter" />

    <ul class="list-group list-group-flush">
      <BookList
        :books="filteredBooks"
        :pageInputs="pageInputs"
        @updatePage="updateCurrentPage"
        @complete="markAsCompleted"
      />
    </ul>
  </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useCurrentUser, useCollection } from "vuefire";
import { db } from "@/firebase";
import { collection, doc, updateDoc, addDoc, serverTimestamp } from "firebase/firestore";

import BookForm from "@/features/bookworm/components/BookForm.vue";
import BookFilter from "@/features/bookworm/components/BookFilter.vue";
import BookList from "@/features/bookworm/components/BookList.vue";
import Header from '@/features/home/Header.vue';

const title = ref('')
const author = ref('')
const totalPages = ref(null)
const pageInputs = ref({})
const filter = ref('all')
const user = useCurrentUser()

const booksCollection = computed(() =>
  user.value ? collection(db, `users/${user.value.uid}/books`) : null
);

const { data: books } = useCollection(booksCollection)

const filteredBooks = computed(() => {
  if (!books.value) return []
  switch (filter.value) {
    case 'reading':
      return books.value.filter(b => b.currentPage > 0 && b.currentPage < b.totalPages)
    case 'completed':
      return books.value.filter(b => b.currentPage === b.totalPages)
    default:
      return books.value
  }
})

watch(books, (bookList) => {
  if (bookList) {
    bookList.forEach(book => {
      if (!pageInputs.value[book.id]) {
        pageInputs.value[book.id] = book.currentPage
      }
    })
  }
})

const addBook = async () => {
  if (!user.value || !title.value || !author.value || !totalPages.value) return
  const bookData = {
    title: title.value,
    author: author.value,
    totalPages: totalPages.value,
    currentPage: 0,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  }
  await addDoc(collection(db, `users/${user.value.uid}/books`), bookData)
  title.value = ''
  author.value = ''
  totalPages.value = null
}

const updateCurrentPage = async (book) => {
  const newPage = Number(pageInputs.value[book.id])
  if (isNaN(newPage) || newPage < 0 || newPage > book.totalPages) return

  const bookRef = doc(db, `users/${user.value.uid}/books/${book.id}`)
  await updateDoc(bookRef, {
    currentPage: newPage,
    updatedAt: serverTimestamp()
  })
}

const markAsCompleted = async (book) => {
  if (!user.value) return
  const bookRef = doc(db, `users/${user.value.uid}/books/${book.id}`)
  await updateDoc(bookRef, {
    currentPage: book.totalPages,
    updatedAt: serverTimestamp()
  })
  pageInputs.value[book.id] = book.totalPages
}
</script>
