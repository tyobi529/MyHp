<template>


  <!-- スマホ -->
  <div v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">

    <div class="intro">


      <div>
        <div class="title">
          <img src="../assets/img/calbattle/logo.png" alt="">
        </div>

        <div style="width=40%">
          <div class="badge" style="padding-bottom: 0">

                   <a href="https://apps.apple.com/jp/app/%E3%82%AB%E3%83%AD%E3%83%90%E3%83%88-%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E6%96%99%E7%90%86%E5%AF%BE%E6%88%A6%E3%82%B2%E3%83%BC%E3%83%A0/id1552146498?itsct=apps_box&amp;itscg=30200"
              style="overflow: hidden; border-radius: 13px; width: 100%; height: 100%; z-index: 5;">
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-JP?size=250x83&amp;releaseDate=1612396800&h=0f1068148dbb6aea0a09b7ec302f094e"
                alt="Download on the App Store" style="border-radius: 5%; width: 30%; height: 30%; z-index: 5; position: relative; vertical-align: middle;
">
            </a>

            <a
              href='https://play.google.com/store/apps/details?id=com.RyoMaeda.CalBattle&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
              <img width="40%" height="40%" alt='Google Play で手に入れよう'
                src='https://play.google.com/intl/us-en/badges/static/images/badges/ja_badge_web_generic.png'
                style="position: relative; z-index: 5; vertical-align: middle" />
            </a>

            <!-- <a href="https://apps.apple.com/jp/app/%E3%82%AB%E3%83%AD%E3%83%90%E3%83%88-%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E6%96%99%E7%90%86%E5%AF%BE%E6%88%A6%E3%82%B2%E3%83%BC%E3%83%A0/id1552146498?itsct=apps_box&amp;itscg=30200"
              style="overflow: hidden; border-radius: 13px; width: 100%; height: 100%; z-index: 5;">
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-JP?size=250x83&amp;releaseDate=1612396800&h=0f1068148dbb6aea0a09b7ec302f094e"
                alt="Download on the App Store" style="border-radius: 5%; width: 15%; height: 15%; z-index: 5; position: relative; vertical-align: middle;
">
            </a>

            <a
              href='https://play.google.com/store/apps/details?id=com.RyoMaeda.CalBattle&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
              <img width="20%" height="20%" alt='Google Play で手に入れよう'
                src='https://play.google.com/intl/us-en/badges/static/images/badges/ja_badge_web_generic.png'
                style="position: relative; z-index: 5; vertical-align: middle" />
            </a> -->

          </div>
        </div>

      </div>

            <img src="../assets/img/calbattle/cook_0.png" alt="" width="50%" style="position: absolute; bottom: 0">

      <img src="../assets/img/calbattle/cook_1.png" alt="" width="50%"
        style="position: absolute; right: 0; bottom: 0; transform: scale(-1, 1)">

      <!-- <img src="../assets/img/calbattle/cook_0.png" alt="" width="35%" style="position: absolute; bottom: 0">

      <img src="../assets/img/calbattle/cook_1.png" alt="" width="35%"
        style="position: absolute; right: 0; bottom: 0; transform: scale(-1, 1)"> -->

    </div>

    <div class="contents" style="background-color: #F07060;">
      <img src="../assets/img/calbattle/redText.png" alt="" width="60%" style="padding-bottom: 5%">

      <div class="content content_m">

        <div>

          <img src="../assets/img/calbattle/tutorial_0.png" alt="" width="100%">
          <p>「カロバト」は食べ物のカロリーを使って相手にダメージを与えるターン制の対戦ゲームだ！食べた物のカロリーがそのまま相手へのダメージになるぞ！！</p>
        </div>

        <img src="../assets/img/calbattle/photo_0.png" alt="" width="100%">
      </div>
    </div>

    <div class="contents" style="background-color: #FFFFBB;">
      <img src="../assets/img/calbattle/yellowText.png" alt="" width="60%" style="padding-bottom: 5%">

      <div class="content content_m">

        <div>

          <img src="../assets/img/calbattle/tutorial_1.png" alt="" width="100%">
          <p>食材を２つ合わせれば料理を作ることが出来る！料理にするとカロリーが跳ね上がり、料理ごとに特別な効果も発動する！！</p>
        </div>

        <img src="../assets/img/calbattle/photo_1.png" alt="" width="100%">


      </div>
    </div>

    <div class="contents" style="background-color: #3BAF75;">

      <img src="../assets/img/calbattle/greenText.png" alt="" width="60%" style="padding-bottom: 5%">

      <div class="content content_m">



        <div>

          <img src="../assets/img/calbattle/tutorial_2.png" alt="" width="100%">
          <p>バトル以外にもさまざまなモードがあるぞ！ゲーム内のミッションをクリアすれば新しいモードが開放されることも！？</p>
        </div>

        <img src="../assets/img/calbattle/photo_2.png" alt="" width="100%">

      </div>

    </div>

    <div class="contents" style="padding-bottom: 0">

      <img src="../assets/img/calbattle/whiteText.png" alt="" width="60%">




    </div>

    <div class="movie">
      <div class="video_m">
        <iframe src="https://www.youtube.com/embed/eBT6zkdA4FE" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>


  </div>

  <div v-else>

    <div class="intro">


      <div>
        <div class="title">
          <img src="../assets/img/calbattle/logo.png" alt="">
        </div>

        <div style="width=40%">
          <div class="badge">

            <a href="https://apps.apple.com/jp/app/%E3%82%AB%E3%83%AD%E3%83%90%E3%83%88-%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E6%96%99%E7%90%86%E5%AF%BE%E6%88%A6%E3%82%B2%E3%83%BC%E3%83%A0/id1552146498?itsct=apps_box&amp;itscg=30200"
              style="overflow: hidden; border-radius: 13px; width: 100%; height: 100%; z-index: 5;">
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-JP?size=250x83&amp;releaseDate=1612396800&h=0f1068148dbb6aea0a09b7ec302f094e"
                alt="Download on the App Store" style="border-radius: 5%; width: 15%; height: 15%; z-index: 5; position: relative; vertical-align: middle;
">
            </a>

            <a
              href='https://play.google.com/store/apps/details?id=com.RyoMaeda.CalBattle&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
              <img width="20%" height="20%" alt='Google Play で手に入れよう'
                src='https://play.google.com/intl/us-en/badges/static/images/badges/ja_badge_web_generic.png'
                style="position: relative; z-index: 5; vertical-align: middle" />
            </a>

          </div>
        </div>

      </div>

            <img src="../assets/img/calbattle/cook_0.png" alt="" width="40%" style="position: absolute; bottom: 0">

      <img src="../assets/img/calbattle/cook_1.png" alt="" width="40%"
        style="position: absolute; right: 0; bottom: 0; transform: scale(-1, 1)">

      <!-- <img src="../assets/img/calbattle/cook_0.png" alt="" width="35%" style="position: absolute; bottom: 0">

      <img src="../assets/img/calbattle/cook_1.png" alt="" width="35%"
        style="position: absolute; right: 0; bottom: 0; transform: scale(-1, 1)"> -->

    </div>

    <div class="contents" style="background-color: #F07060;">
      <img src="../assets/img/calbattle/redText.png" alt="" width="60%" style="padding-bottom: 5%">

      <div class="content">

        <img src="../assets/img/calbattle/photo_0.png" alt="" width="50%" style="float: left">

        <div>

          <img src="../assets/img/calbattle/tutorial_0.png" alt="" width="100%">
          <p>「カロバト」は食べ物のカロリーを使って相手にダメージを与えるターン制のオンライン対戦ゲームだ！食べた物のカロリーがそのまま相手へのダメージになるぞ！！</p>
        </div>
      </div>
    </div>

    <div class="contents" style="background-color: #FFFFBB;">
      <img src="../assets/img/calbattle/yellowText.png" alt="" width="60%" style="padding-bottom: 5%">

      <div class="content">

        <div>

          <img src="../assets/img/calbattle/tutorial_1.png" alt="" width="100%">
          <p>食材を２つ合わせれば料理を作ることが出来る！料理にするとカロリーが跳ね上がり、料理ごとに特別な効果も発動する！！</p>
        </div>

        <img src="../assets/img/calbattle/photo_1.png" alt="" width="50%" style="float: left">


      </div>
    </div>

    <div class="contents" style="background-color: #3BAF75;">

      <img src="../assets/img/calbattle/greenText.png" alt="" width="60%" style="padding-bottom: 5%">

      <div class="content">

        <img src="../assets/img/calbattle/photo_2.png" alt="" width="50%" style="float: left">

        <div>

          <img src="../assets/img/calbattle/tutorial_2.png" alt="" width="100%">
          <p>バトル以外にもさまざまなモードがあるぞ！ゲーム内のミッションをクリアすれば新しいモードが開放されることも！？</p>
        </div>


      </div>

    </div>

    <div class="contents" style="padding-bottom: 0">

      <img src="../assets/img/calbattle/whiteText.png" alt="" width="60%">



    </div>


    <div class="movie">
      <div class="video">
        <iframe src="https://www.youtube.com/embed/eBT6zkdA4FE" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>

  </div>




</template>

<style scoped>
  .intro {
    background-image: url(../assets/img/calbattle/kitchen.jpg);
    /* background-size: contain; */

    /* 画像を常に天地左右の中央に配置 */
    background-position: center center;

    /* 画像をタイル状に繰り返し表示しない */
    background-repeat: no-repeat;

    /* コンテンツの高さが画像の高さより大きい時、動かないように固定 */
    /* background-attachment: fixed; */

    /* 表示するコンテナの大きさに基づいて、背景画像を調整 */
    background-size: cover;
    /* background-size: contain; */

    position: relative;

    padding-bottom: 5%;

  }



  .title {
    text-align: center;

  }

  .title img {
    padding-top: 10%;
    width: 50%;
  }

  .title h2 {
    padding: 2%;
  }


  .badge {
    /* background-color: #EEEEEE; */
    /* padding-bottom: 10%; */

    /* text-align: center; */
    position: none;
    /* float: left; */
    text-align: center;
    padding-top: 3%;
    padding-bottom: 10%;
    z-index: 5;
  }




  .contents {

    margin: 0;

    display: flex;




    flex-wrap: wrap;
    justify-content: center;
    /* padding: 0; */
    /* padding-top: 10%; */
    padding: 10% 2%;
    /* text-align: center; */
    /* width: 90%; */

    /* align-items: center; */

    align-items: flex-start;

  }




  .content {
    width: 80%;
    text-align: center;
  }

  .content div {
    width: 50%;
    float: left;

    position: relative;
    /* display: inline-block; */
  }

  .content p {
    position: absolute;
    text-align: center;
    vertical-align: middle;
    top: 35%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    padding: 2%;
    color: black;
    /* font-size: 20px; */
    font-size: 2vw;
    width: 65%;

  }

  .content_m div {
    float: none;
    width: 100%;
  }

  .content_m p {
    font-size: 15px;
  }





  .video {
    text-align: center;
    position: relative;

    width: 100%;
    padding-top: 56.25%;

    

  }

  .video iframe {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    width: 60%;
    height: 60%;

    position: none;


    
    display: block;
    margin: 0 auto;
    z-index: 2;
    background-color: rgb(247, 187, 96); /*背景色・透明*/
    padding: 10px; /*枠線の太さ*/
    -webkit-box-shadow: 1px 1px 0 #C0C0C0; /*シャドウの設定*/
    -moz-box-shadow: 1px 1px 0 #C0C0C0; /*シャドウの設定*/
    box-shadow: 1px 1px 2px #ECECEC; /*シャドウの設定*/
border:1px solid #E0E0E0; /*ボーダーの太さ・種類・色*/

  }


  .video_m {
        text-align: center;
    position: relative;

    width: 100%;
    padding-top: 56.25%;

    margin-bottom: 20%;
  }

  .video_m iframe {
        position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    width: 80%;
    height: 80%;

    position: none;


    
    display: block;
    margin: 0 auto;
    z-index: 2;
    background-color: rgb(247, 187, 96); /*背景色・透明*/
    padding: 5px; /*枠線の太さ*/
    -webkit-box-shadow: 1px 1px 0 #C0C0C0; /*シャドウの設定*/
    -moz-box-shadow: 1px 1px 0 #C0C0C0; /*シャドウの設定*/
    box-shadow: 1px 1px 2px #ECECEC; /*シャドウの設定*/
border:1px solid #E0E0E0; /*ボーダーの太さ・種類・色*/
  }
</style>