<template>
  <div class="q-ma-md">Location:
    <q-select
      filled
      v-model="model"
      use-input
      hide-selected
      fill-input
      behavior="menu"
      input-debounce="0"
      label="Select Location"
      :options="options"
      @filter="filterFn"
      @filter-abort="abortFilterFn"
      @input="emitSelectChangeEvt"
      style="width: 225px;"
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
  name: 'OfficeLocSelect',
  props: {
    doctorId: {
      type: String,
      default: ''
    },
    plan: {
      type: Object,
      default: null
    },
    loc: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      model: this.loc,
      options: [],
      locations: [
        {
          id: 1001,
          name: 'Office A'
        },
        {
          id: 1002,
          name: 'Office B'
        },
        {
          id: 1003,
          name: 'Office C'
        }
      ]
    }
  },

  methods: {
    async filterFn(val, update, abort) {
      // call abort() at any time if you can't retrieve data somehow
      if (this.locations.length === 0) {
        // if there is no data, fetch and cache it so it can be filtered
        // await this.$axios
        //   .get('https://jsonplaceholder.typicode.com/users')
        //   .then(response => {
        //     this.plans = response.data
        //   })
      }
      if (val === '') {
        console.log(
          `Inside OfficeLocSelectList:filterFn() - Going to retrieve/filter locs for passed-in parm vals - doctorId: ${
            this.doctorId
          }, planId: ${this.planId}`
        )
        update(() => {
          this.options = this.locations.map(loc => {
            return { label: loc.name, value: loc.id }
          })
        })
      } else if (this.locations.length === 0) {
        update(() => {
          this.options = []
        })
      } else {
        update(() => {
          this.options = this.locations
            .map(loc => {
              return {
                label: loc.name,
                value: loc.id
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
      const locObj = val
      if (locObj != null) {
        console.log(
          'Office Loc selection change was made, location is : ' + locObj
        )
        this.$emit('change', locObj)
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
      'Lifecycle Hook - beforeCreate() - Component:OfficeLocSelectList'
    )
  },
  beforeUpdate() {
    // This lifecycle hook method gets invoked just before an update is applied to the component's UI/view
    console.log(
      'Lifecycle Hook - beforeUpdate() - Component:OfficeLocSelectList'
    )
  }
}
</script>

<style>
</style>
