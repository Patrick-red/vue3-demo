<template>
  <div>
    <h1>This is compostion route</h1>
    <p>
      <button @click="increment">
        Count is: {{ state.count }}, double is: {{ state.double }}
      </button>
    </p>
    <router-link to="/Index">jump to Index</router-link>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";

export default {
  name: "Compostion",
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });
    function increment() {
      state.count++;
    }
    onMounted(() => {
      console.log("Compostion is mounted");
    });
    return {
      state,
      increment,
    };
  },
};
</script>
