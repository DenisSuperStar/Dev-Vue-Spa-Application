<template>
    <!-- root element -->
    <div id="app">
        <!-- Navigation Top, begin -->
        <div class="mt-3 ml-3 mr-3 cm-flex-container">
          <router-link tag="button" to="/" class="btn btn-dark cm-btn-transform mr-2 text-capitalize">main page</router-link>
          <router-link tag="button" to="/blog" class="btn btn-danger cm-btn-transform text-capitalize cm-btn-danger_margin-left">blog</router-link>
        </div>
        <!-- Nav Top, end -->

        <!-- Start router, begin -->
        <router-view></router-view>
        <!-- router, end -->
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style scoped>
    /*NavTop styles*/

    .cm-flex-container {
        display: flex; 
        justify-content: flex-end;
    }

    .cm-btn-transform {
        width: calc(23% + 3px) !important;
        height: 3rem !important;
        font-size: 1.35rem !important;
    }

    .cm-btn-danger_margin-left {
        margin-left: 1.5rem !important;
    }

    /*Media query navtop styles*/

    @media screen and (max-width: 500px) {
        .cm-flex-container {
            display: block !important;
            justify-content: normal !important;
        }

        .cm-btn-transform {
            width: auto !important;
            font-size: 1rem !important;
        }
    }
</style>