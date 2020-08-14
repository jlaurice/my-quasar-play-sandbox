const state = {
  tasks: [
    {
      id: 1,
      name: 'Go to shop',
      completed: false,
      dueDate: '2020/09/20',
      dueTime: '18:30',
      someData: ''
    },
    {
      id: 2,
      name: 'Get bananas',
      completed: false,
      dueDate: '2020/09/21',
      dueTime: '14:00',
      someData: ''
    },
    {
      id: 3,
      name: 'Get apples',
      completed: false,
      dueDate: '2020/09/22',
      dueTime: '16:00',
      someData: ''
    }
  ]
}

// These methods cannot be asynchronous (Example: cannot reach out to a server and waits for some data and then manipulates the state)
// Can only create methods that instantly and directly manipulate the state
const mutations = {}

// These methods can be asynchronous
// These methods indirectly manipulates the state by committing mutations
const actions = {}

// These methods get the data from the state
// You can also derive data in your getters (so that data is derived before it is given to your components)
const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  //Setting namespaced to true allows us to have multiple store modules within our app ...
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
