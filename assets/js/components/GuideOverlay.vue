<template>
    <transition name="slide-vertical">
        <div class="lom--guide-overlay" v-if="visible">
            <transition name="slide-horizontal" mode="out-in">
                <div v-if="step === 1" key="slide-one">
                    <h2 class="lom--overlay-title">Introduction</h2>

                    <p>
                        Gloss is usually a short interlinear or marginal note, which can contain translation, interpretation of the text or simply reader’s comments. Gloss was frequently used by medieval scribes and therefore is an important part of the written culture in the Middle Ages.
                    </p>
                    <p>
                        The manuscript Ii.3.24, University Library Cambridge, was written on parchment and is dated to the second half of the 12th century. Its place of origin is England. The main text consists of the Magna glosatura (ff. 1r-263v), written by Peter Lombard in the 12th century.
                    </p>
                </div>
                <div v-else-if="step === 2" key="slide-two">
                    <h2 class="lom--overlay-title">About the Author</h2>

                    <p>
                        Peter Lombard (born c. 1100, Novara, Lombardy—died Aug. 21/22, 1160, Paris), bishop of Paris whose Four Books of Sentences(Sententiarum libri IV) was the standard theological text of the Middle Ages.
                    </p>
                    <p>
                        Lombard’s teachings were opposed during his lifetime and after his death. Later theologians rejected a number of his views, but he was never regarded as unorthodox, and efforts to have his works condemned were unsuccessful.
                    </p>
                    <p>
                        His collected works are in J.-P. Migne, Patrologia Latina, vol. 191–192. (Enciclopedia Brittanica)
                    </p>
                </div>
                <div v-else-if="step === 3" key="slide-three">
                    <h2 class="lom--overlay-title">How to use</h2>

                    <p>
                        On the following page you will be able to select the psalm and/or verse that interests you. By clicking on the verse you will be redirected on the page with Peter Lombard's commentary to the given verse.
                    </p>
                    <p>
                        To be continued in a galaxy far far away ...
                    </p>
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
                if (this.step !== 3) {
                    this.step++;
                } else {
                    this.$emit('event-hideoverlay');
                }
            }
        }
    }
</script>