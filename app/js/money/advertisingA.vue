<template>
    <Panel title="会员等级" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t23161/278/411824747/25101/9fdfc5b9/5b2f08d1Nd65f02fd.png?width=750&height=160"
                 alt="">
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
        > h4 {
            display: none;
        }
        .content {
            img {
                width: 100%;
                height: 230px;
                display: block;
            }
        }
    }
</style>