<template>
    <Panel title="每日签到" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t24085/180/188421222/17231/f94bd16f/5b285744Nba957c1d.png?width=690&height=154"
                 alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t23881/56/330496522/14429/786d185a/5b2c6283Ndb647211.png?width=690&height=154"
                 alt="">
            <p>不抢白不抢</p>
        </section>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'

    export default {
        components: {
            Panel
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";

    .panel {
        @include panel;
        .content {
            @include flex(row);
            position: relative;
            padding-bottom: 40px;
            img {
                width: 320px;
                height: 136px;
            }
            P {
                position: absolute;
                top: -112px;
                right: 20px;
                font-size: 28px;
                color: #999;
                height: 112px;
                line-height: 112px;
            }
        }
    }
</style>