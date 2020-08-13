<template>
  <div>
    <nav-menu-link-group v-if="subLinks" :label="label" :sub_links="subLinks" :icon="icon"/>
    <nav-menu-link v-else :label="label" :navto="navto" :icon="icon"/>
  </div>
</template>

<script>
export default {
  name: 'NavMenuLinkWrapper',
  components: {
    'nav-menu-link-group': require('components/NavMenuLinkGroup.vue').default,
    'nav-menu-link': require('components/NavMenuLink.vue').default
  },
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
    subLinks: {
      type: Array,
      required: false
    }
  }
}
</script>
