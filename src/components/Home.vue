<template>
  <div style="height: 100%;width: 100%; overflow-x: hidden;">
    <div class="mainPage">
      <!--      <img src="@/assets/home_background.png" style="height: auto;width: 100%;z-index: -1;position:absolute;">-->
      <!--      <el-image :src="require('../assets/home_background.png')"-->
      <!--                style="z-index: -1;position:absolute;"></el-image>-->
      <picture style="width: 100%">
        <source srcset="../assets/home_background2.png" media="(max-width: 991px)">
        <source srcset="../assets/home_background.png" media="(min-width: 1920px)">
        <img
          class="headBackground"
          src="../assets/home_background.png" style="z-index: -1; position:absolute"
        />
      </picture>
      <el-row :span="24" style="height: 65px"></el-row>
      <el-row>
        <el-col :xs="{span: 2, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                :xl="{span: 2, push: 2}">
          <el-image :src="require('../assets/headLogo.png')" style="height: 40px; width: 116px;"></el-image>
        </el-col>
        <el-col class="hidden-md-and-down" :span="8" offset="8">
          <div>
            <el-row :gutter="40" type="flex" style="margin-top: 10px">
              <el-col>
                <div class="headFont">简介</div>
              </el-col>
              <el-col>
                <div class="headFont">特性</div>
              </el-col>
              <el-col>
                <div class="headFont">代币</div>
              </el-col>
              <el-col>
                <div class="headFont">线路图</div>
              </el-col>
              <el-col>
                <div class="headFont">社区</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :xs="{span: 2, push: 18}" :sm="{span: 2, push: 18}" :md="{span: 2, push: 18}" :lg="{span: 2, push: 2}"
                :xl="{span: 2, push: 2}" style="margin-top: 10px">
          <el-image :src="require('../assets/global.png')" style="width: 16px; height: 16px;"></el-image>
          <span style="color: white; position: absolute; bottom: 3px; margin-left: 5px; white-space: nowrap">中文</span>
        </el-col>
      </el-row>
      <el-row style="height: 153px"></el-row>
      <el-row type="flex">
        <el-col :xs="{span: 2, offset: 2}" :sm="{span: 2, offset: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                :xl="{span: 8, push: 4}">
          <div
            style="width: 336px;height: 78px;font-size: 56px;font-weight: 600;color: #E92F75;line-height: 78px; padding-bottom: 30px">
            曼巴精神不熄
          </div>
          <div style="width: 425px;height: 45px;font-size: 32px;font-weight: 600;color: #FFFFFF;line-height: 45px;">
            全球首个去中心化NFT纪念币
          </div>
        </el-col>
        <el-col :xs="{span: 14, push: 5}" :sm="{span: 14, push: 5}" :md="{span: 8, push: 6}" :lg="{span: 8, push: 6}"
                :xl="{span: 8, push: 6}">
          <img
            class="headPerson"
            src="../assets/head_person.png"
          />
        </el-col>
      </el-row>
    </div>
    <div style="height: auto; width: 100vw; background-color: black">
      <el-row style="height: 160px"></el-row>
      <el-row type="flex" justify="center">
        <el-col span="12" pull="2">
          <div style="width: 427px;height: 200px;font-size: 72px;font-weight: 600;color: #E92F75;line-height: 100px;">
            Kobe Bryant 文化遗产
          </div>
        </el-col>
      </el-row>
      <el-row style="height: 829px">
        <el-col :xs="{span: 14, push: 5}" :sm="{span: 14, push: 5}" :md="{span: 10, push: 4}" :lg="{span: 8, push: 5}"
                :xl="{span: 6, push: 5}">
          <div
            style="width: 100%;font-size: 18px;font-weight: 500;color: #FFFFFF;line-height: 24px; margin-top: 140px">
            Kobe Bryant是一个传奇人物，是坚韧、热爱、乐观、无谓和纪律的完美体现。
          </div>
          <div style="width: 100%;font-size: 18px;font-weight: 500;color: #FFFFFF;line-height: 24px; margin-top: 24px">
            “永远要强过昨天的自己，这是一场无尽的征程。”
            曼巴精神的内核，就在于不断追求更好的自己而努力，它就是一种生活的态度。愿曼巴精神在我们每一个人中继续前进。以KBN Token纪念Kobe Bryant，更将曼巴精神的烙印传遍每个角落。
          </div>
          <div style="width: 100%;font-size: 18px;font-weight: 500;color: #FFFFFF;line-height: 24px; margin-top: 24px">
            在洛杉矶湖人队的20年间，他赢得了五次NBA冠军，18次入选全明星，15次入选了NBA最佳阵容，2008年NBA最有价值球员（MVP）和两次入围NBA总决赛MVP。
          </div>
          <div style="width: 100%;font-size: 18px;font-weight: 500;color: #FFFFFF;line-height: 24px; margin-top: 50px">
            Kobe Bryant社区是尊重，欣赏，支持和热爱Kobe Bryant的人们的社区。在某种程度上，我们所有人都受到了科比·布莱恩特（Kobe
            Bryant）的启发。因此，我们在这里分享他的旅程，故事和心态。现在，让我们继续发扬他的灵感和动力，使全世界都知道，我们总是可以像他一生所证明的那样，为追求最好而努力。
          </div>
        </el-col>
        <el-col :xs="{span: 16, push: 7}" :sm="{span: 16, push: 7}" :md="{span: 8, push: 6}" :lg="{span: 8, push: 7}"
                :xl="{span: 6, push: 8}" style="padding-top: 50px">
          <el-image :src="require('../assets/body_kobe.png')"
                    style="height: 346px; width: 348px; z-index: 1"></el-image>
          <div style="margin-top: -150px; margin-left: 150px">
            <el-image :src="require('../assets/body_purple.png')" style="height: 436px; width: 436px;"></el-image>
          </div>
        </el-col>
      </el-row>
      <div>
        <el-row>
          <el-col :xs="{span: 13, push: 4}" :sm="{span: 14, push: 4}" :md="{span: 14, push: 4}"
                  :lg="{span: 6, push: 4}" :xl="{span: 6, push: 4}">
            <div style="height: 128px; width: 128px;">
              <el-image :src="require('../assets/icon1.png')"></el-image>
              <div class="iconFont">坚韧</div>
            </div>
            <div class="iconText" style="margin-left: 50px; width: 100%">
              <div style="margin-bottom: 24px">塑就强大内心</div>
              <div>永不屈服，以强大的内心应对每一个挫折与挑战，并从失败中强势归来。在科比20年的职业生涯中，坚韧的内心给予他不懈的动力，在追逐伟大的征程中不断前进。</div>
            </div>
            <div style="height: 64px"></div>
            <div style="height: 128px; width: 128px;">
              <el-image :src="require('../assets/icon3.png')"></el-image>
              <div class="iconFont">乐观</div>
            </div>
            <div class="iconText" style="margin-left: 50px; width: 100%">
              <div style="margin-bottom: 24px">把挫折视作机遇</div>
              <div>不论眼前面临多大的挑战，始终保持自信和积极的态度。乐观是自信的一种体现，只要愿意付出努力，最终一定会收获回报。</div>
            </div>
          </el-col>
          <el-col :xs="{span: 13, push: 4}" :sm="{span: 14, push: 4}" :md="{span: 14, push: 4}"
                  :lg="{span: 6, push: 8}" :xl="{span: 6, push: 8}">
            <div style="height: 128px; width: 128px;">
              <el-image :src="require('../assets/icon2.png')"></el-image>
              <div class="iconFont">热爱</div>
            </div>
            <div class="iconText" style="margin-left: 50px; width: 100%">
              <div style="margin-bottom: 24px">执着造就成功</div>
              <div>用不懈的坚持和奉献，让自己全身心投入到目标当中。对他来说，热爱就是曼巴精神的基石。激励着他们努力奋进，激发自己的全部潜能。</div>
            </div>
            <div style="height: 64px"></div>
            <div style="height: 128px; width: 128px;">
              <el-image :src="require('../assets/icon4.png')"></el-image>
              <div class="iconFont">无谓</div>
            </div>
            <div class="iconText" style="margin-left: 50px; width: 100%">
              <div style="margin-bottom: 24px">无谓失败</div>
              <div>尝试新鲜事物，即使失败后仍敢于再次发起挑战的勇气。失败不可怕，即使自知身处劣势，仍抱持永不放弃的精神，一次又一次地继续挑战。想要成为最出色的自己，就绝对不能畏惧失败。</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-row style="height: 194px"></el-row>
      <div>
        <div>
          <el-row>
            <el-col :xs="{span: 1, push: 2}" :sm="{span: 1, push: 2}" :md="{span: 1, push: 2}" :lg="{span: 1, push: 3}"
                    :xl="{span: 1, push: 2}">
              <div
                style="width: 64px;height: 32px;font-size: 32px;font-weight: 500;color: #FFFFFF;line-height: 32px; margin-bottom: 77px">
                特性
              </div>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-row>
            <el-col :xs="{span: 10, push: 8}" :sm="{span: 14, push: 9}" :md="{span: 15, push: 9}"
                    :lg="{span: 4, push: 4}" :xl="{span: 4, push: 4}">
              <div style="height: 164px; width: 164px;">
                <el-image :src="require('../assets/icon5.png')"></el-image>
              </div>
              <div class="iconTitle">可扩展</div>
              <div class="iconText2">KobeNFT使用其自己独特的分片技术解决了可扩展性普遍问题，建立完全分布式的支付系统</div>
            </el-col>
            <el-col :xs="{span: 14, push: 9}" :sm="{span: 14, push: 10}" :md="{span: 15, push: 10}"
                    :lg="{span: 4, push: 6}" :xl="{span: 4, push: 6}">
              <div style="height: 164px; width: 164px;">
                <el-image :src="require('../assets/icon6.png')"></el-image>
              </div>
              <div class="iconTitle">安全性</div>
              <div class="iconText2">基于智能合约的业务逻辑可持续且透明地在网络上分配所有价值。所有交易信息一成不变地存储在公共区块链上</div>
            </el-col>
            <el-col :xs="{span: 14, push: 9}" :sm="{span: 14, push: 10}" :md="{span: 15, push: 10}"
                    :lg="{span: 4, push: 8}" :xl="{span: 4, push: 8}">
              <div style="height: 164px; width: 164px;">
                <el-image :src="require('../assets/icon7.png')"></el-image>
              </div>
              <div class="iconTitle">可访问</div>
              <div class="iconText2">利用细分的网络，KobeNFT能够以分散的方式处理交易，在整个网络中整合全网NFT资产</div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div
      style="width: 100%; height: 332px; background: linear-gradient(270deg, #FF5045 0%, #E3287F 54%, #E32780 100%);">
      <el-row style="height: 90px"></el-row>
      <el-row>
        <el-col :xs="{span: 8, push: 2}" :sm="{span: 8, push: 4}" :md="{span: 8, push: 4}"
                :lg="{span: 6, push: 5}" :xl="{span: 6, push: 5}">
          <div style="height: 56px;font-size: 40px;font-weight: 600;color: #FFFFFF;line-height: 56px;">
            我们的重点是什么？
          </div>
        </el-col>
        <el-col :xs="{span: 10, push: 6}" :sm="{span: 10, push: 6}" :md="{span: 10, push: 6}"
                :lg="{span: 6, push: 9}" :xl="{span: 6, push: 9}">
          <div style="padding-bottom: 35px">
            <div
              style="width: 172px;height: 28px;font-size: 20px;font-weight: 600;color: #FFFFFF;line-height: 28px; white-space: nowrap; padding-bottom: 11px">
              不可替代令牌(NFT)
            </div>
            <div
              style="width: 210px;height: 20px;font-size: 14px;font-weight: 500;color: #FFFFFF;line-height: 20px;">
              使现实世界和数字资产更易于访问
            </div>
          </div>
          <div>
            <div
              style="width: 172px;height: 28px;font-size: 20px;font-weight: 600;color: #FFFFFF;line-height: 28px; white-space: nowrap; padding-bottom: 11px">
              去中心化金融
            </div>
            <div
              style="width: 210px;height: 20px;font-size: 14px;font-weight: 500;color: #FFFFFF;line-height: 20px;">
              使用户能够在开放的全球环境下与传统资产和数字资产进行交互。
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="color: green">---------------------------分割线-------------------------</div>
  </div>

</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>
* {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

@media screen and (max-width: 749px) {
  .mainPage {
    width: 100%;
    max-width: 100%;
    height: 500px;
  }

  .headBackground {
    width: 100vw;
    height: 500px;
  }

  .headPerson {
    width: 200px;
    height: 200px;
    margin-bottom: -350px;
    margin-left: -25px;
  }
}

@media screen and (min-width: 750px) and (max-width: 767px) {
  .mainPage {
    width: 100%;
    max-width: 100%;
    height: 778px;
  }

  .headBackground {
    width: 100vw;
    height: auto;
  }

  .headPerson {
    width: 400px;
    height: 400px;
    margin-bottom: -600px;
    margin-left: -110px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .mainPage {
    width: 100%;
    max-width: 100%;
    height: 778px
  }

  .headBackground {
    width: 100vw;
    height: auto;
  }

  .headPerson {
    width: 400px;
    height: 400px;
    margin-bottom: -600px;
    margin-left: -100px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .mainPage {
    width: 100%;
    max-width: 100%;
    height: 500px
  }

  .headBackground {
    width: 100vw;
    height: 500px;
  }

  .headPerson {
    width: 300px;
    height: 300px;
    margin-top: -75px;
    margin-left: 200px;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1919px) {
  .mainPage {
    width: 100%;
    max-width: 100%;
    height: 778px
  }

  .headBackground {
    width: 100vw;
    height: 778px;
  }

  .headPerson {
    width: 400px;
    height: 400px;
    margin-top: -50px;
    margin-left: 200px;
  }
}

@media screen and (min-width: 1920px) {
  .mainPage {
    width: 100%;
    max-width: 100%;
    height: 778px
  }

  .headBackground {
    width: 100vw;
    height: auto;
  }

  .headPerson {
    width: 400px;
    height: 400px;
  }
}

.headFont {
  color: white;
  white-space: nowrap;
}

.iconFont {
  width: 64px;
  height: 45px;
  font-size: 32px;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 45px;
  z-index: 2;
  margin-top: -70px;
  margin-left: 50px;
  position: absolute
}

.iconText {
  width: 427px;
  height: 144px;
  font-size: 18px;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 24px;
}

.iconTitle {
  width: 96px;
  height: 32px;
  font-size: 32px;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 32px;
  margin-left: 30px;
  padding-top: 50px;
  padding-bottom: 28px;
}

.iconText2 {
  width: 320px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #DDDDDD;
  line-height: 20px;
  margin-left: -60px;
  padding-bottom: 160px;
}
</style>
