<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      clearable
      label="Due date"
      :value="dueDate"
      @input="$emit('update:dueDate', $event)"
      @clear="$emit('clear')"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date
              :value="dueDate"
              @input="($event) => { $emit('update:dueDate', $event); $refs.qDateProxy.hide() }"
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['dueDate']
}
</script>

<style>
</style>