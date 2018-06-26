<template>
    <Panel title="更多服务" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item" v-for="item in items" :key="item.img">
                <img :src="item.img" alt="">
                <p>{{item.text}}</p>
            </div>
        </section>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'

    export default {
        components: {
            Panel
        },
        data(){
            return {
                items: [
                    {
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
                        text: '小白卡'
                    },
                    {
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
                        text: '小白卡'
                    },
                    {
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
                        text: '小白卡'
                    },
                    {
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
                        text: '小白卡'
                    },
                    {
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
                        text: '小白卡'
                    },
                    {
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
                        text: '小白卡'
                    },
                    {
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
                        text: '小白卡'
                    },
                    {
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
                        text: '小白卡'
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
        .content {
            @include flex(row);
            .item {
                width: 160px;
                height: 140px;
                text-align: center;
                margin-bottom: 40px;
                img{
                    width: 90px;
                    height: 90px;
                }
                p{
                    font-size: 26px;
                    color: #666;
                    margin-top: 12px;
                }
            }
        }
    }
</style>