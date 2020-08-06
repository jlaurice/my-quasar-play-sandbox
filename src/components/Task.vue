<template>
  <li>
    <div>{{ task.name }} {{ index }}</div>
    <div>
      <slot></slot>
    </div>
    <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
    
    <button @click="$emit('delete-task', index)">X</button>
  </li>
</template>


<script>
export default {
  props: ['task', 'index']
}
</script>

<style>
</style>
