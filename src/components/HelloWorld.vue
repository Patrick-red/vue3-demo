<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
    <router-link to="/Compostion">jump to Compostion</router-link>
    <Child></Child>
  </div>
</template>

<script>
import { provide, reactive, ref, watch } from "vue";
import Child from "./Child.vue";
export default {
  name: "Index",
  setup() {
    let count = ref(0);
    provide("forChild", count);
    let msg = "Hello World!";
    watch(
      () => count.value,
      (count, prevCount) => {
        console.log(prevCount, "————>", count);
      }
    );
    return {
      count,
      msg,
    };
  },
  components: {
    Child,
  },
};
</script>
