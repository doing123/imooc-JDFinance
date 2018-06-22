<template>
    <Panel title="新品推荐" :class="$style.panel">
        <section :class="$style.content">
            <div class="arrow">更多尖货 ></div>
            <Slider :options="options" :items="items" cname="product-slider"/>
        </section>
    </Panel>
</template>

<script>
    import Panel from './../core/panel.vue'
    import Slider from './../core/slider.vue'

    export default {
        components: {
            Panel,
            Slider
        },
        data() {
            return {
                items: [
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t19990/203/1131512962/38522/dd594744/5b15fdfcNbb5c9217.jpg?width=335&height=421'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t19990/203/1131512962/38522/dd594744/5b15fdfcNbb5c9217.jpg?width=335&height=421'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t19990/203/1131512962/38522/dd594744/5b15fdfcNbb5c9217.jpg?width=335&height=421'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t19990/203/1131512962/38522/dd594744/5b15fdfcNbb5c9217.jpg?width=335&height=421'
                    }
                ],
                options: {
                    /*pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },*/
                    slidesPerView: 2.3,
                    spaceBetween: 30,
                    freeMode: true
                }
            }
        }
    }
</script>

<style lang="scss">
    .product-slider {
        .swiper-container {
            box-sizing: border-box;
            padding: 0 24px;
            .swiper-slide {
                a {
                    display: inline-block;
                    width: 100%;
                    img{
                        width: 100%;
                        display: block;
                        height: 314px;
                        border: 1px solid #fafafa;
                    }
                }
            }
        }
    }
</style>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel {
        @include panel;
        .content {
            padding-bottom: 40px;
            position: relative;
            &>div{
                position: absolute;
                font-size: 28px;
                color: #999;
                right: 20px;
                top: -70px;
            }
        }
    }
</style>