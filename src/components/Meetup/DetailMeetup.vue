<template>
  <v-container>
    <v-layout row wrap class="py-2">
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4 class="purple--text">My Event</h4>
          </v-card-title>
          <v-img
            height="400"
            max-height="400"
            cover
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/Tugu_Pahlawan_6.jpg"
          ></v-img>
          <v-card-text>
            <div class="font-weight-bold blue--text">
              17 Jul 2022 - Surabaya
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum officiis totam quae? Mollitia laborum dolorem non quae ipsa? Perferendis nihil ab omnis labore dolorum id nulla blanditiis dicta laborum quas.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="purple white--text">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'DetailMeetup',
    data: () => ({
    }),
  }
</script>
