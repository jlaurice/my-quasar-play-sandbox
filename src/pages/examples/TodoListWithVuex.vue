<template>
  <!-- <q-page padding> -->
  <!-- Replace the above with below whereby "pa" means padding in all directions and "md" means medium padding -->
  <!-- See Style&Identify > Spacing in Quasar Docs for additional usage examples -->
  <q-page class="q-pa-md">
    <p>Todo Page</p>
    <q-list separator bordered>
      <task v-for="(task, key) in tasks" :key="key" :task="task" :id="key"></task>
    </q-list>

    <!-- View Quasar Docs (Style&Identity > Positioning) for a style such as absolute-bottom for positioning the button at screen bottom-->
    <!-- We also add the q-mb-lg style class to give some space at the bottom so the button is not at the very bottom ("m" for margin, "b" for bottom, and "lg" for large)-->
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn @click="showAddTask = true" round color="primary" size="24px" icon="add"/>
    </div>

    <q-dialog v-model="showAddTask">
      <add-task />
    </q-dialog>
  </q-page>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    task: require('components/Tasks/Task.vue').default,
    'add-task': require('components/Tasks/Modals/AddTask.vue').default
  },
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
    //This demonstrates one of few ways to get data from the store ... the other way is to use the mapState or mapGetters helper functions
    // tasks() {
    //   return this.$store.getters['tasks/tasks']
    // }
    ...mapGetters('tasks', ['tasks'])
  },
  methods: {}
}
</script>

<style>
</style>
