<template>
  <div>
    <q-separator/>
    <q-item :to="`${navto}`">
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon"/>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ label }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: 'NavMenuLink',

  props: {
    label: {
      type: String,
      required: true
    },
    navto: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
