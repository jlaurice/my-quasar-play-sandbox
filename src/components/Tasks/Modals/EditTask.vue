<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
    <form @submit.prevent="submitForm">
      <q-card-section>
        <modal-task-name :name.sync="taskToSubmit.name" ref="modalTaskName"/>
        <modal-due-date :dueDate.sync="taskToSubmit.dueDate" @clear="taskToSubmit.dueTime = ''"/>
        <modal-due-time v-if="taskToSubmit.dueDate" :dueTime.sync="taskToSubmit.dueTime"/>
      </q-card-section>

      <modal-buttons></modal-buttons>

      <pre>{{ taskToSubmit }}</pre>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['task', 'id'],
  components: {
    'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue')
      .default,
    'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue')
      .default,
    'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue')
      .default,
    'modal-due-time': require('components/Tasks/Modals/Shared/ModalDueTime.vue')
      .default,
    'modal-buttons': require('components/Tasks/Modals/Shared/ModalButtons.vue')
      .default
  },
  data() {
    return {
      taskToSubmit: {}
    }
  },
  methods: {
    // First parameter specifics that we are mapping actions from the "tasks" state store module ...
    ...mapActions('tasks', ['updateTask']),

    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      //console.log(this.$refs.modalTaskName.$refs.name)
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask() {
      console.log('submitTask')
      // Send the task to our store to be used to update the one already in the state
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })

      //Emit a custom event that we are listening to in the parent page ...
      this.$emit('close')
    }
  },
  mounted() {
    // This lifecycle hook method gets invoked once the markup for your component has been committed to the UI/view
    // This one you will use most often when you want some init code to run when your component is first loaded
    console.log('Lifecycle Hook - mounted() ')
    this.taskToSubmit = Object.assign({}, this.task)
  }
}
</script>

