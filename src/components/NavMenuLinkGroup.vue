<template>
  <div>
    <q-separator/>
    <q-expansion-item group="somegroup" :label="`${label}`" header-class="text-white">
      <q-card class="bg-grey-4">
        <q-card-section>
          <q-list dense>
            <nav-menu-link
              v-for="(link, index) in sub_links"
              :label="link.label"
              :navto="link.navto"
              :icon="link.icon"
              :textcolor="black"
              :is_child="true"
            />
          </q-list>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script>
export default {
  name: 'NavMenuLinkGroup',
  components: {
    'nav-menu-link': require('components/NavMenuLink.vue').default
  },
  props: {
    label: {
      type: String,
      required: true
    },
    sub_links: {
      type: Array,
      required: true
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
