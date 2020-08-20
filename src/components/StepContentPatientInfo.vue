<template>
  <q-card>
    <q-card-section>
      <div class="q-pa-lg">Are you a new patient to XYZ ?
        <q-option-group v-model="newPatientFlg" :options="options" color="primary" inline/>
      </div>

      <div class="q-pa-md" style="max-width: 400px">Is there a specific date that you would prefer?*
        <q-input
          outlined
          clearable
          label="Preferred date"
          v-model="prefDate"
          @clear="$emit('clear')"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="prefDate"/>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <!-- Choose Preferred Time -->
      <div class="q-pa-md" style="max-width: 350px">Is there a specific time that you would prefer?*
        <q-input outlined clearable label="Preferred time" v-model="prefTime" class="col">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="dueTime"/>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      newPatientFlg: '',
      prefDate: '',
      prefTime: '',

      options: [
        {
          label: 'YES',
          value: 'Y'
        },
        {
          label: 'NO',
          value: 'N'
        }
      ]
    }
  }
}
</script>

<style>
</style>
