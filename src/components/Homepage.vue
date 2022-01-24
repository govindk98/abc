<template>

<div class='main-home'>
    <div>
        <nav class="nav-bar">
            <div class="logo">
                <img id="logo-child" src="https://www.kindpng.com/picc/m/234-2347418_5th-edition-d-d-logo-hd-png-download.png" alt="logo" height="35px" width="70">
                <p>Dawa and Daru</p>
            </div>
            <form class="search-icon">
                <input type="text" name="search" placeholder="Search product..">
            </form>
            <div class="login">
                <button type="button">Login</button>
            </div>
            <div class="cart">
                <a href="#" ><img id="cart-child" src="https://www.pngitem.com/pimgs/m/81-813129_retail-icon-red-png-download-shopping-logo-black.png" height="50" width="50"></a>
            </div>
        </nav>
        <div class="cardcategory">
            <div class="cards_wrap">
                <div class="card_item">
                    <div class="card_inner">
                        <div class="card_top">
                            <a href="#" ><img id="card-1" src="https://www.qualitylogoproducts.com/images/_graphics/QuickShipBox.png?size=thumb_retina" alt="car" /></a>
                        </div>
                        <div class="card_bottom">
                            <div class="card_category">
                                Travel
                            </div>
                            <div class="card_info">
                                <p class="title">10 Best Things about Travel</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ab.
                                 </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
    </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'Homepage',
  data () {
    return { }
  }
}
</script>
<style >
.main-home{
    background-color: wheat;
    height: unset;

}
.nav-bar{
    padding: 10px;
    border: 5px;
    background-color: cadetblue;
    display:flex;
    justify-content:center;
    height: 70px;
}
.logo{
    position: absolute;
    margin-top:.5px;
    margin-bottom: 5px;
    margin-left: -1100px;
}
#logo-child{
    border-radius: 50%;
}

.search-icon{
    position: absolute;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: -100px;
    }

.login{
    position:absolute;
    margin-top: 10px;
    margin-right: -1100px;
}
    .cart{
        position: absolute;
        margin-right: -1300px;
    }
#cart-child{
    border-radius: 50%;
}
#cart-child:hover{
    opacity:0.8;
}
input{
    width:500px;
}
#card-1 {
  display: block;
  width: 100%;
  height: 100%;
}

.wrapper {
  width: 70%;
  margin: 20px auto;
}

.cards_wrap {
  display: flex;
  flex-wrap: wrap;
}

.cards_wrap .card_item {
  width: 25%;
  padding: 10px;
}

.cards_wrap .card_inner {
  background: #fff;
}

.cards_wrap .card_top {
  width: 70%;
  height: auto;
  padding: 10px;
  padding-bottom: 0;
}

.cards_wrap .card_bottom {
  padding: 15px;
}

.cards_wrap .card_bottom .card_category {
  text-transform: uppercase;
  text-align: center;
}

.cards_wrap .card_bottom .card_info {
  padding: 15px;
  margin: 10px 0;
  border: 1px dashed #0071bc;
}

.cards_wrap .card_bottom .card_info .title {
  color: #0071bc;
  font-size: 18px;
  margin-bottom: 5px;
}

.cards_wrap .card_bottom .card_creator {
  text-align: center;
}

@media (max-width: 1024px) {
  .cards_wrap .card_item {
    width: 33.3%;
  }
}

@media (max-width: 768px) {
  .cards_wrap .card_item {
    width: 50%;
  }
}

@media (max-width: 528px) {
  .cards_wrap .card_item {
    width: 70%;
  }
}

</style>
