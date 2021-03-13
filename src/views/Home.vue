<template>

  <div>

    <!-- スマホ -->
    <div v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">

      <div class="intro-content intro-content_m">
        <div class="intro-text" style="">

          <img src="../assets/img/home/board2.png" alt="" width="100%" height="80%">
          <p style="font-size: 3.5vw">「昼下がりのコーヒーブレイク」へようこそ！誰でも楽しめることを目標にゲームを作ってます！ゆっくりしていってね。</p>


        </div>

        <div style="width: 20%; text-align: center">
          <img src="../assets/img/home/neko.png" alt="" width="100%">
          <p style="font-size: 2vw;">Hirusagari</p>
        </div>

      </div>


      <div style="text-align: center; width: 100%; padding-bottom: 5%">
        <img src="../assets/img/home/checkText.png" alt="" width="90%">
      </div>

      <div>
        <ul class="contents contents_m">
          <li>
            <div class="content content_m">
              <h2 class="red-line">対戦であそびたい！</h2>
              <div v-on:mouseover="mouseOverAction_0" v-on:mouseleave="mouseLeaveAction_0" @click="to_0"
                class="button_m">
                <img :src="imgPath_0">
              </div>
            </div>
          </li>
          <li>
            <div class="content content_m">
              <h2 class="yellow-line">すぐにあそびたい！</h2>
              <div v-on:mouseover="mouseOverAction_1" v-on:mouseleave="mouseLeaveAction_1" @click="to_1"
                class="button_m">
                <img :src="imgPath_1">
              </div>
            </div>
          </li>
          <li>
            <div class="content content_m">
              <h2 class="green-line">手軽にあそびたい！</h2>
              <div v-on:mouseover="mouseOverAction_2" v-on:mouseleave="mouseLeaveAction_2" @click="to_2"
                class="button_m">
                <img :src="imgPath_2">
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>

    <div v-else>
      <div class="intro-content">
        <div class="intro-text" style="">

          <img src="../assets/img/home/board2.png" alt="" width="100%" height="80%">
          <p>「昼下がりのコーヒーブレイク」へようこそ！誰でも楽しめることを目標にゲームを作ってます！ゆっくりしていってね。</p>


        </div>

        <div style="width: 20%; text-align: center">
          <img src="../assets/img/home/neko.png" alt="" width="100%">
          <p style="font-size: 2vw;">Hirusagari</p>
        </div>

      </div>


      <div style="text-align: center; width: 100%; padding-bottom: 5%">
        <img src="../assets/img/home/checkText.png" alt="" width="70%">
      </div>



      <div>
        <ul class="contents">
          <li>
            <div class="content">
              <h2 class="red-line">対戦であそびたい！</h2>
              <div v-on:mouseover="mouseOverAction_0" v-on:mouseleave="mouseLeaveAction_0" @click="to_0" class="button">
                <img :src="imgPath_0">
              </div>
            </div>
          </li>
          <li>
            <div class="content">
              <h2 class="yellow-line">すぐにあそびたい！</h2>
              <div v-on:mouseover="mouseOverAction_1" v-on:mouseleave="mouseLeaveAction_1" @click="to_1" class="button">
                <img :src="imgPath_1">
              </div>
            </div>
          </li>
          <li>
            <div class="content">
              <h2 class="green-line">手軽にあそびたい！</h2>
              <div v-on:mouseover="mouseOverAction_2" v-on:mouseleave="mouseLeaveAction_2" @click="to_2" class="button">
                <img :src="imgPath_2">
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>

    <!-- <div class="twitter">
      <h1 class="headline">Twitter</h1>
      <div class="timeline-waku">
        <a class="twitter-timeline" data-lang="ja" data-width="400" data-height="600"
          href="https://twitter.com/HirusagariGame?ref_src=twsrc%5Etfw">Tweets by HirusagariGame</a>
        <script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </div> -->



  </div>

</template>


<script>
  // import { Timeline } from "vue-tweet-embed";
  // import { Tweet } from "vue-tweet-embed";

  export default {
    components: {
      // Tweet
    },
    data: function () {

      return {
        hoverFlag: true,
        imgPath_0: require('../assets/img/home/button_0.png'),
        imgPath_1: require('../assets/img/home/button_1.png'),
        imgPath_2: require('../assets/img/home/button_2.png'),


        // user_id: "1271742349790466049"

      }

    },
    methods: {
      mouseOverAction_0() {
        this.imgPath_0 = require('../assets/img/home/button_0_hover.png')
      },
      mouseLeaveAction_0() {
        this.imgPath_0 = require('../assets/img/home/button_0.png')
      },
      mouseOverAction_1() {
        this.imgPath_1 = require('../assets/img/home/button_1_hover.png')
      },
      mouseLeaveAction_1() {
        this.imgPath_1 = require('../assets/img/home/button_1.png')
      },
      mouseOverAction_2() {
        this.imgPath_2 = require('../assets/img/home/button_2_hover.png')
      },
      mouseLeaveAction_2() {
        this.imgPath_2 = require('../assets/img/home/button_2.png')
      },
      to_0() {
        this.$router.push('/calbattle');
      },
      to_1() {
        this.$router.push('/webgame');
      },
      to_2() {
        this.$router.push('/works');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .intro-content {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10% 0;
    width: 90%;
  }


  .contents {
    margin: auto;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 10%;
    // width: 90%;
  }

  .contents li {
    width: 30%;
  }

  .content {

    position: relative;
    text-align: center;

    width: 100%;
  }

  .content h2 {
    display: inline-block;
    position: relative;
  }

  .red-line:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 7px;
    background: repeating-linear-gradient(-45deg, #F07060, #F07060 2px, white 2px, white 4px);
  }

  .yellow-line:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 7px;
    background: repeating-linear-gradient(-45deg, #f0f006, #f0f006 2px, white 2px, white 4px);
  }

  .green-line:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 7px;
    background: repeating-linear-gradient(-45deg, #3BAF75, #3BAF75 2px, white 2px, white 4px);
  }



  .content img {
    text-decoration: none;
    padding: 0;
    padding-top: 2%;
    margin: 0;
    text-align: center;
    width: 95%;
  }



  .content_m {
    padding-top: 15%;
    padding-bottom: 0;
  }

  .contents_m li {
    width: 90%;
  }

  .content_m h2 {
    font-size: 6vw;
    padding-bottom: 0;
  }

  // .content_m p {
  //   text-decoration: none;
  //   position: absolute;
  //   top: 58%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   margin: 0;
  //   padding: 0;

  //   width: 60%;

  //   font-size: 4.5vw;
  // }

  .intro-content_m {
    width: 97%;
  }


  ul {
    list-style: none;
  }

  .intro-text {
    position: relative;
    width: 80%;

  }

  .intro-text p {
    position: absolute;
    top: 43.5%;
    left: 52%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    color: white;
    font-size: 2.4vw;
    width: 70%;

  }

  .intro-text img {
    text-decoration: none;
    padding: 0;
    margin: 0;
    text-align: center;
    width: 95%;
  }

  .container {
    width: 90%;
  }



  .routerLink {
    text-decoration: none;
  }

  .button {
    cursor: pointer;
  }

  .button img {
    width: 80%;
  }

  .button_m {
    cursor: pointer;
  }

  .button_m img {
    width: 90%;
  }

  .button_m p {
    // font-size: 4.5vw;
    font-size: 17px;
  }
</style>