<template>
    <Panel title="轮播图" :class="$style.panel">
        <section :class="$style.content">
            <Slider :items="items" :cname="$style.slider"/>
        </section>
    </Panel>
</template>

<script>
    import Slider from '../core/slider.vue'
    import Panel from '../core/panel.vue'

    export default {
        components: {
            Panel,
            Slider
        },
        data(){
            return {
                items: [
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t20467/241/1559868784/48493/c5a5d82/5b2ce72aNf8cf4dc5.jpg?width=750&height=400'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t20467/241/1559868784/48493/c5a5d82/5b2ce72aNf8cf4dc5.jpg?width=750&height=400'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";

    .panel {
        @include panel;
        >h4{
            display: none;
        }
        .content {
            .slider {
                margin-top: 120px;
            }
        }
    }
</style>