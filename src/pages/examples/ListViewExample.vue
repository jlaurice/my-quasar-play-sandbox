<template>
  <q-page padding>
    <!-- Demonstrates passing of values from parent to child component with both props and slot concepts-->
    <!-- The slot is that value which exists between the open and close component tag-->
    <ul>
      <task
        v-for="(task, index) in tasks"
        :key="task.id"
        :task="task"
        :index="index"
        @delete-task="onDeleteTask"
      >{{ task.someData }}</task>
    </ul>
  </q-page>
</template>


<script>
// This is the long hand way which has been commented in favor of the short-hand way which uses require()
//import Task from 'components/Task.vue'
export default {
  components: {
    //'task': Task
    task: require('components/Task.vue').default
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: 'Go to shop',
          dueDate: '2020/09/20',
          dueTime: '18:30',
          someData:
            'This is some sample data to be passed as slot from parent to child component'
        },
        {
          id: 2,
          name: 'Get bananas',
          dueDate: '2020/09/21',
          dueTime: '14:00',
          someData:
            'This is some sample data to be passed as slot from parent to child component'
        },
        {
          id: 3,
          name: 'Get apples',
          dueDate: '2020/09/22',
          dueTime: '16:00',
          someData:
            'This is some sample data to be passed as slot from parent to child component'
        }
      ]
    }
  },
  methods: {
    onDeleteTask(index) {
      this.tasks.splice(index, 1)
    }
  }
}
</script>

<style>
</style>
