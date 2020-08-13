<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>XYZ And Allergy</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- Dynamically Build the Application's Left Side Slide Out Drawer Here ... -->
    <q-drawer
      v-model="leftDrawerOpen"
      :width="250"
      show-if-above
      bordered
      content-class="bg-grey-9"
    >
      <q-list dark>
        <q-item-label header class="text-white">Menu</q-item-label>
        <nav-menu-link-wrapper v-for="link in menuLinks" :key="link.label" v-bind="link"/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- This is where your pages will be loaded ... -->
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLinkOLD from 'components/EssentialLinkOLD.vue'
import navMenuConfig from '../helpers/navMenuConfig.js'

export default {
  name: 'MainLayout',

  components: {
    EssentialLinkOLD,
    'nav-menu-link-wrapper': require('components/NavMenuLinkWrapper.vue')
      .default
  },

  data() {
    return {
      leftDrawerOpen: false,
      menuLinks: navMenuConfig.mappings
    }
  }
}
</script>

<style>
.q-drawer .q-router-link--exact-active {
  color: red !important;
  background-color: #FFFF99;
}
</style>


