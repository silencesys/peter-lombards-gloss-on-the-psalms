<template>
    <main class="lom--search-content">
        <h2 class="lom--search-title">
            Results for
            <span class="lom--search-query">
                {{ this.$route.params.query }}
            </span>
        </h2>

        <div class="lom--search-results" v-for="psalm in psalms">
                <h2 class="lom--psalm-title">
                    <router-link :to="{name: 'psalm.single', params: {id: psalm.id}}">
                        {{ psalm.title }}
                    </router-link>
                </h2>

                <p v-for="verse in psalm.verses" class="lom--psalm-text">
                    {{ verse }}
                </p>

                <router-link class="lom--continue-reading" :to="{name: 'psalm.single', params: {id: psalm.id}}">
                    Continue reading
                    <font-awesome-icon :icon="['far', 'arrow-right']" />
                </router-link>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'Page--PsalmIndex',
        data() {
            return {
                psalms: [
                    {
                        id: 12,
                        title: "On psalm 12",
                        verses: [
                            "Titulus. In finem Psalmus David. Titulus iste patet. Psalmus iste agit de caritate Christi, in qua totius legis perfectio est, quam qui habet, mundum non amat. Hic enim propheta plenus caritate..."
                        ]
                    },
                    {
                        id: 12,
                        title: "On psalm 15",
                        verses: [
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias est maiores quo tempora illum quibusdam, incidunt aspernatur, voluptatem maxime, nihil corporis quis beatae neque, esse...",
                        ]
                    },
                    {
                        id: 12,
                        title: "On psalm 16",
                        verses: [
                            " Dei cultura suscipiatur. Vel in persona sanctorum modernorum loquitur, secundum Christi adventum desiderantium, ubi certi sunt de salute. Quanto enim desiderio antiqui...",
                        ]
                    }
                ]
            }
        },
        created() {

        }
    }
</script>