<template>
  <q-card>
    <q-card-section>
      <div class="q-pa-lg">Are you a new patient to XYZ ?
        <q-option-group v-model="newPatientFlg" :options="options" color="primary" inline/>
      </div>

      <div class="q-pa-md" style="max-width: 325px">Is there a specific date that you would prefer?*
        <q-input
          outlined
          clearable
          label="Preferred date"
          v-model="prefDate"
          @clear="$emit('clear')"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="prefDate"/>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <!-- Choose Preferred Time -->
      <div class="q-pa-md" style="max-width: 325px">Is there a specific time that you would prefer?*
        <q-input outlined clearable label="Preferred time" v-model="prefTime" class="col">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="prefTime"/>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <!-- Insurance Plan -->
      <div class="q-pa-md" style="max-width: 325px">Which Insurance carrier do you have?*
        <q-input readonly outlined v-model="planName"/>
      </div>

      <!-- Insurance ID  -->
      <div class="q-pa-md" style="max-width: 325px">Insurance ID (Card Policy Number)
        <q-input outlined v-model="planPolicyId"/>
      </div>

      <q-separator/>

      <!-- Patient First and Last Name  -->
      <div class="row q-pa-md">Patient Name:*</div>
      <div class="row q-pa-md" style="max-width: 600px">
        <div class="col q-pr-md">
          <q-input outlined v-model="patientFirstName" label="First Name"/>
        </div>
        <div class="col">
          <q-input outlined v-model="patientLastName" label="Last Name"/>
        </div>
      </div>

      <!-- Patient DOB -->
      <div class="row q-pa-md">Patient date of birth:*</div>
      <div class="row q-pa-md" style="max-width: 325px">
        <q-input outlined clearable label="MM-DD-YYYY" v-model="patientDob" @clear="$emit('clear')">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date
                  minimal
                  v-model="patientDob"
                  default-view="Years"
                  :options="optionsFn"
                  mask="MM-DD-YYYY"
                  default-year-month="1990/02"
                />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      newPatientFlg: '',
      prefDate: '',
      prefTime: '',
      planName: 'Cigna',
      planPolicyId: '',
      patientFirstName: '',
      patientLastName: '',
      patientDob: '',

      options: [
        {
          label: 'YES',
          value: 'Y'
        },
        {
          label: 'NO',
          value: 'N'
        }
      ]
    }
  },

  methods: {
    optionsFn(date) {
      return date >= '1920/01/01' && date <= '2020/08/20'
    }
  }
}
</script>

<style>
</style>
