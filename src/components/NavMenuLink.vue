<template>
  <div>
    <q-separator/>
    <q-item
      exact
      clickable
      :to="`${navto}`"
      v-bind:class="[is_child ? 'text-black' : 'text-white']"
    >
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
    },
    is_child: {
      type: Boolean,
      default: false
    }
  }
}
</script>
