<script setup>
import { ref } from 'vue';

const count = ref(0);

function increment() {
    count.value++;
}

function decrement() {
    count.value--;
}
</script>


<template>
  <div>
    Counter: {{ counter }}
    <button @click=increment>
      +
    </button>
    <button @click=decrement>
      -
    </button>
  </div>
</template>
