<!-- src/App.vue -->
<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>Weather</q-toolbar-title>
        <nav>
          <!-- Link untuk tetap di halaman Weather -->
          <div class="dropdown">
            <button class="dropbtn">Tugas Rival</button>
            <div class="dropdown-content">
              <router-link :to="{ name: 'Assignment1' }">Tugas 1</router-link>
              <router-link :to="{ name: 'Assignment2' }">Tugas 2</router-link>
              <router-link :to="{ name: 'Assignment3' }">Tugas 3</router-link>
              <router-link :to="{ name: 'Assignment4' }">Tugas 4</router-link>
              <router-link :to="{ name: 'Assignment5' }">Tugas 5</router-link>
              <router-link :to="{ name: 'Assignment7' }">Tugas 7</router-link>
            </div>
          </div>
        </nav>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div id="app">
        <router-view />
      </div>
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>Muhammad Rivaldani.UasPrakPbk</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "App",
  methods: {
    toggleLeftDrawer() {
      this.$q.leftDrawer.toggle();
    },
  },
};
</script>

<style>
/* Tambahkan styling untuk dropdown */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
}

.dropdown-content a {
  color: #333333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border-bottom: 1px solid #eaeaea;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropbtn {
  background-color: #a18024;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dropbtn:hover {
  background-color: #971414;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* Styling untuk q-toolbar-title */
.q-toolbar-title {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 1.2em;
}
</style>
