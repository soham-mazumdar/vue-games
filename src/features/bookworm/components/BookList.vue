<template>
  <li class="list-group-item">
    <div class="row fw-bold">
      <div class="col-5">Book</div>
      <div class="col-3">Progress</div>
      <div class="col-4">Action</div>
    </div>
  </li>
  <li v-for="book in books" :key="book.id" class="list-group-item">
    <div class="row">
      <div class="col-5">
        {{ book.title }}<br />
        {{ book.author }}
      </div>
      <div class="col-3">
        <div class="progress" style="height: 10px">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            :style="{ width: `${(book.currentPage / book.totalPages) * 100}%` }"
          ></div>
        </div>
        <small>{{ ((book.currentPage / book.totalPages) * 100).toFixed(0) }}%</small>
      </div>
      <div class="col-4">
        <div class="input-group">
          <input
            type="number"
            class="form-control"
            :max="book.totalPages"
            :min="0"
            v-model.number="pageInputs[book.id]"
          />
          <span class="input-group-text text-bg-primary" @click="$emit('updatePage', book)">
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
          <span class="input-group-text text-bg-success" @click="$emit('complete', book)">
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
</template>

<script setup>
defineProps(['books', 'pageInputs'])
defineEmits(['updatePage', 'complete'])
</script>
