<template>
  <!-- IMPORTANT (Features): Lazy filter, With hide-selected and fill-input -->
  <!-- Ref: https://stackoverflow.com/questions/42326796/keyboard-input-filtering-quasar-framework -->
  <!-- Note:JML: Added the emit-value and map-options properties so as to ensure selected item's value (ie. the doctor's id) is set as the model's value and item's label (ie. the doctor's name) is displayed-->
  <div class="q-ma-md">
    <q-select
      filled
      v-model="model"
      use-input
      hide-selected
      fill-input
      emit-value
      map-options
      input-debounce="0"
      label="Search MD"
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
  name: 'DoctorSelectList',
  data() {
    return {
      model: '',
      options: [],
      users: []
    }
  },

  computed: {},

  methods: {
    async filterFn(val, update, abort) {
      // call abort() at any time if you can't retrieve data somehow
      if (this.users.length === 0) {
        // if there is no data, fetch and cache it so it can be filtered
        await this.$axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            // Using timeout to simulate network latency and demonstrate loading state ...
            //setTimeout(() => {
            this.users = response.data
            //}, 10)
          })
      }
      if (val === '') {
        update(() => {
          //this.options = this.users.map(user => user.username)
          this.options = this.users.map(user => {
            return { label: user.username, value: user.id }
          })
        })
      } else if (this.users.length === 0) {
        update(() => {
          this.options = []
        })
      } else {
        update(() => {
          this.options = this.users
            .map(user => {
              return { label: user.username, value: user.id }
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
      const doctorId = val + ''
      if (doctorId.length > 0) {
        console.log('Doctor selection change was made, doctor is : ' + doctorId)
        this.$emit('change', doctorId)
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
