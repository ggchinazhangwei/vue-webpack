<template>
  <section id="home">
    <div class="tab-box">
      <img :src="require('@asset/img/logo.png')" class="logo">
      <div class="line"></div>
      <ul class="tab" layout="row">
        <li
          class="tab-item"
          v-for="(item,index) in tab"
          :key="index"
          :class="{'active': (item.key === activeindex) || item.chlid && item.chlid.findIndex(n=>n.key === activeindex) >= 0  }"
          @click="link(item.key)"
        >
          <div>{{ item.title }}</div>
          <ul class="chlid" v-if="item.chlid">
            <li
              v-for="(subitem, subindex) in item.chlid"
              :class="{'active': subitem.key === activeindex }"
              :key="subindex"
              @click="link(subitem.key)"
            >{{ subitem.title }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="bannner-swiper" v-show="activeindex==='index'">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in indexList" :key="index">
                <img :src="item">
            </div>
        </div>
        <div class="swiper-prev-wrap" layout="row" layout-align="space-between center">
            <div class="swiper-prev"></div>
            <div class="swiper-next"></div>
        </div>
        
        
    </div>
    <div class="banner"  v-show="activeindex!=='index'">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="banner-item"
        v-show="item.key === activeindex"
      >
        <img :src="item.img">
      </div>
    </div>
  </section>
</template>
<script>
import Swiper from 'swiper';
export default {
    data(){
        return{
            mySwiper: null,
            activeindex: 'index',
            tab:[
                { title: '首页', key: 'index'},
                { title: '关于最火',
                chlid: [ 
                    {
                        title: '品牌荣誉', key:'pinpairongyao'
                    },
                    {
                        title: '品牌理念', key:'pinpai'
                    },
                ]
                },
                { title: '最火3拖1', chlid: [ 
                    {
                        title: '3拖1模式', key:'santuo'
                    },
                    {
                        title: '3拖1渊源', key:'yuanyuan'
                    },
                                        {
                        title: '3拖1菜品', key:'caipin'
                    } 
                ] },
                { title: '最火门店', key:'quanguo', chlid: [
                    {
                        title: '全国地图', key:'quanguo'
                    },
                ] },
                { title: '最火团队', chlid: [
                    {
                        title: '北京公司', key:'beijing'
                    },
                    {
                        title: '重庆公司', key:'chongqin'
                    },
                ] },
                { title: '加盟合伙',chlid: [
                    {
                        title: '相关问题', key:'xiangguan'
                    },
                    {
                        title: '合作条件', key:'hezuotiaojian'
                    },
                    {
                        title: '合作费用', key:'hezuo'
                    },
                    {
                        title: '合作流程', key:'hezuoliucheng'
                    },
                ]},
                { title: '服务体系',chlid: [
                    {
                        title: '物流供应', key:'wuliu'
                    },
                    {
                        title: '门店管理', key:'mendian'
                    },
                ] }
            ],
            list: [
                { img : require('@asset/img/santuo.png'), key:'santuo' },
                { img : require('@asset/img/caipin.png'), key:'caipin' },
                { img : require('@asset/img/quanguo.png'), key:'quanguo' },
                { img : require('@asset/img/yuanyuan.png'), key:'yuanyuan' },
                { img : require('@asset/img/beijing.png'), key:'beijing' },
                { img : require('@asset/img/hezuo.png'), key:'hezuo' },
                { img : require('@asset/img/wuliu.png'), key:'wuliu' },
                { img : require('@asset/img/yinxiao.png'), key:'yinxiao' },
                { img : require('@asset/img/pinpai.png'), key:'pinpai' },
                { img : require('@asset/img/hezuo.png'), key:'hezuo' },
                { img : require('@asset/img/chongqin.png'), key:'chongqin' },
                { img : require('@asset/img/hezuoliucheng.png'), key:'hezuoliucheng' },
                { img : require('@asset/img/mendian.png'), key:'mendian' },
                { img : require('@asset/img/pinpairongyao.png'), key:'pinpairongyao' },
                { img : require('@asset/img/xiangguan.png'), key:'xiangguan' },
                { img : require('@asset/img/hezuotiaojian.png'), key:'hezuotiaojian' }
            ],
            indexList: [
                require('@asset/img/1.png'),
                require('@asset/img/2.png'),
                require('@asset/img/3.png'),
                require('@asset/img/4.png'),
            ]
        } 
    },
    methods: {
        link(key){
            if(key){
                this.activeindex = key;
            }
        }
    },
    mounted () {
        this.$nextTick(()=>{
            this.mySwiper = new Swiper('.bannner-swiper', {
                autoplay: {
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                },
            })
        })
    },
    beforeDestroy () {
        this.mySwiper = null;
    }
}
</script>
