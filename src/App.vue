<template>

  <v-app>
    <Navigation></Navigation>

    <div class="main">
      <router-view></router-view>
    </div>

    <Footer></Footer>
  </v-app>




</template>


<script>
  import Navigation from './components/Navigation'
  import Footer from './components/Footer';

  export default {
    name: 'App',
    components: {
      Navigation,
      Footer
    },

    data: () => ({
      //
    }),
  };
</script>


<style scoped>
  .main {
    background-image: url(./assets/img/background.png);
    background-repeat: repeat;

    /* フォント */
    font-family: "Helvetica Neue",
      Arial,
      "Hiragino Kaku Gothic ProN",
      "Hiragino Sans",
      Meiryo,
      sans-serif;
  }
</style>