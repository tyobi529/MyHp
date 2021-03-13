<template>

  <div>



    <div style="padding-bottom: 100px; position: relative" v-scroll-lock="isLock">



      <!-- ボタンを画面全体に -->

      <div class="button-area">
        <div class="left-button" @mousedown="LeftButtonDown" @touchstart="LeftButtonDown" @mouseup="LeftButtonUp"
          @touchend="LeftButtonUp">
          <!-- <h1 style="text-align: center;">左</h1> -->
        </div>
        <div class="right-button" @mousedown="RightButtonDown" @touchstart="RightButtonDown" @mouseup="RightButtonUp"
          @touchend="RightButtonUp">
          <!-- <h1 style="text-align: center;">右</h1> -->
        </div>
      </div>


      <!-- スマホ -->
      <div v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
        <div class="title_m">
          <img src="../assets/img/webgame/title.png" alt="" width="80%">
          <p>ここですぐに遊べるゲームです！</p>
          <!-- <p>※「画面を固定」ボタンで画面スクロールが<br>止まります。スマホの人におすすめ！</p>         -->
          <p>スマホの人は「画面を固定」ボタンで<br>画面を固定して遊ぶのがオススメ！</p>
        </div>
      </div>

      <div v-else>
        <div class="title">
          <img src="../assets/img/webgame/title.png" alt="" width="50%">
          <p>ここですぐに遊べるゲームです！</p>
          <!-- <p>※「画面を固定」ボタンで画面スクロールが<br>止まります。スマホの人におすすめ！</p> -->
          <p>スマホの人は「画面を固定」ボタンで</p>
          <p>画面を固定して遊ぶのがオススメ！</p>
        </div>
      </div>






      <div id="game" class="game">



        <!-- タイトル部分 -->
        <div class="intro" v-show="!isStart">
          <!-- スタートボタン -->
          <img :src="startImgPath" alt="" class="start-button" @mousedown="StartGame" v-on:mouseover="mouseOverAction"
            v-on:mouseleave="mouseLeaveAction">
          <!-- <img :src="startImgPath" alt="" width="55%;"
          style="position: absolute; top:69%; left: 70px; text-align: center; pointer-events: auto; cursor: pointer;"
          @mousedown="StartGame" v-on:mouseover="mouseOverAction" v-on:mouseleave="mouseLeaveAction"> -->

          <!-- 固定ボタン -->
          <button class="fixed-button" @click="LockScreen"
            v-bind:style="{ backgroundColor: fixedButtonColor}">{{fixedMessage}}</button>
        </div>

        <!-- 結果 -->
        <div class="result" v-show="isGameOver">
          <h1 style="font-size: 40px">GameOver</h1>
          <h1 style="color: yellow">{{score}} pt</h1>

          <!-- <button class="to-title-button">タイトルへ</button> -->

          <!-- <div style="width: 100%; text-align: center"> -->
          <!-- <button class="to-title-button">タイトルへ</button> -->
          <!-- </div> -->

          <h1 class="to-title-button" style="color: black" @click="ToGameTitle">タイトルへ</h1>


        </div>


        <!-- UI部分 -->
        <div class="ui">
          <h3 style="padding: 3px 10px; height: 30px;">Score: {{score}} pt</h3>
          <!-- <h3 style="float: left; padding-left: 10px">Level: {{this.level}}</h3> -->

          <div style="height: 30px;">
            <h3 style="padding: 0 10px; padding-right: 5px; float: left">スピード</h3>
            <ul class="speed-gauge">
              <li v-for="(i, key) in 20" :key="key" v-bind:style="{ backgroundColor: speedGauge[i] }"></li>
            </ul>
            <!-- <h3 style="float: left; height: 100%; font-size: 15px; padding-left: 5px; color: red">MAX!</h3> -->
            <h3 style="float: left; height: 25px; font-size: 16px; padding-left: 5px; color: red;" v-show="showMax">MAX!
            </h3>
          </div>

        </div>

        <!-- <div class="game"> -->
        <div class="stage">


          <!-- キャラ -->
          <img src="../assets/img/icon.png" alt="" width="60px" height="60px"
            v-bind:style="{ top: player.top + 'px', left: player.left + 'px' }" class="player">
          <!-- エフェクト -->

          <img src="../assets/img/webgame/success.png" alt=""
            v-bind:style="{ top: success.top + 'px', left: success.left + 'px', opacity: success.opacity, width: success.width + 'px', heght: success.height + 'px'}"
            style="position: absolute; z-index: 6">


          <div class='cell' v-for="(i, key) in 440" :key="key"
            :class="{line: (i%11 === 3 || i%11 === 6 || i%11 === 9)}">
          </div>


          <!-- 魚 -->
          <img src="../assets/img/webgame/fish.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: fishes[0].top + 'px', left: fishes[0].left + 'px' }" v-show="fishes[0].isShow">

          <img src="../assets/img/webgame/fish.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: fishes[1].top + 'px', left: fishes[1].left + 'px' }" v-show="fishes[1].isShow">

          <img src="../assets/img/webgame/fish.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: fishes[2].top + 'px', left: fishes[2].left + 'px' }" v-show="fishes[2].isShow">

          <img src="../assets/img/webgame/fish.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: fishes[3].top + 'px', left: fishes[3].left + 'px' }" v-show="fishes[3].isShow">

          <img src="../assets/img/webgame/fish.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: fishes[4].top + 'px', left: fishes[4].left + 'px' }" v-show="fishes[4].isShow">

          <img src="../assets/img/webgame/fish.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: fishes[5].top + 'px', left: fishes[5].left + 'px' }" v-show="fishes[5].isShow">

          <img src="../assets/img/webgame/fish.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: fishes[6].top + 'px', left: fishes[6].left + 'px' }" v-show="fishes[6].isShow">

          <img src="../assets/img/webgame/fish.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: fishes[7].top + 'px', left: fishes[7].left + 'px' }" v-show="fishes[7].isShow">

          <img src="../assets/img/webgame/fish.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: fishes[8].top + 'px', left: fishes[8].left + 'px' }" v-show="fishes[8].isShow">



          <!-- 爆弾 -->
          <img src="../assets/img/webgame/bomb.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: bombs[0].top + 'px', left: bombs[0].left + 'px' }" v-show="bombs[0].isShow">

          <img src="../assets/img/webgame/bomb.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: bombs[1].top + 'px', left: bombs[1].left + 'px' }" v-show="bombs[1].isShow">

          <img src="../assets/img/webgame/bomb.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: bombs[2].top + 'px', left: bombs[2].left + 'px' }" v-show="bombs[2].isShow">

          <img src="../assets/img/webgame/bomb.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: bombs[3].top + 'px', left: bombs[3].left + 'px' }" v-show="bombs[3].isShow">

          <img src="../assets/img/webgame/bomb.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: bombs[4].top + 'px', left: bombs[4].left + 'px' }" v-show="bombs[4].isShow">

          <img src="../assets/img/webgame/bomb.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: bombs[5].top + 'px', left: bombs[5].left + 'px' }" v-show="bombs[5].isShow">

          <img src="../assets/img/webgame/bomb.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: bombs[6].top + 'px', left: bombs[6].left + 'px' }" v-show="bombs[6].isShow">

          <img src="../assets/img/webgame/bomb.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: bombs[7].top + 'px', left: bombs[7].left + 'px' }" v-show="bombs[7].isShow">

          <img src="../assets/img/webgame/bomb.png" alt="" width="60px" height="60px" class="fish"
            v-bind:style="{ top: bombs[8].top + 'px', left: bombs[8].left + 'px' }" v-show="bombs[8].isShow">


          <!-- スピードアップ -->
          <img src="../assets/img/webgame/speedUp.png" alt="" style="position: absolute; top:45%; width: 80%"
            v-bind:style="{ left: speedUpLeft + '%', opacity: speedUpOpacity }">







        </div>


        <!-- 下部分 -->
        <div class="footer-ui">
          <div class="button">
            <img src="../assets/img/webgame/leftArrow.png" alt="">
          </div>
          <div class="button">
            <img src="../assets/img/webgame/rightArrow.png" alt="">
          </div>

          <div style="height: 30px; position: absolute; top: 74px; left: 19px">
            <h3 style="font-size: 13px;">タップ（画面どこでも）or キーボード←→で操作</h3>
          </div>
        </div>




      </div>









    </div>

  </div>

</template>

<script>
  export default {






    data() {
      return {
        fixedMessage: "画面を固定",
        fixedButtonColor: "#F2F2F2",
        isLock: false,
        startImgPath: require('../assets/img/webgame/startButton.png'),
        // タップしているかどうか
        isLeftTap: false,
        isRightTap: false,
        isStart: false,
        showMax: false,
        //呼び出し間隔5~20
        interval: 20,
        //生成感覚300~2000
        generateTime: 2000,
        level: 0,
        levelUpCount: 300,
        // interval: 5,
        // generateTime: 350,
        generateY: -60,
        isGameOver: false,
        score: 0,
        evaluation: 'good',
        x0: 45,
        x1: 135,
        x2: 225,
        y: 0,
        player: {
          top: 330,
          left: 135,
        },
        success: {
          top: 330,
          left: 135,
          opacity: 0,
          width: 60,
          height: 60
        },
        speedUpLeft: 10,
        speedUpOpacity: 0,
        fishNum: 0,
        bombNum: 0,
        showFishNum: [],
        showBombNum: [],
        fishes: [{
            isShow: false,
            top: -60,
            left: 135,
          },
          {
            isShow: false,
            top: -100,
            left: 135,

          },
          {
            isShow: false,
            top: -100,
            left: 135,

          },
          {
            isShow: false,
            top: 0,
            left: 135,

          },
          {
            isShow: false,
            top: 0,
            left: 135,

          },
          {
            isShow: false,
            top: 0,
            left: 135,

          },
          {
            isShow: false,
            top: 0,
            left: 135,

          },
          {
            isShow: false,
            top: 0,
            left: 135,

          },
          {
            isShow: false,
            top: 0,
            left: 135,

          },
        ],
        bombs: [{
            isShow: false,
            top: 0,
            left: 135,
          },
          {
            isShow: false,
            top: 0,
            left: 135,
          },
          {
            isShow: false,
            top: 0,
            left: 135,
          },
          {
            isShow: false,
            top: 0,
            left: 135,
          },
          {
            isShow: false,
            top: 0,
            left: 135,
          },
          {
            isShow: false,
            top: 0,
            left: 135,
          },
          {
            isShow: false,
            top: 0,
            left: 135,
          },
          {
            isShow: false,
            top: 0,
            left: 135,
          },
          {
            isShow: false,
            top: 0,
            left: 135,
          },
        ],
        speedGauge: [
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
        ]
      }
    },
    mounted() {

      window.addEventListener('keydown', event => {
        if (event.key == 'ArrowRight') {
          this.RightButtonDown();
        } else if (event.key == 'ArrowLeft') {
          this.LeftButtonDown();
        }
      })


      window.addEventListener('keyup', event => {
        if (event.key == 'ArrowRight') {
          this.RightButtonUp();
        } else if (event.key == 'ArrowLeft') {
          this.LeftButtonUp();
        }
      })



    },
    created() {
      // 時間を動かし始める
    },
    beforeDestroy() {
      // let target = document.getElementById('game');
      // target.removeEventListener
    },
    methods: {
      // Tap(e) {
      //   // console.log(e);
      //   e.currentTarget.className = "tap";
      // },
      // 時間を進める
      time_goes() {

        if (this.isGameOver) {
          return;
        }

        var get = false;

        //魚
        for (var i = 0; i < this.showFishNum.length; i++) {
          var index = this.showFishNum[i];

          if (this.fishes[index].top > this.player.top + 70) {
            this.evaluation = 'bad';
            // this.isGameOver = true;
            this.GameOver();
          } else if (this.fishes[index].top >= this.player.top && this.player.top <= this.fishes[index].top + 6) {
            //評価
            if (this.fishes[index].left == this.player.left) {
              this.evaluation = 'good';

              this.$set(this.success, "top", this.player.top)
              this.$set(this.success, "left", this.player.left)
              this.$set(this.success, "opacity", 1)
              this.$set(this.success, "width", 60)
              this.$set(this.success, "height", 60)

              this.SuccessEffect();

              this.$set(this.fishes[index], "isShow", false)
              this.showFishNum.shift();

              get = true;
            } else {
              var distance = this.fishes[index].top;
              var move = 1 + parseFloat(distance) / parseFloat(250)
              if (move < 1) {
                move = 1
              }
              this.$set(this.fishes[index], "top", this.fishes[index].top + move * move);
            }
          } else {

            distance = this.fishes[index].top;
            move = 1 + parseFloat(distance) / parseFloat(250)
            if (move < 1) {
              move = 1
            }
            this.$set(this.fishes[index], "top", this.fishes[index].top + move * move);
          }
        }



        //爆弾
        for (var k = 0; k < this.showBombNum.length; k++) {
          var bombIndex = this.showBombNum[k];


          if (this.bombs[bombIndex].top >= this.player.top && this.player.top + 5 >= this.bombs[bombIndex].top) {
            //評価
            if (this.bombs[bombIndex].left == this.player.left) {
              this.evaluation = 'bad';
              // this.isGameOver = true;
              this.GameOver();
            } else {
              distance = this.bombs[bombIndex].top;
              move = 1 + parseFloat(distance) / parseFloat(250)
              if (move < 1) {
                move = 1
              }
              this.$set(this.bombs[bombIndex], "top", this.bombs[bombIndex].top + move * move);
            }
          } else if (this.bombs[bombIndex].top > this.player.top + 70) {

            get = true;
            this.$set(this.bombs[bombIndex], "isShow", false);
            this.showBombNum.shift();
          } else {

            distance = this.bombs[bombIndex].top;
            move = 1 + parseFloat(distance) / parseFloat(250)
            if (move < 1) {
              move = 1
            }
            this.$set(this.bombs[bombIndex], "top", this.bombs[bombIndex].top + move * move);
          }
        }


        if (get) {
          this.score += 100;
          if (this.score % this.levelUpCount == 0) {

            var showText = false;

            // if (this.interval > 10) {              
            //   this.interval -= 1;
            //   showText = true;
            // }
            if (this.interval > 10) {
              this.interval -= 1;
              showText = true;
            } else if (this.interval > 5) {
              this.interval -= 0.5;
              showText = true;
            }

            if (this.generateTime > 600) {
              this.generateTime -= 100;
              showText = true;
            } else if (this.generateTime > 300) {
              this.generateTime -= 50;
              showText = true;
            }

            if (showText) {
              this.level++;
              this.speedGauge[this.level] = "#FFF100";
              this.speedUpOpacity = 0.9;
              this.SpeedUp();

              if (this.level == 20) {

                for (var l = 0; l < 21; l++) {
                  this.speedGauge[l] = "#FF6E00";
                }
                this.showMax = true;
              }
            }



          }
        }


        // speedミリ秒後に自分自身を呼び出す
        // setTimeout(this.time_goes, this.interval)
        setTimeout(this.time_goes, this.interval)
      },
      GenerateFish() {
        // console.log("魚生成");

        if (this.isGameOver) {
          return;
        }

        var min = 0;
        var max = 3;

        var a = Math.floor(Math.random() * (max + 1 - min)) + min;

        if (a == 0) {
          this.showBombNum.push(this.bombNum);

          min = 0;
          max = 2;

          a = Math.floor(Math.random() * (max + 1 - min)) + min;

          switch (a) {
            case 0:
              this.$set(this.bombs[this.bombNum], "top", this.generateY)
              this.$set(this.bombs[this.bombNum], "left", this.x0)
              break;
            case 1:
              this.$set(this.bombs[this.bombNum], "top", this.generateY)
              this.$set(this.bombs[this.bombNum], "left", this.x1)
              break;
            case 2:
              this.$set(this.bombs[this.bombNum], "top", this.generateY)
              this.$set(this.bombs[this.bombNum], "left", this.x2)
              break;
          }

          this.$set(this.bombs[this.bombNum], "isShow", true)

          this.bombNum++;
          if (this.bombNum > 8) {
            this.bombNum = 0;
          }
        } else {
          this.showFishNum.push(this.fishNum);

          min = 0;
          max = 2;

          a = Math.floor(Math.random() * (max + 1 - min)) + min;

          switch (a) {
            case 0:
              this.$set(this.fishes[this.fishNum], "top", this.generateY)
              this.$set(this.fishes[this.fishNum], "left", this.x0)
              break;
            case 1:
              this.$set(this.fishes[this.fishNum], "top", this.generateY)
              this.$set(this.fishes[this.fishNum], "left", this.x1)
              break;
            case 2:
              this.$set(this.fishes[this.fishNum], "top", this.generateY)
              this.$set(this.fishes[this.fishNum], "left", this.x2)
              break;
          }


          this.$set(this.fishes[this.fishNum], "isShow", true)

          this.fishNum++;
          if (this.fishNum > 8) {
            this.fishNum = 0;
          }
        }


        // console.log(this.generateTime);

        setTimeout(this.GenerateFish, this.generateTime)
      },

      RightButtonDown() {
        if (this.isGameOver) {
          return;
        }
        this.$set(this.player, "left", this.x2)
        this.isRightTap = true;
      },
      LeftButtonDown() {
        if (this.isGameOver) {
          return;
        }
        this.$set(this.player, "left", this.x0)
        this.isLeftTap = true;
      },
      RightButtonUp() {
        if (this.isGameOver) {
          return;
        }
        this.isRightTap = false;
        if (!this.isLeftTap) {
          this.$set(this.player, "left", this.x1)
        } else {
          this.$set(this.player, "left", this.x0)
        }
      },
      LeftButtonUp() {
        if (this.isGameOver) {
          return;
        }
        this.isLeftTap = false;
        if (!this.isRightTap) {
          this.$set(this.player, "left", this.x1)
        } else {
          this.$set(this.player, "left", this.x2)
        }
      },
      SuccessEffect() {

        if (this.success.opacity <= 0) {
          return;
        } else {
          this.$set(this.success, "opacity", this.success.opacity - 0.1)
          this.$set(this.success, "width", this.success.width + 5)
          this.$set(this.success, "height", this.success.height + 5)
          this.$set(this.success, "top", this.success.top - 2.5)
          this.$set(this.success, "left", this.success.left - 2.5)
          setTimeout(this.SuccessEffect, 50)
        }


      },
      SpeedUp() {
        if (this.speedUpOpacity == 0.9) {
          this.speedUpOpacity -= 0.01;
          setTimeout(this.SpeedUp, 500)
        } else if (this.speedUpOpacity <= 0.1) {
          this.speedUpOpacity = 0;
          return;
        } else {
          this.speedUpOpacity -= 0.1;
          setTimeout(this.SpeedUp, 50)
        }

      },
      StartGame() {
        //初期化
        this.interval = 20;
        this.generateTime = 2000;
        this.fishNum = 0;
        this.bombNum = 0;
        this.level = 0;
        this.score = 0;

        this.showFishNum = [];
        this.showBombNum = [];

        this.RightButtonUp();
        this.LeftButtonUp();

        this.isStart = true;
        this.GenerateFish();
        this.time_goes();
      },
      GameOver() {
        this.isGameOver = true;
      },
      mouseOverAction() {
        this.startImgPath = require('../assets/img/webgame/startButton_hover.png')
      },
      mouseLeaveAction() {
        this.startImgPath = require('../assets/img/webgame/startButton.png')
      },

      ToGameTitle() {

        // this.$router.go({ name: 'webgame' })




        for (var i = 0; i < 9; i++) {
          this.$set(this.fishes[i], "isShow", false);
          this.$set(this.fishes[i], "top", this.generateY);
          this.$set(this.bombs[i], "isShow", false);
          this.$set(this.bombs[i], "top", this.generateY);
        }

        for (var j = 0; j < 21; j++) {
          this.speedGauge[j] = "#FFFFFF";
        }

        this.showMax = false;
        this.isGameOver = false;
        this.isStart = false;


      },

      LockScreen() {

        this.isLock = !this.isLock;

        if (this.isLock) {
          this.fixedButtonColor = "#FEC34C";
          this.fixedMessage = "固定を解除";
        } else {
          this.fixedButtonColor = "#F2F2F2";
          this.fixedMessage = "画面を固定";
        }



      }


    }



  }
</script>

<style scoped>
  .player {
    position: absolute;
    z-index: 5;
  }

  .fish {
    position: absolute;
    z-index: 6;
  }


  .cell {
    /* width, height, marginは消す */
    /* background: white; */
  }


  .game {
    position: relative;

    background-image: url(../assets/img/webgame/bg.jpg);
    margin: 0 auto;
    padding: 0;
    margin-top: 5%;
    /* background-color: burlywood; */

    width: 330px;
    height: 560px;

    pointer-events: none;

    border: solid;

    /* border-radius: 6px; */

  }

  /* グリッドレイアウト */
  .stage {
    /* background-image: url(../assets/img/webgame/bg2.jpg); */

    position: relative;

    width: 330px;
    height: 400px;

    display: grid;

    /* (列数, 幅) */
    grid-template-columns: repeat(11, 30px);
    /* (行数, 高さ) */
    grid-template-rows: repeat(40, 10px);





    /* background-color: skyblue; */

    margin: 0 auto;

    padding: 0;


  }

  .ui {
    /* height: 30px; */
    height: 60px;
    width: 100%;
    background-color: burlywood;

    position: relative;
    z-index: 7;
  }

  .ui button {
    padding-right: 5px;
    padding-left: 5px;
    margin: 0;
    height: 100%;
    background-color: salmon;
  }

  .line-box {
    width: 200px;
    /* heght: 100%;  */
    background-color: blue;
    text-align: center;
  }


  .line {
    background: white;
    opacity: 0.4;

  }

  .button-area {
    position: absolute;
    text-align: center;
    /* background-color: burlywood; */
    height: 100%;
    width: 100%;
    /* z-index: 10; */
  }

  .left-button {
    width: 50%;
    height: 100%;
    /* background-color: aquamarine; */
    float: left;
    /* z-index: 10; */
  }

  .right-button {
    width: 50%;
    height: 100%;
    /* background-color: antiquewhite; */
    float: left;
    /* z-index: 10; */
  }

  .footer-ui {
    height: 94px;
    /* padding-top: 10px; */
    background-color: burlywood;
    position: relative;
    z-index: 10;
  }

  .button {
    height: 70px;
    width: 50%;
    float: left;
    text-align: center;
    border: 2px solid;
    border-radius: 6px;

    background-color: skyblue;
    padding: 8px;

    /* z-index: 100; */
  }

  .footer-ui img {

    /* top: 10px; */
    /* padding: 0; */
    /* margin: 0; */
    /* padding-top: 10px; */
    width: 50px;
    height: 50px;

    /* z-index: 100; */
  }

  .speed-gauge {
    padding-top: 5px;
    /* width: 350px; */
  }

  .speed-gauge li {
    float: left;
    list-style: none;
    border: 1px solid;
    height: 20px;
    width: 3%;
    /* background-color: yellow; */
    padding-top: 5px;
    /* padding-bottom: 5px; */
  }


  .intro {
    background-image: url(../assets/img/webgame/tutorial.png);

    position: absolute;
    width: 300px;
    height: 300px;
    top: 14%;
    left: 4%;
    z-index: 10
  }

  .result {
    position: absolute;
    width: 300px;
    height: 300px;
    top: 14%;
    left: 4%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.7);
    /* opacity: 0.7; */

    padding-top: 20%;
  }

  .result h1 {
    opacity: 1;
    color: white;
    text-align: center;
  }

  .to-title-button {
    /* width: 130px; */
    font-size: 20px;


    text-align: center;

    padding: 10px 0 10px;
    margin: 15%;
    background: pink;
    border-radius: 20px;

    pointer-events: auto;
  }

  .start-button {
    position: absolute;
    width: 50%;
    top: 69%;
    left: 25px;
    text-align: center;
    pointer-events: auto;
    cursor: pointer;
  }

  .fixed-button {
    position: absolute;

    width: 80px;
    height: 50px;
    right: 30px;
    top: 72%;
    /* background-color: #F2F2F2; */
    border: 3px solid;
    border-color: #999999;
    /* color: white; */
    font-size: 13px;
    font-weight: bold;
    z-index: 10;
    /* opacity: 0.5; */

    pointer-events: auto;
  }


  .title {
    text-align: center;
    padding-top: 10%;
  }

  .title img {
    padding-bottom: 2%;
  }

  .title p {
    font-size: 2vw;
  }

  .title_m {
    text-align: center;
    padding-top: 20%;
  }

  .title_m img {
    padding-bottom: 2%;
  }
</style>