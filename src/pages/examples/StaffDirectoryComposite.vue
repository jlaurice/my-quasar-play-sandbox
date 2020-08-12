<template>
  <div>
    <h1 class="ui center aligned header">Staff Directory</h1>
    <staff-directory/>
  </div>
</template>

<script>
// This is the long hand way which has been commented in favor of the short-hand way which uses require()
//import StaffDirectory from 'components/StaffDirectory.vue'

export default {
  components: {
    //'staff-directory': StaffDirectory
    'staff-directory': require('components/StaffDirectory.vue').default
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css';
</style>