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

    <!-- place QPageSticky at end of page -->
    <q-page-sticky expand position="bottom">
      <q-toolbar class="bg-grey-9 text-white">
        <q-tabs shrink stretch dense class="bg-grey-9 text-white shadow-2" :breakpoint="0">
          <q-btn-dropdown
            dense
            auto-close
            stretch
            flat
            stack
            icon="medical_services"
            label="Our Physicians"
          >
            <q-list>
              <q-item to="/ENTSearch">
                <q-item-section>ENT</q-item-section>
              </q-item>
              <q-separator/>
              <q-item to="/AllergistSearch">
                <q-item-section>Allergist</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-separator vertical/>
          <q-route-tab icon="people_alt" to="/KnowledgeAssists">How we
            <br>help you
          </q-route-tab>
          <q-separator vertical/>
          <q-route-tab icon="center_focus_strong" to="/PatientServices">Patient
            <br>services
          </q-route-tab>
          <q-separator vertical/>
          <q-route-tab icon="alternate_email" label="Contact" to="/Contact"/>
        </q-tabs>
      </q-toolbar>
    </q-page-sticky>
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
.my-text-extra-small
  font-size: 11px;
.btn-fixed-width
  width: 50px
</style>
