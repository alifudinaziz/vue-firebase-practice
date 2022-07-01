<template>
  <v-container>
    <v-layout row wrap class="py-2">
      <v-flex xs12 sm6 class="text-center text-sm-right py-2 px-sm-2">
        <v-btn large to="/meetup" color="blue">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-center text-sm-left py-2 px-sm-2">
        <v-btn large to="/meetup/new" color="blue">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="item in meetupsCarousel"
            :key="item.id"
            :src="item.imageUrl"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
          <div class="title-carousel">
            {{ item.title }}
          </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="py-2">
      <v-flex xs12 class="text-center py-2">
        <p class="mb-0">Join our awesome event!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'HomePage',
    data: () => ({
      meetupsCarousel: [
        {
          id: 'awda12awda',
          imageUrl: 'https://media.istockphoto.com/photos/city-of-surabaya-picture-id1302747204?k=20&m=1302747204&s=612x612&w=0&h=CP6nVGeen2G8kKl7tBBD7d7yUCCBdkUzzDHIEb0HD20=',
          title: 'Event in Surabaya',
        },
        {
          id: 'tyyu12tyyu',
          imageUrl: 'https://media.istockphoto.com/photos/beautiful-jakarta-city-at-new-normal-situation-picture-id1311024046?b=1&k=20&m=1311024046&s=170667a&w=0&h=2quCC-xYIzReDC-L2oJ2SXAj6wu8p0CESzF0xOnnquQ=',
          title: 'Event in Jakarta',
        },
      ]
    }),
  }
</script>

<style scoped>
.title-carousel {
  position: absolute;
  bottom: 50px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 1.5em;
  font-weight: 700;
  width: 100%;
  text-align: center;
}
</style>
