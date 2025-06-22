<template>
  <div class="container">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <div class="input-group mb-3">
          <input
            v-model="title"
            type="text"
            class="form-control"
            placeholder="Book Name"
          />
          <input
            v-model="author"
            type="text"
            class="form-control"
            placeholder="Author"
          />
          <input
            v-model.number="totalPages"
            type="text"
            class="form-control"
            placeholder="Total Pages"
          />

          <span class="input-group-text text-bg-success" v-on:click="addBook">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-circle"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
              />
              <path
                d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
              />
            </svg>
          </span>
        </div>
      </li>
      <div class="btn-group my-3" role="group">
  <input
    type="radio"
    class="btn-check"
    name="statusFilter"
    id="filter-all"
    autocomplete="off"
    value="all"
    v-model="filter"
    checked
  />
  <label class="btn btn-outline-primary" for="filter-all">All</label>

  <input
    type="radio"
    class="btn-check"
    name="statusFilter"
    id="filter-reading"
    autocomplete="off"
    value="reading"
    v-model="filter"
  />
  <label class="btn btn-outline-primary" for="filter-reading">Reading</label>

  <input
    type="radio"
    class="btn-check"
    name="statusFilter"
    id="filter-completed"
    autocomplete="off"
    value="completed"
    v-model="filter"
  />
  <label class="btn btn-outline-primary" for="filter-completed">Completed</label>
</div>
      <li class="list-group-item">
        <div class="row">
          <div class="col-6">Book</div>
          <div class="col-3">Progress</div>
          <div class="col-3">Action</div>
        </div>
      </li>
      <li v-for="book in filteredBooks" :key="book.id" class="list-group-item">
        <div class="row">
          <div class="col-5">
            {{ book.title }} <br />
            {{ book.author }}
          </div>
          <div class="col-4">
            <div class="mt-2">
              <div class="progress" style="height: 10px">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  :style="{
                    width: `${(book.currentPage / book.totalPages) * 100}%`,
                  }"
                  :aria-valuenow="book.currentPage"
                  :aria-valuemin="0"
                  :aria-valuemax="book.totalPages"
                ></div>
              </div>
              <small
                >{{
                  ((book.currentPage / book.totalPages) * 100).toFixed(0)
                }}%</small
              >
            </div>
          </div>
          <div class="col-3">
            <div class="input-group mb-3">
              <input
  type="number"
  class="form-control"
  :max="book.totalPages"
  :min="0"
  v-model.number="pageInputs[book.id]"
/>

<span
  class="input-group-text text-bg-primary"
  @click="updateCurrentPage(book)"
>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-save"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"
                  />
                </svg>
              </span>
              <span
                class="input-group-text text-bg-success"
                  @click="markAsCompleted(book)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                  />
                  <path
                    d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <!-- <div class="row">
            <div class="col-8">
                <BookForm/>
            </div>
            <div class="col">
                <BookList/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <BookTimeline/>
            </div>
            <div class="col">
                <BookList/>
            </div>
        </div> -->
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useCurrentUser, useCollection } from "vuefire";
import { db } from "@/firebase";
import {
  collection,
  doc,
  updateDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import BookList from "@/features/bookworm/components/BookList.vue";
import BookForm from "@/features/bookworm/components/BookForm.vue";

const title = ref('')
const author = ref('')
const pageInputs = ref({})
const totalPages = ref(null)
const user = useCurrentUser();

const booksCollection = computed(() =>
  user.value ? collection(db, `users/${user.value.uid}/books`) : null
);

const { data: books } = useCollection(booksCollection);

watch(books, (bookList) => {
  if (bookList) {
    bookList.forEach(book => {
      if (!pageInputs.value[book.id]) {
        pageInputs.value[book.id] = book.currentPage
      }
    })
  }
})

const markAsCompleted = async (book) => {
  if (!user.value) return
  const uid = user.value.uid
  const bookRef = doc(db, `users/${uid}/books/${book.id}`)
  await updateDoc(bookRef, {
    currentPage: book.totalPages,
    updatedAt: serverTimestamp()
  })
  pageInputs.value[book.id] = book.totalPages
}

const filter = ref('all')

const filteredBooks = computed(() => {
  if (!books.value) return []
  switch (filter.value) {
    case 'reading':
      return books.value.filter(
        b => b.currentPage > 0 && b.currentPage < b.totalPages
      )
    case 'completed':
      return books.value.filter(b => b.currentPage === b.totalPages)
    default:
      return books.value
  }
})

const addBook = async () => {
  if (!user.value || !title.value || !author.value || !totalPages.value) return;

  const bookData = {
    title: title.value,
    author: author.value,
    totalPages: totalPages.value,
    currentPage: 0,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };

  await addDoc(collection(db, `users/${user.value.uid}/books`), bookData);

  title.value = '';
  author.value = '';
  totalPages.value = null;
};

const updateCurrentPage = async (book) => {
  const newPage = Number(pageInputs.value[book.id])
  if (isNaN(newPage) || newPage < 0 || newPage > book.totalPages) return;

  const bookRef = doc(db, `users/${user.value.uid}/books/${book.id}`);
  await updateDoc(bookRef, {
    currentPage: newPage,
    updatedAt: serverTimestamp()
  });
}
</script>
