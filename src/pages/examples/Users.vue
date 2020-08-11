<template>
  <div class="ui main text container">
    <h1 class="ui header">Users (Demonstrates Vuex Usage For Centralized Data State Management)</h1>
    <div class="ui active inverted dimmer" v-if="isFetching">
      <div class="ui text loader">Loading</div>
    </div>
    <ul v-else>
      <li
        v-for="(user, index) in users"
        :key="index"
      >UserId: {{user.id}}, UserName: {{ user.username }}</li>
    </ul>
  </div>
</template>


<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Users',

  computed: {
    ...mapState('general', ['isFetching', 'users'])
  },
  methods: {
    ...mapActions('general', ['getUsers'])
  },
  created() {
    this.getUsers()
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css';
li {
  text-transform: capitalize;
}
</style>

