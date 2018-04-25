<template>
    <main class="lom--main-content">
        <div class="lom--cell" v-for="psalm in psalms">
            <section class="lom--psalm-verses">
                <h2 class="lom--psalm-title">
                    <router-link :to="{name: 'psalm.single', params: {id: psalm.id}}">
                        {{ psalm.title }}
                    </router-link>
                </h2>

                <div class="lom--psalm-navigation">
                    <router-link to="/" class="lom--ps-title-icon">
                        <font-awesome-icon :icon="['far', 'file']" />
                        View
                    </router-link>
                    <router-link to="/" class="lom--ps-title-icon">
                        <font-awesome-icon :icon="['fab', 'youtube']" />
                        Listen
                    </router-link>
                </div>

                <router-link class="verse-link"
                             :to="{name: 'psalm.single', hash: (index + 1), params: {id: psalm.id}}"
                             v-for="(verse, index) in psalm.verses"
                             :key="index"
                >
                    {{ verse }}
                </router-link>
            </section>
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
                        title: "Psalm 12",
                        verses: [
                            "Usquequo, Domine, oblivisceris me in finem? Usquequo avertis faciem tuam a me?",
                            "Quamdiu ponam consilia in anima mea, dolorem in corde meo per diem?",
                            "Usquequo exaltabitur inimicus meus super me? Respice et exaudi me, Domine Deus meus.",
                            "Illumina oculos meos, ne umquam obdormiam in morte. Nequando dicat inimicus meus: Prevalui adversus eum.",
                            "Qui tribulant me, exultabunt, si motus fuero. Ego autem in misericordia tua speravi.",
                            "Exultavit cor meum in salutari tuo. Cantabo Domino, qui bona tribuit mihi, et psallam nomini Domini altissimi. ",
                        ]
                    },
                    {
                        id: 12,
                        title: "Psalm 13",
                        verses: [
                            "Dixit insipiens in corde suo: Non est Deus.",
                            "Corrupti sunt et abominabiles facti sunt in studiis suis. Non est, qui faciat bonum, non est usque ad unum.",
                            "Dominus de celo prospexit super filios hominum, ut videat si est intelligens, aut requirens Deum.",
                            "Omnes declinaverunt, simul inutiles facti sunt. Non est, qui faciat bonum, non est usque ad unum. Sepulchrum patens est guttur eorum, linguis suis dolose agebant.",
                            "Venenum aspidum sub labiis eorum, quorum os maledictione et amaritudine plenum est. Veloces pedes eorum ad effundendum sanguinem.",
                            "Contritio et infelicitas in viis eorum, et viam pacis non cognoverunt. Non est timor Dei ante oculos eorum.",
                            "Nonne cognoscent omnes, qui operantur iniquitatem, qui devorant plebem meam sicut escam panis?",
                            "Dominum non invocaverunt, illic trepidaverunt timore, ubi non erat timor. Quoniam Dominus in generatione iusta est, consilium inopis confudistis, quoniam Dominus spes ejus est.",
                            "Quis dabit ex Sion salutare Israel? Cum averterit Dominus captivitatem plebis sue, exultabit Iacob, et letabitur Israel."
                        ]
                    },
                    {
                        id: 12,
                        title: "Psalm 14",
                        verses: [
                            "Domine, quis habitabit in tabernaculo tuo? Aut quis requiescet in monte sancto tuo?",
                            "Qui ingreditur sine macula et operatur iustitiam, qui loquitur veritatem in corde suo, qui non egit dolum in lingua sua, nec fecit proximo suo malum, et opprobrium non accepit adversus proximos suos.",
                            "Ad nihilum deductus est in conspectu eius malignus, timentes autem Dominum glorificat.",
                            "Qui iurat proximo suo et non decipit, qui pecuniam suam non dedit ad usuram et munera super innocentem non accepit, qui facit hec, non movebitur in eternum."
                        ]
                    }
                ]
            }
        },
        created() {

        }
    }
</script>