<template>
  <q-page :style="$route.meta.background">
    <div style="max-width: 400px">
      <div class="row q-pa-md">
        <div class="col">Select date and time from provider availability calendar.</div>
      </div>
      <br>
      <div class="row q-pa-md">
        <div class="col">
          <q-btn @click="$router.go(-1)" color="primary" label="Back"/>
        </div>
        <div class="col">
          <q-btn @click="showStepPatientInfoPopup" color="primary" label="Continue"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    showStepPatientInfoPopup() {
      this.$router.push({ name: 'step-patient-info.popup' })
    }
  }
}
</script>

<style>
</style>
