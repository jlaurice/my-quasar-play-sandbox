<template>
  <!--
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
  -->
  <q-page padding>
    <!-- Schedule -->
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #e88292 0%, #9d2236 100%)"
    >
      <q-card-section>
        <q-list>
          <q-item v-ripple to="/appointment/">
            <q-item-section avatar>
              <q-icon color="primary" name="event" size="lg"/>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-h6">SCHEDULE APPOINTMENT</q-item-label>
              <q-item-label class="text-subtitle2">TAP HERE</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <br>
    <br>
    <!-- Cancel or Reschedule -->
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #dedede 0%, #c7c7c7 100%)"
    >
      <q-card-section>
        <q-list>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="cancel" size="lg"/>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-h6">CANCEL OR RESCHEDULE</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <br>
    <br>
    <!-- Find A Doctor -->
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #424242 0%, #050505 100%)"
    >
      <q-card-section>
        <q-list>
          <q-item clickable v-ripple @click="loadFindDoctorScreen">
            <q-item-section avatar>
              <q-icon color="white" name="search" size="lg"/>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-h6">FIND A DOCTOR</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    loadApptMainScreen() {
      //TODO:JML: Need to figure out how to use Quasar to make this an ajax page load ...
      window.location.href = '/appointment/'
    },
    loadFindDoctorScreen() {
      //TODO:JML: This is temporary entryway to this functionality
      //window.location.href = '/appointment/ApptByDoctor'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
</style>
