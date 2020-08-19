<template>
  <div class="q-pa-md">
    <q-btn label="Reset" push color="white" text-color="primary" @click="step = 1" class="q-mb-md"/>

    <q-stepper v-model="step" header-nav ref="stepper" color="primary" animated>
      <q-step
        :name="1"
        title="Select appointment details"
        icon="settings"
        :done="step > 1"
        :header-nav="step > 1"
      >
        <!-- Step-1:Begin -->
        <step-contents-appt-details @continue="onStep1ContinuePress"/>
        <q-stepper-navigation>
          <q-btn
            ref="continueToStep2Button"
            v-show="false"
            @click="() => { done1 = true; step = 2 }"
            color="primary"
            label="Continue"
          />
        </q-stepper-navigation>
      </q-step>
      <!-- Step-1:End -->
      <!-- Step-2:Begin-->
      <q-step
        :name="2"
        title="Select date and time"
        icon="event"
        :done="step > 2"
        :header-nav="step > 2"
      >Select date and time from provider availability calendar.
        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Continue"/>
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm"/>
        </q-stepper-navigation>
      </q-step>
      <!-- Step-2:End -->
      <!-- Step-3:Begin -->
      <q-step
        :name="3"
        title="Complete contact form"
        icon="add_comment"
        :header-nav="step > 3"
      >Provide contact details
        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="Finish"/>
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm"/>
        </q-stepper-navigation>
      </q-step>
      <!-- Step-3:End -->
    </q-stepper>
  </div>
</template>


<script>
export default {
  components: {
    'step-contents-appt-details': require('components/StepContentsApptDetails')
      .default
  },
  data() {
    return {
      step: 1,
      counter: 0
    }
  },

  methods: {
    onStep1ContinuePress(evt) {
      console.log(evt)
      this.$refs.continueToStep2Button.click()
    }
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