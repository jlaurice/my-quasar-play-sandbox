<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    v-ripple
  >
    <q-item-section side top>
      <!-- This was the way prior to introducing Vuex ... -->
      <!-- <q-checkbox v-model="task.completed"/> -->
      <!-- Notice that we replaced v-model with :value and introduced this css class to prevent unwanted console errors when checkbox is toggled-->
      <!-- <q-checkbox :value="task.completed" class="no-pointer-events"/> -->
      <q-checkbox v-model="task.completed"/>
    </q-item-section>

    <q-item-section>
      <!-- Here we conditionally add the specified class only when the task is completed -->
      <!-- Because this is our own style class that we might want to use throughout the app a good place to define it is in the root vue component which is App.vue-->
      <q-item-label :class="{ 'text-strikethrough' : task.completed }">{{ task.name }}</q-item-label>
      <!-- <q-item-label caption>Notify me about updates to apps or games that I downloaded</q-item-label> -->
    </q-item-section>

    <q-item-section side>
      <!-- Here we will lay out these elements into a row and then use a column to stack them together - See Quasar Docs for flexbox documentation for usage examples -->
      <div class="row">
        <div class="column justify-center">
          <!-- Here we add a class to give space between the calendar and the date.  The "mr" means margin right and "xs" means extra small -->
          <q-icon name="event" size="18px" class="q-mr-xs"/>
        </div>
        <div class="column">
          <!-- Here we add a class to move the date and time all the way to the right (aka. end) -->
          <q-item-label class="row justify-end" caption>{{ task.dueDate }}</q-item-label>
          <q-item-label class="row justify-end" caption>
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <!-- Note that the addition of the stop modifier will prevent the click event from bubbling to parent elements above it one of which toggles completion checkmark-->
      <q-btn @click.stop="promptToDelete(id)" flat round dense color="red" icon="delete"/>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['task', 'id'],
  methods: {
    // Note that we map actions within the methods property (and not the computed property, like we do for getters and state - see parent component for example)
    // The result of this call is that we now have a component method named updateTask() that is mapped to the same named action method of our state store
    ...mapActions('tasks', ['updateTask', 'deleteTask']),

    promptToDelete(id) {
      //Here we use the Dialog (a Quasar Plugin) to ask the user if they really want to delete
      this.$q
        .dialog({
          title: 'Confirm',
          message: 'Really delete ?',
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          // console.log('>>>> OK')
          console.log('deleted')
          this.deleteTask(id)
        })
    }
  }
}
</script>

<style>
</style>