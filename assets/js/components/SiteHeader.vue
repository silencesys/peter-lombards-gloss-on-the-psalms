<template>
    <header class="lom--site-header">
        <div class="lom--cell">
            <router-link to="/" class="lom--header-back-btn" v-if="this.$route.name !== 'home'">
                <font-awesome-icon :icon="['fa', 'angle-left']" />
            </router-link>
            <h1 class="lom--site-title">
                <router-link to="/">
                    <strong>Peter Lombard</strong><br>
                    Gloss on the Psalms
                </router-link>
            </h1>
        </div>
        <div class="lom--cell">
        </div>
        <div class="lom--cell">
            <form class="lom--search">
                <font-awesome-icon :icon="['fa', 'search']" />
                <input type="text" name="search" v-model="query" placeholder="Search in commentaries">
            </form>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Component--SiteHeader",
        data() {
            return {
                query: null
            }
        },
        computed: {
            /**
             * Check whether back button shold be visible or not.
             *
             * @return {Boolean}
             */
            visibleBackButton() {
                return this.$route.name !== 'home';
            }
        },
        watch: {

        },
        methods: {

        }
    }
</script>