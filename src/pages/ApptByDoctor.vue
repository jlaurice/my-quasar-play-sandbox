<template>
  <div>
    <!-- Select Doctor -->
    <!-- Note:JML: Illustrating component flexability -->
    <!-- I modified this usage to illustrate how child component internally maintains only the selected doctor's id as the component model's value -->
    <!-- Alternatively, could have made it so that the component model's value reflects the entire select option's object (as illustrated in below insurance selection component)-->
    <!-- <doctor-select-list @change="doctorId = $event"/>-->
    <doctor-select-list @change="onDoctorChange"/>

    <!-- Choose Patient Type (New vs. Existing) -->
    <div v-show="doctorId.length > 0" class="q-pa-lg">I am a
      <q-option-group v-model="patientType" :options="options" color="primary"/>
    </div>

    <!-- Select Insurance Plan -->
    <insurance-plan-select-list
      :doctorId="doctorId"
      :plan="plan"
      v-show="isNewPatient"
      @change="onInsurancePlanChange"
      :key="componentKeyMap.planSelectList.componentKey()"
    />

    <!-- Select Office Location -->
    <office-loc-select-list
      :doctorId="doctorId"
      :plan="plan"
      :loc="loc"
      v-show="plan"
      @change="onOfficeLocChange"
      :key="componentKeyMap.locSelectList.componentKey()"
    />
  </div>
</template>


<script>
import DoctorSelectList from 'components/DoctorSelectList.vue'
import InsurancePlanSelectList from 'components/InsurancePlanSelectList.vue'
import OfficeLocSelectList from 'components/OfficeLocSelectList.vue'

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
      componentKeyMap: {
        planSelectList: {
          key_prefix: 'appt-by-doctor-planSelectList',
          count: 0,
          componentKey() {
            return this.key_prefix + this.count
          }
        },
        locSelectList: {
          key_prefix: 'appt-by-doctor-locSelectList',
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
      return this.patientType === 'op1'
    }
  },
  methods: {
    forceRerender(componentName) {
      // Increments the component's key property to force a Vue rerender of the component
      this.componentKeyMap[componentName].count += 1
    },
    onDoctorChange(doctorId) {
      this.doctorId = doctorId
      this.plan = null
      this.forceRerender('planSelectList')
    },
    onInsurancePlanChange(option) {
      let plan = {
        id: option.value,
        name: option.label
      }
      this.plan = plan
      this.loc = null
      this.forceRerender('locSelectList')
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
