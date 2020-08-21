<template>
  <q-page :style="$route.meta.background">
    <div style="max-width: 400px">
      <div class="row q-pa-md">
        <div class="col">Enter patient info into data collection form</div>
      </div>
      <br>
      <div class="row q-pa-md">
        <div class="col">
          <q-btn @click="$router.go(-1)" color="primary" label="Back"/>
        </div>
        <div class="col">
          <q-btn @click="submitRequest" color="primary" label="Submit Request"/>
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
    },
    submitRequest() {
      this.promptToContinue(0)
    },

    promptToContinue(id) {
      //Here we use the Dialog plugin to ask the user if they really want to delete ...
      //Note:  There is also a Dialog (as a Quasar Component) which we also use in this example when displaying the add tasks form
      this.$q
        .dialog({
          title: 'Confirm',
          message: 'Does this info look OK ?',
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          // console.log('>>>> OK')
          console.log('continue with final submit API call here ')
        })
    }
  }
}
</script>

<style>
</style>
