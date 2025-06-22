<template>
  <div class="btn-group my-3" role="group">
    <input
      type="radio"
      class="btn-check"
      id="filter-all"
      value="all"
      :checked="modelValue === 'all'"
      @change="$emit('update:modelValue', 'all')"
    />
    <label class="btn btn-outline-primary" for="filter-all">All</label>

    <input
      type="radio"
      class="btn-check"
      id="filter-reading"
      value="reading"
      :checked="modelValue === 'reading'"
      @change="$emit('update:modelValue', 'reading')"
    />
    <label class="btn btn-outline-primary" for="filter-reading">Reading</label>

    <input
      type="radio"
      class="btn-check"
      id="filter-completed"
      value="completed"
      :checked="modelValue === 'completed'"
      @change="$emit('update:modelValue', 'completed')"
    />
    <label class="btn btn-outline-primary" for="filter-completed">Completed</label>
  </div>
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
