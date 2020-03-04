<template>
  <v-card
    class="mx-auto"
  >
    <v-system-bar
      color="indigo darken-2"
      dark
    >
      <v-spacer></v-spacer>
<!-- 
      <v-icon>mdi-window-minimize</v-icon>

      <v-icon>mdi-window-maximize</v-icon>

      <v-icon>mdi-close</v-icon> -->
    </v-system-bar>

    <v-toolbar
      color="indigo"
      dark
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Hybrid Weekly Boxplot Gers PM 2.5 Graph</v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <input type="text" v-model="search">
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card of filteredItems"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              height="300px"
              width="450px"
            >
              <v-card-title></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon :href="card.src">
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
              <div>
              <p><b>Hybrid (Coal+Heater) Modified Gers </b>= ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'IA', 'KS', 'KY', 'LA', 'MD', 'ME', 'MI', 'MN', 'MS', 'MT', 'NC', 'NH']</p>
              <p><b>Stats: </b></p>
              <p class='identation'><b>whiskers: </b>[0.0, 268.0, 0.0, 342.0, 0.0, 342.0, 0.0, 384.0, 0.0, 352.0, 0.0, 319.0, 0.0, 336.0]</p>
              <p class='identation'><b>caps: </b>[0.0, 268.0, 0.0, 342.0, 0.0, 342.0, 0.0, 384.0, 0.0, 352.0, 0.0, 319.0, 0.0, 336.0]</p>
              <p class='identation'><b>boxes: </b>[21.0, 22.0, 30.0, 32.0, 22.0, 22.0, 24.0]</p>
              <p class='identation'><b>medians: </b>[49.0, 58.0, 63.0, 69.0, 60.0, 57.0, 59.0]</p>
              <p class='identation'><b>means: </b>[132.23953898261894, 142.18104975279323, 152.16462919631346, 169.59408722100298, 162.0633431965149, 172.6286027998902, 147.97601656872553]</p>
              <p class='identation'><b>fliers: </b>[]</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      search: '',
      // cards: [
      //   { title: 'AB', src: 'https://raw.githubusercontent.com/ylehilds/analyzing-mongolia-air-quality/master/jupyter/AB_pm_2_5.png', flex: 50 },
      //   { title: 'AK', src: 'https://raw.githubusercontent.com/ylehilds/analyzing-mongolia-air-quality/master/jupyter/AK_pm_2_5.png', flex: 50 },
      //   { title: 'AR', src: 'https://raw.githubusercontent.com/ylehilds/analyzing-mongolia-air-quality/master/jupyter/AR_pm_2_5.png', flex: 50 },
      //   { title: 'AL', src: 'https://raw.githubusercontent.com/ylehilds/analyzing-mongolia-air-quality/master/jupyter/AL_pm_2_5.png', flex: 50 }
      // ],
      sensors: ['hybrid']
    }),
    computed: {
      cards: function () {
        let allSensors = []
        for (const sensor of this.sensors) {
          allSensors.push(
            { title: sensor, src: 'https://raw.githubusercontent.com/ylehilds/analyzing-mongolia-air-quality/master/jupyter/hybrid_sensors_weekly_boxplot_gers_pm_2_5/hybrid_sensors_weekly_boxplot_gers_pm_2_5.png', flex: 50 }
          )
        }
        return allSensors
      },
      filteredItems() {
      return this.cards.filter(item => {
        //  return item.title.indexOf(this.search.toLowerCase()) > -1
         return item.title.toLowerCase().startsWith(this.search.toLowerCase()) === true
      })
    }
}
  }
</script>

<style scoped>
input {
  background-color: white;
  color: black;
}
.identation {
  padding-left:2em
}
</style>