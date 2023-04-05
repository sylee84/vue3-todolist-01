<template>
  <todo-item
    v-for="item in renderTodoList"
    :key="item.id"
    :id="item.id"
    :title="item.title"
    :status="item.status"
  />
</template>
<script lang="ts">
export default {
  name: "ItemList",
};
</script>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStoreTodo } from "@/store/modules/todo";
import TodoItem from "@/components/todo-item.vue";

const route = useRoute();
const store = useStoreTodo();
let renderTodoList = ref(store.todoList);

watch(
  () => route.params.status,
  (newVal) => {
    if (!newVal) {
      renderTodoList.value = store.todoList;
    } else if (newVal === "active" || newVal === "clear") {
      renderTodoList.value = [...store.todoList].filter((item: any) => {
        return item.status === newVal;
      });
    }
  },
  { deep: true }
);
</script>
