<!-- src/views/Weather.vue -->
<template>
    <div class="weather-widget">
      <h1>Cek Cuaca</h1>
  
      <div class="input-container q-gutter-y-md column center-content">
        <q-input
          color="teal"
          outlined
          v-model="city"
          label="Masukkan kota"
          @keyup.enter="fetchWeather"
        >
          <template v-slot:append>
            <q-avatar>
              <img src="https://e7.pngegg.com/pngimages/446/509/png-clipart-cloud-logo-weather-weather-white-cloud.png" />
            </q-avatar>
            <q-btn color="primary" @click="fetchWeather" label="Cari" />
          </template>
        </q-input>
      </div>
  
      <div class="weather-info center-content" v-if="weather">
        <p><strong>Lokasi:</strong> {{ weather.name }}</p>
        <p><strong>Temperatur:</strong> {{ weather.main.temp }} °C</p>
        <p><strong>Cuaca:</strong> {{ weather.weather[0].description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "Weather",
    data() {
      return {
        city: "",
        weather: null,
      };
    },
    methods: {
      async fetchWeather() {
        if (!this.city) return;
        try {
          const apiKey = "b448666c7ca75580d47d0a94f5944e69"; // Replace with your API key
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`
          );
          this.weather = response.data;
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  
  <style>
  .weather-widget {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f7fbfc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
  }
  
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
  
  .input-container {
    max-width: 300px;
    margin: 0 auto;
  }
  
  .q-input {
    width: 100%;
  }
  
  .weather-info {
    margin-top: 20px;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .weather-info p {
    margin: 10px 0;
    font-size: 16px;
    color: #555;
  }
  
  .q-btn {
    margin-left: 10px;
  }
  </style>
  