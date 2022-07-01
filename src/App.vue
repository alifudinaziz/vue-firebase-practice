<template>
  <v-app>
    <comp-navbar />
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import CompNavbar from './components/Comp_Navbar';

export default {
  name: 'App',
  components: {
    CompNavbar,
  },
  data: () => ({
    
  }),
};
</script>
