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
  commit('setIsFetching', true)

  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((resp) => {
      // Using timeout to simulate network latency and demonstrate loading state ...
      setTimeout(() => {
        commit('setIsFetching', false)
        commit('setUsers', { users: resp.data })
      }, 2500)
    })
    .catch((error) => {
      commit('setIsFetching', false)
      console.error(error)
    })
}
