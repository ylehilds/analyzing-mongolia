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

      <v-toolbar-title>All Sensors Aggregated by Each Day of the Week Boxplot PM 2.5</v-toolbar-title>

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
              <p><b>All Sensors Gers</b> = ['AB', 'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'IA', 'ID', 'IL', 'KS', 'KY', 'LA', 'MA', 'MB', 'MD', 'ME', 'MI', 'MN', 'MS', 'MT', 'NB', 'NC', 'ND', 'NE', 'NH', 'NL', 'NM', 'NS', 'NU', 'OH', 'OK', 'OR', 'PA', 'PE', 'RI', 'SD', 'UT', 'VA', 'WA', 'WI', 'WY']</p>
              <p><b>Stats:</b></p>              
              <p class='identation'><b>whiskers: </b>[0.0, 337.0, 0.0, 395.0, 0.0, 401.0, 0.0, 410.0, 0.0, 401.0, 0.0, 364.0, 0.0, 371.0]</p>
              <p class='identation'><b>caps: </b>[0.0, 337.0, 0.0, 395.0, 0.0, 401.0, 0.0, 410.0, 0.0, 401.0, 0.0, 364.0, 0.0, 371.0]</p>
              <p class='identation'><b>boxes: </b>[17.0, 18.0, 26.0, 28.0, 19.0, 19.0, 21.0]</p>
              <p class='identation'><b>medians: </b>[48.0, 55.0, 62.0, 68.0, 57.0, 56.0, 57.0]</p>
              <p class='identation'><b>means: </b>[125.48868977148805, 132.66950680652764, 146.36915520723377, 150.40544813243022, 143.7906718920488, 149.0148891868728, 134.53916188608065]</p>
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
      sensors: ['AllSensors']
    }),
    computed: {
      cards: function () {
        let allSensors = []
        for (const sensor of this.sensors) {
          allSensors.push(
            { title: sensor, src: 'https://raw.githubusercontent.com/ylehilds/analyzing-mongolia-air-quality/master/jupyter/all_sensors_boxplot_gers_pm_2_5/all_sensors_boxplot_gers_pm_2_5.png', flex: 50 }
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