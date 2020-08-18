<template>
  <div class="q-ma-md">Reason for visit ?
    <q-select
      filled
      v-model="model"
      emit-value
      map-options
      input-debounce="0"
      option-value="id"
      option-label="name"
      label="Select Reason"
      :options="options"
      @input="emitSelectChangeEvt"
      style="width: 250px;"
    ></q-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: '',
      options: [
        {
          id: 1,
          name: 'Ear'
        },
        {
          id: 2,
          name: 'Nose'
        },
        {
          id: 3,
          name: 'Throat'
        }
      ]
    }
  },
  methods: {
    emitSelectChangeEvt(val) {
      const reasonId = val + ''
      if (reasonId.length > 0) {
        console.log(
          'Office Visit Reason selection change was made, reasonId is : ' +
            reasonId
        )
        this.$emit('change', reasonId)
      }
    }
  },
  beforeCreate() {
    // This is an example of the component's beforeCreate lifecycle hook
    // This method gets invoked right before your Vue component gets created
    console.log(
      'Lifecycle Hook - beforeCreate() - Component:OfficeVisitReasonSelectList'
    )
  }
}
</script>

<style>
</style>
