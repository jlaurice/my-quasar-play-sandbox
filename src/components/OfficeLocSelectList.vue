<template>
  <div class="q-ma-md">Location:
    <q-select
      filled
      v-model="model"
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      label="Select Location"
      :options="options"
      @filter="filterFn"
      @filter-abort="abortFilterFn"
      @input="emitSelectChangeEvt"
      style="width: 250px;"
      hint="Hint: Placeholder"
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
  name: 'OfficeLocSelectList',
  data() {
    return {
      model: null,
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
        this.$emit('changeLoc', locObj)
      }
    },

    abortFilterFn() {
      // console.log('delayed filter aborted')
    }
  }
}
</script>

<style>
</style>
