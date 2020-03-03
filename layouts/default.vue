<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      > -->
        <!-- <v-icon>mdi-minus</v-icon> -->
      <!-- </v-btn> -->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Inspire',
        //   to: '/inspire'
        // },
        {
          icon: 'mdi-chart-bubble',
          title: 'PM 2.5',
          to: '/pm_2_5'
       },
        {
          icon: 'mdi-chart-bubble',
          title: 'Unmodified PM 2.5',
          to: '/unmodified_gers_pm_2_5'
       },
        {
          icon: 'mdi-chart-bubble',
          title: 'Modified PM 2.5',
          to: '/modified_gers_pm_2_5'
       },
       {
          icon: 'mdi-chart-bubble',
          title: 'Coal Only Modified PM 2.5',
          to: '/coal_only_modified_gers_pm_2_5'
       },
       {
          icon: 'mdi-chart-bubble',
          title: 'Heater Only Modified PM 2.5',
          to: '/heater_only_modified_gers_pm_2_5'
       },
       {
          icon: 'mdi-chart-bubble',
          title: 'Hybrid Modified PM 2.5',
          to: '/hybrid_modified_gers_pm_2_5'
       },
        {
          icon: 'mdi-chart-bubble',
          title: 'All Week All Sensors Boxplot PM 2.5',
          to: '/all_week_all_sensors_boxplot_gers_pm_2_5'
       },
       {
          icon: 'mdi-chart-bubble',
          title: 'All Week Coal Only Boxplot Gers Pm 2.5',
          to: '/all_week_coal_only_boxplot_gers_pm_2_5'
       },
       {
          icon: 'mdi-chart-bubble',
          title: 'All Week Hybrid Boxplot Gers Pm 2.5',
          to: '/all_week_hybrid_boxplot_gers_pm_2_5'
       },
       {
          icon: 'mdi-chart-bubble',
          title: 'All Week Electric Boxplot Gers Pm 2.5',
          to: '/all_week_electric_boxplot_gers_pm_2_5'
       },
       {
          icon: 'mdi-chart-bubble',
          title: 'All Week Unmodified Boxplot Gers Pm 2.5',
          to: '/all_week_unmodified_boxplot_gers_pm_2_5'
       }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Mongolia Deployment'
    }
  }
}
</script>
