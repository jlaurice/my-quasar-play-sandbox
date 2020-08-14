<template>
  <!-- <q-page padding> -->
  <!-- Replace the above with below whereby "pa" means padding in all directions and "md" means medium padding -->
  <!-- See Style&Identify > Spacing in Quasar Docs for additional usage examples -->
  <q-page class="q-pa-md">
    <p>Todo Page</p>
    <q-list separator bordered>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        v-ripple
      >
        <q-item-section side top>
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
      </q-item>
    </q-list>
  </q-page>
</template>


<script>
export default {
  data() {
    return {
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
  }
}
</script>

<style>
</style>
