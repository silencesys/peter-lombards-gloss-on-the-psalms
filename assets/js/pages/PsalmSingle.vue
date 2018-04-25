<template>
    <main class="lom--single-content">
        <div class="lom--cell">
            <section class="lom--psalm-verses">
                <h2 class="lom--psalm-title">
                    Psalm 12
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

                <p :class="['lom--active-verse', {'lom--active': verse.id === 1}]" @click="openVerse(1)">
                    Usquequo, Domine, oblivisceris me in finem? Usquequo avertis faciem tuam a me?
                </p>
                <p :class="['lom--active-verse', {'lom--active': verse.id === 2}]" @click="openVerse(2)">
                    Quamdiu ponam consilia in anima mea, dolorem in corde meo per diem?
                </p>
                <p :class="['lom--active-verse', {'lom--active': verse.id === 3}]" @click="openVerse(3)">
                    Usquequo exaltabitur inimicus meus super me? Respice et exaudi me, Domine Deus meus.
                </p>
                <p :class="['lom--active-verse', {'lom--active': verse.id === 4}]" @click="openVerse(4)">
                    Illumina oculos meos, ne umquam obdormiam in morte. Nequando dicat inimicus meus: Prevalui adversus eum.
                </p>
                <p :class="['lom--active-verse', {'lom--active': verse.id === 5}]" @click="openVerse(5)">
                    Qui tribulant me, exultabunt, si motus fuero. Ego autem in misericordia tua speravi.
                </p>
                <p :class="['lom--active-verse', {'lom--active': verse.id === 6}]" @click="openVerse(6)">
                    Exultavit cor meum in salutari tuo. Cantabo Domino, qui bona tribuit mihi, et psallam nomini Domini altissimi.
                </p>
            </section>
        </div>
        <div class="lom--cell">
            <section class="lom--psalm-commentaries">
                <h2 class="lom--psalm-subtitle">
                    Lombard's commentary
                </h2>
                <transition name="fade" mode="out-in">
                    <div class="lom--psalm-content" v-if="verse.id === 1" key="commentary-1">
                        <div class="lom--church-authors">
                            <div :class="['lom--authors', {'lom--author-active': author.quotation === 0}]" @click="openAuthor('au', 0)">
                                <font-awesome-icon :icon="['far', 'user']" /><br>
                                ag
                            </div>
                            <div :class="['lom--authors', {'lom--author-active': author.quotation === 1}]" @click="openAuthor('ca', 1)">
                                <font-awesome-icon :icon="['far', 'user']" />
                                cas
                            </div>
                            <div :class="['lom--authors', {'lom--author-active': author.quotation === 2}]" @click="openAuthor('ca', 2)">
                                <font-awesome-icon :icon="['far', 'user']" />
                                cas
                            </div>
                            <div :class="['lom--authors', {'lom--author-active': author.quotation === 3}]" @click="openAuthor('ca', 3)">
                                <font-awesome-icon :icon="['far', 'user']" />
                                cas
                            </div>
                        </div>
                        <p>
                            <span class="lom--psalm-highlight">Usquequo exaltabitur inimicus meus</span>, id est <span :class="['lom--author', {'lom--author-active': author.quotation === 0}]" @click="openAuthor('au', 0)">diabolus</span> <span class="lom--psalm-highlight">super me</span>. Hoc <span :class="['lom--author', {'lom--author-active': author.quotation === 1}]" @click="openAuthor('ca', 1)">ideo</span> dicit, quia ante adventum Christi diabolus captivos tenebat homines. Vel <span class="lom--psalm-highlight">super me</span>, id est super meam credulitatem, quia ille toto orbe colitur, mea fides est in paucis. Et quia sic orbis interit, plorat hic sanctus.
                        </p>
                        <p>
                            <span class="lom--psalm-highlight">Respice</span>. Secunda pars. <span :class="['lom--author', {'lom--author-active': author.quotation === 2}]" @click="openAuthor('ca', 2)">Post</span> conquestionem orat, ut illuminetur, ne cedat fraudibus inimici iste, qui in misericordia confidit. Quasi modo dolor est, cum facies tua est aversa, cum exaltabatur inimicus, sed o <span class="lom--psalm-highlight">Domine</span>, cuius ego sum servus, qui es <span class="lom--psalm-highlight">Deus meus</span>, cuius sum creatura, <span class="lom--psalm-highlight">respice</span>, id est <span :class="['lom--author', {'lom--author-active': author.quotation === 3}]" @click="openAuthor('ca', 3)">mitte</span> quem missurus es, et <span class="lom--psalm-highlight">exaudi me</span>. Pro omnibus loquitur iste, pro quibus generaliter petit.
                        </p>
                    </div>

                    <div class="lom--psalm-content" v-else-if="verse.id === 2" key="commentary-2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sed eos officia obcaecati ratione, voluptatem iusto deleniti nam <span class="lom--psalm-highlight">debitis accusamus</span>, incidunt possimus, recusandae amet dignissimos consequatur beatae numquam quibusdam officiis.</p>
                        <p>Nam reprehenderit fugiat <span class="lom--psalm-highlight">natus quasi quas eum sapiente</span>, aliquid eveniet asperiores mollitia, eius ducimus quisquam voluptatem, laborum tempore, consectetur aut optio. Facilis ipsam iusto quos voluptatem quia blanditiis accusantium doloribus.</p>
                    </div>

                    <div class="lom--psalm-content" v-else-if="verse.id === 3" key="commentary-3">
                        <p>Donec vel mattis neque. <span class="lom--psalm-highlight">Vestibulum quis dolor at odio congue placerat at eu metus. Duis ac odio eget dolor bibendum elementum. Vivamus metus libero, auctor</span> a sem nec, sodales imperdiet eros. Nunc in finibus metus, eget feugiat sem. Maecenas varius euismod tristique.</p>
                        <p>Nam reprehenderit fugiat <span class="lom--psalm-highlight">natus quasi quas eum sapiente</span>, aliquid eveniet asperiores mollitia, eius ducimus quisquam voluptatem, laborum tempore, consectetur aut optio. Facilis ipsam iusto quos voluptatem quia blanditiis accusantium doloribus.</p>
                    </div>

                    <div class="lom--psalm-content" v-else-if="verse.id === 4" key="commentary-4">
                        <div class="lom--church-authors">
                            <div :class="['lom--authors', {'lom--author-active': author.quotation === 4}]" @click="openAuthor('au', 4)">
                                <font-awesome-icon :icon="['far', 'user']" /><br>
                                ag
                            </div>
                        </div>
                        <p>
                            <span class="lom--psalm-highlight">Illumina oculos meos</span> interiores, ut si non corpore videamus [edition: videmus], vel id est saltem mente videamus. <span :class="['lom--author', {'lom--author-active': author.quotation === 4}]" @click="openAuthor('au', 4)">Aliter</span> totum legitur ex persona modernorum sanctorum, secundum Christi adventum optantium, ut cum eo bene [i: beate] vivant, et pro dilatione conquerentium, sic o <span class="lom--psalm-highlight">Domine, usquequo oblivisceris me in finem</span> capiendum, id est [edition: sit], quousque differs me ad intelligendum Christum spiritualiter, qui est Patris sapientia et finis rectus omnis intentionis. Et repetit: <span class="lom--psalm-highlight">Usquequo avertis faciem tuam a me</span>, id est usquequo non das anime mee notitiam tui? More nostro loquitur Scriptura, cum Deum, dicit, oblivisci et avertere faciem. Hic enim non iuxta rerum proprietatem, sed per creaturarum similitudinem dicitur: In eum quippe oblivio non cadit, nec aliqua permutatio. Et <span class="lom--psalm-highlight">quamdiu ponam consilia in anima mea</span>, consilio non est opus, nisi in adversis. Et est sensus: <span class="lom--psalm-highlight">Quamdiu ponam, etc.</span>, id est quamdiu ero in adversis, quod exponit subdens, scilicet quamdiu ponam <span class="lom--psalm-highlight">dolorem in corde</span> etc. [linked: per diem]. Diem ponit pro isto seculo, quo vult exui dolens, precans que eterna, vel per diem, id est continue. Vel non sub interrogatione dicitur istud, <span class="lom--psalm-highlight">quamdiu ponam</span>, sed est responsio precedendi interrogationi, quasi tandiu oblivisceris et faciem avertis, <span class="lom--psalm-highlight">quamdiu ponam consilia</span>, id est quamdiu necesse erit ut ponam consilium <span class="lom--psalm-highlight">in anima mea</span>, ut nisi ponat quisque consilium in anima sua tale, scilicet ut operetur misericordiam, non eum dirigat Deus in finem, neque det ei plenam sui notitiam, ut eum facie ad faciem videat.
                        </p>
                        <p>
                            Deinde sequitur: Quamdiu ponam <span class="lom--psalm-highlight">dolorem in corde meo</span>, hoc non mutatur. Sequitur: Et <span class="lom--psalm-highlight">usquequo exaltabitur inimicus meus super me</span>, scilicet diabolus, vel carnalis consuetudo. Ut autem hoc tollatur?
                        </p>
                        <p>
                            <span class="lom--psalm-highlight">Respice et exaudi me, Domine Deus meus</span>, etc. Respice dicit, contra hoc quod supradictum est, avertis faciem tuam, exaudi, contra oblivisceris me. Et <span class="lom--psalm-highlight">illumina oculos meos</span> cordis ne unquam obdormiam. Per concupiscentiam, que ex me sit <span class="lom--psalm-highlight">in morte</span>, id est ne peccati delectatione claudantur ipsi oculi. Oculi enim obdormiunt in morte, quando fidei lumine sepulto carnali delectatione clauduntur. Vel <span class="lom--psalm-highlight">ne unquam obdormiam in morte</span>, id est ne obvolvar quolibet criminali peccato. Vel <span class="lom--psalm-highlight">in morte</span>, id est in peccato, quod fit in Spiritum sanctum, de quo dicit Iohannes: Est peccatum ad mortem, non pro eo dico ut quis oret [1John 5:16]. Dico non obdormiam per me, nec etiam per alium. Et hoc est <span class="lom--psalm-highlight">ne quando dicat inimicus meus</span>, id est diabolus, qui insultat dum capit. Quid dicat: <span class="lom--psalm-highlight">Prevalui adversus eum?</span> Ecce insultatio diaboli, que vehementer timenda est. Ideo dico, ne dicat inimicus, quia…
                        </p>
                    </div>

                    <div class="lom--psalm-content" v-else-if="verse.id === 5" key="commentary-5">
                        <p>Mauris finibus consequat tellus in bibendum. Donec scelerisque leo dui, sed semper augue vestibulum ac. Nunc sem lectus, volutpat eget tincidunt quis, vehicula quis elit. Aenean ut tincidunt quam. Morbi vestibulum aliquam turpis, et dapibus ante consequat vel. <span class="lom--psalm-highlight">Proin euismod egestas magna</span>, vel bibendum tellus dictum id. Quisque id odio mauris. Aenean ut neque eu lorem suscipit euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <span class="lom--psalm-highlight">Praesent</span> a tellus vitae mauris vehicula consequat eu et felis.</p>
                        <p>In sodales sapien velit, eu sollicitudin erat efficitur sit amet. Aenean laoreet venenatis turpis, a lacinia velit congue volutpat. Nullam dapibus varius finibus. <span class="lom--psalm-highlight">Proin id nulla porta</span>, sagittis ex et, blandit ante. Vestibulum dui orci, aliquet sit amet mi et, rutrum porttitor arcu. </p>
                    </div>

                    <div class="lom--psalm-content" v-else-if="verse.id === 6" key="commentary-6">
                        <p>Donec bibendum elementum justo a faucibus. Maecenas convallis vel risus et lobortis. Nunc viverra varius sollicitudin. <span class="lom--psalm-highlight">Duis sollicitudin metus id maximus fringilla</span>. Nunc cursus elit vitae nulla aliquam, faucibus egestas lorem porta. Aenean efficitur iaculis elit, eu sodales tortor. Phasellus congue felis nec placerat commodo. </p>
                    </div>
                </transition>
            </section>
        </div>
        <div :class="['lom--cell', {'lom--author-cell': author.visible}, {'lom--marginalia-cell': marginalia.visible}]">
            <transition name="fade" mode="out-in">
                <section class="lom--author-description" v-if="author.visible && !marginalia.visible" key="author.quotation">
                    <div class="lom--close-button" @click="closeAuthor">
                        <font-awesome-icon :icon="['far', 'times']" />
                        close
                    </div>
                    <h2 class="lom--psalm-subtitle">
                        {{ this.authors.sources[this.author.quotation].word }}
                    </h2>

                    <p>
                        <strong>
                            {{ this.authors.sources[this.author.quotation].text }}
                        </strong><br>
                        {{ this.authors.sources[this.author.quotation].quotation }}
                    </p>

                    <h3 class="lom--psalm-author-title">
                        Who is {{ this.authors[this.author.short].name }}?
                    </h3>
                    <p>
                        {{ this.authors[this.author.short].bio }}
                    </p>
                </section>
                <section class="lom--psalm-marginalia" v-else-if="marginalia.visible && !author.visible" key="marginalia">
                    <h2 class="lom--psalm-subtitle">
                        Marginalia
                    </h2>
                    <p>
                        There are none.
                    </p>
                </section>
            </transition>
        </div>
    </main>
</template>

<script>
    export default {
        name: "Page--PsalmSingle",
        data() {
            return {
                author: {
                    visible: false,
                    quotation: null,
                    short: null
                },
                marginalia: {
                    visible: false
                },
                verse: {
                    id: 1
                },
                authors: {
                    au: {
                            name: "Augustine",
                            bio: "Augustine of Hippo (/ɔːˈɡʌstɪn/; 13 November 354 – 28 August 430) was an early Christian theologian and philosopher from Numidia whose writings influenced the development of Western Christianity and Western philosophy. He was the bishop of Hippo Regius in north Africa and is viewed as one of the most important Church Fathers in Western Christianity for his writings in the Patristic Era. Among his most important works are The City of God, On Christian Doctrine and Confessions."
                        },
                    ca: {
                        name: "Cassiodorus",
                        bio: "Flavius Magnus Aurelius Cassiodorus Senator (c. 485 – c. 585), commonly known as Cassiodorus, was a Roman statesman and writer serving in the administration of Theoderic the Great, king of the Ostrogoths. Senator was part of his surname, not his rank."
                    },
                    sources: [
                        {
                            word: "Diabolus",
                            text: "Augustinus, Enarrationes in Psalmos XII, PL. Col.0140",
                            quotation: "[…] vel diabolus, vel consuetudo carnalis[…]"
                        },
                        {
                            word: "Ideo",
                            text: "Cassiodorus, In Psalterium Expositio, XII, PL Col.102A",
                            quotation: "[…] de diabolo dicit, qui ante adventum Domini exaltatus humana captivitate gaudebat[…]"
                        },
                        {
                            word: "Post",
                            text: "Cassiodorus, In Psalterium Expositio, XII, PL Col.102A",
                            quotation: "Sed quas hic pietatem ejus lacrymas profudisse credamus, ne dilatione diutina totus mundus captus erroribus interiret?"
                        },
                        {
                            word: "Mitte",
                            text: "Cassiodorus, In Psalterium Expositio, XII, PL Col. 102B",
                            quotation: "Respice, ad illud referendum est quod superius ait: Usquequo avertis faciem tuam a me? exaudi vero, ad illud quod dicit in capite psalmi: Usquequo, Domine, oblivisceris me in finem?"
                        },
                        {
                            word: "Aliter",
                            text: "Augustinus, Enarrationes in Psalmos, Psalmos XII, PL Col.140 v. 4",
                            quotation: "Oculos cordis oportet intelligi, ne delectabili defectu peccati claudantur […]"
                        }
                    ]
                }
            }
        },
        methods: {
            openAuthor(short, id) {
                if (id === this.author.quotation) {
                    this.closeAuthor();
                } else {
                    this.author.visible = true;
                    this.author.quotation = id;
                    this.author.short = short;
                }
            },
            closeAuthor() {
                this.author.visible = false;
                this.author.quotation = null;
                this.author.short = null;
            },
            openVerse(id) {
                if (this.verse.id !== id) {
                    this.closeAuthor();
                }
                this.verse.id = id;
            }
        },
        created() {
            if (this.$route.hash > 0) {
                this.verse.id = this.$route.hash;
            }
        }
    }
</script>