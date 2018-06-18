<template>
    <article>
        <Slider :items="items" :cname="$style.slider"></Slider>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
    import Slider from '../core/slider.vue'

    export default {
        components: {
            Slider
        },
        data() {
            return {
                items: [
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t21874/245/1333762924/39494/4389dbb1/5b267a87N51ce32da.jpg?width=750&height=320'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t21385/135/1201527515/55111/e89a9ff6/5b221ccbNd9ffa09f.jpg?width=750&height=320'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t22906/260/139804667/42931/559cfdf2/5b267b48Ne8fb0793.jpg?width=750&height=320'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t21571/191/1343315266/54867/155e9c84/5b267a42Ncfe71385.jpg?width=750&height=320'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t21874/245/1333762924/39494/4389dbb1/5b267a87N51ce32da.jpg?width=750&height=320'
                    }
                ],
                enters: [
                    {
                        href: 'home',
                        img: '//m.jr.jd.com/mjractivity/rn/couponCenter/index.html?RN=couponCenter&from=wtmzhan&sid=',
                        title: '优惠券'
                    },
                    {
                        href: 'home',
                        img: '//wyyl.jd.com/static/page/html/index.html?sid=',
                        title: '领红包'
                    },
                    {
                        href: 'home',
                        img: '//m.jr.jd.com/spe/qyy/hzq/index.html?usertype=1176&mz&sid=',
                        title: '抢钢镚'
                    },
                    {
                        href: 'home',
                        img: '//m.jr.jd.com/jdbt/raiseAmount/index.html#/process?sid=',
                        title: '白条提现'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";

    .slider {
        margin-top: 120px;
        img {
            width: 100%;
        }
    }

    .list {
        @include list(row);
        background: #ffffff;
        padding-top: 40px;
        padding-bottom: 20px;
        justify-content: space-around; /*两端对齐*/
        a {
            text-decoration: none;
        }
        .item {
            text-align: center;
            img {
                display: inline-block;
                width: 90px;
                height: 90px;
            }
            h4 {
                font-size: 26px;
                margin-top: 12px;
                color: #666;
            }
        }
    }
</style>