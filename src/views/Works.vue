<template>
  <div>




    <!-- スマホ -->
    <div v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
      <div class="title_m">
        <img src="../assets/img/works/title.png" alt="" width="80%">
        <p>お手軽操作のミニゲームを集めました！</p> 
        <p>アイコンをタップすると<br>AppStoreのページにとべます</p>        
      </div>
    </div>

    <div v-else>
      <div class="title">
        <img src="../assets/img/works/title.png" alt="" width="50%"> 
        <p>お手軽操作のミニゲームを集めました！</p>        
        <p>アイコンをタップすると<br>AppStoreのページにとべます</p>
      </div>
    </div>



    <ul class="apps">
      <li class="app">
        <a
          href="https://apps.apple.com/jp/app/%E3%82%AB%E3%83%AD%E3%83%90%E3%83%88-%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E6%96%99%E7%90%86%E5%AF%BE%E6%88%A6%E3%82%B2%E3%83%BC%E3%83%A0/id1552146498"><img
            src="../assets/img/works/CalBattle_icon.png" alt=""></a>
        <h2>カロバト</h2>
        <p>カロリーを武器に戦う対戦ゲーム。オンライン対戦も可能！！</p>
      </li>
      <li class="app">
        <a href="https://apps.apple.com/jp/app/flyingbird-hirusagari/id1513905536"><img
            src="../assets/img/works/FlyingBird_icon.png" alt=""></a>
        <h2>FlyingBird</h2>
        <p>連続タップで空を飛べ！ガケはしギリギリで飛び立つするのがコツだ</p>
      </li>
      <li class="app">
        <a href="https://apps.apple.com/jp/app/fpsblockbreaking-hirusagari/id1515008353"><img
            src="../assets/img/works/FPSBlockBreaking_icon.png" alt=""></a>
        <h2>FPSブロック崩し</h2>
        <p>ボールを弾くトランポリン視点の新感覚ブロック崩し</p>
      </li>
      <li class="app">
        <a href="https://apps.apple.com/jp/app/skyliner-hirusagari/id1519440877"><img
            src="../assets/img/works/SkyLiner_icon.png" alt=""></a>
        <h2>SkyLiner</h2>
        <p>インクで線を引いてスイカを運ぼう！インク切れには注意だ</p>
      </li>
      <li class="app">
        <a href="https://apps.apple.com/jp/app/erasedfloors-hirusagari/id1524047824"><img
            src="../assets/img/works/ErasedFloors_icon.png" alt=""></a>
        <h2>ErasedFloors</h2>
        <p>消える足場を見極めろ！長く生き残るサバイバルゲーム</p>
      </li>
      <li class="app">
        <a href="https://apps.apple.com/jp/app/gyroshooting-hirusagari/id1523193787"><img
            src="../assets/img/works/GyroShooting_icon.png" alt=""></a>
        <h2>GyroShooting</h2>
        <p>ジャイロ操作のシューティング。照準サポートモードも搭載</p>
      </li>
      <li class="app">
        <a href="https://apps.apple.com/jp/app/blockclimbing-hirusagari/id1522264306"><img
            src="../assets/img/works/BlockClimbing_icon.png" alt=""></a>
        <h2>BlockClimbing</h2>
        <p>ブロックに潰されないように登れ！綺麗に積むことがコツだ</p>
      </li>
      <li class="app">
        <a href="https://apps.apple.com/jp/app/crawlingdog/id1521829423"><img src="../assets/img/works/CrawlingDog_icon.png"
            alt=""></a>
        <h2>CrawlingDog</h2>
        <p>傾け操作でハードルを超えろ！時には下をくぐるのも大事</p>
      </li>
      <li class="app">
        <a href="https://apps.apple.com/jp/app/osumou-hirusagari/id1524182749"><img src="../assets/img/works/Osumou_icon.png"
            alt=""></a>
        <h2>Osumou</h2>
        <p>コマを押し出す新感覚パズルゲーム。2人対戦ゲームなので注意</p>
      </li>

    </ul>

  </div>

</template>


<style scoped>
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

  .apps {
    /* margin: 20%; */
    background-image: url(../assets/img/works/bg3.png);
    background-repeat: repeat;

    margin: auto;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    justify-content: center;
    padding-bottom: 10%;
  }

  .app {
    /* width: 100%; */
    width: 200px;

    margin: 100px 100px;
  }

  .app img {
    width: 100%;
  }

  .app h2 {
        text-align: center;
    font-weight: bold;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 20px;
  }

  .app p {
    text-align: center;
    padding-top: 3%;
    /* font-weight: bold; */
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 18px;
  }

  ul {
    list-style: none;
  }
</style>