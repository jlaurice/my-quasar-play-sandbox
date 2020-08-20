<template>
  <div>
    <!-- Select Office Location -->
    <office-loc-select
      :loc="appt.loc"
      @change="onOfficeLocChange"
      :key="genKeyHelper('locSelect')"
    />

    <!-- Select Insurance Plan -->
    <insurance-plan-select
      :plan="appt.plan"
      v-show="appt.loc"
      @change="onInsurancePlanChange"
      :key="genKeyHelper('planSelect')"
    />

    <!-- Select Doctor -->
    <doctor-select v-show="appt.plan" @change="onDoctorChange" :key="genKeyHelper('doctorSelect')"/>

    <!-- Choose Patient Type (New vs. Existing) -->
    <div v-show="appt.doctorId.length > 0" class="q-pa-lg">I am a
      <q-option-group v-model="appt.patientType" :options="options" color="primary"/>
    </div>

    <q-btn v-show="showFirstSubmit" @click="$emit('continue')" color="primary" label="Continue"/>
  </div>
</template>


<script>
import DoctorSelect from 'components/Appts/DoctorSelect.vue'
import InsurancePlanSelect from 'components/Appts/InsurancePlanSelect.vue'
import { locale } from 'core-js'

const basePrefix = 'appt-by-loc'

const helpers = {
  genComponentKey: function(baseId) {
    let new_key = basePrefix + '-' + baseId + this.count
    console.log('Val of new_key is : ' + new_key)
    return new_key
  }
}

export default {
  components: {
    'doctor-select': DoctorSelect,
    'insurance-plan-select': InsurancePlanSelect,
    'office-loc-select': require('components/Appts/Shared/OfficeLocSelect.vue')
      .default,
    'visit-reason-select': require('components/Appts/VisitReasonSelect.vue')
      .default,
    'visit-reason-condition-select': require('components/Appts/VisitReasonConditionSelect.vue')
      .default
  },
  data() {
    return {
      appt: {
        doctorId: '',
        patientType: '',
        plan: null,
        //loc: { label: 'Office B', value: 1002 },
        loc: null,
        visitReasonId: '',
        reasonConditionId: ''
      },
      showPatientForm: false,
      showFirstSubmit: false,
      genKeyHelper: baseId => {
        return helpers.genComponentKey.call(
          this.componentKeyMap[baseId],
          baseId
        )
      },

      componentKeyMap: {
        doctorSelect: {
          count: 0
        },
        planSelect: {
          count: 0
        },
        locSelect: {
          count: 0
        },
        conditionSelect: {
          count: 0
        }
      },
      options: [
        {
          label: 'New Patient',
          value: 'op1'
        },
        {
          label: 'Follow Up Patient',
          value: 'op2'
        }
      ]
    }
  },
  computed: {
    isNewPatient() {
      return this.appt.patientType === 'op1'
    }
  },
  methods: {
    forceRerender(componentName) {
      // Increments the component's key property to force a Vue rerender of the component
      this.componentKeyMap[componentName].count += 1
    },
    onDoctorChange(doctorId) {
      this.appt.doctorId = doctorId
    },
    onInsurancePlanChange(option) {
      let plan = {
        id: option.value,
        name: option.label
      }
      this.appt.plan = plan
      this.appt.doctorId = ''
      this.forceRerender('doctorSelect')

      console.log(
        `Updated composite model with insurance plan selection change.  Plan is - name:${
          plan.name
        }, id:${plan.id}`,
        option
      )
    },
    onOfficeLocChange(option) {
      let loc = {
        id: option.value,
        name: option.label
      }
      this.appt.loc = loc
      this.appt.plan = null
      this.forceRerender('planSelect')
      console.log(
        `Updated composite model with office location selection change.  Loc is - name:${
          loc.name
        }, id:${loc.id}`,
        option
      )
    },

    onVisitReasonChange(id) {
      console.log('Val of visitReasonId is : ' + id)
      this.appt.visitReasonId = id
      this.appt.reasonConditionId = null
      this.forceRerender('conditionSelect')

      this.showFirstSubmit = false
      // Show the submit button if visit reason is Nose or Throat (but not Ear).
      // For Ear, need to show subsequent reason condition select and only after that selection show submit button
      if ([2, 3].indexOf(parseInt(id)) != -1) {
        this.showFirstSubmit = true
        console.log('Showing button')
      }
    },

    onReasonConditionChange(id) {
      this.appt.reasonConditionId = id
      this.showFirstSubmit = true
    }
  }
}
</script>

<style>
</style>
