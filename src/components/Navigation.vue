<template>


  <!-- スマホ -->
  <div class="nav" v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">



    <v-card color="#FFE2A2" style="position: fixed; width: 100%">

      <v-card-title class="justify-center" align-content="center"
        style="font-size: 20px; padding-bottom: 0">

        <img src="../assets/img/icon.png" alt="" style="height: 40px; padding-right: 10px">
        <span>昼下がりのコーヒーブレイク</span>  

      </v-card-title>

      <v-tabs background-color="#FFE2A2" color="black" grow icons-and-text height="60px">



        <v-tab :to="{path: '/'}" class="tab">
          <span style="margin: 0; padding: 0">ホーム</span>
          <v-icon>mdi-home</v-icon>
        </v-tab>

        <v-tab :to="{path: '/calbattle'}" class="tab">
          <span style="margin: 0; padding: 0">カロバト</span>
          <v-icon>mdi-silverware-variant</v-icon>
        </v-tab>

        <v-tab :to="{path: '/webgame'}" class="tab">
          <span style="margin: 0; padding: 0">Webゲーム</span>
          <v-icon>mdi-web</v-icon>
        </v-tab>

        <v-tab :to="{path: '/works'}" class="tab">
          <span style="margin: 0; padding: 0">ミニゲーム</span>
          <v-icon>mdi-apple</v-icon>
          
        </v-tab>
      </v-tabs>






    </v-card>


    <div class="phone-blank"></div>


  </div>

  <!-- PCサイズの時 -->
  <div class="nav" v-else>




    <v-card color="#FFE2A2" style="position: fixed; width: 100%">

      <v-card-title>

        <img src="../assets/img/icon.png" alt="" style="height: 40px; padding-right: 10px; padding-left: 10px">

        <span>昼下がりのコーヒーブレイク</span>

        <v-card-subtitle>
          〜ひと時のやすらぎをあなたに〜
        </v-card-subtitle>
      </v-card-title>



      <v-tabs background-color="#FFE2A2" color="black" grow>

        <v-tab :to="{path: '/'}" class="tab">
          <span style="margin: 0; padding: 0">ホーム</span>
          <v-icon>mdi-home</v-icon>
        </v-tab>

        <v-tab :to="{path: '/calbattle'}" class="tab">
          <span style="margin: 0; padding: 0">カロバト</span>
          <v-icon>mdi-silverware-variant</v-icon>
        </v-tab>

        <v-tab :to="{path: '/webgame'}" class="tab">
          <span style="margin: 0; padding: 0">Webゲーム</span>
          <v-icon>mdi-web</v-icon>
        </v-tab>

        <v-tab :to="{path: '/works'}" class="tab">
          <span style="margin: 0; padding: 0">ミニゲーム</span>
          <v-icon>mdi-apple</v-icon>
        </v-tab>
      </v-tabs>


    </v-card>


    <div class="pc-blank"></div>



  </div>





</template>


<script>
  export default {}
</script>


<style scoped>
  .pc-blank {
    height: 134px;
    /* height: 116px; */
    /* background-color: aqua; */
  }

  .phone-blank {
    /* height: 108px; */
    height: 116px;
    /* background-color: aqua; */
  }

  .nav {
    z-index: 20;

        background-image: url(../assets/img/background.png);
    background-repeat: repeat;


        /* フォント */
    font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
  }

  .tab {
    padding-top: 7px;
    padding-left: 0;
    padding-right: 0;
  }
</style>