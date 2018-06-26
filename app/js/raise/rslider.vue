<template>
    <Panel title="今日头条" :class="$style.panel">
        <section :class="$style.content">
            <swiper :options="options">
                <swiper-slide>a <em>></em> </swiper-slide>
                <swiper-slide>b <em>></em> </swiper-slide>
                <swiper-slide>c <em>></em> </swiper-slide>
            </swiper>
        </section>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        components: {
            Panel,
            swiper,
            swiperSlide
        },
        data() {
            return {
                options: {
                    autoplay: true,
                    loop: true,
                    direction: 'vertical'
                }
            }
        }
    }
</script>

<style lang="scss">
    .swiper-container-vertical {
        height: 72px;
        .swiper-slide{
            font-family: PingFangSC-Medium;
            font-size: 28px;
            color: #333;
            em {
                color: #ddd;
                float: right;
                margin-right: 20px;
            }
        }
    }
</style>

<style lang="scss" module>
    @import "../../css/element.scss";

    .panel {
        @include panel;
        > h4 {
            display: none;
        }
        margin-top: 120px !important;
        .content {
            height: 72px;
            line-height: 72px;
            overflow: hidden;
            padding-left: 178px;
            background: url("//img12.360buyimg.com/jrpmobile/jfs/t15922/204/1330308267/4745/e0cae4a0/5a4f2836Nd00354cb.png?width=90&height=90") left 5px no-repeat;
            background-size: 10%;
        }
    }
</style>