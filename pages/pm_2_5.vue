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

      <v-toolbar-title>PM 2.5 Trend Graphs</v-toolbar-title>

      <v-spacer></v-spacer>
      <input type="text" v-model="search">
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
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
      sensors: ['AB','AK','AL','AR','AZ','BC','CA','CO','CT','Cache','Carbon','DE','Davis','FL','GA','HI','IA','ID','IL','IN','Juab','KS','KY','Kane','LA','MA','MB','MD','ME','MI','MN','MS','MT','NB','NC','ND','NE','NH','NJ','NL','NM','NS','NU','NV','NY','OH','OK','ON','OR','PA','PE','RI','SD','UT','VA','WA','WI','WY']
    }),
    computed: {
      cards: function () {
        let allSensors = []
        for (const sensor of this.sensors) {
          allSensors.push(
            { title: sensor, src: 'https://raw.githubusercontent.com/ylehilds/analyzing-mongolia-air-quality/master/jupyter/'+sensor+'_pm_2_5.png', flex: 50 }
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
</style>