<template>
    <Panel title="京东智投" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t21520/220/770346544/34912/890a3c18/5b17a40fNb6732372.jpg?width=750&height=200" alt="">
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
        margin-bottom: 0;
        >h4{
            display: none;
        }
        .content {
            height: 102px;
            img{
                width: 100%;
                height: 102px;
            }
        }
    }
</style>