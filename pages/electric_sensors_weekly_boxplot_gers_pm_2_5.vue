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

      <v-toolbar-title>Electric Weekly Boxplot Gers PM 2.5 Graph</v-toolbar-title>

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
              <p><b>Electrical Heater Only Modified Gers </b> = ['GA', 'ID', 'IL', 'MA', 'ND', 'NE']</p>
              <p><b>Stats: </b></p>
              <p class='identation'><b>whiskers: </b>[0.0, 451.0, 0.0, 469.0, 1.0, 451.0, 1.0, 453.0, 0.0, 459.0, 0.0, 458.0, 0.0, 447.0]</p>
              <p class='identation'><b>caps: </b>[0.0, 451.0, 0.0, 469.0, 1.0, 451.0, 1.0, 453.0, 0.0, 459.0, 0.0, 458.0, 0.0, 447.0]</p>
              <p class='identation'><b>boxes: </b>[19.0, 19.0, 31.0, 31.0, 22.0, 21.0, 20.0]</p>
              <p class='identation'><b>medians: </b>[71.0, 74.0, 91.0, 102.0, 92.0, 88.0, 66.0]</p>
              <p class='identation'><b>means: </b>[133.29111216730038, 136.23854490963816, 154.46263429174687, 137.14568478906713, 149.83513731215547, 142.64576016056196, 125.93205919904115]</p>
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
            { title: sensor, src: 'https://raw.githubusercontent.com/ylehilds/analyzing-mongolia-air-quality/master/jupyter/electric_sensors_weekly_boxplot_gers_pm_2_5/electric_sensors_weekly_boxplot_gers_pm_2_5.png', flex: 50 }
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