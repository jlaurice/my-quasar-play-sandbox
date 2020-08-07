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

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">Menu</q-item-label>
        <q-item dense to="/">
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator/>
        <q-expansion-item
          dense
          dense-toggle
          group="somegroup"
          label="Our Physicians"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <q-list dense>
                <q-item clickable tag="a" target="_blank" :href="link">
                  <q-item-section>
                    <q-item-label>ENT</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator/>
                <q-item clickable tag="a" target="_blank" :href="link">
                  <q-item-section>
                    <q-item-label>Allergists</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-separator/>
        <q-item dense clickable tag="a" target="_blank" :href="link">
          <q-item-section>
            <q-item-label>Our Audiologists</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator/>
        <q-expansion-item
          dense
          dense-toggle
          group="somegroup"
          label="Patient Services"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <q-list dense>
                <q-item clickable tag="a" target="_blank" :href="link">
                  <q-item-section>
                    <q-item-label>Adult Ear, Nose and Throat</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator/>
                <q-item clickable tag="a" target="_blank" :href="link">
                  <q-item-section>
                    <q-item-label>Adult and Pediatric Allergy, Asthma and Immunology</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-separator/>
        <q-expansion-item
          dense
          dense-toggle
          group="somegroup"
          label="Vue Examples"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <q-list dense>
                <q-item to="/HelloWorld">
                  <q-item-section>
                    <q-item-label>Basic</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator/>
                <q-item to="/ListViewExample">
                  <q-item-section>
                    <q-item-label>List View</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator/>
                <q-item to="/Exercise1">
                  <q-item-section>
                    <q-item-label>Exercise 1</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator/>
                <q-item to="/Exercise2">
                  <q-item-section>
                    <q-item-label>Exercise 2</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-separator/>
      </q-list>

      <!-- 
      <q-list>
        <q-item-label header class="text-grey-8">Essential Links</q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link"/>
      </q-list> 
      -->
    </q-drawer>

    <q-page-container>
      <!-- This is where your pages will be loaded ... -->
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Hello World',
          caption: 'HelloWorld.vue',
          icon: 'favorite',
          link: '/HelloWorld'
        },
        {
          title: 'Doczz',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        },
        {
          title: 'Quasar Awesome',
          caption: 'Community Quasar projects',
          icon: 'favorite',
          link: 'https://awesome.quasar.dev'
        }
      ]
    }
  }
}
</script>


