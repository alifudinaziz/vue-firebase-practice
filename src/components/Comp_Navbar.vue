<template>
    <div>
      <v-card flat tile>
        <v-toolbar dense color="purple" dark>
          <v-app-bar-nav-icon @click="sideNav = !sideNav"
            class="d-sm-none"
          ></v-app-bar-nav-icon>
          <v-toolbar-title class="pl-0">
            <router-link to="/" tag="span" style="cursor: pointer">Event Meetup</router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="d-none d-sm-block">
            <v-btn left class="btn-navigation" v-for="item in menuItems"
            :key="item.title" :to="item.link">
              <v-icon left>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-card>
      <v-navigation-drawer v-model="sideNav" absolute temporary color="purple darken-2" dark>
        <v-list dense>
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            link
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
</template>

<script>

export default {
  name: 'CompNavbar',

  data: () => ({
    sideNav: false,
    menuItems: [
      { title: 'View Meetup', icon: 'mdi-account-supervisor', link:'/meetup' },
      { title: 'Organize Meetup', icon: 'mdi-office-building', link:'/meetup/new' },
      { title: 'Profile', icon: 'mdi-face-man', link:'/profile' },
      { title: 'Sign up', icon: 'mdi-smart-card-outline', link:'/signup' },
      { title: 'Sign in', icon: 'mdi-login-variant', link:'/signin' },
    ]
  }),
};
</script>

<style>
.btn-navigation {
  background-color: transparent !important;
  box-shadow: none !important;
}
</style>
