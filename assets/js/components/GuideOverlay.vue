<template>
    <transition name="slide-vertical">
        <div class="lom--guide-overlay" v-if="visible">
            <transition name="slide-horizontal" mode="out-in">
                <div v-if="step === 1" key="slide-one">
                    <h2 class="lom--overlay-title">Introduction</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur autem animi quo nisi illo ab excepturi reprehenderit labore debitis amet maiores, velit illum asperiores quas magni cum corporis praesentium iure? Suscipit aperiam ad pariatur facere, et, eos nobis magni quo nesciunt ducimus sapiente ut quis, molestiae sed atque. Nemo possimus nisi, totam repellat quae asperiores explicabo veritatis a corporis. Quia.</p>
                </div>
                <div v-else-if="step === 2" key="slide-two">
                    <h2 class="lom--overlay-title">Peter Lombard</h2>

                    <p>Vestibulum tellus enim, varius id ornare eget, pharetra nec diam. Mauris pharetra quis lectus at semper. Sed et ullamcorper magna, vitae pharetra urna. Donec velit eros, feugiat vel mi ac, porta pulvinar odio. In hac habitasse platea dictumst. Nulla fermentum placerat erat, vitae sagittis lorem tristique et. Integer felis est, viverra ac ex maximus, ultricies dictum mauris. Fusce quis commodo turpis. Integer eget gravida elit, in aliquam felis. Etiam gravida non mi vel pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dolor pellentesque, scelerisque mauris et, euismod tortor.</p>
                </div>
            </transition>

            <button class="lom--btn-continue" @click="continueInGuide">
                Continue
            </button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Component--GuideOverlay',
        props: {
            visible: Boolean
        },
        data() {
            return {
                step: 1
            }
        },
        methods: {
            continueInGuide() {
                if (this.step !== 2) {
                    this.step++;
                } else {
                    this.$emit('event-hideoverlay');
                }
            }
        }
    }
</script>