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

      <v-toolbar-title>All Week Unmodified Boxplot Gers PM 2.5 Graph</v-toolbar-title>

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
              <p><b>Electrical Heater Only Modified Gers </b> = ['NJ', 'NL', 'NS', 'NU', 'OK', 'OR', 'PA', 'RI', 'SD', 'UT', 'VA', 'WI']</p>
              <p><b>Stats: </b></p>
              <p class='identation'><b>whiskers: </b>[0.0, 245.0, 0.0, 247.0, 0.0, 250.0, 0.0, 248.0, 0.0, 246.0, 0.0, 248.0, 0.0, 251.0]</p>
              <p class='identation'><b>caps: </b>[0.0, 245.0, 0.0, 247.0, 0.0, 250.0, 0.0, 248.0, 0.0, 246.0, 0.0, 248.0, 0.0, 251.0]</p>
              <p class='identation'><b>boxes: </b>[20.0, 20.0, 20.0, 21.0, 21.0, 21.0, 21.0]</p>
              <p class='identation'><b>medians: </b>[47.0, 47.0, 47.0, 47.0, 47.0, 47.0, 48.0]</p>
              <p class='identation'><b>means: </b>108.2570430411026, 108.59324614359875, 108.69477955893424, 108.80372705093255, 108.5145862951379, 108.7781889326221, 109.20581808628611]</p>
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
            { title: sensor, src: 'https://raw.githubusercontent.com/ylehilds/analyzing-mongolia-air-quality/master/jupyter/all_week_unmodified_boxplot_gers_pm_2_5/all_week_unmodified_boxplot_gers_pm_2_5.png', flex: 50 }
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