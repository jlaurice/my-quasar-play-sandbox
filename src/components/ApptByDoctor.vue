<template>
  <div>
    <!-- Select Doctor -->
    <!-- Note:JML: Illustrating component flexability -->
    <!-- I modified this usage to illustrate how child component internally maintains only the selected doctor's id as the component model's value -->
    <!-- Alternatively, could have made it so that the component model's value reflects the entire select option's object (as illustrated in below insurance selection component)-->
    <!-- <doctor-select @change="appt.doctorId = $event"/>-->
    <doctor-select @change="onDoctorChange"/>

    <!-- Choose Patient Type (New vs. Existing) -->
    <div v-show="appt.doctorId.length > 0" class="q-pa-lg">I am a
      <q-option-group v-model="appt.patientType" :options="options" color="primary"/>
    </div>

    <!-- Select Insurance Plan -->
    <insurance-plan-select
      :doctorId="appt.doctorId"
      :plan="appt.plan"
      v-show="isNewPatient"
      @change="onInsurancePlanChange"
      :key="componentKeyMap.planSelect.componentKey()"
    />

    <!-- Select Office Location -->
    <office-loc-select
      :doctorId="appt.doctorId"
      :plan="appt.plan"
      :loc="appt.loc"
      v-show="appt.plan"
      @change="onOfficeLocChange"
      :key="componentKeyMap.locSelect.componentKey()"
    />

    <!-- Select Office Visit Reason -->
    <visit-reason-select v-show="appt.loc" @change="onVisitReasonChange"/>

    <!-- Select Office Visit Reason Condition -->
    <!-- Only show conditions for Visit Reason id:1 (Ear=1) -->
    <visit-reason-condition-select
      v-show="appt.visitReasonId == 1"
      @change="onReasonConditionChange"
      :key="componentKeyMap.conditionSelect.componentKey()"
    />

    <q-btn v-show="showFirstSubmit" @click="$emit('continue')" color="primary" label="Continue"/>
  </div>
</template>


<script>
import DoctorSelect from 'components/DoctorSelect.vue'
import InsurancePlanSelect from 'components/InsurancePlanSelect.vue'

export default {
  components: {
    'doctor-select': DoctorSelect,
    'insurance-plan-select': InsurancePlanSelect,
    'office-loc-select': require('components/OfficeLocSelect.vue').default,
    'visit-reason-select': require('components/VisitReasonSelect.vue').default,
    'visit-reason-condition-select': require('components/VisitReasonConditionSelect.vue')
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

      componentKeyMap: {
        planSelect: {
          key_prefix: 'appt-by-doctor-planSelect',
          count: 0,
          componentKey() {
            return this.key_prefix + this.count
          }
        },
        locSelect: {
          key_prefix: 'appt-by-doctor-locSelect',
          count: 0,
          componentKey() {
            return this.key_prefix + this.count
          }
        },
        conditionSelect: {
          key_prefix: 'appt-by-doctor-conditionSelect',
          count: 0,
          componentKey() {
            return this.key_prefix + this.count
          }
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
      this.appt.plan = null
      this.forceRerender('planSelect')
    },
    onInsurancePlanChange(option) {
      let plan = {
        id: option.value,
        name: option.label
      }
      this.appt.plan = plan
      this.appt.loc = null
      this.forceRerender('locSelect')
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
