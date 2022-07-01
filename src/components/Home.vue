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
          <v-carousel-item style="cursor: pointer"
            v-for="item in meetupsCarousel"
            :key="item.id"
            :src="item.imageUrl"
            @click="onLoadEvent(item.id)"
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
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Tugu_Pahlawan_6.jpg',
          title: 'Event in Surabaya',
        },
        {
          id: 'tyyu12tyyu',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Busway_in_Bundaran_HI.jpg/2880px-Busway_in_Bundaran_HI.jpg',
          title: 'Event in Jakarta',
        },
      ]
    }),
    methods: {
      onLoadEvent(idEvent) {
        this.$router.push('/meetup/' + idEvent)
      }
    },
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
