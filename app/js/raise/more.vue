<template>
    <Panel title="更多福利" :class="$style.panel">
        <section :class="$style.content">
            <!--todo: // 开头 表示 资源和当前页面的协议一致-->
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t20638/45/788293331/14111/511b55b0/5b17a30dN687a4335.png?width=210&height=260" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t20638/45/788293331/14111/511b55b0/5b17a30dN687a4335.png?width=210&height=260" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t20638/45/788293331/14111/511b55b0/5b17a30dN687a4335.png?width=210&height=260" alt="">
            <span>专享福利 > </span>
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
    .panel{
        @include panel;
        .content {
            @include flex(row);
            position: relative;
            justify-content: space-around;
            padding-bottom: 60px;
            img{
                width: 33.3333%;
                height: 280px;
            }
            span{
                position: absolute;
                right: 20px;
                top: -112px;
                font-size: 28px;color: #999;
                height: 112px;
                line-height: 112px;
            }
        }
    }
</style>