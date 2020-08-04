
<template>
  <div class="q-pa-md" style="max-width: 400px">
    <!-- Book By Physician -->
    <q-expansion-item
      popup
      icon="medical_services"
      label="Book By Physician"
      @show
      @hide
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      ref="bookByDoctorSection"
      group="appt-sched-group"
    >
      <q-separator/>

      <q-card>
        <q-card-section>
          <appt-by-doctor></appt-by-doctor>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <br>
    <br>
    <!-- Book By Location -->
    <q-expansion-item
      popup
      icon="location_on"
      label="Book By Location"
      @show
      @hide
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      ref="bookByLocSection"
      group="appt-sched-group"
    >
      <q-separator/>

      <q-card>
        <q-card-section>Schedule appointment by location here ...</q-card-section>
      </q-card>
    </q-expansion-item>
    <br>
    <br>

    <!-- Book Audiologists -->
    <q-expansion-item
      popup
      icon="hearing"
      label="Book Audiologists"
      caption="Established Patients Only"
      @show
      @hide
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      group="appt-sched-group"
    >
      <q-separator/>

      <q-card>
        <q-card-section>Schedule Audiologist appointment here ...</q-card-section>
      </q-card>
    </q-expansion-item>
    <br>
    <br>

    <!-- Book Allergy shot -->
    <q-expansion-item
      popup
      icon="colorize"
      label="Book Audiologists"
      caption="Established Patients Only"
      @show
      @hide
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      group="appt-sched-group"
    >
      <q-separator/>

      <q-card>
        <q-card-section>Schedule Allergy shot appointment here ...</q-card-section>
      </q-card>
    </q-expansion-item>
    <br>
    <br>
  </div>
</template>

<script>
import ApptByDoctor from './ApptByDoctor.vue'
export default {
  components: {
    'appt-by-doctor': ApptByDoctor
  },
  data() {
    return {
      counter: 0
    }
  },

  methods: {
    closeOthers(evt) {
      console.log(evt)
      this.$refs.bookByLocSection.hide()
    }
  },

  beforeDestroy() {
    //this.stopCounting()
  }
}
</script>

<style lang="sass" scoped>
.column > div
  padding: 10px 15px
  background: rgba(86, 61, 124, .15)
  border: 1px solid rgba(86, 61, 124, .2)
.column + .column
  margin-top: 1rem
</style>
