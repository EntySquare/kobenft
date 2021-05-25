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
    <div style="width: 100%;height: 27.29vw;min-height: 320px">
      <img src="@/assets/home_dunk.png" style="height: auto;width: 100%;z-index: -1;position:absolute;min-height: 320px">
      <el-row :gutter="10">
        <div style="height: 3.29vw;">
        </div>
        <el-col :xs="1" :sm="1" :md="2" :lg="3" :xl="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="23" :sm="22" :md="20" :lg="19" :xl="18">
          <div id="id_text_72px_1"
               style="font-size: 48px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            由致敬Kobe Bryant的区块链
          </div>
          <div id="id_text_72px_2"
               style="font-size: 48px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            开发者创立
          </div>
          <div
            style="font-size: 14px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #FFFFFF;">
            现在，我们邀请每个人加入社区。走进全球Kobe Bryant球迷的内心世界，感受曼巴精神的无尽力量。
          </div>
          <div style="height: 2.29vw;"></div>
          <div
            style="font-size: 14px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #FFFFFF;float: left;"
            align="right">
            加入社区&nbsp;
          </div>
          <div style="">
            <img src="@/assets/home_pinkArrow.png" style="height: 50px;width: 50px;margin: -13px 0px 0px 11px">
          </div>
        </el-col>
        <el-col :xs="0" :sm="0" :md="2" :lg="2" :xl="2">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="0" :sm="1" :md="2" :lg="2" :xl="2">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
    </div>

    <!-- 什么是kbn token -->
    <!--    <div style="width: 100%;height: 41.97vw;background: black">-->
    <div style="width: 100%;height: 800px;background: black">
      <el-row :gutter="10">
        <el-col :xs="5" :sm="5" :md="13" :lg="13" :xl="13">  <div class="grid-content bg-purple-light"></div></el-col>
        <el-col :xs="17" :sm="17" :md="8" :lg="8" :xl="8">
          <img src="@/assets/home_decorative.png" style="height: auto;width: 100%;max-width: 800px">
        </el-col>
      </el-row>
      <div style="height: 10px"></div>
      <el-row :gutter="10">
        <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="3">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="{span: 20,offset:2,}" :sm="{span: 20,offset:2,}" :md="11" :lg="11" :xl="{span: 20,offset:4,}">
          <div style="font-size: 72px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #E92F75;margin-top: -30px">
            什么是 KBN Token
          </div>
        </el-col>
        <el-col :xs="1" :sm="1" :md="0" :lg="0" :xl="0">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="1" :sm="1" :md="0" :lg="0" :xl="0">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="{span: 20,offset:2,}" :sm="{span: 20,offset:2,}" :md="11" :lg="11" :xl="{span: 20,offset:4,}">
          <div style="font-size: 18px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            KBN Token是一种去中心化的NFT资产，旨在成为娱乐交互和文化的通用支付方式。独特的加密经济设计使其成为价值存储的理想方式。
            <div style="height: 5px"></div>
            KBN Token不仅具有存储价值，还可以执行智能合约及艺术、影视、音乐、文化、游戏都NFT化。并在所有社会创造活动中都具有可衡量和可转让的价值。
            <div style="height: 5px"></div>
            随着网络的增长和价值创造而扩展，激励生态中各种角色，保证协议正常运转
          </div>
        </el-col>
        <el-col :xs="0" :sm="0" :md="1" :lg="1" :xl="3">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
    <!-- 彩色扇形图 -->
    <div style="width: 100%;height: 45.94vw;max-height: 785px;min-height: 850px;">
      <img src="@/assets/home_colour.png" style="height: auto;width: 100%;z-index: -1;min-height: 850px;position:absolute;background: black">
      <el-row>
        <el-col :xs="{span: 23, push: 1 }" :sm="{span: 22, push: 2 }" :md="{span: 21, push: 1 }" :lg="{span: 21, push: 3 }" :xl="{span: 20, push: 4 }">
          <div style="height: 2.94vw;"></div>
          <div style="font-size: 32px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            KBN代币
          </div>
          <div style="height: 1.94vw;"></div>
          <div style="font-size: 16px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            KBN Token是基于以太坊 ERC721协议生态系统中用作娱乐交互和文化的治理代币
          </div>
          <div style="height: 1.94vw;"></div>
        </el-col>
        <div style="height: 10px"></div>
        <!--            :xs="{span: 24, offset: 0}" :xl="{span: 8, push: 4}"-->
        <el-col :xs="{span: 22,push:1,pull:1}" :sm="{span: 16,push:4,pull:2}" :md="{span: 11, push: 1}" :lg="{span: 9, offset:1, push: 2}" :xl="{span: 8, offset:2, push: 2}"
                style="max-width:700px;max-height: 385px;min-width: 445px">
          <div style="width: 100%;height: 358px;;background: #1E1E1E;border-radius: 18px;">
            <div style="height: 40px"></div>
            <el-row :gutter="20">
              <el-col :span="11" :offset="1" style="font-size: 16px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #FFFFFF;">
                <p style="padding-bottom: 15px;">上线日期：2021年第二季度</p>
                <p style="padding-bottom: 15px;">代币价格：$ 1</p>
                <p style="padding-bottom: 15px;">发行数：100,000,000</p>
                <p style="padding-bottom: 15px;">初始交易所发行量：50,000,000</p>
                <p style="padding-bottom: 15px;">最低交易金额：0.01</p>
              </el-col>
              <el-col :span="11" :offset="1" style="font-size: 16px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #FFFFFF;">
                <p style="padding-bottom:   15px;">首轮私募的4％</p>
                <p style="padding-bottom: 15px;">第二轮私募6％</p>
                <p style="padding-bottom: 15px;">治理委员会10%</p>
                <p style="padding-bottom: 15px;">生态系统3%</p>
                <p style="padding-bottom: 15px;">团队2%</p>
                <p style="padding-bottom: 15px;">市场：75％</p>
              </el-col>
            </el-row>
          </div>
          <div style="height: 1.94vw;"></div>
        </el-col>
        <el-col :xs="{span: 22,push:1,pull:1}" :sm="{span: 16,push:4,pull:2}" :md="{span: 11, offset:1, push: 1}" :lg="{span: 9, offset:1, push: 2}" :xl="{span: 8, offset:1, push: 2}"
                style="max-width:700px;max-height: 385px;min-width: 445px">
          <div style="width: 100%;height: 358px;background: #1E1E1E;border-radius: 18px;">
            <div style="font-size: 20px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #FFFFFF;line-height: 28px;padding: 30px 0px 0px 50px">
              KBN 分配计划
            </div>
            <el-row>
              <el-col :span="16" :offset="4">
                <div style="padding: 10px 50px 0px 50px">
                  <img src="@/assets/home_Fanchart.png" style="height: 100%;width: 100%;max-width:250px;
                      padding: 12px 13px 14px 25px">
                </div>
                <div style="padding: 00px 0px 0px 85px">
                  <tr style="width: 100%">
                    <td >
                      <div style="width: 8px;height: 8px;background: #6040FC;border-radius: 18px;"></div>
                    </td>
                    <div style="font-size: 12px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #FFFFFF;">&nbsp;私募</div>
                    <td>
                      &nbsp;
                    </td>
                    <td>
                      <div style="width: 8px;height: 8px;background: #00FFE1;border-radius: 18px;"></div>
                    </td>
                    <div style="font-size: 12px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #FFFFFF;">&nbsp;治理</div>
                    <td>
                      &nbsp;
                    </td>
                    <td>
                      <div style="width: 8px;height: 8px;background: #FF9B26;border-radius: 18px;"></div>
                    </td>
                    <div style="font-size: 12px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #FFFFFF;">&nbsp;生态</div>
                    <td>
                      &nbsp;
                    </td>
                    <td>
                      <div style="width: 8px;height: 8px;background: #FF4060;border-radius: 18px;"></div>
                    </td>
                    <div style="font-size: 12px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #FFFFFF;">&nbsp;团队</div>
                    <td>
                      &nbsp;
                    </td>
                    <td>
                      <div style="width: 8px;height: 8px;background: #36CFA2;border-radius: 18px;"></div>
                    </td>
                    <div style="font-size: 12px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #FFFFFF;">&nbsp;市场</div>
                    <td>
                      &nbsp;
                    </td>
                  </tr>
                </div>
              </el-col>
            </el-row>
          </div>
          <div style="height: 1.94vw;"></div>
        </el-col>
      </el-row>
    </div>

    <div style="width: 100%;height: 810px;background: black;">
      <el-row :gutter="10">
        <div style="height: 30px"></div>
        <el-col :xs="{span: 22,offset:1,}" :sm="{span: 20,offset:2,}" :md="{span: 11,offset:1,}" :lg="{span: 8,offset:3}" :xl="{span: 8,offset:3}">
          <div style="font-size: 72px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #E92F75;">
            第一次完全
            <div></div>
            真正的
            <div></div>
            NFT资产
          </div>
        </el-col>

        <el-col :xs="{span: 22,offset:1,}" :sm="{span: 20,offset:2,}" :md="{span: 11,offset:0}" :lg="{span: 8,offset:3}" :xl="{span: 8,offset:3}">
          <div class="hidden-sm-and-down">
            <div style="height: 180px"></div>
          </div>
          <div style="height: 20px"></div>
          <div style="background: #1E1E1E;width: 100%;height: 136px">
            <div style="padding: 32px">
              <div style="font-size: 18px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
                KBN Token用途是什么?
              </div>
              <div style="height: 20px"></div>
              <div style="font-size: 14px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #FFFFFF;">
                我们的代币用于社区治理，用户可以参与社区提案和投票决议，并获得红利。
              </div>
            </div>
          </div>
          <div style="height: 20px"></div>
          <div style="background: #1E1E1E;width: 100%;height: 136px">
            <div style="padding: 32px">
              <div style="font-size: 18px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
                如何购买KBN Token？
              </div>
              <div style="height: 20px"></div>
              <div style="font-size: 14px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #FFFFFF;">
                Uniswap链接在这里：<span style="color: #00FFE1">Uniswap</span>
              </div>
            </div>
          </div>
          <div style="height: 20px"></div>
          <div style="background: #1E1E1E;width: 100%;height: 136px">
            <div style="padding: 32px">
              <div style="font-size: 18px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
                KBN Token合约地址是什么？
              </div>
              <div style="height: 20px"></div>
              <div style="font-size: 14px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #FFFFFF;">
                以太坊主网上的代币合约地址：
              </div>
              <div style="height: 2px"></div>
              <div style="font-size: 14px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #00FFE1;">
                0xf30547ff2Df1F1CBE5C8DD758B3dd098C856e38f
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

    </div>
    <div style="width: 100%;height: 450px;background: linear-gradient(298deg, #FF5045 0%, #E3287F 43%, #E32780 100%)">
      <div class="hidden-sm-and-down">
        <div style="height: 100px"></div>
      </div>
      <div style="height: 70px"></div>
      <el-row :gutter="40">

        <el-col :xs="{span: 10,offset:2} " :sm="{span: 10,offset:2} " :md="{span: 5,offset:2,}" :lg="{span: 5,offset:2,}" :xl="{span: 4,offset:4,}">
          <div style="font-size: 24px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            2020
          </div>
          <div class="hidden-sm-and-down">
            <div style="height: 30px">
              <div style="color: #FFFFFF">●</div>
            </div>
          </div>
          <div style="font-size: 18px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            Q1～Q2
          </div>
          <div style="font-size: 14px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            - 项目启动，组建团队
            <p></p>
            - 发布KobeNFT线路图
            <p></p>
            &nbsp;
          </div>
        </el-col>
        <el-col :xs="{span: 10,offset:0,}" :sm="{span: 10,offset:0,}" :md="{span: 5,offset:0,}" :lg="{span: 5,offset:0,}" :xl="{span: 4,offset:0,}">
          <div style="font-size: 24px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            2020
          </div>
          <div class="hidden-sm-and-down">
            <div style="height: 30px">
              <div style="color: #FFFFFF">●</div>
            </div>
          </div>
          <div style="font-size: 18px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            Q3～Q4
          </div>
          <div style="font-size: 14px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            - 设计架构和共识
            <p></p>
            - 发布代币经济系统
            <p></p>
            - 获得天使轮投资
            <p></p>
            &nbsp;
          </div>
        </el-col>
        <el-col :xs="{span: 10,offset:2,}" :sm="{span: 10,offset:2,}" :md="{span: 5,offset:0,}" :lg="{span: 5,offset:0,}" :xl="{span: 4,offset:0,}">
          <div style="font-size: 24px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            2021
          </div>
          <div class="hidden-sm-and-down">
            <div style="height: 30px">
              <div style="color: #FFFFFF">●</div>
            </div>
          </div>
          <div style="font-size: 18px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            Q1～Q2
          </div>
          <div style="font-size: 14px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            - 发布内部产品测试
            <p></p>
            - 开放项目社群
            <p></p>
            - 上线交易所交易
            <p></p>
            &nbsp;
          </div>
        </el-col>
        <el-col :xs="{span: 10,offset:0 }" :sm="{span: 10,offset:0 }" :md="{span: 5,offset:0 }" :lg="{span: 5,offset:0 }" :xl="{span: 4,offset:0 }">
          <div style="font-size: 24px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            2021
          </div>
          <div class="hidden-sm-and-down">
            <div style="height: 30px">
              <div style="color: #FFFFFF">●</div>
            </div>
          </div>
          <div style="font-size: 18px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            Q3～Q4
          </div>
          <div style="font-size: 14px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
            - 发布社区治理
            <p></p>
            - 推出NFT市场
            <p></p>
            - 质押挖矿
            <p></p>
            &nbsp;
          </div>
        </el-col>
      </el-row>
      <div class="hidden-sm-and-down">
        <el-row :gutter="40">
          <el-col :xs="{span: 10,offset:0 }" :sm="{span: 10,offset:0 }" :md="{span: 18,offset:2 }" :lg="{span: 17,offset:2 }" :xl="{span: 13,offset:4 }">
            <div style="height: 1px;background: #FFFFFF;opacity: 0.48;width: 100%;margin: -125px 0px 0px 10px">
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div  style="width: 100%;height: 690px;background: black">
      <div style="height: 50px"></div>
      <el-row :gutter="10">
        <el-col :xs="{span: 22,offset:1,}" :sm="{span: 22,offset:1,}" :md="{span: 11,offset:1,}" :lg="{span: 10,offset:2,}" :xl="{span: 10,offset:2,}"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="{span: 22,offset:1,}" :sm="{span: 22,offset:1,}" :md="{span: 11,offset:0,}" :lg="{span: 10,offset:0,}" :xl="{span: 10,offset:0,}">
          <img src="@/assets/home_redLogo01.png" style="height: auto;width: 128px;">
          <div style="font-size: 14px;font-family: Skycoin-Regular, Skycoin;font-weight: 400;color: #FFFFFF;">
            KobeNFT是一个来自分布式计算、金融交易、区块链共识设计和跨链等
            <p></p>
            各领域经验丰富的团队。我们使用企业级硬件为PoS协议运行高度安全
            <p></p>
            可靠的节点，以确保最大的效率和安全性。
            <div style="height: 70px"></div>
            <div style="font-size: 14px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #FFFFFF;">
              联系我们
            </div>
            <div style="height: 20px;font-size: 14px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #FFFFFF;">
              bd@kobeNFT.io
            </div>
          </div>
        </el-col>
        <el-col :xs="{span: 22,offset:1,}" :sm="{span: 22,offset:1,}" :md="{span: 3,offset:2,}" :lg="{span: 3,offset:2,}" :xl="{span: 2,offset:4,}">
          <div id="introduction_to_the_bottom_red" style="margin: -227px 0px 0px 0px">
            <div style="font-size: 28px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #FFFFFF;">
              简介
              <span style="float:right ">+</span>
              <div style="height: 20px"></div>
            </div>
            <div style="font-size: 28px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #FFFFFF;">
              特性
              <span style="float:right ">+</span>
              <div style="height: 20px"></div>
            </div>
            <div style="font-size: 28px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #FFFFFF;">
              代币
              <span style="float:right ">+</span>
              <div style="height: 20px"></div>
            </div>
            <div style="font-size: 28px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #FFFFFF;">
              线路图
              <span style="float:right ">+</span>
              <div style="height: 20px"></div>
            </div>
            <div style="font-size: 28px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #FFFFFF;">
              社区
              <span style="float:right ">+</span>
              <div style="height: 20px"></div>
            </div>
          </div>
        </el-col>
      </el-row>

      <div class="hidden-sm-and-down">
        <div style="height: 260px"></div>
      </div>

      <div style="width: 100%;height: 1px;background: #222222;">
      </div>
      <div style="height:  20px"></div>
      <el-row :gutter="10">

        <el-col :xs="{span: 22,offset:1,}" :sm="{span: 22,offset:1,}" :md="{span: 8,offset:2,}" :lg="{span: 8,offset:2,}" :xl="{span: 8,offset:4,}">
          <div id="bottom_contact" style="font-size: 14px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;line-height: 20px;">
            © 2021 KobeNFT All rights reserved
          </div>
        </el-col>
        <el-col :xs="{span: 22,offset:1,}" :sm="{span: 22,offset:1,}" :md="{span: 5,offset:8,}" :lg="{span: 4,offset:6,}" :xl="{span: 4,offset:3}">
          <img src="@/assets/home_feixin_logo.png" style="height: 36px;width: 36px;white-space:nowrap">
          &nbsp;&nbsp;&nbsp;
          <img src="@/assets/home_twitter_logo.png" style="height: 36px;width: 36px;white-space:nowrap">
          &nbsp;&nbsp;&nbsp;
          <img src="@/assets/home_facebook_logo.png" style="height: 36px;width: 36px;white-space:nowrap">

        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
window.onload = function () {
  Adaptation()
}
window.onresize = function () {
  Adaptation()
}

function Adaptation () {
  var docWidth = document.body.clientWidth.valueOf()
  console.log('111')
  if (docWidth >= 992) {
    document.getElementById('introduction_to_the_bottom_red').style.margin = '-227px 0px 0px 0px'
    document.getElementById('bottom_contact').style.margin = '0px'
    document.getElementById('bottom_contact').style.position = ''
    document.getElementById('bottom_contact').style.top = ''
  } else {
    document.getElementById('introduction_to_the_bottom_red').style.margin = '0px'
    document.getElementById('bottom_contact').style.position = 'absolute'
    document.getElementById('bottom_contact').style.top = '45px'
  }
}

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

/*备注g*/
.el-col {
  /*border-radius: 4px;*/
}

.bg-purple {
  background: transparent;
}

.bg-purple-light {
  background: transparent;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
