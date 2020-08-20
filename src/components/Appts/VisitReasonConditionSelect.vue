<template>
  <div class="q-ma-md">Condition:
    <q-select
      filled
      v-model="model"
      emit-value
      map-options
      behavior="menu"
      input-debounce="0"
      option-value="id"
      option-label="name"
      label="Select Condition"
      :options="options"
      @input="emitSelectChangeEvt"
      style="width: 225px;"
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
          name: 'Current Ear Infection'
        },
        {
          id: 2,
          name: 'Discharge'
        },
        {
          id: 3,
          name: 'Dizziness'
        },
        {
          id: 4,
          name: 'Fullness or Clogging'
        },
        {
          id: 5,
          name: 'Hearing Loss, Sudden'
        }
      ]
    }
  },
  methods: {
    emitSelectChangeEvt(val) {
      const conditionId = val + ''
      if (conditionId.length > 0) {
        console.log(
          'Visit Reason Condition selection change was made, conditionId is : ' +
            conditionId
        )
        this.$emit('change', conditionId)
      }
    }
  }
}
</script>

<style>
</style>
