<template>
  <div>
    <h1>Child Part</h1>
    <p>
      data from Parent is：<span>{{ num }}</span>
    </p>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Child",
  setup() {
    let num = inject("forChild");
    return {
      num,
    };
  },
};
</script>
