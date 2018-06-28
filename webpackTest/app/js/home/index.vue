<template>
    <div :class="$style.home">
        <h1>home</h1>
        <div :class="$style.title">
            title
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" module>
    @import "../../css/reset.scss";
    .home{
        color: #f04752;
        font-size: 55px;
        .title{
            color: aqua;
            font-size: 35px;
        }
    }
</style>