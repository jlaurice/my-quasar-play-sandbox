import axios from 'axios'

export function getUsersOLD({ commit }) {
  commit('setIsFetching', true)

  setTimeout(() => {
    commit('setIsFetching', false)
  }, 4000)

  setTimeout(() => {
    commit('setUsers', {
      users: [
        { id: 1, username: 'Bret' },
        { id: 2, username: 'Antonette' }
      ]
    })
  }, 5000)
}

export function getUsers({ commit }) {
  // Here, this getUsers action (ie. the containing function) commits a mutation to set the isFetching state to true
  commit('setIsFetching', true)

  // And here, we make an HTTP request to an API for a list of users ...
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((resp) => {
      // Using timeout to simulate network latency and demonstrate loading state ...
      setTimeout(() => {
        commit('setIsFetching', false)
        // Here, we commit the setUsers mutation which in turn sets the "users" state variable with the returned users collection
        commit('setUsers', { users: resp.data })
      }, 2500)
    })
    .catch((error) => {
      commit('setIsFetching', false)
      console.error(error)
    })
}
