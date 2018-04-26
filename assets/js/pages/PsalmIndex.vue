<template>
    <main class="lom--home-content">
        <div class="lom--search-results" v-for="psalm in psalms">
                <h2 class="lom--psalm-title">
                    <router-link :to="{name: 'psalm.single', params: {id: psalm.id}}">
                        {{ psalm.title }}
                    </router-link>
                </h2>

                <p v-for="verse in psalm.verses" class="lom--psalm-text">
                    {{ verse }}
                </p>

                <router-link class="lom--continue-reading"
                             :to="{name: 'psalm.single', params: {id: psalm.id}}"
                >
                    Continue reading
                    <font-awesome-icon :icon="['far', 'arrow-right']" />
                </router-link>
        </div>
    </main>
</template>

<script>
    import dataPsalms from './../data/psalms'

    export default {
        name: 'Page--PsalmIndex',
        data() {
            return {
                psalms: dataPsalms.psalms
            }
        }
    }
</script>