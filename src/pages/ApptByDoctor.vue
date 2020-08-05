<template>
  <div>
    <!-- Select Doctor -->
    <!-- Note:JML: Illustrating component flexability -->
    <!-- I modified this usage to illustrate how child component internally maintains only the selected doctor's id as the component model's value -->
    <!-- Alternatively, could have made it so that the component model's value reflects the entire select option's object (as illustrated in below insurance selection component)-->
    <doctor-select-list @changeDoctor="doctorId = $event"></doctor-select-list>

    <!-- Choose Patient Type (New vs. Existing) -->
    <div v-show="doctorId.length > 0" class="q-pa-lg">I am a
      <q-option-group v-model="patientType" :options="options" color="primary"/>
    </div>

    <!-- Select Insurance Plan -->
    <insurance-plan-select-list v-show="isNewPatient" @changePlan="onInsurancePlanChange($event)"></insurance-plan-select-list>

    <!-- Select Office Location -->
    <office-loc-select-list v-show="plan" @changeLoc="onOfficeLocChange($event)"></office-loc-select-list>
  </div>
</template>


<script>
import DoctorSelectList from '../components/DoctorSelectList.vue'
import InsurancePlanSelectList from '../components/InsurancePlanSelectList.vue'
import OfficeLocSelectList from '../components/OfficeLocSelectList.vue'

export default {
  name: 'ApptByDoctor',
  components: {
    'doctor-select-list': DoctorSelectList,
    'insurance-plan-select-list': InsurancePlanSelectList,
    'office-loc-select-list': OfficeLocSelectList
  },
  data() {
    return {
      patientType: '',
      doctorId: '',
      plan: null,
      loc: null,
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
      return this.patientType === 'op1'
    }
  },
  methods: {
    onInsurancePlanChange(option) {
      let plan = {
        id: option.value,
        name: option.label
      }
      this.plan = plan
      console.log(
        `Updated composite model with insurance plan selection change.  Plan is - name:${
          this.plan.name
        }, id:${this.plan.id}`,
        option
      )
    },
    onOfficeLocChange(option) {
      let loc = {
        id: option.value,
        name: option.label
      }
      this.loc = loc
      console.log(
        `Updated composite model with office location selection change.  Loc is - name:${
          this.loc.name
        }, id:${this.loc.id}`,
        option
      )
    }
  }
}
</script>

<style>
</style>
