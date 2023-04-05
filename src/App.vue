<template>
  <div class="container">
    <div class="row">
      <base-header />
    </div>
    <div class="row">
      <todo-input />
    </div>
    <div class="row">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts" setup>
import BaseHeader from "@/components/header.vue";
import TodoInput from "@/components/todo-input.vue";
</script>
