<template>
    <Panel title="生活服务" :class="$style.panel">
        <ul :class="$style.content">
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90" alt="">
                <p>惠加油</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90" alt="">
                <p>惠加油</p>
                <p>全新升级</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90" alt="">
                <p>惠加油</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90" alt="">
                <p>惠加油</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90" alt="">
                <p>惠加油</p>
            </li>
        </ul>
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
        .content{
            @include flex(row);
            box-sizing: border-box;
            padding-bottom: 40px;
            .item{
                width: 20%;
                text-align: center;
                img {
                    width: 90px;
                    height: 90px;
                }
                p{
                    font-size: 26px;
                    color: #666;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    margin-top: 12px;
                    &:nth-child(3){
                        color: #ff801a;
                    }
                }
            }
        }
    }
</style>