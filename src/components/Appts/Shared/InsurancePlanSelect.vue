<template>
  <div class="q-ma-md">Insurance:
    <q-select
      filled
      v-model="model"
      use-input
      hide-selected
      fill-input
      behavior="menu"
      input-debounce="0"
      label="Select Insurance"
      :options="options"
      @filter="filterFn"
      @filter-abort="abortFilterFn"
      @input="emitSelectChangeEvt"
      style="width: 225px;"
      hint="Note: Participates in Plan"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">No results</q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>


<script>
export default {
  name: 'InsurancePlanSelect',
  props: {
    doctorId: {
      type: String,
      default: ''
    },
    plan: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      model: this.plan,
      options: [],
      plans: [
        { id: 109, name: 'AARP MedicareComplete', isPar: false },
        { id: 110, name: 'Aetna', isPar: true },
        { id: 111, name: 'Aetna Aexcel', isPar: true },
        { id: 112, name: 'Aetna HMO', isPar: true },
        { id: 113, name: 'Aetna Medicare', isPar: true },
        { id: 114, name: 'Aetna PPO', isPar: true },
        { id: 115, name: 'BC/BS Empire HMO', isPar: true },
        { id: 116, name: 'BC/BS Empire NY', isPar: true },
        { id: 117, name: 'Cigna', isPar: true },
        { id: 118, name: 'Connecticare', isPar: true }
      ]
    }
  },

  methods: {
    async filterFn(val, update, abort) {
      // call abort() at any time if you can't retrieve data somehow
      if (this.plans.length === 0) {
        // if there is no data, fetch and cache it so it can be filtered
        // await this.$axios
        //   .get('https://jsonplaceholder.typicode.com/users')
        //   .then(response => {
        //     this.plans = response.data
        //   })
      }
      if (val === '') {
        console.log(
          `Inside InsurancePlanSelectList:filterFn() - Going to retrieve/filter plans for passed-in doctorId parm val: ${
            this.doctorId
          }`
        )
        update(() => {
          //this.options = this.plans.map(plan => plan.name)
          this.options = this.plans.map(plan => {
            return { label: plan.name, value: plan.id }
          })
        })
      } else if (this.plans.length === 0) {
        update(() => {
          this.options = []
        })
      } else {
        update(() => {
          this.options = this.plans
            .map(plan => {
              return {
                label: plan.name,
                value: plan.id
              }
            })
            .filter(option => {
              return (
                option &&
                option.label &&
                option.label.toLowerCase().indexOf(val.toLowerCase()) !== -1
              )
            })
        })
      }
    },

    emitSelectChangeEvt(val) {
      // TODO:JML: Need to replace this with vuex implementation ...
      // See Here: https://www.smashingmagazine.com/2020/01/data-components-vue-js/#emitting-custom-events-share-data-child-parent
      const planObj = val
      if (planObj != null) {
        console.log('Plan selection change was made, plan is : ' + planObj)
        this.$emit('change', planObj)
      }
    },

    abortFilterFn() {
      // console.log('delayed filter aborted')
    }
  },
  beforeCreate() {
    // This is an example of the component's beforeCreate lifecycle hook
    // This method gets invoked right before your Vue component gets created
    console.log(
      'Lifecycle Hook - beforeCreate() - Component:InsurancePlanSelectList'
    )
  },
  beforeUpdate() {
    // This lifecycle hook method gets invoked just before an update is applied to the component's UI/view
    console.log(
      'Lifecycle Hook - beforeUpdate() - Component:InsurancePlanSelectList'
    )
  }
}
</script>

<style>
</style>
