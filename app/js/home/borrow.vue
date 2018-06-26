<template>
    <Panel title="极速借贷" :class="$style.panel">
        <section :class="$style.content">
            <router-link :to="{name: 'home', params: {}}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t23419/179/141923061/33954/153e2ce5/5b266e6fN8534aeba.png?width=750&height=260"
                     alt="">
            </router-link>
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
            padding-bottom: 40px;
            img {
                display: block;
                width: 100%;
            }
        }
    }
</style>