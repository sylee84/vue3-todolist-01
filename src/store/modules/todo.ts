import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { TodoItem } from "../index.interface";

export const useStoreTodo = defineStore("todo", {
  state: () => ({
    todoList: useStorage("todoList", [] as TodoItem[]),
  }),
  getters: {},
  actions: {
    addTodoItem(item: TodoItem) {
      this.todoList.push(item);
    },
    removeTodoItem(id: number) {
      let index = null;
      for (let i = 0; this.todoList.length > i; i++) {
        const item = this.todoList[i];
        if (item.id === id) {
          console.log(item);
          index = i;
          break;
        }
      }

      if (index !== null) {
        this.todoList.splice(index, 1);
      }
    },
    changedStatus({
      id,
      status,
    }: {
      id: TodoItem["id"];
      status: TodoItem["status"];
    }) {
      this.todoList[id].status = status;
    },
  },
});
