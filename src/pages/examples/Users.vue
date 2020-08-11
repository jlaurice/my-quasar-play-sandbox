<template>
  <div class="ui main text container">
    <h1 class="ui header">Users (Demonstrates Vuex Usage For Centralized Data State Management)</h1>
    <div class="ui active inverted dimmer" v-if="isFetching">
      <div class="ui text loader">Loading</div>
    </div>
    <ul v-else>
      <li v-for="(user, index) in users" :key="index">
        <router-link
          :to="{ name: 'user', params: { id: user.login.uuid }}"
        >{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</router-link>
      </li>
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
    // This mapActions helper function essentially creates for us a getUsers function that is
    // mapped to the getUsers action from our store.
    // This is achieved because the mapped function that is returned from the helper function
    // contains code that dispatches to the actual action of the store.
    // It essentially contains a call to this.$store.dispatch("getUsers")
    ...mapActions('general', ['getUsers'])
  },
  created() {
    // This lifecycle hook method gets invoked once the component has virtually been created (ie. created in memory, not yet committed to the UI/view)
    console.log('Lifecycle Hook - created() ')
    this.getUsers()
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css';

.main.container {
  margin-top: 7em;
}

li {
  text-transform: capitalize;
}
</style>

