<template>
    <div>
      <v-card flat tile>
        <v-toolbar dense color="purple" dark>
          <v-app-bar-nav-icon @click.native="sideNav = !sideNav"
            class="d-sm-none"
          ></v-app-bar-nav-icon>
          <v-toolbar-title class="pl-0">Event Meetup</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="d-none d-sm-block">
            <v-btn left class="btn-navigation">
              <v-icon left>mdi-account-multiple</v-icon>
              View Meetups
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-card>
      <v-navigation-drawer v-model="sideNav" absolute temporary color="purple darken-2" dark>
        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
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
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Account', icon: 'mdi-account-box' },
      { title: 'Admin', icon: 'mdi-gavel' },
    ],
  }),
};
</script>

<style>
.btn-navigation {
  background-color: transparent !important;
  box-shadow: none !important;
}
</style>
