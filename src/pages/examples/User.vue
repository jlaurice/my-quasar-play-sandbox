<template>
  <div class="ui main text container" v-if="selectedUser">
    <div class="ui items">
      <div class="item">
        <div class="image">
          <img :src="selectedUser.picture.large">
        </div>
        <div class="content">
          <a class="header">{{ fullName }}</a>
          <div class="meta">
            <span>{{ selectedUser.email }}</span>
          </div>
          <div class="description">
            <p>
              {{ selectedUser.location.street }}, {{ selectedUser.location.city }},
              {{ selectedUser.location.state }}, {{ selectedUser.location.postcode }}
            </p>
          </div>
          <div class="extra">
            {{ selectedUser.phone }}
            <br>
            {{ selectedUser.cell }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'User',

  computed: {
    ...mapGetters('general', ['selectedUser']),
    fullName() {
      return `${this.selectedUser.name.first} ${this.selectedUser.name.last}`
    }
  },
  methods: {
    ...mapMutations('general', ['setSelectedUserId'])
  },
  created() {
    const userId = this.$route.params.id
    this.setSelectedUserId(userId)
  }
}
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css';

.main.container {
  margin-top: 7em;
}

a.header,
p {
  text-transform: capitalize;
}
</style>

