<template>
  <div>
    <h1 class="ui center aligned header">Staff Directory</h1>
    <!-- <staff-directory :persons="persons"/> -->
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
  },
  data() {
    return {
      persons: [
        {
          name: {
            first: 'john',
            last: 'smith'
          },
          firstName: 'john',
          lastName: 'smith',
          photoUrl: 'https://randomuser.me/api/portraits/thumb/women/9.jpg',
          email: 'john.smith@example.com',
          phone: '(651)-507-3705',
          department: 'Engineering'
        },
        {
          name: {
            first: 'robert',
            last: 'murphy'
          },
          firstName: 'robert',
          lastName: 'murphy',
          photoUrl: 'https://randomuser.me/api/portraits/thumb/women/79.jpg',
          email: 'robert.murphy@example.com',
          phone: '(925)-667-7604',
          department: 'Management'
        }
      ]
    }
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css';
</style>