<template>
  <div style="height: 100%;width: 100%; overflow-x: hidden;position:fixed">
    <div class="mainPage">
      <!--      <img src="@/assets/home_background.png" style="height: auto;width: 100%;z-index: -1;position:absolute;">-->
      <!--      <el-image :src="require('../assets/home_background.png')"-->
      <!--                style="z-index: -1;position:absolute;"></el-image>-->
      <picture style="width: 100%">
        <source
          srcset="https://kbtoken.oss-cn-beijing.aliyuncs.com/token/home_background2.png"
          media="(max-width: 991px)"
        />
        <source
          srcset="https://kbtoken.oss-cn-beijing.aliyuncs.com/token/home_background.png"
          media="(min-width: 1920px)"
        />
        <img
          class="headBackground"
          src="https://kbtoken.oss-cn-beijing.aliyuncs.com/token/home_background.png"
          style="z-index: -1; position:absolute"
        />
      </picture>
      <el-row :span="24" style="height: 65px"></el-row>
      <div style="">
        <el-row>
          <el-col
            :xs="{ span: 3, push: 1 }"
            :sm="{ span: 3, push: 2 }"
            :md="{ span: 3, push: 2 }"
            :lg="{ span: 3, push: 2 }"
            :xl="{ span: 3, push: 2 }"
            style=""
          >
            <router-link to="/">
              <el-image
                :src="'https://utility-01.oss-cn-beijing.aliyuncs.com/logo.png'"
                style="height: 40px; width: 92px;margin-top: -13px"
              ></el-image>
            </router-link>
          </el-col>
          <el-col
            :xs="{ span: 12, push: 3 }"
            :sm="{ span: 12, push: 3 }"
            :md="{ span: 12, push: 3 }"
            :lg="{ span: 8, push: 5 }"
            :xl="{ span: 8, push: 5 }"
            style=""
          >
            <el-row>
              <el-col span="8">
                <div
                  style="font-size: 16px;font-weight: 500;color: #FFFFFF;float: right"
                >
                  <!--                  <a href="imtokenv2://navigate/DappView?url=http%3A%2F%2F156.240.109.163%3A3200%2F"  @click="goToTokenUrl()" style="color: #FFFFFF; text-decoration:none; cursor: pointer; font-size: 16px;float: right;font-weight: 500;">-->
<!--                  <a-->
<!--                    @click="goToTokenUrl()"-->
<!--                    style="color: #FFFFFF; text-decoration:none; cursor: pointer; font-size: 16px;float: right;font-weight: 500;"-->
<!--                  >-->
<!--                    IDO-->
<!--                  </a>-->
                </div>
              </el-col>
              <el-col span="8">
                <div
                  style="font-size: 16px;font-weight: 500;color: #FFFFFF;float: right;"
                >
                  <!-- <router-link
                    to="/market"
                    style="color: #FFFFFF; text-decoration:none; cursor: pointer; font-size: 16px;float: right;font-weight: 500;"
                  > -->
                  <router-link
                    to="/"
                    style="color: #FFFFFF; text-decoration:none; cursor: pointer; font-size: 16px;float: right;font-weight: 500;"
                  >
                    Game
                  </router-link>
                </div>
              </el-col>
              <!-- <el-col span="8">
                <div class="">
                  <a
                    @click="goToTokenUrl()"
                    style="color: #FFFFFF; text-decoration:none; cursor: pointer; font-size: 16px;float: right;font-weight: 500;"
                  >
                    {{ $t('m.t6') }}
                                       <el-image :src="require('https://kbtoken.oss-cn-beijing.aliyuncs.com/token/fire_icon.png')" style="width: 16px; height: 16px;"></el-image>
                  </a>
                </div>
              </el-col> -->
            </el-row>
          </el-col>
          <el-col
            :xs="{ span: 3, push: 6 }"
            :sm="{ span: 3, push: 4 }"
            :md="{ span: 3, push: 4 }"
            :lg="{ span: 3, push: 8 }"
            :xl="{ span: 3, push: 8 }"
            style="margin-top: -4px"
          >
            <!--            <el-image :src="require('https://kbtoken.oss-cn-beijing.aliyuncs.com/token/global.png')" style="width: 16px; height: 16px;"></el-image>-->
            <!--                    <span style="color: white; position: absolute; bottom: 3px; margin-left: 5px; white-space: nowrap">中文</span>-->
            <select
              id="select_languages"
              v-model="languages"
              @change="getValue"
              style="color: white; position: absolute; white-space: nowrap;background: transparent;appearance:none;border: 0;outline:none;font-size: 16px;font-weight: 500;"
            >
              <option
                style="color: white; position: absolute; bottom: 3px; margin-left: 5px; white-space: nowrap"
                value="zh"
                >中文
              </option>
              <option
                style="color: white; position: absolute; bottom: 3px; margin-left: 5px; white-space: nowrap"
                value="en"
                >EN
              </option>
              <option
                style="color: white; position: absolute; bottom: 3px; margin-left: 5px; white-space: nowrap"
                value="ko"
                >한국어
              </option>
              <option
                style="color: white; position: absolute; bottom: 3px; margin-left: 5px; white-space: nowrap"
                value="ja"
                >日本語
              </option>
            </select>
          </el-col>
        </el-row>
      </div>

      <el-row style="">
        <div style="height: 200px"></div>
        <el-col
          :xs="{ span: 22, push: 2 }"
          :sm="{ span: 2, push: 2 }"
          :md="{ span: 2, push: 2 }"
          :lg="{ span: 2, push: 2 }"
          :xl="{ span: 8, push: 2 }"
        >
          <div class="headTitle">
            <!--曼巴精神不熄-->
            {{ $t('m.m1') }}
          </div>
          <div class="headSubTitle">
            <!--            全球首个去中心化NFT纪念币-->
            <!-- {{ $t('m.m2') }} -->
            <div style="height: 40px"></div>
          </div>
        </el-col>
        <el-col
          :xs="{ span: 24 }"
          :sm="{ span: 9, push: 10 }"
          :md="{ span: 8, push: 11 }"
          :lg="{ span: 8, push: 9 }"
          :xl="{ span: 8, push: 2 }"
        >
          <!--          <img-->
          <!--            class="headPerson"-->
          <!--            src="https://kbtoken.oss-cn-beijing.aliyuncs.com/token/head_person.png"-->
          <!--          />-->
          <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="false"
            :options="playerOptions"
          >
          </video-player>
        </el-col>
      </el-row>
    </div>
    <div style="width: 100%; background-color: black">
      <el-row style="height: 100px"></el-row>
      <el-row>
        <el-col
          :xs="{ span: 19, push: 2 }"
          :sm="{ span: 19, push: 3 }"
          :md="{ span: 17, push: 4 }"
          :lg="{ span: 15, push: 4 }"
          :xl="{ span: 16, push: 4 }"
          style=""
        >
          <div class="bodyTitle1" style="width: 100%">
            <!--            “曼巴”精神的延续…-->
            {{ $t('m.m3') }}
          </div>
        </el-col>
      </el-row>
      <el-row style="background: black">
        <el-col
          :xs="{ span: 20, push: 2 }"
          :sm="{ span: 18, push: 3 }"
          :md="{ span: 12, push: 4 }"
          :lg="{ span: 11, push: 4 }"
          :xl="{ span: 9, push: 4 }"
        >
          <div
            class="bodyText1"
            style="color: #E92F75;font-weight: 600;font-size: 32px;line-height:1.4;"
          >
            <!--            当KB Token与元宇宙-->
            {{ $t('m.m4') }}
            <div></div>
            <!--            碰撞的奇幻妙想-->
            {{ $t('m.m5') }}
          </div>
          <div
            class="bodyText2"
            style="width: 100%;font-weight: 500;color: #FFFFFF;line-height: 24px;"
          >
            <!--            如果把现实生活中一切搬进虚拟世界，会是什么样？-->
            {{ $t('m.m6') }}
            <p style="height: 20px"></p>
            <!--            如果把我们心中共同的偶像重新在虚拟世界中复制出来，会是什么样？-->
            {{ $t('m.m7') }}
            <p style="height: 20px"></p>
            <!--            生命的尽头不是死亡，而是被遗忘，心系不舍的人，请别停止想念。Kobe Bryant，一个坚韧、热爱、乐观、无谓和纪律的代名词，他身上所承载的信仰，是我们对他难以割舍的原因，也是我们与他精神永系的基础。-->
            {{ $t('m.m8') }}
            <p style="height: 20px"></p>
            <!--            所以在这里我们将做一件事，由致敬Kobe Bryant的区块链开发者通过打造一个专属于Kobe Bryant的社区，将Kobe这个身份复制到一个无比真实的虚拟世界中，以这种方式延续"黑曼巴"的传奇。在这里我们将分享他的旅程、故事和心态，让曼巴精神时刻在我们身旁发生着，贯穿一切生活的本质，而不仅仅只在篮球场上。-->
            {{ $t('m.m9') }}
            <p style="height: 100px"></p>
            <div style="font-size: 32px;font-weight: 600;color: #E92F75;">
              <!--                什么是元宇宙-->
              {{ $t('m.m10') }}
            </div>
            <p style="height: 40px"></p>
            {{ $t('m.m11') }}
          </div>
        </el-col>
        <el-col
          :xs="{ span: 16, push: 2 }"
          :sm="{ span: 16, push: 7 }"
          :md="{ span: 8, push: 6 }"
          :lg="{ span: 8, push: 5 }"
          :xl="{ span: 12, push: 7 }"
          style="padding-top: 50px;"
        >
          <el-image
            :src="require('../assets/body_kobe.png')"
            style="height: 250px; width: 250px; "
          ></el-image>
          <div style="margin-top: -150px; margin-left: 50px">
            <el-image
              :src="require('../assets/body_purple.png')"
              style="height: 436px; width: 436px;"
            ></el-image>
          </div>
        </el-col>
      </el-row>
      <div>
        <el-row>
          <el-col
            :xs="{ span: 22, push: 1 }"
            :sm="{ span: 18, push: 3 }"
            :md="{ span: 17, push: 4 }"
            :lg="{ span: 18, push: 4 }"
            style=""
          >
            <div style="height: 100px"></div>
            &nbsp;
          </el-col>
        </el-row>
      </div>
      <div>
        <el-row>
          <el-col
            :xs="{ span: 20, push: 2 }"
            :sm="{ span: 18, push: 3 }"
            :md="{ span: 17, push: 4 }"
            :lg="{ span: 7, push: 4 }"
            style=";"
          >
            <!--            <div style="ont-weight: 500;font-size: 18px;color: #FFFFFF;height: 300px">-->
            <div style="max-width: 800px">
              <video-player
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="false"
                :options="playerOptions2"
              >
              </video-player>
            </div>
          </el-col>
          <el-col
            :xs="{ span: 18, push: 3 }"
            :sm="{ span: 18, push: 3 }"
            :md="{ span: 17, push: 4 }"
            :lg="{ span: 8, push: 5 }"
            style=""
          >
            <div style="height: 50px"></div>
            <div style="font-size: 32px;font-weight: 600;color: #E92F75;">
              <!--              Kobe Bryant亲密战友 强烈支持KB24-->
              {{ $t('m.m14') }}
              <div style="height: 50px"></div>
            </div>
            <div style="font-weight: 500;color: #FFFFFF">
              <div style="font-weight: 500;font-size: 20px;">
                <!--               NBA球星-加索尔：-->
                {{ $t('m.k1') }}
              </div>
              <div style="height: 15px"></div>
              <div style="font-weight: 500;font-size: 16px;">
                <!--               对KB24的创新表示赞赏，以及对“曼巴精神”的信仰和崇拜-->
                {{ $t('m.k2') }}
              </div>
              <div style="height: 30px"></div>
              <div style="font-weight: 500;font-size: 20px;">
                <!--                NBA球星-奥多姆：-->
                {{ $t('m.k3') }}
              </div>
              <div style="height: 15px"></div>
              <div style="font-weight: 500;font-size: 16px;">
                <!--                对KB24的热爱。作为kobe的信徒之一，鼓励粉丝为更好而努力坚持-->
                {{ $t('m.k4') }}
              </div>
              <div style="height: 30px"></div>
              <div style="font-weight: 500;font-size: 20px;">
                <!--                NBA球星-菲舍尔：-->
                {{ $t('m.k5') }}
              </div>
              <div style="height: 15px"></div>
              <div style="font-weight: 500;font-size: 16px;">
                <!--                对KB24的创新表示赞赏，以及对“曼巴精神”的信仰和崇拜-->
                {{ $t('m.k6') }}
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <div style="height: 100px"></div>
        <el-row style="">
          <el-col
            :xs="{ span: 20, push: 2 }"
            :sm="{ span: 17, push: 3 }"
            :md="{ span: 17, push: 4 }"
            :lg="{ span: 8, push: 4 }"
            :xl="{ span: 7, push: 4 }"
            style="background: linear-gradient(270deg, #000000 0%, #131415 100%);height: 200px;border-radius: 16px;padding-top: 30px;padding-left: 100px;padding-right: 30px;margin-bottom: 60px"
          >
            <img
              src="https://kbtoken.oss-cn-beijing.aliyuncs.com/token/new1.png"
              style="height: 92px;width: 88px;margin: 78px 0px -150px -100px"
            />
            <div style="color: #FFFFFF">
              <!--             KB24定义是 NFT 元宇宙，您可以在其中收集和玩独特的数字项目。-->
              {{ $t('m.q1') }}
            </div>
          </el-col>
          <el-col
            :xs="{ span: 20, push: 2 }"
            :sm="{ span: 17, push: 3 }"
            :md="{ span: 17, push: 4 }"
            :lg="{ span: 8, push: 6 }"
            :xl="{ span: 7, push: 7 }"
            style="background: linear-gradient(270deg, #000000 0%, #131415 100%);height: 200px;border-radius: 16px;padding-top: 30px;padding-left: 100px;padding-right: 30px;margin-bottom: 30px"
          >
            <img
              src="https://kbtoken.oss-cn-beijing.aliyuncs.com/token/new2.png"
              style="height: 92px;width: 88px;margin: 78px 0px -150px -100px"
            />
            <div style="color: #FFFFFF">
              <!--              KB24作为通往现实经济和NFT世界的枢纽，将联动Kobe Bryant社区用户，真正实现价值和价格的跨越。-->
              {{ $t('m.q2') }}
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <div style="height: 30px"></div>
        <el-row style="">
          <el-col
            :xs="{ span: 20, push: 2 }"
            :sm="{ span: 17, push: 3 }"
            :md="{ span: 17, push: 4 }"
            :lg="{ span: 8, push: 4 }"
            :xl="{ span: 7, push: 4 }"
            style="background: linear-gradient(270deg, #000000 0%, #131415 100%);height: 200px;border-radius: 16px;padding-top: 30px;padding-left: 100px;padding-right: 30px;margin-bottom: 60px"
          >
            <img
              src="https://kbtoken.oss-cn-beijing.aliyuncs.com/token/new3.png"
              style="height: 92px;width: 88px;margin: 78px 0px -150px -100px"
            />
            <div style="color: #FFFFFF">
              <!--              KB24用户可以一键创建NFT,并将他们启动到流动市场中，无需编码。-->
              {{ $t('m.q3') }}
            </div>
          </el-col>
          <el-col
            :xs="{ span: 20, push: 2 }"
            :sm="{ span: 17, push: 3 }"
            :md="{ span: 17, push: 4 }"
            :lg="{ span: 8, push: 6 }"
            :xl="{ span: 7, push: 7 }"
            style="background: linear-gradient(270deg, #000000 0%, #131415 100%);height: 200px;border-radius: 16px;padding-top: 30px;padding-left: 100px;padding-right: 30px;margin-bottom: 30px"
          >
            <img
              src="https://kbtoken.oss-cn-beijing.aliyuncs.com/token/new4.png"
              style="height: 92px;width: 88px;margin: 78px 0px -150px -100px"
            />
            <div style="color: #FFFFFF">
              <!--              创作者在二级销售中的80%版税奖励持有KB的用户。-->
              {{ $t('m.q4') }}
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <div style="height: 100px"></div>
        <div
          style="height: 200px;width: 100%;background: black;font-size: 72px;font-weight: 600;color: #E92F75;"
        >
          <el-row>
            <el-col
              :xs="{ span: 20, push: 2 }"
              :sm="{ span: 20, push: 4 }"
              :md="{ span: 20, push: 4 }"
              :lg="{ span: 20, push: 4 }"
              :xl="{ span: 20, push: 4 }"
            >
              <div id="new-text-1">
                <!--                “曼巴”文化遗产-->
                {{ $t('m.j1') }}
              </div>
            </el-col>
          </el-row>
        </div>
        <el-row>
          <el-col
            :xs="{ span: 18, push: 1 }"
            :sm="{ span: 14, push: 4 }"
            :md="{ span: 14, push: 4 }"
            :lg="{ span: 6, push: 4 }"
            :xl="{ span: 6, push: 4 }"
            style=""
          >
            <div style="height: 128px; width: 128px;">
              <el-image :src="require('../assets/icon1.png')"></el-image>
              <div class="iconFont">
                <!--                坚韧-->
                {{ $t('m.m15') }}
              </div>
            </div>
            <div class="iconText" style="margin-left: 50px; width: 100%">
              <div style="margin-bottom: 24px">
                <!--                塑就强大内心-->
                {{ $t('m.m16') }}
              </div>
              <div>
                <!--                永不屈服，以强大的内心应对每一个挫折与挑战，并从失败中强势归来。在科比20年的职业生涯中，坚韧的内心给予他不懈的动力，在追逐伟大的征程中不断前进。-->
                {{ $t('m.m17') }}
              </div>
            </div>
            <div style="height: 64px"></div>
            <div style="height: 128px; width: 128px;">
              <el-image :src="require('../assets/icon3.png')"></el-image>
              <div class="iconFont">
                <!--                乐观-->
                {{ $t('m.m18') }}
              </div>
            </div>
            <div class="iconText" style="margin-left: 50px; width: 100%">
              <div style="margin-bottom: 24px">
                <!--                把挫折视作机遇-->
                {{ $t('m.m19') }}
              </div>
              <div>
                <!--                不论眼前面临多大的挑战，始终保持自信和积极的态度。乐观是自信的一种体现，只要愿意付出努力，最终一定会收获回报。-->
                {{ $t('m.m20') }}
              </div>
            </div>
          </el-col>
          <el-col
            :xs="{ span: 18, push: 1 }"
            :sm="{ span: 14, push: 4 }"
            :md="{ span: 14, push: 4 }"
            :lg="{ span: 6, push: 8 }"
            :xl="{ span: 6, push: 8 }"
            style=""
            class="iconPadding"
          >
            <div style="height: 128px; width: 128px;">
              <el-image :src="require('../assets/icon2.png')"></el-image>
              <div class="iconFont">
                <!--                热爱-->
                {{ $t('m.m21') }}
              </div>
            </div>
            <div class="iconText" style="margin-left: 50px; width: 100%">
              <div style="margin-bottom: 24px">
                <!--                执着造就成功-->
                {{ $t('m.m22') }}
              </div>
              <div>
                <!--                用不懈的坚持和奉献，让自己全身心投入到目标当中。对他来说，热爱就是曼巴精神的基石。激励着他们努力奋进，激发自己的全部潜能。-->
                {{ $t('m.m23') }}
              </div>
            </div>
            <div style="height: 64px"></div>
            <div style="height: 128px; width: 128px;">
              <el-image :src="require('../assets/icon4.png')"></el-image>
              <div class="iconFont">
                <!--                无谓-->
                {{ $t('m.m24') }}
              </div>
            </div>
            <div class="iconText" style="margin-left: 50px; width: 100%">
              <div style="margin-bottom: 24px">
                <!--                无谓失败-->
                {{ $t('m.m25') }}
              </div>
              <div>
                <!--                无谓失败 尝试新鲜事物，即使失败后仍敢于再次发起挑战的勇气。失败不可怕，即使自知身处劣势，仍抱持永不放弃的精神，一次又一次地继续挑战。想要成为最出色的自己，就绝对不能畏惧失败。-->
                {{ $t('m.m26') }}
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-row style="height: 194px"></el-row>
    </div>

    <div
      style="width: 100%; height: 432px; background: linear-gradient(270deg, #FF5045 0%, #E3287F 54%, #E32780 100%);"
    >
      <el-row style="height: 50px"></el-row>
      <div class="hidden-sm-and-down">
        <div style="height: 40px"></div>
      </div>
      <el-row>
        <el-col
          :xs="{ span: 20, push: 2 }"
          :sm="{ span: 8, push: 3 }"
          :md="{ span: 8, push: 1 }"
          :lg="{ span: 8, push: 4 }"
          :xl="{ span: 7, push: 4 }"
        >
          <div class="focusFont1" style="line-height:1.3">
            <!--            创造一个平行宇宙，将Kobe在元宇宙中构建出来。-->
            {{ $t('m.m34') }}
          </div>
        </el-col>
        <el-col
          :xs="{ span: 20, push: 2 }"
          :sm="{ span: 10, push: 4 }"
          :md="{ span: 12, push: 3 }"
          :lg="{ span: 8, push: 6 }"
          :xl="{ span: 10, push: 5 }"
          style=""
        >
          <div style="height: 30px"></div>
          <div style="padding-bottom: 35px">
            <div class="focusFont2">
              <!--              重塑新的商业价值-->
              {{ $t('m.m35') }}
            </div>
            <div class="focusFont3">
              <!--              使用户能够在开放的全球环境下与传统资产和数字资产进行交互。-->
              {{ $t('m.m36') }}
            </div>
          </div>
          <div>
            <div class="focusFont2">
              <!--              KB24将成为NFT新趋势-->
              {{ $t('m.m37') }}
            </div>
            <div class="focusFont3">
              <!--              Kobe被虚拟进入元宇宙，延续曼巴精神，NFT只是元宇宙里面的一个应用之一-->
              {{ $t('m.m38') }}
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div
      :style="{
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundImage: 'url(' + require('@/assets/home_dunk.png') + ')'
      }"
    >
      <!--      <img src="@/assets/home_dunk.png"-->
      <!--           style="height: auto;width: 100%;z-index: -1;position:absolute;min-height: 320px">-->
      <el-row :gutter="10">
        <div style="height: 80px;"></div>
        <el-col :xs="1" :sm="3" :md="1" :lg="4" :xl="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="{ span: 20, push: 1 }" :sm="21" :md="20" :lg="18" :xl="18">
          <div style="height: 10px"></div>
          <div
            id="id_text_72px_1"
            style="font-size: 48px;font-weight: 500;color: #FFFFFF;"
          >
            <!--            为追求最好而努力，-->
            {{ $t('m.m39') }}
          </div>
          <div
            id="id_text_72px_2"
            style="font-size: 48px;font-weight: 500;color: #FFFFFF;"
          >
            <!--            以KB24纪念Kobe Bryant-->
            {{ $t('m.m40') }}
          </div>
          <div style="height: 40px;"></div>
          <div style="font-size: 14px;font-weight: 600;color: #FFFFFF;">
            <!--            Kobe Bryant社区是尊重，欣赏，支持和热爱KobeBryant的人们的社区-->
            {{ $t('m.m41') }}
          </div>
          <div style="height: 20px;"></div>
          <div
            style="font-size: 14px;font-weight: 600;color: #FFFFFF;float: left;"
            align="right"
          >
            <!--            加入社区-->
            {{ $t('m.m42') }}
          </div>
          <div style="">
            <img
              src="@/assets/home_pinkArrow.png"
              style="height: 50px;width: 50px;margin: -13px 0px 0px 11px"
            />
          </div>
          <div style="height: 50px"></div>
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
    <div style="width: 100%;background: black">
      <el-row :gutter="10">
        <el-col :xs="5" :sm="5" :md="13" :lg="13" :xl="13">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :xs="17" :sm="17" :md="8" :lg="8" :xl="8">
          <img
            src="@/assets/home_decorative.png"
            style="height: auto;width: 100%;max-width: 800px"
          />
        </el-col>
      </el-row>
      <div style="height: 10px"></div>
      <el-row :gutter="10">
        <el-col :xs="1" :sm="1" :md="1" :lg="2" :xl="3">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col
          :xs="{ span: 20, offset: 1 }"
          :sm="{ span: 20, offset: 2 }"
          :md="{ span: 20, offset: 2 }"
          :lg="11"
          :xl="{ span: 20, offset: 4 }"
        >
          <div
            style="font-size: 72px;font-weight: 600;color: #E92F75;margin-top: -30px"
          >
            <!--            什么是 KBN Token-->
            {{ $t('m.m43') }}
          </div>
        </el-col>

        <el-col :xs="1" :sm="1" :md="0" :lg="0" :xl="0">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="1" :sm="1" :md="0" :lg="0" :xl="0">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col
          :xs="{ span: 20, offset: 2 }"
          :sm="{ span: 20, offset: 2 }"
          :md="{ span: 20, offset: 3 }"
          :lg="{ span: 11, offset: 4 }"
          :xl="{ span: 16, offset: 4 }"
        >
          <div style="height: 80px"></div>
          <div style="font-size: 18px;font-weight: 500;color: #FFFFFF;">
            <!--            KB Token是一种去中心化的NFT资产，以开创元宇宙版图，给无数球迷们搭建一个追寻、回忆、悼念的去中心开放式平台，并且KB Token也是首个纪念Kobe Bryant的NFT加密艺术代表，旨在成为娱乐交互和文化的通用支付方式。-->
            {{ $t('m.m44') }}
            <div style="height: 15px"></div>
            <!--            KB Token赋予实体物品+NFT落地，不仅具有存储价值，还可以执行智能合约及艺术、影视、音乐、文化、游戏都NFT化。并在所有社会创造活动中都具有可衡量和可转让的价值。-->
            {{ $t('m.m45') }}
            <div style="height: 15px"></div>
            <!--            随着网络的增长和价值创造而扩展，激励生态中各种角色，保证协议正常运转。-->
            {{ $t('m.m46') }}
            &nbsp;
          </div>
          <div style="height: 100px"></div>
        </el-col>
        <el-col :xs="0" :sm="0" :md="1" :lg="1" :xl="3">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <div style="height: 100px"></div>
      </el-row>
    </div>
    <!-- 彩色扇形图 -->
    <div style="">
      <!--      <img src="@/assets/home_colour.png" style="height: auto;width: 100%;z-index: 0;min-height: 850px;position:absolute;background: black;">-->
      <!--      <el-row style="background: black" :style="{backgroundImage: 'url(' + require('@/assets/home_colour.png') + ')',backgroundRepeat: 'no-repeat',backgroundSize: '100% 100%'}">-->
      <el-row
        style="background: linear-gradient(49deg, #000000 0%, #73157F 55%, #5549BA 73%, #3B005C 100%);"
      >
        <el-col
          :xs="{ span: 23, push: 1 }"
          :sm="{ span: 16, push: 4 }"
          :md="{ span: 21, push: 1 }"
          :lg="{ span: 20, push: 4 }"
          :xl="{ span: 20, push: 4 }"
        >
          <div style="height: 100px;"></div>
          <div style="font-size: 32px;font-weight: 500;color: #FFFFFF;">
            <!--            KB代币-->
            {{ $t('m.m47') }}
          </div>

          <div style="height: 1.94vw;"></div>
          <div style="font-size: 16px;font-weight: 500;color: #FFFFFF;">
            <!--            KB Token赋予实体物品+NFT概念运用落地，通过NFT非同质化通证，体现KB Token的价值-->
            {{ $t('m.m48') }}
          </div>
          <div style="height: 30px;"></div>
        </el-col>
        <div style="height: 10px"></div>
        <!--            :xs="{span: 24, offset: 0}" :xl="{span: 8, push: 4}"-->
        <el-col
          :xs="{ span: 22, push: 1, pull: 1 }"
          :sm="{ span: 16, push: 4, pull: 2 }"
          :md="{ span: 11, push: 1 }"
          :lg="{ span: 9, offset: 2, push: 2 }"
          :xl="{ span: 8, push: 2 }"
          style=""
        >
          <div
            style="width: 100%;background: #1E1E1E;border-radius: 18px;height: 340px;"
          >
            <div style="height: 40px"></div>
            <el-row :gutter="20" id="gai002">
              <el-col :span="11" :offset="1" style="color: #FFFFFF;">
                <p style="font-size: 18px;white-space:nowrap;">
                  {{ $t('m.m51') }}
                </p>
                <p
                  style="padding-bottom: 25px;white-space:nowrap;font-size: 44px;"
                >
                  <!--                  发行数：24,000,000-->
                  16,000,000 MAMBA
                </p>
<!--                <p style="font-size: 18px;white-space:nowrap;">-->
<!--                  {{ $t('m.m52') }}-->
<!--                </p>-->
<!--                <p-->
<!--                  style="padding-bottom: 25px;white-space:nowrap;font-size: 36px;"-->
<!--                >-->
<!--                  1 BNB = 10000 MB-->
<!--                </p>-->
<!--                <p style="font-size: 18px;white-space:nowrap;">-->
<!--                  {{ $t('m.m50') }}-->
<!--                </p>-->
<!--                <p-->
<!--                  style="padding-bottom: 15px;white-space:nowrap;font-size: 36px;"-->
<!--                >-->
<!--                  &lt;!&ndash;                  上线日期：2021年第二季度&ndash;&gt;-->
<!--                  1 BNB = 8000 MB-->
<!--                </p>-->
              </el-col>
            </el-row>
          </div>
          <div style="height: 30px;"></div>
        </el-col>
        <!-- <el-col
          :xs="{ span: 22, push: 1, pull: 1 }"
          :sm="{ span: 16, push: 4, pull: 2 }"
          :md="{ span: 10, push: 1, push: 2 }"
          :lg="{ span: 7, push: 1, push: 3 }"
          :xl="{ span: 8, push: 3 }"
          style=""
        >
          <div
            style="height: 340px;width: 100%;background: #1E1E1E;border-radius: 18px;display: flex;justify-content: center; margin-bottom: 30px"
          >
            <div class="is-align-middle">
              <img
                :src="img001"
                style="height: 270px;width: auto;max-width: 440px;margin-top: 40px"
                id="img001"
              />
            </div>
          </div>
        </el-col> -->

<!--        <el-col-->
<!--          :xs="{ span: 22, push: 1 }"-->
<!--          :sm="{ span: 16, push: 4 }"-->
<!--          :md="{ span: 22, push: 1 }"-->
<!--          :lg="{ span: 17, push: 4 }"-->
<!--          :xl="{ span: 17, push: 4 }"-->
<!--          style="background: #1E1E1E;border-radius: 18px;margin-bottom: 100px"-->
<!--        >-->
<!--          <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">-->
<!--            <div-->
<!--              style="font-size: 16px;font-weight: 600;color: #FFFFFF;padding: 30px 0px 0px 30px"-->
<!--            >-->
<!--              &lt;!&ndash;              空投剩余时间：&ndash;&gt;-->
<!--              {{ $t('m.m59') }}-->
<!--            </div>-->
<!--            <div-->
<!--              style="font-size: 24px;font-weight: 500;color: #00FFE1;padding: 30px 0px 30px 30px"-->
<!--            >-->
<!--              {{ day }}:Day {{ hour }}:{{ min }}:{{ second }}-->
<!--            </div>-->
<!--          </el-col>-->
<!--          <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">-->
<!--            <div-->
<!--              style="font-size: 16px;font-weight: 600;color: #FFFFFF;padding: 30px 0px 0px 30px"-->
<!--            >-->
<!--              &lt;!&ndash;              IDO公募剩余时间：&ndash;&gt;-->
<!--              {{ $t('m.m60') }}-->
<!--            </div>-->
<!--            <div-->
<!--              style="font-size: 24px;font-weight: 500;color: #00FFE1;padding: 30px 0px 30px 30px"-->
<!--            >-->
<!--              {{ day2 }}:Day {{ hour2 }}:{{ min2 }}:{{ second2 }}-->
<!--            </div>-->
<!--          </el-col>-->
<!--          <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">-->
<!--            <div-->
<!--              style="font-size: 16px;font-weight: 600;color: #FFFFFF;padding: 30px 0px 0px 30px"-->
<!--            >-->
<!--              &lt;!&ndash;              交易所上线时间：&ndash;&gt;-->
<!--              {{ $t('m.m61') }}-->
<!--            </div>-->
<!--            <div-->
<!--              style="font-size: 24px;font-weight: 500;color: #00FFE1;padding: 30px 0px 30px 30px"-->
<!--            >-->
<!--              2021 Q3-->
<!--            </div>-->
<!--          </el-col>-->
<!--          <el-col-->
<!--            :xs="24"-->
<!--            :sm="24"-->
<!--            :md="6"-->
<!--            :lg="6"-->
<!--            :xl="6"-->
<!--            style="padding: 30px 30px 30px 30px"-->
<!--          >-->
<!--            <a @click="goToTokenUrl()">-->
<!--              <el-button-->
<!--                style="background: #353535;font-size: 16px;font-weight: 500;color: #E92F75;border: 0;width: 100%;-->
<!--height: 36px;"-->
<!--                >IDO</el-button-->
<!--              >-->
<!--            </a>-->
<!--            <div style="height: 10px"></div>-->
<!--            <a @click="goToTokenUrl()">-->
<!--              <el-button-->
<!--                style="background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);font-size: 16px;font-weight: 500;color: #FFFFFF;border: 0;width: 100%;-->
<!--              height: 36px;"-->
<!--              >-->
<!--                &lt;!&ndash;              空投&ndash;&gt;-->
<!--                {{ $t('m.m62') }}-->
<!--              </el-button>-->
<!--            </a>-->
<!--          </el-col>-->
<!--        </el-col>-->
      </el-row>
    </div>
    <!--    <div class="right"-->
    <!--         style="width: 560px;height: 56px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);border-radius: 7px;">-->
    <!--      <a href="imtokenv2://navigate/AssetsTab">立即购买</a></div>-->

    <div style="width: 100%;background: black;">
      <div style="height: 50px"></div>
      <el-row :gutter="10">
        <div style="height: 30px"></div>
        <el-col
          :xs="{ span: 22, offset: 1 }"
          :sm="{ span: 20, offset: 4 }"
          :md="{ span: 11, offset: 1 }"
          :lg="{ span: 7, offset: 4 }"
          :xl="{ span: 7, offset: 4 }"
        >
          <div
            id="m60"
            style="font-size: 72px;font-weight: 600;color: #E92F75;"
          >
            <!--            第一次完全-->
            {{ $t('m.m63') }}
            <div></div>
            <!--            真正的-->
            {{ $t('m.m64') }}
            <div></div>
            <!--            NFT资产-->
            {{ $t('m.m65') }}
          </div>
        </el-col>

        <el-col
          :xs="{ span: 22, offset: 1 }"
          :sm="{ span: 16, offset: 4 }"
          :md="{ span: 11, offset: 0 }"
          :lg="{ span: 8, offset: 3 }"
          :xl="{ span: 8, offset: 3 }"
          style=""
        >
          <div class="hidden-sm-and-down">
            <div style="height: 100px"></div>
          </div>
          <div style="height: 100px"></div>
          <img
            src="@/assets/binanceSmartChain.png"
            style="height: 60px;width: auto"
          />
          <div style="height: 20px"></div>
          <div style="font-weight: 500;font-size: 18px;">
            <!-- 一段 -->
            <div style="padding-bottom: 20px">
              <span style="color: #E92F75">+&nbsp; </span
              ><span style="color: #FFFFFF;">
                <!--             KB Token用途是什么?-->
                {{ $t('m.m66') }}
              </span>
            </div>
            <div
              style="padding-bottom: 70px;font-weight: 400;color: #FFFFFF;font-size: 14px;"
            >
              <!--             使用「 KB Token」通证在 Meta Network 元宇宙中实现更多功能，比如：购买Kobe纪念球衣、下载Kobe精彩集锦、生成只属于你的Kobe NFT图像、跨链传送，进行社区投票和治理、二级市场中交易等。至此，无数的球迷都能重新依靠这种方式，让虚拟世界中的Kobe一路陪伴，从实体转向无物理空间限制的加密艺术带来沉浸式体验。-->
              {{ $t('m.m67') }}
            </div>
            <!-- 一段 -->
            <!-- 一段 -->
            <div style="padding-bottom: 20px">
              <span style="color: #E92F75">+&nbsp; </span
              ><span style="color: #FFFFFF;">
                <!--             如何购买KB Token？-->
                {{ $t('m.m68') }}
              </span>
            </div>
            <div
              style="padding-bottom: 70px;font-weight: 400;color: #00FFE1;font-size: 14px;"
            >
              {{ $t('m.m69') }}
            </div>
            <!-- 一段 -->
            <!-- 一段 -->
            <div style="padding-bottom: 20px">
              <span style="color: #E92F75">+&nbsp; </span
              ><span style="color: #FFFFFF;">
                <!--             KB Token合约地址是什么？-->
                {{ $t('m.m70') }}
              </span>
            </div>
            <div
              style="padding-bottom: 70px;font-weight: 400;color: #FFFFFF;font-size: 14px;"
            >
              {{ $t('m.m71') }}
              <!--             以太坊主网上的代币合约地址：-->
              <div style="color: #00FFE1">
                {{ $t('m.m72') }}
                <!--               0x236fb5828b887Df135BCcF4c5aF5F0A7C5236f09-->
              </div>
            </div>
            <!-- 一段 -->
            <!-- 一段 -->
            <div style="padding-bottom: 20px">
              <span style="color: #E92F75">+&nbsp; </span
              ><span style="color: #FFFFFF;">
                <!--             什么是Kobe Bryant社区？-->
                {{ $t('m.m73') }}
              </span>
            </div>
            <div
              style="padding-bottom: 70px;font-weight: 400;color: #FFFFFF;font-size: 14px;"
            >
              <!--             KB24要创建的是一个基于区块链的全球社区用户共建自治的Kobe Bryant社区，并通过不断开发一系列产品功能更好地服务社区；通过先进的社区管理系统管理社区，提高社区粘性，提升社区活跃度；通过区块链底层技术和智能合约，保障社区用户权益，增强社区信任度，共建一个可持续发展Kobe Bryant社区生态圈。-->
              {{ $t('m.m74') }}
            </div>
            <!-- 一段 -->
            <!-- 一段 -->
            <div style="padding-bottom: 20px">
              <span style="color: #E92F75">+&nbsp; </span
              ><span style="color: #FFFFFF;">
                <!--             KB Token的价值？-->
                {{ $t('m.m75') }}
              </span>
            </div>
            <div
              style="padding-bottom: 70px;font-weight: 400;color: #FFFFFF;font-size: 14px;"
            >
              <!--             KB Token不仅仅只是流通在元宇宙中兑换纪念品的基础通证，还是价值的代表，其NFT资产伴随着稀缺性、不可改变的唯一可验证的数字对象，伴随Kobe Bryant社区的生态基础设施和底层建筑不断完善，KB Token将创造数字经济的全新面貌。-->
              {{ $t('m.m76') }}
            </div>
            <!-- 一段 -->
          </div>
          <div style="height: 100px"></div>
        </el-col>
      </el-row>
    </div>
    <div
      style="width: 100%;height: 450px;background: linear-gradient(298deg, #FF5045 0%, #E3287F 43%, #E32780 100%)"
    >
      <div class="hidden-sm-and-down">
        <div style="height: 100px"></div>
      </div>
      <div style="height: 70px"></div>
      <el-row :gutter="40">
        <el-col
          :xs="{ span: 11, push: 1 }"
          :sm="{ span: 8, push: 4 }"
          :md="{ span: 5, push: 2 }"
          :lg="{ span: 5, push: 3 }"
          :xl="{ span: 4, push: 4 }"
        >
          <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;">
            2023
          </div>
          <div class="hidden-sm-and-down">
            <div style="height: 30px">
              <div style="color: #FFFFFF">●</div>
            </div>
          </div>
          <div style="font-size: 18px;font-weight: 500;color: #FFFFFF;">
            Q1～Q2
          </div>
          <div
            style="font-size: 14px;font-weight: 500;color: #FFFFFF;height: 100px"
          >
            {{ $t('m.q71') }}
            <p></p>
            <!-- {{ $t('m.q72') }} -->
            <p></p>
            &nbsp;
          </div>
          <div style="height: 1px"></div>
        </el-col>
        <el-col
          :xs="{ span: 11, push: 1 }"
          :sm="{ span: 10, push: 4 }"
          :md="{ span: 5, push: 2 }"
          :lg="{ span: 5, push: 3 }"
          :xl="{ span: 4, push: 4 }"
        >
          <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;">
            2023
          </div>
          <div class="hidden-sm-and-down">
            <div style="height: 30px">
              <div style="color: #FFFFFF">●</div>
            </div>
          </div>
          <div style="font-size: 18px;font-weight: 500;color: #FFFFFF;">
            Q3～Q4
          </div>
          <div
            style="font-size: 14px;font-weight: 500;color: #FFFFFF;height: 100px"
          >
            {{ $t('m.q73') }}
            <p></p>
            {{ $t('m.q74') }}
            <p></p>
            <!-- {{ $t('m.q75') }} -->
            <p></p>
            &nbsp;
          </div>
          <div style="height: 20px"></div>
        </el-col>
        <el-col
          :xs="{ span: 11, push: 1 }"
          :sm="{ span: 8, push: 4 }"
          :md="{ span: 5, push: 2 }"
          :lg="{ span: 5, push: 3 }"
          :xl="{ span: 4, push: 4 }"
        >
          <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;">
            2023
          </div>
          <div class="hidden-sm-and-down">
            <div style="height: 30px">
              <div style="color: #FFFFFF">●</div>
            </div>
          </div>
          <div style="font-size: 18px;font-weight: 500;color: #FFFFFF;">
            Q1～Q2
          </div>
          <div
            style="font-size: 14px;font-weight: 500;color: #FFFFFF;height: 100px"
          >
            {{ $t('m.q76') }}
            <p></p>
            {{ $t('m.q77') }}
            <p></p>
            <!-- {{ $t('m.q78') }} -->
            <p></p>
            &nbsp;
          </div>
        </el-col>
        <el-col
          :xs="{ span: 11, push: 1 }"
          :sm="{ span: 8, push: 4 }"
          :md="{ span: 5, push: 2 }"
          :lg="{ span: 5, push: 3 }"
          :xl="{ span: 4, push: 4 }"
        >
          <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;">
            2023
          </div>
          <div class="hidden-sm-and-down">
            <div style="height: 30px">
              <div style="color: #FFFFFF">●</div>
            </div>
          </div>
          <div style="font-size: 18px;font-weight: 500;color: #FFFFFF;">
            Q3～Q4
          </div>
          <div
            style="font-size: 14px;font-weight: 500;color: #FFFFFF;height: 100px"
          >
            {{ $t('m.q79') }}
            <p></p>
<!--            {{ $t('m.q80') }}-->
            <p></p>
            {{ $t('m.q81') }}
            <p></p>
            &nbsp;
          </div>
        </el-col>
      </el-row>
      <div class="hidden-sm-and-down">
        <el-row :gutter="40">
          <el-col
            :xs="{ span: 10, push: 0 }"
            :sm="{ span: 10, push: 0 }"
            :md="{ span: 18, push: 2 }"
            :lg="{ span: 17, push: 3 }"
            :xl="{ span: 17, push: 4 }"
          >
            <div
              style="height: 1px;background: #FFFFFF;opacity: 0.48;width: 100%;margin: -163px 0px 0px 10px"
            ></div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="hello">
      <el-row style="background: black;text-align: left">
        <el-col
          :xs="{ span: '22', offset: '1' }"
          :sm="{ span: '20', offset: '2' }"
          :md="{ span: '18', offset: '3' }"
          :lg="{ span: '4', offset: '3' }"
          :xl="{ span: '2', push: '1' }"
          style=";font-size: 28px;;font-weight: 600;color: #FFFFFF;"
        >
          <div style="height: 61px"></div>
          <div class="hidden-md-and-down">
            <div style="height: 100px"></div>
          </div>
          <div style="padding-bottom: 32px">
            <span>
              <!--              简介-->
              {{ $t('m.m81') }} </span
            ><span style="float:right"></span>
          </div>
          <div style="padding-bottom: 32px">
            <span>
              <!--              特性-->
              {{ $t('m.m82') }}</span
            ><span style="float:right"></span>
          </div>
          <div style="padding-bottom: 32px">
            <span>
              <!--              代币-->
              {{ $t('m.m83') }} </span
            ><span style="float:right"></span>
          </div>
          <div style="padding-bottom: 32px">
            <span>
              <!--              线路图-->
              {{ $t('m.m84') }} </span
            ><span style="float:right"></span>
          </div>
          <div style="padding-bottom: 32px">
            <span>
              <!--              社区-->
              {{ $t('m.m85') }} </span
            ><span style="float:right"></span>
          </div>
        </el-col>
        <el-col
          :xs="{ span: '22', offset: '1' }"
          :sm="{ span: '20', offset: '2' }"
          :md="{ span: '18', offset: '3' }"
          :lg="{ span: '7', offset: '7' }"
          :xl="{ span: '7', push: '' }"
          style=""
        >
          <div style="height: 31px"></div>
          <div class="hidden-md-and-down">
            <div style="height: 130px"></div>
          </div>
          <img
            src="https://utility-01.oss-cn-beijing.aliyuncs.com/Mamba.png"
            style="height: auto;width: 128px;"
          />
          <div style="height: 41px"></div>
          <div style="height: 20px"></div>
          <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;">
            <!--            是一个来自分布式计算、金融交易、区块链共识设计和跨链等各领域经验丰富的团队。同时，KB24的核心团队都是科比的忠实球迷。KB24团队通过加密技术，构建出一个完全去中心化的、公开透明且永续的应用平台，为用户提供传统体育生态无法比拟的体验感。-->
            {{ $t('m.m86') }}
          </div>
          <div style="height: 50px"></div>
          <div style="font-size: 14px;font-weight: 600;color: #FFFFFF;">
            <!--            联系我们-->
            <!-- {{ $t('m.m87') }} -->
            <div style="height: 10px"></div>
            <!-- kbtoken24.com@hotmail.com -->
          </div>
        </el-col>
      </el-row>
      <el-row style="background: black;text-align: left">
        <div style="height: 100px;background: black"></div>
        <el-col
          :xs="{ span: '22', push: '1' }"
          :sm="{ span: '20', push: '2' }"
          :md="{ span: '18', push: '3' }"
          :lg="{ span: '7', push: '3' }"
          :xl="{ span: '7', push: '4' }"
          style=""
        >
          <div
            style="font-size: 14px;font-weight: 600;color: #FFFFFF;line-height: 20px;"
          >
            <div style="height: 10px"></div>
            © 2021 Mamba All rights reserved
            <div style="height: 10px"></div>
          </div>
        </el-col>
        <el-col
          :xs="{ span: '22', push: '1' }"
          :sm="{ span: '20', push: '2' }"
          :md="{ span: '18', push: '3' }"
          :lg="{ span: '9', push: '7' }"
          :xl="{ span: '7', push: '5' }"
          style="font-size: 14px;font-weight: 600;color: #FFFFFF;padding-top: -20px"
        >
<!--          <a href="https://t.me/kbtoken">-->
<!--            <img-->
<!--              src="@/assets/home_feixin_logo.png"-->
<!--              style="height: 36px;width: 36px;white-space:nowrap"-->
<!--            />-->
<!--          </a>-->
          &nbsp;&nbsp;&nbsp;
          <a href="https://mobile.twitter.com/k_bmamba">
            <img
              src="@/assets/home_twitter_logo.png"
              style="height: 36px;width: 36px;white-space:nowrap"
            />
          </a>
          &nbsp;&nbsp;&nbsp;
          <!-- <a @click="goToTokenUrl()">
            <img
              src="@/assets/imtoken_001.png"
              style="height: 36px;width: 36px;white-space:nowrap"
            />
          </a> -->
          &nbsp;&nbsp;&nbsp;
          <!-- <a @click="goToTokenUrl2()">
            <img
              src="@/assets/TP_001.png"
              style="height: 36px;width: 36px;white-space:nowrap"
            />
          </a> -->
          <div style="height: 10px"></div>
        </el-col>
        <div style="height: 60px;background: black"></div>
      </el-row>
    </div>
  </div>
</template>
<!--<el-radio v-model="theme" label="1">{{ $t('common.risk') }}</el-radio>-->
<!--<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">-->

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
  // alert(docWidth)
  // if (docWidth <= 376) {
  //   document.getElementById('bottom_frame').style.height = '740px'
  // } else {
  //   document.getElementById('bottom_frame').style.height = '690px'
  // }
  if (docWidth >= 992) {
    document.getElementById('id_text_72px_1').style.fontSize = '48px'
    document.getElementById('id_text_72px_2').style.fontSize = '48px'
    document.getElementById('gai002').style.fontSize = '16px'
    document.getElementById('gai002').style.fontWeight = '600'

    document.getElementById('m60').style.fontWeight = '600'
    document.getElementById('m60').style.fontSize = '72px'

    document.getElementById('new-text-1').style.fontSize = '72px'
  } else {
    document.getElementById('id_text_72px_1').style.fontSize = '30px'
    document.getElementById('id_text_72px_2').style.fontSize = '30px'
    document.getElementById('gai002').style.fontSize = '14px'
    document.getElementById('gai002').style.fontWeight = '400'

    document.getElementById('m60').style.fontWeight = '600'
    document.getElementById('m60').style.fontSize = '42px'

    document.getElementById('new-text-1').style.fontSize = '42px'
  }
}

export default {
  name: 'Home',
  data () {
    return {
      img001: require('@/assets/home_Fanchart.png'),
      starttime: '2020 / 05 / 01',
      date: '',
      curStartTime: '',
      curStartTime2: '',
      day: '',
      hour: '',
      min: '',
      second: '',
      day2: '',
      hour2: '',
      min2: '',
      second2: '',
      // 完工时间
      endtime: '2020 / 08 / 31',
      languages: 'en',
      languagesText: 'EN',
      items: [
        { id: 'zh', name: '中文' },
        { id: 'en', name: 'EN' },
        { id: 'ko', name: '한국어' },
        { id: 'ja', name: '日本語' }
      ],
      playerOptions: {
        playbackRates: [0.5, 1.0, 2.0], // 可选的播放速度
        autoplay: true, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/mp4', // 类型
            src: '\n' + 'https://kbtoken.oss-cn-beijing.aliyuncs.com/kobe.mp4' // url地址
          }
        ],
        // poster: '../assets/head_person.png', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        // controls: false,
        controlBar: {
          timeDivider: false, // 当前时间和持续时间的分隔符
          durationDisplay: false, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: false // 是否显示全屏按钮
        }
      },
      playerOptions2: {
        playbackRates: [0.5, 1.0, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        aspectRatio: '2:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/mp4', // 类型
            src:
              '\n' +
              'https://utility-01.oss-cn-beijing.aliyuncs.com/597_1685266056.mp4' // url地址
          }
        ],
        // poster: '../assets/commodity_5.png', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false, // 当前时间和持续时间的分隔符
          durationDisplay: false, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: false // 是否显示全屏按钮
        }
      },
      homeColourPng: {
        backgroundImage: 'url(' + require('@/assets/home_colour.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      homeColourPng2: {
        backgroundImage: 'url(' + require('@/assets/home_dunk.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    }
  },
  mounted: function () {
    this.switchLang('en')
    this.curStartTime = '2021-08-09'
    this.countTime()

    this.curStartTime2 = '2021-11-09'
    this.countTime2()
  },
  methods: {
    switchLang (val) {
      this.$i18n.locale = val // 此处val为 zh 或者 en
      console.log(val)
    },
    getValue: function () {
      console.log('您选择了', this.languages)
      if (this.languages === 'zh') {
        this.img001 = require('@/assets/home_Fanchart_zh.png')
        this.playerOptions2 = {
          playbackRates: [0.5, 1.0, 2.0], // 可选的播放速度
          autoplay: false, // 如果为true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 是否视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          aspectRatio: '2:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: 'video/mp4', // 类型
              src:
                '\n' +
                'https://utility-01.oss-cn-beijing.aliyuncs.com/597_1685266056.mp4' // url地址
            }
          ],
          // poster: '../assets/commodity_5.png', // 封面地址
          notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: false, // 当前时间和持续时间的分隔符
            durationDisplay: false, // 显示持续时间
            remainingTimeDisplay: false, // 是否显示剩余时间功能
            fullscreenToggle: false // 是否显示全屏按钮
          }
        }
      } else {
        this.img001 = require('@/assets/home_Fanchart.png')
        this.playerOptions2 = {
          playbackRates: [0.5, 1.0, 2.0], // 可选的播放速度
          autoplay: false, // 如果为true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 是否视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          aspectRatio: '2:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: 'video/mp4', // 类型
              src:
                '\n' +
                'https://utility-01.oss-cn-beijing.aliyuncs.com/597_1685266056.mp4' // url地址
            }
          ],
          // poster: '../assets/commodity_5.png', // 封面地址
          notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: false, // 当前时间和持续时间的分隔符
            durationDisplay: false, // 显示持续时间
            remainingTimeDisplay: false, // 是否显示剩余时间功能
            fullscreenToggle: false // 是否显示全屏按钮
          }
        }
      }
      this.switchLang(this.languages)
    },
    countTime: function () {
      // 获取当前时间
      let date = new Date()
      let now = date.getTime()
      // 设置截止时间
      let endDate = new Date(this.curStartTime) // this.curStartTime需要倒计时的日期
      let end = endDate.getTime()
      // 时间差
      let leftTime = end - now
      // 定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        // 天
        this.day = Math.floor(leftTime / 1000 / 60 / 60 / 24)
        // 时
        let h = Math.floor((leftTime / 1000 / 60 / 60) % 24)
        this.hour = h < 10 ? '0' + h : h
        // 分
        let m = Math.floor((leftTime / 1000 / 60) % 60)
        this.min = m < 10 ? '0' + m : m
        // 秒
        let s = Math.floor((leftTime / 1000) % 60)
        this.second = s < 10 ? '0' + s : s
      } else {
        this.day = 0
        this.hour = '00'
        this.min = '00'
        this.second = '00'
      }
      // 等于0的时候不调用
      if (
        Number(this.hour) === 0 &&
        Number(this.day) === 0 &&
        Number(this.min) === 0 &&
        Number(this.second) === 0
      ) {
      } else {
        // 递归每秒调用countTime方法，显示动态时间效果,
        setTimeout(this.countTime, 1000)
      }
    },
    countTime2: function () {
      // 获取当前时间
      let date = new Date()
      let now = date.getTime()
      // 设置截止时间
      let endDate = new Date(this.curStartTime2) // this.curStartTime需要倒计时的日期
      let end = endDate.getTime()
      // 时间差
      let leftTime = end - now
      // 定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        // 天
        this.day2 = Math.floor(leftTime / 1000 / 60 / 60 / 24)
        // 时
        let h = Math.floor((leftTime / 1000 / 60 / 60) % 24)
        this.hour2 = h < 10 ? '0' + h : h
        // 分
        let m = Math.floor((leftTime / 1000 / 60) % 60)
        this.min2 = m < 10 ? '0' + m : m
        // 秒
        let s = Math.floor((leftTime / 1000) % 60)
        this.second2 = s < 10 ? '0' + s : s
      } else {
        this.day2 = 0
        this.hour2 = '00'
        this.min2 = '00'
        this.second2 = '00'
      }
      // 等于0的时候不调用
      if (
        Number(this.hour2) === 0 &&
        Number(this.day2) === 0 &&
        Number(this.min2) === 0 &&
        Number(this.second2) === 0
      ) {
      } else {
        // 递归每秒调用countTime方法，显示动态时间效果,
        setTimeout(this.countTime2, 1000)
      }
    },
    goToTokenUrl () {
      // http://192.168.2.12:3000/
      // window.open("imtokenv2://navigate/DappView?url=http%3A%2F%2F156.240.109.163%3A3200%2F")
      self.location.href =
        'imtokenv2://navigate/DappView?url=https%3A%2F%2Fapi.kbtoken.co%2F?' +
        this.languages
      // self.location.href = 'imtokenv2://navigate/DappView?url=http%3A%2F%2F192.168.2.12%3A3000%2F?' + this.languages
      // self.location.href = 'imtokenv2://navigate/DappView?url=http%3A%2F%2F192.168.2.12%3A3000%2F?' + this.languages
      setTimeout(function () {
        var obj = document.getElementById('select_languages')
        var index = obj.selectedIndex
        var value = obj.options[index].value
        // alert(value)
        // self.location.href = 'http://156.240.109.163:3200/?' + value
        // self.location.href = 'http://192.168.2.12:3000/?' + value
        self.location.href = 'https://api.kbtoken.co/?' + value
      }, 500)

      // self.location.href = 'http://156.240.109.163:3200/'
      // window.location.href = 'imtokenv2://navigate/DappView?url=http%3A%2F%2F156.240.109.163%3A3200%2F'
      // window.location.href = 'http://156.240.109.163:3200/'
      // window.open('http://156.240.109.163:3200/')
    },
    goToTokenUrl2 () {
      alert('Enter tokenpocket App wallet, visit kbtoken.co')
    }
  }
}
</script>

<style scoped>
* {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

/*移动端样式*/
@media screen and (max-width: 749px) {
  .mainPage {
    width: 100%;
    max-width: 100%;
    /*height: 500px;*/
  }

  .headBackground {
    width: 100vw;
    height: 500px;
  }

  .headPerson {
    width: 90%;
    height: 200px;
    margin-bottom: -350px;
    margin-left: -25px;
  }

  .demo {
    width: 100vw;
    height: 200px;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    margin-top: 245px;
    position: absolute;
    z-index: 2;
  }

  .headTitle {
    width: 536px;
    font-size: 36px;
    font-weight: 600;
    color: #e92f75;
    line-height: 78px;
  }

  .headSubTitle {
    width: 325px;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    line-height: 45px;
  }

  .bodyTitle1 {
    width: 427px;
    font-size: 36px;
    font-weight: 600;
    color: #e92f75;
    line-height: 50px;
    padding-top: 100px;
  }

  .bodyTitle2 {
    width: 427px;
    height: 50px;
    font-size: 36px;
    font-weight: 600;
    color: #e92f75;
    line-height: 50px;
  }

  .bodyText1 {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    line-height: 24px;
    margin-top: 80px;
  }

  .bodyText2 {
    font-size: 14px;
    line-height: 24px;
    margin-top: 24px;
  }

  .iconFont {
    font-size: 24px;
    height: 45px;
    font-weight: 500;
    color: #ffffff;
    line-height: 45px;
    z-index: 2;
    margin-top: -70px;
    margin-left: 50px;
    position: absolute;
  }

  .iconText {
    font-size: 14px;
    width: 427px;
    height: 144px;
    font-weight: 500;
    color: #ffffff;
    line-height: 24px;
  }

  .iconPadding {
    padding-top: 60px;
  }

  .iconTitle {
    width: 96px;
    height: 32px;
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
    line-height: 32px;
    margin-left: 30px;
    padding-top: 50px;
    padding-bottom: 28px;
    text-align: center;
  }

  .iconText2 {
    width: 290px;
    height: 40px;
    font-size: 12px;
    font-weight: 500;
    color: #dddddd;
    line-height: 20px;
    margin-left: -60px;
    padding-bottom: 160px;
  }

  .focusFont1 {
    height: 106px;
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
    line-height: 56px;
  }

  .focusFont2 {
    width: 172px;
    height: 28px;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    line-height: 28px;
    white-space: nowrap;
    padding-bottom: 11px;
  }

  .focusFont3 {
    height: 20px;
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;
    line-height: 20px;
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
    margin-left: -100px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
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
    height: 778px;
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
    height: 778px;
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

/*适配除移动端之外*/
@media screen and (min-width: 750px) {
  .headTitle {
    width: 536px;
    font-size: 56px;
    font-weight: 600;
    color: #e92f75;
    line-height: 78px;
    padding-bottom: 30px;
  }

  .headSubTitle {
    width: 425px;
    font-size: 32px;
    font-weight: 600;
    color: #ffffff;
    line-height: 45px;
    white-space: nowrap;
  }

  .bodyTitle1 {
    width: 427px;
    font-size: 72px;
    font-weight: 600;
    color: #e92f75;
    line-height: 100px;
  }

  .bodyTitle2 {
    width: 427px;
    height: 100px;
    font-size: 72px;
    font-weight: 600;
    color: #e92f75;
    line-height: 100px;
    white-space: nowrap;
  }

  .bodyText1 {
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    line-height: 24px;
    margin-top: 140px;
  }

  .bodyText2 {
    width: 100%;
    font-size: 18px;
    margin-top: 50px;
  }

  .iconFont {
    font-size: 32px;
    height: 45px;
    font-weight: 500;
    color: #ffffff;
    line-height: 45px;
    z-index: 2;
    margin-top: -70px;
    margin-left: 50px;
    position: absolute;
  }

  .iconText {
    font-size: 18px;
    width: 427px;
    height: 144px;
    font-weight: 500;
    color: #ffffff;
    line-height: 24px;
  }

  .iconPadding {
    padding-top: 0;
  }

  .iconTitle {
    width: 196px;
    height: 32px;
    font-size: 32px;
    font-weight: 500;
    color: #ffffff;
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
    color: #dddddd;
    line-height: 20px;
    margin-left: -60px;
    padding-bottom: 160px;
  }

  .focusFont1 {
    height: 56px;
    font-size: 40px;
    font-weight: 600;
    color: #ffffff;
    line-height: 56px;
  }

  .focusFont2 {
    width: 172px;
    height: 28px;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    line-height: 28px;
    white-space: nowrap;
    padding-bottom: 11px;
  }

  .focusFont3 {
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    line-height: 20px;
  }

  .demo {
    width: 90%;
    height: 200px;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    margin-left: -25px;
  }
}

.headFont {
  color: white;
  white-space: nowrap;
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

.select-img {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
