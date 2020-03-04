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

      <v-toolbar-title>Unmodified Weekly Boxplot Gers PM 2.5 Graph</v-toolbar-title>

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
              <p><b>Unmodified Gers </b> = ['NJ', 'NL', 'NS', 'NU', 'OK', 'OR', 'PA', 'RI', 'SD', 'UT', 'VA', 'WI']</p>
              <p><b>Stats: </b></p>
              <p class='identation'><b>whiskers: </b>[0.0, 248.0, 0.0, 307.0, 1.0, 306.0, 1.0, 295.0, 0.0, 298.0, 0.0, 256.0, 0.0, 294.0]</p>
              <p class='identation'><b>caps: </b>[0.0, 248.0, 0.0, 307.0, 1.0, 306.0, 1.0, 295.0, 0.0, 298.0, 0.0, 256.0, 0.0, 294.0]</p>
              <p class='identation'><b>boxes: </b>[16.0, 20.0, 26.0, 28.0, 23.0, 21.0, 22.0]</p>
              <p class='identation'><b>medians: </b>[41.0, 49.0, 52.0, 59.0, 54.0, 52.0, 58.0]</p>
              <p class='identation'><b>means: </b>[102.52059518186113, 110.09099717983946, 140.70926093193773, 130.5518004684564, 110.84523112492306, 109.85697010315286, 120.4173707284499]</p>
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
      sensors: ['electric']
    }),
    computed: {
      cards: function () {
        let allSensors = []
        for (const sensor of this.sensors) {
          allSensors.push(
            { title: sensor, src: 'https://raw.githubusercontent.com/ylehilds/analyzing-mongolia-air-quality/master/jupyter/unmodified_sensors_weekly_boxplot_gers_pm_2_5/unmodified_sensors_weekly_boxplot_gers_pm_2_5.png', flex: 50 }
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