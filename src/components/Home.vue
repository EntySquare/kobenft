<template>
  <div style="height: 100%;width: 100%; overflow-x: hidden;position:fixed">
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
          <el-image :src="require('../assets/headLogo.png')" style="height: 40px; width: 92px;"></el-image>
        </el-col>
        <el-col class="hidden-md-and-down" :span="8" offset="8">
          <div>
            <el-row :gutter="40" type="flex" style="margin-top: 10px">
              <el-col>
                <div class="headFont">{{ $t('m.t1') }}</div>
              </el-col>
              <el-col>
                <div class="headFont">{{ $t('m.t2') }}</div>
              </el-col>
              <el-col>
                <div class="headFont">{{ $t('m.t3') }}</div>
              </el-col>
              <el-col>
                <div class="headFont">{{ $t('m.t4') }}</div>
              </el-col>
              <el-col>
                <div class="headFont">{{ $t('m.t5') }}</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col class="hidden-sm-and-up" :xs="{span: 2, push: 10}" :xl="{span: 2, push: 2}">
          <el-row :gutter="20" type="flex" style="margin-top: 10px">
            <el-col>
              <div class="headFont"><a
                href="imtokenv2://navigate/DappView?url=http%3A%2F%2F156.240.109.163%3A3200%2F"
                style="color: #FFFFFF; text-decoration:none; cursor: pointer; font-size: 14px;">{{ $t('m.t6') }}</a>
                <div style="display: inline-flex">
                  <el-image :src="require('../assets/fire_icon.png')" style="width: 16px; height: 16px;"></el-image>
                </div>
              </div>
            </el-col>
            <el-col>
              <div class="headFont"><a
                href="imtokenv2://navigate/DappView?url=http%3A%2F%2F156.240.109.163%3A3200%2F"
                style="color: #FFFFFF; text-decoration:none; cursor: pointer; font-size: 14px">{{ $t('m.t7') }}</a>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="{span: 2, push: 16}" :sm="{span: 2, push: 18}" :md="{span: 2, push: 18}" :lg="{span: 2, push: 2}"
                :xl="{span: 2, push: 2}" style="margin-top: 10px">
          <el-image :src="require('../assets/global.png')" style="width: 16px; height: 16px;"></el-image>
          <!--                    <span style="color: white; position: absolute; bottom: 3px; margin-left: 5px; white-space: nowrap">中文</span>-->
          <select v-model="languages" @change='getValue'
                  style="color: white; position: absolute; bottom: 5px; margin-left: 5px; white-space: nowrap;background: transparent;appearance:none;border: 0;outline:none">
            <option style="color: white; position: absolute; bottom: 3px; margin-left: 5px; white-space: nowrap"
                    value="zh">中文
            </option>
            <option style="color: white; position: absolute; bottom: 3px; margin-left: 5px; white-space: nowrap"
                    value="en">EN
            </option>
            <option style="color: white; position: absolute; bottom: 3px; margin-left: 5px; white-space: nowrap"
                    value="ko">한국어
            </option>
            <option style="color: white; position: absolute; bottom: 3px; margin-left: 5px; white-space: nowrap"
                    value="ja">日本語
            </option>
          </select>
        </el-col>
      </el-row>
      <el-row style="height: 153px"></el-row>
      <el-row type="flex">
        <el-col :xs="{span: 2, offset: 2}" :sm="{span: 2, offset: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                :xl="{span: 8, push: 4}">
          <div class="headTitle">
            {{ $t('m.m1') }}
          </div>
          <div class="headSubTitle">
            {{ $t('m.m2') }}
          </div>
        </el-col>
        <el-col :xs="{span: 24, pull: 4}" :sm="{span: 14, push: 5}" :md="{span: 8, push: 6}" :lg="{span: 8, push: 6}"
                :xl="{span: 8, push: 6}">
          <!--          <img-->
          <!--            class="headPerson"-->
          <!--            src="../assets/head_person.png"-->
          <!--          />-->
          <div class='demo'>
            <video-player class="video-player vjs-custom-skin"
                          ref="videoPlayer"
                          :playsinline="true"
                          :options="playerOptions">
            </video-player>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="height: auto; width: 100vw; background-color: black">
      <el-row style="height: 160px"></el-row>
      <el-row type="flex" justify="center">
        <el-col span="12" pull="2">
          <div class="bodyTitle1">
            {{ $t('m.m3') }}
          </div>
          <div class="bodyTitle2">
            {{ $t('m.m4') }}
          </div>
        </el-col>
      </el-row>
      <el-row style="height: 829px">
        <el-col :xs="{span: 15, push: 4}" :sm="{span: 14, push: 5}" :md="{span: 10, push: 4}" :lg="{span: 8, push: 5}"
                :xl="{span: 6, push: 5}">
          <div
            class="bodyText1">
            {{ $t('m.m5') }}
          </div>
          <div class="bodyText2"
               style="width: 100%;font-weight: 500;color: #FFFFFF;line-height: 24px;">
            {{ $t('m.m6') }}
          </div>
          <div class="bodyText2"
               style="width: 100%;font-weight: 500;color: #FFFFFF;line-height: 24px;">
            {{ $t('m.m7') }}
          </div>
          <div class="bodyText2"
               style="width: 100%;font-weight: 500;color: #FFFFFF;line-height: 24px;">
            {{ $t('m.m8') }}
          </div>
        </el-col>
        <el-col :xs="{span: 16, push: 2}" :sm="{span: 16, push: 7}" :md="{span: 8, push: 6}" :lg="{span: 8, push: 7}"
                :xl="{span: 6, push: 8}" style="padding-top: 50px">
          <el-image :src="require('../assets/body_kobe.png')"
                    style="height: 250px; width: 250px; z-index: 1"></el-image>
          <div style="margin-top: -150px; margin-left: 50px">
            <el-image :src="require('../assets/body_purple.png')" style="height: 436px; width: 436px;"></el-image>
          </div>
        </el-col>
      </el-row>
      <div>
        <el-row>
          <el-col :xs="{span: 18, push: 1}" :sm="{span: 14, push: 4}" :md="{span: 14, push: 4}"
                  :lg="{span: 6, push: 4}" :xl="{span: 6, push: 4}">
            <div style="height: 128px; width: 128px;">
              <el-image :src="require('../assets/icon1.png')"></el-image>
              <div class="iconFont">{{ $t('m.m9') }}</div>
            </div>
            <div class="iconText" style="margin-left: 50px; width: 100%">
              <div style="margin-bottom: 24px">{{ $t('m.m10') }}</div>
              <div>{{ $t('m.m11') }}</div>
            </div>
            <div style="height: 64px"></div>
            <div style="height: 128px; width: 128px;">
              <el-image :src="require('../assets/icon3.png')"></el-image>
              <div class="iconFont">{{ $t('m.m12') }}</div>
            </div>
            <div class="iconText" style="margin-left: 50px; width: 100%">
              <div style="margin-bottom: 24px">{{ $t('m.m13') }}</div>
              <div>{{ $t('m.m14') }}</div>
            </div>
          </el-col>
          <el-col :xs="{span: 18, push: 1}" :sm="{span: 14, push: 4}" :md="{span: 14, push: 4}"
                  :lg="{span: 6, push: 8}" :xl="{span: 6, push: 8}" class="iconPadding">
            <div style="height: 128px; width: 128px;">
              <el-image :src="require('../assets/icon2.png')"></el-image>
              <div class="iconFont">{{ $t('m.m15') }}</div>
            </div>
            <div class="iconText" style="margin-left: 50px; width: 100%">
              <div style="margin-bottom: 24px">{{ $t('m.m16') }}</div>
              <div>{{ $t('m.m17') }}</div>
            </div>
            <div style="height: 64px"></div>
            <div style="height: 128px; width: 128px;">
              <el-image :src="require('../assets/icon4.png')"></el-image>
              <div class="iconFont">{{ $t('m.m18') }}</div>
            </div>
            <div class="iconText" style="margin-left: 50px; width: 100%">
              <div style="margin-bottom: 24px">{{ $t('m.m19') }}</div>
              <div>{{ $t('m.m20') }}</div>
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
                {{ $t('m.m21') }}
              </div>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-row>
            <el-col :xs="{span: 14, push: 6}" :sm="{span: 14, push: 9}" :md="{span: 15, push: 9}"
                    :lg="{span: 3, push: 2}" :xl="{span: 4, push: 4}">
              <div style="height: 164px; width: 164px;">
                <el-image :src="require('../assets/icon5.png')"></el-image>
              </div>
              <div class="iconTitle">{{ $t('m.m22') }}</div>
              <div class="iconText2">{{ $t('m.m23') }}</div>
            </el-col>
            <el-col :xs="{span: 14, push: 7}" :sm="{span: 14, push: 10}" :md="{span: 15, push: 10}"
                    :lg="{span: 3, push: 6}" :xl="{span: 4, push: 6}">
              <div style="height: 164px; width: 164px;">
                <el-image :src="require('../assets/icon6.png')"></el-image>
              </div>
              <div class="iconTitle">{{ $t('m.m24') }}</div>
              <div class="iconText2">{{ $t('m.m25') }}</div>
            </el-col>
            <el-col :xs="{span: 14, push: 7}" :sm="{span: 14, push: 10}" :md="{span: 15, push: 10}"
                    :lg="{span: 3, push: 10}" :xl="{span: 4, push: 8}">
              <div style="height: 164px; width: 164px;">
                <el-image :src="require('../assets/icon7.png')"></el-image>
              </div>
              <div class="iconTitle">{{ $t('m.m26') }}</div>
              <div class="iconText2">{{ $t('m.m27') }}</div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div
      style="width: 100%; height: 332px; background: linear-gradient(270deg, #FF5045 0%, #E3287F 54%, #E32780 100%);">
      <el-row style="height: 90px"></el-row>
      <el-row>
        <el-col :xs="{span: 6, push: 2}" :sm="{span: 8, push: 3}" :md="{span: 8, push: 1}"
                :lg="{span: 8, push: 4}" :xl="{span: 7, push: 4}">
          <div class="focusFont1">
            {{ $t('m.m28') }}
          </div>
        </el-col>
        <el-col :xs="{span: 12, push: 4}" :sm="{span: 10, push: 6}" :md="{span: 10, push: 6}"
                :lg="{span: 8, push: 6}" :xl="{span: 6, push: 9}">
          <div style="padding-bottom: 35px">
            <div class="focusFont2">
              {{ $t('m.m29') }}
            </div>
            <div class="focusFont3">
              {{ $t('m.m30') }}
            </div>
          </div>
          <div>
            <div class="focusFont2">
              {{ $t('m.m31') }}
            </div>
            <div class="focusFont3">
              {{ $t('m.m32') }}
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="width: 100%;height: 27.29vw;min-height: 320px">
      <img src="@/assets/home_dunk.png"
           style="height: auto;width: 100%;z-index: -1;position:absolute;min-height: 320px">
      <el-row :gutter="10">
        <div style="height: 3.29vw;">
        </div>
        <el-col :xs="1" :sm="3" :md="1" :lg="4" :xl="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="23" :sm="21" :md="20" :lg="18" :xl="18">
          <div style="height: 10px"></div>
          <div id="id_text_72px_1"
               style="font-size: 48px;font-weight: 500;color: #FFFFFF;">
            {{ $t('m.m33') }}
          </div>
          <div id="id_text_72px_2"
               style="font-size: 48px;font-weight: 500;color: #FFFFFF;">
            {{ $t('m.m34') }}
          </div>
          <div style="height: 40px;"></div>
          <div
            style="font-size: 14px;font-weight: 600;color: #FFFFFF;">
            {{ $t('m.m35') }}
          </div>
          <div style="height: 20px;"></div>
          <div
            style="font-size: 14px;font-weight: 600;color: #FFFFFF;float: left;"
            align="right">
            {{ $t('m.m36') }}&nbsp;
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
        <el-col :xs="5" :sm="5" :md="13" :lg="13" :xl="13">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :xs="17" :sm="17" :md="8" :lg="8" :xl="8">
          <img src="@/assets/home_decorative.png" style="height: auto;width: 100%;max-width: 800px">
        </el-col>
      </el-row>
      <div style="height: 10px"></div>
      <el-row :gutter="10">
        <el-col :xs="1" :sm="1" :md="1" :lg="2" :xl="3">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="{span: 20,offset:1,}" :sm="{span: 20,offset:2,}" :md="{span: 20,offset:2,}" :lg="11"
                :xl="{span: 20,offset:4,}">
          <div style="font-size: 72px;font-weight: 600;color: #E92F75;margin-top: -30px">
            {{ $t('m.m37') }}&nbsp;
          </div>
        </el-col>

        <el-col :xs="1" :sm="1" :md="0" :lg="0" :xl="0">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="1" :sm="1" :md="0" :lg="0" :xl="0">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="{span: 20,offset:2,}" :sm="{span: 20,offset:2,}" :md="{span: 20,offset:1,}"
                :lg="{span: 11,offset:4,}" :xl="{span: 20,offset:4,}">
          <div style="font-size: 18px;font-weight: 500;color: #FFFFFF;">
            {{ $t('m.m38') }}&nbsp;
            <div style="height: 15px"></div>
            {{ $t('m.m39') }}&nbsp;
            <div style="height: 15px"></div>
            {{ $t('m.m40') }}&nbsp;
          </div>
        </el-col>
        <el-col :xs="0" :sm="0" :md="1" :lg="1" :xl="3">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
    <!-- 彩色扇形图 -->
    <div style='width: 100%;height: 45.94vw;max-height: 785px;min-height: 850px;'>
      <img src="@/assets/home_colour.png"
           style="height: auto;width: 100%;z-index: 0;min-height: 850px;position:absolute;background: black;">
      <el-row>
        <el-col :xs="{span: 23, push: 1 }" :sm="{span: 20, push: 4 }" :md="{span: 21, push: 1 }"
                :lg="{span: 20, push: 4 }" :xl="{span: 20, push: 4 }">
          <div style="height: 2.94vw;"></div>
          <div style="font-size: 32px;font-weight: 500;color: #FFFFFF;">
            {{ $t('m.m41') }}&nbsp;
          </div>
          <div style="height: 1.94vw;"></div>
          <div style="font-size: 16px;font-weight: 500;color: #FFFFFF;">
            {{ $t('m.m42') }}&nbsp;
          </div>
          <div style="height: 30px;"></div>
        </el-col>
        <div style="height: 10px"></div>
        <!--            :xs="{span: 24, offset: 0}" :xl="{span: 8, push: 4}"-->
        <el-col :xs="{span: 22,push:1,pull:1}" :sm="{span: 16,push:4,pull:2}" :md="{span: 11, push: 1}"
                :lg="{span: 9, offset:2, push: 2}" :xl="{span: 8, offset:2, push: 2}"
                style="max-width:700px;max-height: 385px;min-width: 280px">
          <div style="width: 100%;height: 358px;;background: #1E1E1E;border-radius: 18px;">
            <div style="height: 40px"></div>
            <el-row :gutter="20" id="gai002">
              <el-col :span="11" :offset="1" style="color: #FFFFFF;">
                <p style="padding-bottom: 15px;">{{ $t('m.m43') }}&nbsp;</p>
                <p style="padding-bottom: 15px;">{{ $t('m.m44') }}&nbsp;</p>
                <p style="padding-bottom: 15px;">{{ $t('m.m45') }}&nbsp;</p>
                <p style="padding-bottom: 15px;">{{ $t('m.m46') }}&nbsp;</p>
                <p style="padding-bottom: 15px;">{{ $t('m.m47') }}&nbsp;</p>
              </el-col>
              <el-col :span="11" :offset="1" style="color: #FFFFFF;">
                <p style="padding-bottom:   15px;">{{ $t('m.m48') }}</p>
                <p style="padding-bottom: 15px;">{{ $t('m.m49') }}</p>
                <p style="padding-bottom: 15px;">{{ $t('m.m50') }}</p>
                <p style="padding-bottom: 15px;">{{ $t('m.m51') }}</p>
                <p style="padding-bottom: 15px;">{{ $t('m.m52') }}</p>
                <p style="padding-bottom: 15px;">{{ $t('m.m53') }}</p>
              </el-col>
            </el-row>
          </div>
          <div style="height: 1.94vw;"></div>
        </el-col>
        <el-col :xs="{span: 22,push:1,pull:1}" :sm="{span: 16,push:4,pull:2}" :md="{span: 10, offset:1, push: 1}"
                :lg="{span: 9, offset:1, push: 2}" :xl="{span: 8, offset:1, push: 2}"
                style="max-width:500px;max-height: 385px;min-width: 280px">
          <div style="width: 100%;height: 358px;background: #1E1E1E;border-radius: 18px;">
            <div style="font-size: 20px;font-weight: 600;color: #FFFFFF;line-height: 28px;padding: 30px 0px 0px 50px">
              {{ $t('m.m54') }}
            </div>
            <el-row>
              <el-col :span="16" :offset="4">
                <div style="padding: 10px 70px 0px 0px">
                  <img src="@/assets/home_Fanchart.png" style="height: 100%;width: 100%;max-width:250px;
                      padding: 12px 13px 14px 25px">
                </div>
                <div style="padding: 0px 0px 0px 0px;margin: 0px 0px 0px -37px">
                  <tr style=";width: 100%">
                    <td>
                      <div style="width: 8px;height: 8px;background: #6040FC;border-radius: 18px;"></div>
                    </td>
                    <div style="font-size: 12px;font-weight: 400;color: #FFFFFF;">&nbsp;{{ $t('m.m55') }}</div>
                    <td>
                      &nbsp;
                    </td>
                    <td>
                      <div style="width: 8px;height: 8px;background: #00FFE1;border-radius: 18px;"></div>
                    </td>
                    <div style="font-size: 12px;font-weight: 400;color: #FFFFFF;">&nbsp;{{ $t('m.m56') }}</div>
                    <td>
                      &nbsp;
                    </td>
                    <td>
                      <div style="width: 8px;height: 8px;background: #FF9B26;border-radius: 18px;"></div>
                    </td>
                    <div style="font-size: 12px;font-weight: 400;color: #FFFFFF;">&nbsp;{{ $t('m.m57') }}</div>
                    <td>
                      &nbsp;
                    </td>
                    <td>
                      <div style="width: 8px;height: 8px;background: #FF4060;border-radius: 18px;"></div>
                    </td>
                    <div style="font-size: 12px;font-weight: 400;color: #FFFFFF;">&nbsp;{{ $t('m.m58') }}</div>
                    <td>
                      &nbsp;
                    </td>
                    <td>
                      <div style="width: 8px;height: 8px;background: #36CFA2;border-radius: 18px;"></div>
                    </td>
                    <div style="font-size: 12px;font-weight: 400;color: #FFFFFF;">&nbsp;{{ $t('m.m59') }}</div>
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
    <!--    <div class="right"-->
    <!--         style="width: 560px;height: 56px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);border-radius: 7px;">-->
    <!--      <a href="imtokenv2://navigate/AssetsTab">立即购买</a></div>-->

    <div style="width: 100%;height: 810px;background: black;">
      <el-row :gutter="10">
        <div style="height: 30px"></div>
        <el-col :xs="{span: 22,offset:1,}" :sm="{span: 20,offset:4,}" :md="{span: 11,offset:1,}"
                :lg="{span: 7,offset:4}" :xl="{span: 7,offset:4}">
          <div id="m60" style="font-size: 72px;font-weight: 600;color: #E92F75;">
            {{ $t('m.m60') }}
            <div></div>
            {{ $t('m.m61') }}
            <div></div>
            {{ $t('m.m62') }}
          </div>
        </el-col>

        <el-col :xs="{span: 22,offset:1,}" :sm="{span: 16,offset:4,}" :md="{span: 11,offset:0}" :lg="{span: 8,offset:3}"
                :xl="{span: 8,offset:3}">
          <div class="hidden-sm-and-down">
            <div style="height: 180px"></div>
          </div>
          <div style="height: 20px"></div>
          <div style="background: #1E1E1E;width: 100%;height: 136px">
            <div style="padding: 32px">
              <div style="font-size: 18px;font-weight: 500;color: #FFFFFF;">
                {{ $t('m.m63') }}
              </div>
              <div style="height: 20px"></div>
              <div style="font-size: 14px;font-weight: 400;color: #FFFFFF;">
                {{ $t('m.m64') }}
              </div>
            </div>
          </div>
          <div style="height: 20px"></div>
          <div style="background: #1E1E1E;width: 100%;height: 136px">
            <div style="padding: 32px">
              <div style="font-size: 18px;font-weight: 500;color: #FFFFFF;">
                {{ $t('m.m65') }}
              </div>
              <div style="height: 20px"></div>
              <div style="font-size: 14px;font-weight: 400;color: #FFFFFF;">
                {{ $t('m.m66') }}<span style="color: #00FFE1"> {{ $t('m.m67') }}</span>
              </div>
            </div>
          </div>
          <div style="height: 20px"></div>
          <div style="background: #1E1E1E;width: 100%;height: 136px">
            <div style="padding: 32px">
              <div style="font-size: 18px;font-weight: 500;color: #FFFFFF;">
                {{ $t('m.m68') }}
              </div>
              <div style="height: 20px"></div>
              <div style="font-size: 14px;font-weight: 400;color: #FFFFFF;">
                {{ $t('m.m69') }}
              </div>
              <div style="height: 2px"></div>
              <div style="font-size: 14px;font-weight: 500;color: #00FFE1;width: 100%;overflow: hidden;">
                {{ $t('m.m70') }}
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

        <el-col :xs="{span: 10,offset:2} " :sm="{span: 10,offset:4} " :md="{span: 5,offset:2,}"
                :lg="{span: 5,offset:4,}" :xl="{span: 4,offset:4,}">
          <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;">
            2020
          </div>
          <div class="hidden-sm-and-down">
            <div style="height: 30px">
              <div style="color: #FFFFFF">●</div>
            </div>
          </div>
          <div style="font-size: 18px;font-weight: 500;color: #FFFFFF;">
            Q1～Q2
          </div>
          <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;height: 100px">
            {{ $t('m.m71') }}
            <p></p>
            {{ $t('m.m72') }}
            <p></p>
            &nbsp;
          </div>
          <div style="height: 1px"></div>
        </el-col>
        <el-col :xs="{span: 10,offset:0,}" :sm="{span: 10,offset:0,}" :md="{span: 5,offset:0,}"
                :lg="{span: 5,offset:0,}" :xl="{span: 4,offset:0,}">
          <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;">
            2020
          </div>
          <div class="hidden-sm-and-down">
            <div style="height: 30px">
              <div style="color: #FFFFFF">●</div>
            </div>
          </div>
          <div style="font-size: 18px;font-weight: 500;color: #FFFFFF;">
            Q3～Q4
          </div>
          <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;height: 100px">
            {{ $t('m.m73') }}
            <p></p>
            {{ $t('m.m74') }}
            <p></p>
            {{ $t('m.m75') }}
            <p></p>
            &nbsp;
          </div>
          <div style="height: 20px"></div>
        </el-col>
        <el-col :xs="{span: 10,offset:2,}" :sm="{span: 10,offset:4,}" :md="{span: 5,offset:0,}"
                :lg="{span: 5,offset:0,}" :xl="{span: 4,offset:0,}">
          <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;">
            2021
          </div>
          <div class="hidden-sm-and-down">
            <div style="height: 30px">
              <div style="color: #FFFFFF">●</div>
            </div>
          </div>
          <div style="font-size: 18px;font-weight: 500;color: #FFFFFF;">
            Q1～Q2
          </div>
          <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;height: 100px">
            {{ $t('m.m76') }}
            <p></p>
            {{ $t('m.m77') }}
            <p></p>
            {{ $t('m.m78') }}
            <p></p>
            &nbsp;
          </div>
        </el-col>
        <el-col :xs="{span: 10,offset:0 }" :sm="{span: 10,offset:0 }" :md="{span: 5,offset:0 }"
                :lg="{span: 5,offset:0 }" :xl="{span: 4,offset:0 }">
          <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;">
            2021
          </div>
          <div class="hidden-sm-and-down">
            <div style="height: 30px">
              <div style="color: #FFFFFF">●</div>
            </div>
          </div>
          <div style="font-size: 18px;font-weight: 500;color: #FFFFFF;">
            Q3～Q4
          </div>
          <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;height: 100px">
            {{ $t('m.m79') }}
            <p></p>
            {{ $t('m.m80') }}
            <p></p>
            {{ $t('m.m81') }}
            <p></p>
            &nbsp;
          </div>
        </el-col>
      </el-row>
      <div class="hidden-sm-and-down">
        <el-row :gutter="40">
          <el-col :xs="{span: 10,offset:0 }" :sm="{span: 10,offset:0 }" :md="{span: 18,offset:2 }"
                  :lg="{span: 17,offset:4 }" :xl="{span: 13,offset:4 }">
            <div style="height: 1px;background: #FFFFFF;opacity: 0.48;width: 100%;margin: -143px 0px 0px 10px">
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div style="width: 100%;height: 690px;background: black" id="bottom_frame">
      <div style="height: 50px"></div>
      <el-row :gutter="10">
        <el-col :xs="{span: 22,offset:1,}" :sm="{span: 22,offset:1,}" :md="{span: 11,offset:1,}"
                :lg="{span: 10,offset:2,}" :xl="{span: 10,offset:2,}">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="{span: 22,offset:1,}" :sm="{span: 22,offset:1,}" :md="{span: 11,offset:0,}"
                :lg="{span: 9,offset:3,}" :xl="{span: 10,offset:0,}">
          <img src="@/assets/home_redLogo01.png" style="height: auto;width: 128px;">
          <div style="font-size: 14px;font-weight: 400;color: #FFFFFF;">
            {{ $t('m.m82') }}
            <p></p>
            {{ $t('m.m83') }}
            <p></p>
            {{ $t('m.m84') }}
            <div style="height: 70px"></div>
            <div style="font-size: 14px;font-weight: 600;color: #FFFFFF;">
              {{ $t('m.m85') }}
            </div>
            <div style="height: 20px;font-size: 14px;font-weight: 600;color: #FFFFFF;">
              {{ $t('m.m86') }}
            </div>
          </div>
        </el-col>
        <el-col :xs="{span: 22,offset:1,}" :sm="{span: 22,offset:1,}" :md="{span: 3,offset:2,}"
                :lg="{span: 3,offset:4,}" :xl="{span: 2,offset:4,}">
          <div id="introduction_to_the_bottom_red" style="margin: -227px 0px 0px 0px">
            <div style="font-size: 28px;font-weight: 600;color: #FFFFFF;">
              {{ $t('m.m87') }}
              <span style="float:right ">+</span>
              <div style="height: 20px"></div>
            </div>
            <div style="font-size: 28px;font-weight: 600;color: #FFFFFF;">
              {{ $t('m.m88') }}
              <span style="float:right ">+</span>
              <div style="height: 20px"></div>
            </div>
            <div style="font-size: 28px;font-weight: 600;color: #FFFFFF;">
              {{ $t('m.m89') }}
              <span style="float:right ">+</span>
              <div style="height: 20px"></div>
            </div>
            <div style="font-size: 28px;font-weight: 600;color: #FFFFFF;">
              {{ $t('m.m90') }}
              <span style="float:right ">+</span>
              <div style="height: 20px"></div>
            </div>
            <div style="font-size: 28px;font-weight: 600;color: #FFFFFF;">
              {{ $t('m.m91') }}
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
      <div style="height:  35px"></div>
      <el-row :gutter="10">
        <el-col :xs="{span: 22,offset:1,}" :sm="{span: 22,offset:1,}" :md="{span: 8,offset:2,}"
                :lg="{span: 8,offset:4,}" :xl="{span: 8,offset:4,}">
          <div id="bottom_contact" style="font-size: 14px;font-weight: 500;color: #FFFFFF;line-height: 20px;">
            © 2021 KB24 All rights reserved
          </div>
        </el-col>
        <el-col id="bottom3png" :xs="{span: 22,offset:1,}" :sm="{span: 22,offset:1,}" :md="{span: 5,offset:8,}"
                :lg="{span: 4,offset:3,}" :xl="{span: 4,offset:3}">
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
<!--<el-radio v-model="theme" label="1">{{ $t('common.risk') }}</el-radio>-->
<!--<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">-->

<script>
window.onload = function () {
  Adaptation()
  Adaptation()
  Adaptation()
}
window.onresize = function () {
  Adaptation()
}

function Adaptation () {
  var docWidth = document.body.clientWidth.valueOf()
  if (docWidth <= 376) {
    document.getElementById('bottom_frame').style.height = '740px'
  } else {
    document.getElementById('bottom_frame').style.height = '690px'
  }
  if (docWidth >= 992) {
    document.getElementById('introduction_to_the_bottom_red').style.margin = '-227px 0px 0px 0px'
    document.getElementById('bottom_contact').style.margin = '0px'
    document.getElementById('bottom_contact').style.position = ''
    document.getElementById('bottom_contact').style.top = ''
    document.getElementById('bottom3png').style.margin = ''

    document.getElementById('id_text_72px_1').style.fontSize = '48px'
    document.getElementById('id_text_72px_2').style.fontSize = '48px'
    document.getElementById('gai002').style.fontSize = '16px'
    document.getElementById('gai002').style.fontWeight = '600'

    document.getElementById('m60').style.fontWeight = '600'
    document.getElementById('m60').style.fontSize = '72px'
  } else {
    document.getElementById('introduction_to_the_bottom_red').style.margin = '0px'
    document.getElementById('bottom_contact').style.position = 'absolute'
    document.getElementById('bottom_contact').style.top = '45px'
    document.getElementById('bottom3png').style.margin = '-12px 2vm 0px'

    document.getElementById('id_text_72px_1').style.fontSize = '36px'
    document.getElementById('id_text_72px_2').style.fontSize = '36px'
    document.getElementById('gai002').style.fontSize = '14px'
    document.getElementById('gai002').style.fontWeight = '400'

    document.getElementById('m60').style.fontWeight = '600'
    document.getElementById('m60').style.fontSize = '42px'
  }
}

export default {
  name: 'Home',
  data () {
    return {
      starttime: '2020 / 05 / 01',
      // 倒计时
      date: '',

      // 完工时间
      endtime: '2020 / 08 / 31',
      languages: 'en',
      languagesText: 'English',
      items: [
        {id: 'zh', name: '中文'},
        {id: 'en', name: 'English'},
        {id: 'ko', name: '한국어'},
        {id: 'ja', name: '日本語'}
      ],
      playerOptions: {
        playbackRates: [0.5, 1.0, 2.0], // 可选的播放速度
        autoplay: true, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: true, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4', // 类型
          src: '\n' +
            'https://kbtoken.oss-cn-beijing.aliyuncs.com/kobe.mp4' // url地址
        }],
        poster: '../assets/head_person.png', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: false, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      }
    }
  },
  mounted: function () {
    this.switchLang('en')
  },
  methods: {
    switchLang (val) {
      this.$i18n.locale = val // 此处val为 zh 或者 en
      console.log(val)
    },
    getValue: function () {
      console.log('您选择了', this.languages)
      this.switchLang(this.languages)
    },
    countDown () {
      // 开工时间
      var startDate = Date.parse(this.getTimeimg)
      // 完工时间
      var endDate = Date.parse(this.endtime)
      var days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000)
      // alert(days);
      // return days;
      this.date = days
      // console.log(this.date);
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
    height: 500px;
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
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    margin-top: 245px;
    position: absolute;
    z-index: 2;
  }

  .headTitle {
    width: 536px;
    height: 78px;
    font-size: 36px;
    font-weight: 600;
    color: #E92F75;
    line-height: 78px;
  }

  .headSubTitle {
    width: 325px;
    height: 45px;
    font-size: 24px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 45px;
  }

  .bodyTitle1 {
    width: 427px;
    height: 50px;
    font-size: 36px;
    font-weight: 600;
    color: #E92F75;
    line-height: 50px;
    padding-top: 100px;
  }

  .bodyTitle2 {
    width: 427px;
    height: 50px;
    font-size: 36px;
    font-weight: 600;
    color: #E92F75;
    line-height: 50px;
  }

  .bodyText1 {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 24px;
    margin-top: 80px
  }

  .bodyText2 {
    font-size: 14px;
    line-height: 24px;
    margin-top: 24px
  }

  .iconFont {
    font-size: 24px;
    width: 64px;
    height: 45px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 45px;
    z-index: 2;
    margin-top: -70px;
    margin-left: 50px;
    position: absolute
  }

  .iconText {
    font-size: 14px;
    width: 427px;
    height: 144px;
    font-weight: 500;
    color: #FFFFFF;
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
    color: #FFFFFF;
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
    color: #DDDDDD;
    line-height: 20px;
    margin-left: -60px;
    padding-bottom: 160px;
  }

  .focusFont1 {
    height: 56px;
    font-size: 24px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 56px;
  }

  .focusFont2 {
    width: 172px;
    height: 28px;
    font-size: 14px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 28px;
    white-space: nowrap;
    padding-bottom: 11px
  }

  .focusFont3 {
    width: 200px;
    height: 20px;
    font-size: 12px;
    font-weight: 500;
    color: #FFFFFF;
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

/*适配除移动端之外*/
@media screen and (min-width: 750px) {
  .headTitle {
    width: 536px;
    height: 78px;
    font-size: 56px;
    font-weight: 600;
    color: #E92F75;
    line-height: 78px;
    padding-bottom: 30px
  }

  .headSubTitle {
    width: 425px;
    height: 45px;
    font-size: 32px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 45px;
    white-space: nowrap
  }

  .bodyTitle1 {
    width: 427px;
    height: 100px;
    font-size: 72px;
    font-weight: 600;
    color: #E92F75;
    line-height: 100px;
  }

  .bodyTitle2 {
    width: 427px;
    height: 100px;
    font-size: 72px;
    font-weight: 600;
    color: #E92F75;
    line-height: 100px;
    white-space: nowrap;
  }

  .bodyText1 {
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 24px;
    margin-top: 140px
  }

  .bodyText2 {
    width: 100%;
    font-size: 18px;
    margin-top: 50px
  }

  .iconFont {
    font-size: 32px;
    width: 64px;
    height: 45px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 45px;
    z-index: 2;
    margin-top: -70px;
    margin-left: 50px;
    position: absolute
  }

  .iconText {
    font-size: 18px;
    width: 427px;
    height: 144px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 24px;
  }

  .iconPadding {
    padding-top: 0;
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

  .focusFont1 {
    height: 56px;
    font-size: 40px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 56px;
  }

  .focusFont2 {
    width: 172px;
    height: 28px;
    font-size: 20px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 28px;
    white-space: nowrap;
    padding-bottom: 11px
  }

  .focusFont3 {
    width: 210px;
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 20px;
  }

  .demo {
    width: 90%;
    height: 200px;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
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
