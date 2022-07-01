<template>
  <v-container>
    <v-layout row wrap class="py-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md1>
        <v-card color="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-img
                  height="140"
                  max-height="140"
                  cover
                  src="https://upload.wikimedia.org/wikipedia/commons/6/61/Tugu_Pahlawan_6.jpg"
                ></v-img>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title>
                  <div>
                    <h5 class="text-h5 font-weight-bold white--text mb-0">My Event</h5>
                    <p class="text-body-1 font-weight-regular mb-0">17 Jul 2022</p>
                  </div>
                </v-card-title>
                <v-card-actions class="py-0 pb-4 px-4">
                  <v-btn class="white--text" color="rgba(0,0,0,0.5)" to="/meetup/1">
                    <v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
                    View Meetup
                    </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'MeetupsList',
    data: () => ({
    }),
  }
</script>
