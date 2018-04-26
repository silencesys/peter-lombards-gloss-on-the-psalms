<template>
    <transition name="slide-vertical">
        <div class="lom--guide-overlay" v-if="visible">
            <transition name="slide-horizontal" mode="out-in">
                    <div class="lom--two-columns" v-if="step === 1" key="slide-one">
                        <div class="lom--first-column">
                            <h2 class="lom--overlay-title">
                                Introduction
                            </h2>

                            <p>
                                The manuscript Ii.3.24, University Library Cambridge, was written on parchment and is dated to the second half of the 12th century. Its place of origin is England. The main text consists of the Magna glossatura (ff. 1r-263v), a commentary on the biblical Psalms written by Peter Lombard in the 12th century.
                            </p>
                            <p>
                                The manusrcipt also contains glosses. A gloss is usually a short interlinear or marginal note, which can contain translation, interpretation of the text or simply reader’s comments. Gloss was frequently used by medieval scribes and therefore is an important part of the written culture in the Middle Ages.
                            </p>

                            <button class="lom--btn-continue" @click.prevent="continueInGuide">
                                Continue
                            </button>
                            <a href="" class="lom--link-white" @click.prevent="skipTheIntro">
                                Skip the intro
                                <font-awesome-icon :icon="['far', 'arrow-right']" />
                            </a>
                        </div>
                    </div>
                    <div class="lom--two-columns"  v-else-if="step === 2" key="slide-two">
                        <div class="lom--first-column">
                            <h2 class="lom--overlay-title">About the Author</h2>

                            <p>
                                Peter Lombard (born c. 1100, Novara, Lombardy — died 1160, Paris), bishop of Paris whose Four Books of Sentences (Sententiarum libri IV) was the standard theological text of the Middle Ages.
                            </p>
                            <p>
                                Lombard’s teachings were opposed during his lifetime and after his death. Later theologians rejected a number of his views, but he was never regarded as unorthodox, and efforts to have his works condemned were unsuccessful.
                            </p>
                            <p>
                                His collected works are in J.-P. Migne, Patrologia Latina, vol. 191–192. (<a href="https://www.britannica.com/biography/Peter-Lombard" class="active-link">Enciclopedia Britannica</a>)
                            </p>

                            <button class="lom--btn-continue" @click.prevent="continueInGuide">
                                Continue
                            </button>
                            <a href="" class="lom--link-white" @click.prevent="skipTheIntro">
                                Skip the intro
                                <font-awesome-icon :icon="['far', 'arrow-right']" />
                            </a>
                        </div>
                    </div>
                    <div class="lom--two-columns" v-else-if="step === 3" key="slide-three">
                        <div class="lom--first-column">
                            <h2 class="lom--overlay-title">How to use</h2>

                            <p>
                                On the following page you will be able to select the psalm and/or verse that interests you. By clicking on the verse you will be redirected on the page with Peter Lombard's commentary to the given verse.
                            </p>
                            <p>
                                [ ] interlinear glosses are in square brackets <br>
                                <font-awesome-icon :icon="['far', 'sticky-note']" /> this icon marks marginalia <br>
                                <font-awesome-icon :icon="['far', 'user']" /> or <span class="two-dots">two</span> dots above word marks reference to the source used by Peter Lombard<br>
                                <u>underlined text</u> is used for references to the words of the psalm
                            </p>
                            <p>
                                To be continued in a galaxy far far away ...
                            </p>

                            <button class="lom--btn-continue" @click.prevent="continueInGuide">
                                Continue
                            </button>
                            <a href="" class="lom--link-white" @click.prevent="skipTheIntro">
                                Skip the intro
                                <font-awesome-icon :icon="['far', 'arrow-right']" />
                            </a>
                        </div>
                        <div class="lom--second-column"></div>
                    </div>
            </transition>
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
            },
            skipTheIntro() {
                this.step = 4;
                this.$emit('event-hideoverlay');
            }
        }
    }
</script>