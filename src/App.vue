<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* These are our own custom defined styles that we would want to be accessible all throughout our app */
.text-strikethrough {
  text-decoration: line-through;
}
</style>
