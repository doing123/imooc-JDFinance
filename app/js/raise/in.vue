<template>
    <Panel title="In货推荐" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t24085/180/188421222/17231/f94bd16f/5b285744Nba957c1d.png?width=690&height=154"
                     alt="">
                <section :class="$style.list">
                    <div :class="$style.product">
                        <img src="//img30.360buyimg.com/cf/jfs/t22162/323/78348189/20824/dac83f3b/5afa4f72Ne6dc8c55.jpg!q70.dpg"
                             alt="">
                        <p :class="$style.title">奥可宝 一键智能辅食机</p>
                        <p :class="$style.price"><em>29.00</em>起</p>
                        <article>
                            <div :class="$style.wrapper">
                                <div :class="$style.inner"></div>
                            </div>
                            <p>172%</p>
                        </article>
                        <label for="">精选</label>
                    </div>
                    <div :class="$style.product">

                    </div>
                </section>
            </div>
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
            @include flex;
            .item {
                > img {
                    display: block;
                    width: 100%;
                    height: 170px;
                }
                .list {
                    @include flex(row);
                    .product {
                        width: 50%;
                        height: 396px;
                        box-sizing: border-box;
                        background: rgba(0, 0, 0, .02);
                        text-align: center;
                        position: relative;
                        img {
                            width: 180px;
                            height: 180px;
                            margin: 44px auto;
                        }
                        .title {
                            font-size: 28px;
                            color: #444;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                        .price {
                            font-family: PingFangSC-Semibold;
                            font-size: 20px;
                            color: #999;
                            height: 48px;
                            line-height: 48px;
                            em {
                                color: #ff3232;
                                font-size: 36px;
                                margin-left: 4px;
                                &:before {
                                    content: '￥';
                                    font-size: 28px;
                                }
                            }
                        }
                        article {
                            @include flex(row);
                            align-items: center;
                            justify-content: space-around;
                            padding: 0 20px;
                            height: 30px;
                            line-height: 30px;
                            margin-top: 16px;
                            .wrapper {
                                width: 144px;
                                height: 10px;
                                background: #f6f6f6;
                                border-radius: 22px;
                                .inner {
                                    width: 40%;
                                    height: 10px;
                                    background-image: linear-gradient(270deg, #f55 1%, #ff9c31 100%);
                                    border-radius: 22px;
                                }
                            }
                            p {
                                font-size: 24px;
                                color: #999;
                            }
                        }
                        label {
                            position: absolute;
                            left: 0;
                            top: 0;
                            font-size: 20px;
                            color: #ff0000;
                            text-align: center;
                            padding: 4px 8px;
                            background-image: linear-gradient(-35deg, #c1c1c1 0, #acacac 100%);
                        }
                    }
                }
            }

        }
    }
</style>