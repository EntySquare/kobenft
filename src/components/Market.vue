<template>
  <div style="height: 100%;width: 100%; overflow-x: hidden;position:fixed">
    <div >
      <!--      <img src="@/assets/home_background.png" style="height: auto;width: 100%;z-index: -1;position:absolute;">-->
      <!--      <el-image :src="require('../assets/home_background.png')"-->
      <!--                style="z-index: -1;position:absolute;"></el-image>-->
      <el-row style="background: #000000">
        <el-row :span="24" style="height: 65px"></el-row>
        <div>
          <el-row>
            <el-col :xs="{span: 3, push: 1} " :sm="{span: 3, push: 2} " :md="{span: 3, push: 2} " :lg="{span: 3, push: 2}" :xl="{span: 3, push: 2}" style="">
              <router-link to="/">
                <el-image :src="require('../assets/headLogo.png')" style="height: 40px; width: 92px;margin-top: -13px"></el-image>
              </router-link>
            </el-col>
            <el-col :xs="{span: 12, push: 3}" :sm="{span: 12, push: 3}" :md="{span: 12, push: 3}" :lg="{span: 8, push: 5}" :xl="{span: 8, push: 5}" style="">
              <el-row>
                <el-col span="8">
                  <div style="font-size: 16px;font-weight: 500;color: #FFFFFF;float: right">
                    <!--                  <a href="imtokenv2://navigate/DappView?url=http%3A%2F%2F156.240.109.163%3A3200%2F"  @click="goToTokenUrl()" style="color: #FFFFFF; text-decoration:none; cursor: pointer; font-size: 16px;float: right;font-weight: 500;">-->
                    <a @click="goToTokenUrl()" style="color: #FFFFFF; text-decoration:none; cursor: pointer; font-size: 16px;float: right;font-weight: 500;">
                      IDO
                    </a>
                  </div>
                </el-col>
                <el-col span="8">
                  <div style="font-size: 16px;font-weight: 500;color: #FFFFFF;float: right;">
                    <router-link to="/market" style="color: #FFFFFF; text-decoration:none; cursor: pointer; font-size: 16px;float: right;font-weight: 500;">
                      NFT
                    </router-link>
                  </div>
                </el-col>
                <el-col span="8">
                  <div class=""><a
                    @click="goToTokenUrl()"
                    style="color: #FFFFFF; text-decoration:none; cursor: pointer; font-size: 16px;float: right;font-weight: 500;">
                    {{ $t('m.t6') }}
                    <!--                    <el-image :src="require('../assets/fire_icon.png')" style="width: 16px; height: 16px;"></el-image>-->
                  </a>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :xs="{span: 3, push: 6} " :sm="{span: 3, push: 4} " :md="{span: 3, push: 4} " :lg="{span: 3, push: 8}" :xl="{span: 3, push: 8}" style="margin-top: -4px">
              <!--            <el-image :src="require('../assets/global.png')" style="width: 16px; height: 16px;"></el-image>-->
              <!--                    <span style="color: white; position: absolute; bottom: 3px; margin-left: 5px; white-space: nowrap">中文</span>-->
              <select id="select_languages" v-model="languages" @change='getValue'
                      style="color: white; position: absolute; white-space: nowrap;background: transparent;appearance:none;border: 0;outline:none;font-size: 16px;font-weight: 500;">
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
        </div>
      </el-row>
      <el-row  style="background: black">
        <div style="height: 100px"></div>
        <el-col :xs="{span: 22, push: 1}" :sm="{span: 10, push: 1}" :md="{span: 10, push: 2}" :lg="{span: 8, push: 4}" :xl="{span: 6, push: 4}">
          <div style="font-size: 64px;font-weight: 500;color: #FFFFFF;">
            {{ $t('m.c1') }}
          </div>
          <div style="height: 30px"></div>
          <div style="font-size: 16px;font-weight: 500;color: #FFFFFF;">
            {{ $t('m.c2') }}
          </div>
          <div style="height: 86px"></div>
          <el-button style="background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);font-size: 16px;font-weight: 500;color: #FFFFFF;border: 0;width: 150px">{{ $t('m.c3') }}</el-button>
          <el-button style="background: #0F0F0F;font-size: 16px;font-weight: 500;color: #999999;border: 0;width: 150px">Connect wallet</el-button>
          <div style="height: 100px"></div>
        </el-col>

        <el-col :xs="{span: 22, push: 1}" :sm="{span: 10, push: 3}" :md="{span: 9, push: 3}" :lg="{span: 7, push: 5}" :xl="{span: 5, push: 8}" style="">
          <img src="@/assets/Base_map_of_the_mall.png" style="height: auto;width: 100%;filter:alpha(Opacity=80);-moz-opacity:0.9;opacity: 0.6;">
          <div style="height: 100px"></div>
        </el-col>
      </el-row>
    </div>

    <div style="background: #0F0F0F">
    <div style="height: 80px"></div>
      <el-row>
      <el-col :xs="{span: 22, push: 1}" :sm="{span: 22, push: 1}" :md="{span: 20, push: 2}" :lg="{span: 18, push: 3}" :xl="{span: 16, push: 4}" style="">
        <div style="font-size: 32px;font-weight: 500;color: #FFFFFF;padding: 20px;">
          {{ $t('m.c4') }} 🔥
        </div>
        <el-row>
          <!-- 图 -->
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" style="padding: 20px;">
          <div style="border: 2px solid #272727;border-radius: 20px;;padding: 20px;max-width: 250px;margin-left:auto;margin-right:auto;">
            <div align="center" style=""
                 :style="{width:'100%',height:'200px',backgroundRepeat: 'no-repeat',backgroundSize: '100% 100%', backgroundImage:'url(' + require('@/assets/commodity_1.png') + ')'}">
              <!-- 背景图 border-radius: 16px; -->

<!--              <img src="@/assets/default-product-map.png" style="height: 100%;width: 100%;z-index: -1;position:absolute;">-->
              <!-- 背景图 -->

              <!-- {{ $t('m.c9') }} -->
              <div style="height: 15px"></div>
              <div style="width: 136px;height: 36px;background: #FFFFFF;border-radius: 15px;border: 2px solid;border-color: #e62c7a;text-align:center;">
                <div style="margin-top: 4px">
                  {{ $t('m.c9') }}🔥
                </div>
              </div>
              <!-- {{ $t('m.c9') }} -->
            </div>
            <div style="height: 15px"></div>
            <div style="height: 30px">
<!--              <div style="width: 24px;height: 24px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);display:inline;">23</div>-->
              <img src="../assets/red-small-logo.png" style="height: 24px;width: 24px;">
              <div style="font-size: 14px;font-weight: 500;color: #999999;margin: -23px 0px 0px 30px;height: 30px">KB24</div>
            </div>
            <div style="height: 20px"></div>
            <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;">
              Kobe Bryant jersey
            </div>
            <div style="height: 10px"></div>
            <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;line-height: 33px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
              1000 KB
            </div>
            <el-button size="mini" style="background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);font-size: 10px;font-weight: 500;color: #FFFFFF;border: 0;float:right;margin-top: -29px">{{ $t('m.c8') }}</el-button>
          </div>
        </el-col>
          <!-- 图 -->
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" style="padding: 20px;">
            <div style="border: 2px solid #272727;border-radius: 20px;;padding: 20px;max-width: 250px;margin-left:auto;margin-right:auto;">
              <div align="center" style="width: auto"
                   :style="{width:'auto',height:'200px',backgroundRepeat: 'no-repeat',backgroundSize: '100% 100%', backgroundImage:'url(' + require('@/assets/commodity_2.png') + ')'}">
                <!-- 背景图 border-radius: 16px; -->
                <!--              <img src="@/assets/default-product-map.png" style="height: 100%;width: 100%;z-index: -1;position:absolute;">-->
                <!-- 背景图 -->

                <!-- {{ $t('m.c9') }} -->
                <div style="height: 15px"></div>
                <div style="width: 136px;height: 36px;background: #FFFFFF;border-radius: 15px;border: 2px solid;border-color: #e62c7a;text-align:center;">
                  <div style="margin-top: 4px">
                    {{ $t('m.c9') }}🔥
                  </div>
                </div>
                <!-- {{ $t('m.c9') }} -->
              </div>
              <div style="height: 15px"></div>
              <div style="height: 30px">
                <!--              <div style="width: 24px;height: 24px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);display:inline;">23</div>-->
                <img src="../assets/red-small-logo.png" style="height: 24px;width: 24px;">
                <div style="font-size: 14px;font-weight: 500;color: #999999;margin: -23px 0px 0px 30px;height: 30px">KB24</div>
              </div>
              <div style="height: 20px"></div>
              <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;">
                zoom Kobe Bryant VII
              </div>
              <div style="height: 10px"></div>
              <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;line-height: 33px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
                1000 KB
              </div>
              <el-button size="mini" style="background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);font-size: 10px;font-weight: 500;color: #FFFFFF;border: 0;float:right;margin-top: -29px">{{ $t('m.c8') }}</el-button>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" style="padding: 20px;">
            <div style="border: 2px solid #272727;border-radius: 20px;;padding: 20px;max-width: 250px;margin-left:auto;margin-right:auto;">
              <div align="center" style="width: auto"
                   :style="{width:'auto',height:'200px',backgroundRepeat: 'no-repeat',backgroundSize: '100% 100%', backgroundImage:'url(' + require('@/assets/commodity_11.png') + ')'}">
                <!-- 背景图 border-radius: 16px; -->

                <!--              <img src="@/assets/default-product-map.png" style="height: 100%;width: 100%;z-index: -1;position:absolute;">-->
                <!-- 背景图 -->

                <!-- {{ $t('m.c9') }} -->
                <div style="height: 15px"></div>
                <div style="width: 136px;height: 36px;background: #FFFFFF;border-radius: 15px;border: 2px solid;border-color: #e62c7a;text-align:center;">
                  <div style="margin-top: 4px">
                    {{ $t('m.c9') }}🔥
                  </div>
                </div>
                <!-- {{ $t('m.c9') }} -->
              </div>
              <div style="height: 15px"></div>
              <div style="height: 30px">
                <!--              <div style="width: 24px;height: 24px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);display:inline;">23</div>-->
                <img src="../assets/red-small-logo.png" style="height: 24px;width: 24px;">
                <div style="font-size: 14px;font-weight: 500;color: #999999;margin: -23px 0px 0px 30px;height: 30px">KB24</div>
              </div>
              <div style="height: 20px"></div>
              <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;">
                Kobe Bryant signs the ball
              </div>
              <div style="height: 10px"></div>
              <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;line-height: 33px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
                1000 KB
              </div>
              <el-button size="mini" style="background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);font-size: 10px;font-weight: 500;color: #FFFFFF;border: 0;float:right;margin-top: -29px">{{ $t('m.c8') }}</el-button>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" style="padding: 20px;">
            <div style="border: 2px solid #272727;border-radius: 20px;;padding: 20px;max-width: 250px;margin-left:auto;margin-right:auto;">
              <div align="center" style="width: auto"
                   :style="{width:'auto',height:'200px',backgroundRepeat: 'no-repeat',backgroundSize: '100% 100%', backgroundImage:'url(' + require('@/assets/commodity_3.png') + ')'}">
                <!-- 背景图 border-radius: 16px; -->

                <!--              <img src="@/assets/default-product-map.png" style="height: 100%;width: 100%;z-index: -1;position:absolute;">-->
                <!-- 背景图 -->

                <!-- {{ $t('m.c9') }} -->
                <div style="height: 15px"></div>
                <div style="width: 136px;height: 36px;background: #FFFFFF;border-radius: 15px;border: 2px solid;border-color: #e62c7a;text-align:center;">
                  <div style="margin-top: 4px">
                    {{ $t('m.c9') }}🔥
                  </div>
                </div>
                <!-- {{ $t('m.c9') }} -->
              </div>
              <div style="height: 15px"></div>
              <div style="height: 30px">
                <!--              <div style="width: 24px;height: 24px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);display:inline;">23</div>-->
                <img src="../assets/red-small-logo.png" style="height: 24px;width: 24px;">
                <div style="font-size: 14px;font-weight: 500;color: #999999;margin: -23px 0px 0px 30px;height: 30px">KB24</div>
              </div>
              <div style="height: 20px"></div>
              <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;">
                zoom Kobe Bryant II
              </div>
              <div style="height: 10px"></div>
              <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;line-height: 33px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
                1000 KB
              </div>
              <el-button size="mini" style="background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);font-size: 10px;font-weight: 500;color: #FFFFFF;border: 0;float:right;margin-top: -29px">{{ $t('m.c8') }}</el-button>
            </div>
          </el-col>
        </el-row>
      </el-col>
      </el-row>
      <el-row>
        <el-col :xs="{span: 22, push: 1}" :sm="{span: 22, push: 1}" :md="{span: 20, push: 2}" :lg="{span: 18, push: 3}" :xl="{span: 16, push: 4}" style="">
          <div style="font-size: 32px;font-weight: 500;color: #FFFFFF;padding: 20px;">
            {{ $t('m.c5') }} 🔥
          </div>
          <el-row>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" style="padding: 20px;">
              <div style="border: 2px solid #272727;border-radius: 20px;;padding: 20px;max-width: 250px;margin-left:auto;margin-right:auto;">
                <div align="center" style="width: auto"
                     :style="{width:'auto',height:'200px',backgroundRepeat: 'no-repeat',backgroundSize: '100% 100%', backgroundImage:'url(' + require('@/assets/commodity_5.png') + ')'}">
                </div>
                <div style="height: 15px"></div>
                <div style="height: 30px">
                  <!--              <div style="width: 24px;height: 24px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);display:inline;">23</div>-->
                  <img src="../assets/red-small-logo.png" style="height: 24px;width: 24px;">
                  <div style="font-size: 14px;font-weight: 500;color: #999999;margin: -23px 0px 0px 30px;height: 30px">KB24</div>
                </div>
                <div style="height: 20px"></div>
                <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;">
                  zoom Kobe Bryant XI
                </div>
                <div style="height: 10px"></div>
                <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;line-height: 33px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
                  1000 KB
                </div>
                <el-button size="mini" style="background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);font-size: 10px;font-weight: 500;color: #FFFFFF;border: 0;float:right;margin-top: -29px">{{ $t('m.c8') }}</el-button>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" style="padding: 20px;">
              <div style="border: 2px solid #272727;border-radius: 20px;;padding: 20px;max-width: 250px;margin-left:auto;margin-right:auto;">
                <div align="center" style="width: auto"
                     :style="{width:'auto',height:'200px',backgroundRepeat: 'no-repeat',backgroundSize: '100% 100%', backgroundImage:'url(' + require('@/assets/commodity_6.png') + ')'}">
                </div>
                <div style="height: 15px"></div>
                <div style="height: 30px">
                  <!--              <div style="width: 24px;height: 24px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);display:inline;">23</div>-->
                  <img src="../assets/red-small-logo.png" style="height: 24px;width: 24px;">
                  <div style="font-size: 14px;font-weight: 500;color: #999999;margin: -23px 0px 0px 30px;height: 30px">KB24</div>
                </div>
                <div style="height: 20px"></div>
                <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;">
                  zoom Kobe Bryant X
                </div>
                <div style="height: 10px"></div>
                <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;line-height: 33px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
                  1000 KB
                </div>
                <el-button size="mini" style="background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);font-size: 10px;font-weight: 500;color: #FFFFFF;border: 0;float:right;margin-top: -29px">{{ $t('m.c8') }}</el-button>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" style="padding: 20px;">
              <div style="border: 2px solid #272727;border-radius: 20px;;padding: 20px;max-width: 250px;margin-left:auto;margin-right:auto;">
                <div align="center" style="width: auto"
                     :style="{width:'auto',height:'200px',backgroundRepeat: 'no-repeat',backgroundSize: '100% 100%', backgroundImage:'url(' + require('@/assets/commodity_7.png') + ')'}">
                </div>
                <div style="height: 15px"></div>
                <div style="height: 30px">
                  <!--              <div style="width: 24px;height: 24px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);display:inline;">23</div>-->
                  <img src="../assets/red-small-logo.png" style="height: 24px;width: 24px;">
                  <div style="font-size: 14px;font-weight: 500;color: #999999;margin: -23px 0px 0px 30px;height: 30px">KB24</div>
                </div>
                <div style="height: 20px"></div>
                <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;">
                  zoom Kobe Bryant VI 2010
                </div>
                <div style="height: 10px"></div>
                <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;line-height: 33px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
                  1000 KB
                </div>
                <el-button size="mini" style="background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);font-size: 10px;font-weight: 500;color: #FFFFFF;border: 0;float:right;margin-top: -29px">{{ $t('m.c8') }}</el-button>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" style="padding: 20px;">
              <div style="border: 2px solid #272727;border-radius: 20px;;padding: 20px;max-width: 250px;margin-left:auto;margin-right:auto;">
                <div align="center" style="width: auto"
                     :style="{width:'auto',height:'200px',backgroundRepeat: 'no-repeat',backgroundSize: '100% 100%', backgroundImage:'url(' + require('@/assets/commodity_8.png') + ')'}">
                </div>
                <div style="height: 15px"></div>
                <div style="height: 30px">
                  <!--              <div style="width: 24px;height: 24px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);display:inline;">23</div>-->
                  <img src="../assets/red-small-logo.png" style="height: 24px;width: 24px;">
                  <div style="font-size: 14px;font-weight: 500;color: #999999;margin: -23px 0px 0px 30px;height: 30px">KB24</div>
                </div>
                <div style="height: 20px"></div>
                <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;">
                  zoom Kobe Bryant III
                </div>
                <div style="height: 10px"></div>
                <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;line-height: 33px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
                  1000 KB
                </div>
                <el-button size="mini" style="background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);font-size: 10px;font-weight: 500;color: #FFFFFF;border: 0;float:right;margin-top: -29px">{{ $t('m.c8') }}</el-button>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" style="padding: 20px;">
              <div style="border: 2px solid #272727;border-radius: 20px;;padding: 20px;max-width: 250px;margin-left:auto;margin-right:auto;">
                <div align="center" style="width: auto"
                     :style="{width:'auto',height:'200px',backgroundRepeat: 'no-repeat',backgroundSize: '100% 100%', backgroundImage:'url(' + require('@/assets/commodity_9.png') + ')'}">
                </div>
                <div style="height: 15px"></div>
                <div style="height: 30px">
                  <!--              <div style="width: 24px;height: 24px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);display:inline;">23</div>-->
                  <img src="../assets/red-small-logo.png" style="height: 24px;width: 24px;">
                  <div style="font-size: 14px;font-weight: 500;color: #999999;margin: -23px 0px 0px 30px;height: 30px">KB24</div>
                </div>
                <div style="height: 20px"></div>
                <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;">
                  zoom Kobe Bryant
                </div>
                <div style="height: 10px"></div>
                <div style="font-size: 24px;font-weight: 500;color: #FFFFFF;line-height: 33px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
                  1000 KB
                </div>
                <el-button size="mini" style="background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);font-size: 10px;font-weight: 500;color: #FFFFFF;border: 0;float:right;margin-top: -29px">{{ $t('m.c8') }}</el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <div style="height: 120px"></div>
    </div>
    <div style="background: #000000">
    <div style="height: 100px"></div>
     <el-row>
      <el-col :xs="{span: 22, push: 1}" :sm="{span: 22, push: 1}" :md="{span: 20, push: 2}" :lg="{span: 18, push: 3}" :xl="{span: 16, push: 4}" style="background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);border-radius: 21px;
      padding: 75px 75px 75px 35px">

        <el-row>
          <el-col :xs="{span: 22, push: 0}" :sm="{span: 22, push: 0}" :md="{span: 22, push: 1}" :lg="{span: 18, push: 0}" :xl="{span: 18, push: 0}" >
            <div style="font-size: 40px;font-weight: 500;color: #FFFFFF;line-height: 40px;">{{ $t('m.c6') }}</div>
            <div style="font-size: 16px;font-weight: 500;color: #FFFFFF;margin-top: 30px">{{ $t('m.c7') }}。</div>
          </el-col>
          <el-col :xs="{span: 22, push: 0}" :sm="{span: 22, push: 0}" :md="{span: 22, push: 1}" :lg="{span: 2, push: 3}" :xl="{span: 2, push: 3}" >
            <div style="height: 30px"></div>
            <el-button style="background: #FFFFFF;font-size: 16px;font-weight: 500;color: #EF3868;border: 0">
              {{ $t('m.c3') }}
            </el-button>
          </el-col>
        </el-row>
      </el-col>
     </el-row>
    <div style="height: 100px"></div>
    </div>
    <div class="hello" >

      <el-row style="background: black;text-align: left">
        <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',offset:'2'}" :md="{span: '18',offset:'3'}" :lg="{span: '4',offset:'3'}" :xl="{span: '2',push:'1'}" style=";font-size: 28px;;font-weight: 600;color: #FFFFFF;">
          <div style="height: 61px"></div>
          <div class="hidden-md-and-down">
            <div style="height: 100px">
            </div>
          </div>
          <div style="padding-bottom: 32px">
            <span>
<!--              简介-->
            {{ $t('m.m81') }}
            </span><span style="float:right"></span>
          </div>
          <div style="padding-bottom: 32px">
            <span>
<!--              特性-->
            {{ $t('m.m82') }}</span><span style="float:right"></span>
          </div>
          <div style="padding-bottom: 32px">
            <span>
<!--              代币-->
            {{ $t('m.m83') }}
            </span><span style="float:right"></span>
          </div>
          <div style="padding-bottom: 32px">
            <span>
<!--              线路图-->
            {{ $t('m.m84') }}
            </span><span style="float:right"></span>
          </div>
          <div style="padding-bottom: 32px">
            <span>
<!--              社区-->
            {{ $t('m.m85') }}
            </span><span style="float:right"></span>
          </div>
        </el-col>
        <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',offset:'2'}" :md="{span: '18',offset:'3'}" :lg="{span: '7',offset:'7'}" :xl="{span: '7',push:''}" style="">
          <div style="height: 31px"></div>
          <div class="hidden-md-and-down">
            <div style="height: 130px">
            </div>
          </div>
          <img src="@/assets/home_redLogo01.png" style="height: auto;width: 128px;">
          <div style="height: 41px"></div>
          <div style="height: 20px"></div>
          <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;">
            <!--            是一个来自分布式计算、金融交易、区块链共识设计和跨链等各领域经验丰富的团队。同时，KB24的核心团队都是科比的忠实球迷。KB24团队通过加密技术，构建出一个完全去中心化的、公开透明且永续的应用平台，为用户提供传统体育生态无法比拟的体验感。-->
            {{ $t('m.m86') }}
          </div>
          <div style="height: 50px"></div>
          <div style="font-size: 14px;font-weight: 600;color: #FFFFFF;">
            <!--            联系我们-->
            {{ $t('m.m87') }}
            <div style="height: 10px"></div>
            kbtoken24.com@hotmail.com
          </div>
        </el-col>

      </el-row>
      <el-row style="background: black;text-align: left">
        <div style="height: 100px;background: black"></div>
        <el-col :xs="{span: '22',push:'1'}" :sm="{span: '20',push:'2'}" :md="{span: '18',push:'3'}" :lg="{span: '7',push:'3'}" :xl="{span: '7',push:'4'}" style="">
          <div style="font-size: 14px;font-weight: 600;color: #FFFFFF;line-height: 20px;">
            <div style="height: 10px"></div>
            © 2021 KB24 All rights reserved
            <div style="height: 10px"></div>
          </div>
        </el-col>
        <el-col :xs="{span: '22',push:'1'}" :sm="{span: '20',push:'2'}" :md="{span: '18',push:'3'}" :lg="{span: '9',push:'7'}" :xl="{span: '7',push:'5'}" style="font-size: 14px;font-weight: 600;color: #FFFFFF;padding-top: -20px">
          <a href="https://t.me/kbtoken">
            <img src="@/assets/home_feixin_logo.png" style="height: 36px;width: 36px;white-space:nowrap">
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://mobile.twitter.com/kobetoken24">
            <img src="@/assets/home_twitter_logo.png" style="height: 36px;width: 36px;white-space:nowrap">
          </a>
          &nbsp;&nbsp;&nbsp;
          <a @click="goToTokenUrl()">
            <img src="@/assets/imtoken_001.png" style="height: 36px;width: 36px;white-space:nowrap">
          </a>
          &nbsp;&nbsp;&nbsp;
          <a @click="goToTokenUrl2()">
            <img src="@/assets/TP_001.png" style="height: 36px;width: 36px;white-space:nowrap">
          </a>
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
    document.getElementById('bottom3png').style.margin = '-22px 2vm 0px'

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
        {id: 'zh', name: '中文'},
        {id: 'en', name: 'EN'},
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
      },
      homeColourPng: {
        backgroundImage: 'url(' + require('@/assets/home_colour.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
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
        let h = Math.floor(leftTime / 1000 / 60 / 60 % 24)
        this.hour = h < 10 ? '0' + h : h
        // 分
        let m = Math.floor(leftTime / 1000 / 60 % 60)
        this.min = m < 10 ? '0' + m : m
        // 秒
        let s = Math.floor(leftTime / 1000 % 60)
        this.second = s < 10 ? '0' + s : s
      } else {
        this.day = 0
        this.hour = '00'
        this.min = '00'
        this.second = '00'
      }
      // 等于0的时候不调用
      if (Number(this.hour) === 0 && Number(this.day) === 0 && Number(this.min) === 0 && Number(this.second) === 0) {
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
        let h = Math.floor(leftTime / 1000 / 60 / 60 % 24)
        this.hour2 = h < 10 ? '0' + h : h
        // 分
        let m = Math.floor(leftTime / 1000 / 60 % 60)
        this.min2 = m < 10 ? '0' + m : m
        // 秒
        let s = Math.floor(leftTime / 1000 % 60)
        this.second2 = s < 10 ? '0' + s : s
      } else {
        this.day2 = 0
        this.hour2 = '00'
        this.min2 = '00'
        this.second2 = '00'
      }
      // 等于0的时候不调用
      if (Number(this.hour2) === 0 && Number(this.day2) === 0 && Number(this.min2) === 0 && Number(this.second2) === 0) {
      } else {
        // 递归每秒调用countTime方法，显示动态时间效果,
        setTimeout(this.countTime2, 1000)
      }
    },
    goToTokenUrl () {
      self.location.href = 'imtokenv2://navigate/DappView?url=http%3A%2F%2F156.240.109.163%3A3200%2F?' + this.languages
      // alert('imtokenv2://navigate/DappView?url=http%3A%2F%2F156.240.109.163%3A3200%2F?' + this.languages)
      setTimeout(function () {
        var obj = document.getElementById('select_languages')
        var index = obj.selectedIndex
        var value = obj.options[index].value
        // alert(value)
        // self.location.href = 'http://156.240.109.163:3200/?' + value
        self.location.href = 'http://156.240.109.163:3200/?' + value
      }, 500)
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
