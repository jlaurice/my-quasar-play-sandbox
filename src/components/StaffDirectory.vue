<template>
  <div class="ui container">
    <input v-model="filterBy" placeholder="Filter By Last Name">
    <table class="ui celled table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th @click="sortBy = 'firstName'">First Name</th>
          <th @click="sortBy = 'lastName'">Last Name</th>
          <th @click="sortBy = 'email'">Email</th>
          <th @click="sortBy = 'phone'">Phone</th>
          <th @click="sortBy = 'department'">Department</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in sortedEmployees" :key="index">
          <td>
            <img :src="employee.photoUrl" class="ui mini rounded image">
          </td>
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.phone }}</td>
          <td>{{ employee.department }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="6">{{sortedEmployees.length}} employees</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
const DEPARTMENTS = [
  'Engineering',
  'Management',
  'Support',
  'Marketing',
  'Finance'
]
export default {
  name: 'StaffDirectory',
  props: {
    persons: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      filterBy: '',
      sortBy: 'department',
      employees: this.persons || []
    }
  },
  computed: {
    sortedEmployees() {
      //return this.employees
      return this.employees
        .filter(employee => employee.lastName.includes(this.filterBy))
        .sort((a, b) => a[this.sortBy].localeCompare(b[this.sortBy]))
    }
  },
  methods: {
    getUsers() {
      // this.$axios
      //   .get('https://randomuser.me/api/?nat=us&results=5')
      //   .then(resp => {
      //     this.employees = resp.data.results
      //   })
      //   .catch(error => {
      //     console.error(error)
      //   })
      fetch('https://randomuser.me/api/?nat=us&results=5')
        .then(response => response.json())
        .then(data => {
          //(this.employees = data.results)
          this.employees = data.results.map((person, idx, personsArr) => {
            return {
              ...person,
              firstName: person.name.first,
              lastName: person.name.last,
              photoUrl: person.picture.thumbnail,
              department: DEPARTMENTS[idx % personsArr.length]
            }
          })
        })
    }
  },
  created() {
    // This lifecycle hook method gets invoked once the component has virtually been created (ie. created in memory, not yet committed to the UI/view)
    console.log('Lifecycle Hook - created() ')
    // If persons collection was not passed into the component then make remote api call
    if (this.employees.length === 0) {
      this.getUsers()
    }
  }
}
</script>

<style>
h1.ui.center.header {
  margin-top: 3em;
}

.ui.table th:not(:first-child):hover {
  cursor: pointer;
}

input {
  padding: 3px;
}
</style>