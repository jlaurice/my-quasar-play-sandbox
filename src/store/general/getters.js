export function selectedUser(state) {
  return state.users.find((user) => user.login.uuid === state.selectedUserId)
}
