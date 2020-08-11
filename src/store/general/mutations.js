export function setUsers(state, { users }) {
  state.users = users
}

export function setIsFetching(state, bool) {
  state.isFetching = bool
}

export function setSelectedUserId(state, id) {
  state.selectedUserId = id
}
