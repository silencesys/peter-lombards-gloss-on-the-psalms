<template>
    <main class="lom--single-content">
        <div class="lom--cell">
            <section class="lom--psalm-verses">
                <h2 class="lom--psalm-title">
                    Psalm 12
                </h2>

                <div class="lom--psalm-navigation">
                    <a href="/public/folios/18.jpg" target="_blank" class="lom--ps-title-icon" @click.prevent="selectFolio('v17')">
                        <font-awesome-icon :icon="['far', 'file']" />
                        17v
                    </a>
                    <a href="/public/folios/18.jpg" target="_blank" class="lom--ps-title-icon" @click.prevent="selectFolio('r18')">
                        <font-awesome-icon :icon="['far', 'file']" />
                        18r
                    </a>
                    <a href="https://www.youtube.com/watch?v=-EV4U8qGlKE" target="_blank" class="lom--ps-title-icon">
                        <font-awesome-icon :icon="['fab', 'youtube']" />
                        Listen
                    </a>
                </div>

                <p :class="['lom--active-verse', {'lom--active': verse.id === 1}]" @click="openVerse(1)">
                    <span class="lom--detail-panel">
                        <span class="lom--verse-marginalia">
                            <font-awesome-icon :icon="['far', 'sticky-note']" @click="openVerseWithMarginalia(1, [0,0])" title="Marginalia" />
                        </span>
                        <span class="lom--verse-marginalia">
                            <font-awesome-icon :icon="['far', 'eye']" @click="selectFolio('v17v1')" />
                        </span>
                    </span>
                    <span @click="selectFolio('v17')">
                        Usquequo, Domine, oblivisceris me in finem? Usquequo avertis faciem tuam a me?
                    </span>
                </p>
                <p :class="['lom--active-verse', {'lom--active': verse.id === 2}]" @click="openVerse(2)">
                    <span class="lom--detail-panel">
                        <span class="lom--verse-marginalia">
                            <font-awesome-icon :icon="['far', 'sticky-note']" @click="openVerseWithMarginalia(2, [0,0])" title="Marginalia" />
                        </span>
                        <span class="lom--verse-marginalia">
                            <font-awesome-icon :icon="['far', 'eye']" @click="selectFolio('r18v2')"/>
                        </span>
                    </span>
                    <span @click="selectFolio('r18')">
                        Quamdiu ponam consilia in anima mea, dolorem in corde meo per diem?
                    </span>
                </p>
                <p :class="['lom--active-verse', {'lom--active': verse.id === 3}]" @click="openVerse(3)">
                    <span class="lom--detail-panel">
                        <span class="lom--verse-marginalia">
                            <font-awesome-icon :icon="['far', 'sticky-note']" @click="openVerseWithMarginalia(3, [0,0])" />
                        </span>
                        <span class="lom--verse-marginalia">
                            <font-awesome-icon :icon="['far', 'eye']" @click="selectFolio('r18v3')"/>
                        </span>
                    </span>
                    <span @click="selectFolio('r18')">
                        Usquequo exaltabitur inimicus meus super me? Respice et exaudi me, Domine Deus meus.
                    </span>
                </p>
                <p :class="['lom--active-verse', {'lom--active': verse.id === 4}]" @click="openVerse(4)">
                    <span class="lom--detail-panel">
                        <span class="lom--verse-marginalia">
                            <font-awesome-icon :icon="['far', 'eye']" @click="selectFolio('r18v4')"/>
                        </span>
                    </span>
                    <span @click="selectFolio('r18')">
                        Illumina oculos meos, ne umquam obdormiam in morte. Nequando dicat inimicus meus: Prevalui adversus eum.
                    </span>
                </p>
                <p :class="['lom--active-verse', {'lom--active': verse.id === 5}]" @click="openVerse(5)">
                    <span class="lom--detail-panel">
                        <span class="lom--verse-marginalia">
                            <font-awesome-icon :icon="['far', 'sticky-note']" @click="openVerseWithMarginalia(5, [5,0])" title="Marginalia" />
                        </span>
                        <span class="lom--verse-marginalia">
                            <font-awesome-icon :icon="['far', 'eye']" @click="selectFolio('r18v5')"/>
                        </span>
                    </span>
                    <span @click="selectFolio('r18')">
                        Qui tribulant me, exultabunt, si motus fuero. Ego autem in misericordia tua speravi.
                    </span>
                </p>
                <p :class="['lom--active-verse', {'lom--active': verse.id === 6}]" @click="openVerse(6)">
                    <span class="lom--detail-panel">
                        <span class="lom--verse-marginalia">
                            <font-awesome-icon :icon="['far', 'eye']" @click="selectFolio('r18v6')"/>
                        </span>
                    </span>
                    <span @click="selectFolio('r18')">
                        Exultavit cor meum in salutari tuo. Cantabo Domino, qui bona tribuit mihi, et psallam nomini Domini altissimi.
                    </span>
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
                        <p>
                            Titulus. In finem Psalmus David. Titulus iste patet. Psalmus iste agit de caritate Christi, in qua totius legis perfectio est, quam qui habet, mundum non amat. Hic enim propheta plenus caritate, <span class="lom--interlinear-gloss">qua</span> avide Christi incarnationem expectat, per quam futuram redemptionem intelligit, in persona antiquorum patrum, quasi de dilatione conqueritur. In quo etiam dilectio proximi ostenditur, cuius saluti hoc optatur, ut superstitione abiecta unius Dei cultura suscipiatur. Vel in persona sanctorum modernorum loquitur, secundum Christi adventum desiderantium, ubi certi sunt de salute. Quanto enim desiderio antiqui primum desideraverunt adventum, tanto moderni secundum cupiunt, iuxta illud: Cupio dissolvi et esse cum Christo. Intentio. Ad idem desiderium invitat. Modus. Bipartitus est. Prima pars est conquestio de dilactione adventus primi secundus antiquos, secundi iuxta modernos. Secundo, orat illuminari ne cedat fraudibus inimici, ibi, <span class="lom--psalm-highlight">respice</span>, etc. Prius ergo propheta in persona antiquorum de incarationis dilatione conquerentium ait: <span class="lom--psalm-highlight">O Domine, oblivisceris me</span>, id est presentiam incarnationis mihi subtrahis, usque <span class="lom--psalm-highlight">in finem</span>, id est usque ad tempus plenitudinis. Unde Apostolus: Cum venit plenitudo temporis misit Deus Filium suum etc. Et <span class="lom--psalm-highlight">usquequo</span> exspectabitur hoc? Deinde repetit aliis verbis: <span class="lom--psalm-highlight">avertis faciem tuam a me</span>, <span :class="['lom--has-marginalia', {'lom--active': marginalia.verse === 1 && marginalia.position === 0}]" @click="showMarginalia(1, 0)"><font-awesome-icon :icon="['far', 'sticky-note']"/> scilicet presentiam Filii tui, qui est facies tua, que hominibus videnda est. Et <span class="lom--psalm-highlight">usquequo</span> erit hoc?</span>
                        </p>
                    </div>

                    <div class="lom--psalm-content" v-else-if="verse.id === 2" key="commentary-2">
                        <p>
                            <span class="lom--psalm-highlight">Et quamdiu ponam consilia,</span> scilicet de diversis, ut qui anxius est <span class="lom--psalm-highlight">in anima mea</span>. Magnus ardor sustinentis hic ostenditur, qui dicit sibi deesse consilium ut, id est qualiter videndi mitigit affectum.
                        </p>
                        <p>
                            Quando autem magna anxietas est concupiscere bonum et diutius sustinere, crescit desiderium in dolorem, quia spes protrahitur. Unde subditur: Et quamdiu ponam <span class="lom--psalm-highlight">dolorem in corde meo</span>. Et hoc <span class="lom--psalm-highlight">per diem</span>, id est absolute, id est per singulos dies, quia…
                        </p>
                    </div>

                    <div class="lom--psalm-content" v-else-if="verse.id === 3" key="commentary-3">
<div class="lom--church-authors">
                            <div :class="['lom--authors', {'lom--author-active': author.quotation === 0}]" @click="openAuthor('au', 0)">
                                <font-awesome-icon :icon="['far', 'user']" /><br>
                                au
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

                    <div class="lom--psalm-content" v-else-if="verse.id === 4" key="commentary-4">
                        <div class="lom--church-authors">
                            <div :class="['lom--authors', {'lom--author-active': author.quotation === 4}]" @click="openAuthor('au', 4)">
                                <font-awesome-icon :icon="['far', 'user']" /><br>
                                au
                            </div>
                        </div>
                        <p>
                            <span class="lom--psalm-highlight">Illumina oculos meos</span> interiores, ut si non corpore videamus, vel id est saltem mente videamus. <span :class="['lom--author', {'lom--author-active': author.quotation === 4}]" @click="openAuthor('au', 4)">Aliter</span> totum legitur ex persona modernorum sanctorum, secundum Christi adventum optantium, ut cum eo bene <span class="lom--interlinear-gloss">beate</span> vivant, et pro dilatione conquerentium, sic o <span class="lom--psalm-highlight">Domine, usquequo oblivisceris me in finem</span> capiendum, id est, quousque differs me ad intelligendum Christum spiritualiter, qui est Patris sapientia et finis rectus omnis intentionis. Et repetit: <span class="lom--psalm-highlight">Usquequo avertis faciem tuam a me</span>, id est usquequo non das anime mee notitiam tui? More nostro loquitur Scriptura, cum Deum, dicit, oblivisci et avertere faciem. Hic enim non iuxta rerum proprietatem, sed per creaturarum similitudinem dicitur: In eum quippe oblivio non cadit, nec aliqua permutatio. Et <span class="lom--psalm-highlight">quamdiu ponam consilia in anima mea</span>, consilio non est opus, nisi in adversis. Et est sensus: <span class="lom--psalm-highlight">Quamdiu ponam, etc.</span>, id est quamdiu ero in adversis, quod exponit subdens, scilicet quamdiu ponam <span class="lom--psalm-highlight">dolorem in corde</span> etc. Diem ponit pro isto seculo, quo vult exui dolens, precans que eterna, vel per diem, id est continue. Vel non sub interrogatione dicitur istud, <span class="lom--psalm-highlight">quamdiu ponam</span>, sed est responsio precedendi interrogationi, quasi tandiu oblivisceris et faciem avertis, <span class="lom--psalm-highlight">quamdiu ponam consilia</span>, id est quamdiu necesse erit ut ponam consilium <span class="lom--psalm-highlight">in anima mea</span>, ut nisi ponat quisque consilium in anima sua tale, scilicet ut operetur misericordiam, non eum dirigat Deus in finem, neque det ei plenam sui notitiam, ut eum facie ad faciem videat.
                        </p>
                        <p>
                            Deinde sequitur: Quamdiu ponam <span class="lom--psalm-highlight">dolorem in corde meo</span>, hoc non mutatur. Sequitur: Et <span class="lom--psalm-highlight">usquequo exaltabitur inimicus meus super me</span>, scilicet diabolus, vel carnalis consuetudo. Ut autem hoc tollatur?
                        </p>
                        <p>
                            <span class="lom--psalm-highlight">Respice et exaudi me, Domine Deus meus</span>, etc. Respice dicit, contra hoc quod supradictum est, avertis faciem tuam, exaudi, contra oblivisceris me. Et <span class="lom--psalm-highlight">illumina oculos meos</span> cordis ne unquam obdormiam. Per concupiscentiam, que ex me sit <span class="lom--psalm-highlight">in morte</span>, id est ne peccati delectatione claudantur ipsi oculi. Oculi enim obdormiunt in morte, quando fidei lumine sepulto carnali delectatione clauduntur. Vel <span class="lom--psalm-highlight">ne unquam obdormiam in morte</span>, id est ne obvolvar quolibet criminali peccato. Vel <span class="lom--psalm-highlight">in morte</span>, id est in peccato, quod fit in Spiritum sanctum, de quo dicit Iohannes: Est peccatum ad mortem, non pro eo dico ut quis oret. Dico non obdormiam per me, nec etiam per alium. Et hoc est <span class="lom--psalm-highlight">ne quando dicat inimicus meus</span>, id est diabolus, qui insultat dum capit. Quid dicat: <span class="lom--psalm-highlight">Prevalui adversus eum?</span> Ecce insultatio diaboli, que vehementer timenda est. Ideo dico, ne dicat inimicus, quia…
                        </p>
                    </div>

                    <div class="lom--psalm-content" v-else-if="verse.id === 5" key="commentary-5">
                        <p>
                            <span class="lom--psalm-highlight">Qui tribulant,</span> scilicet diabolus et angeli eius <span class="lom--psalm-highlight">exultabunt si motus fuero</span> de stabilitate fidei. Acsi diceret: Non solum propter me debes illuminare, sed et propter hoc ne inimicus gaudeat. Sequitur: <span class="lom--psalm-highlight">Ego autem in misericordia</span>, quasi illi tribulant, <span class="lom--psalm-highlight">ego autem in tua misericordia speravi</span>, non de me presumpsi, qui etiam id ipsum, quod non commovetur, non sibi dat, sed Deo. Vel in <span class="lom--psalm-highlight">misericordia tua speravi</span>, scilicet de adventu Filii. Quia etsi festinat iste vir sanctus, tamen est patiens, quia etsi differtur, quod desiderat, <span :class="['lom--has-marginalia', {'lom--active': marginalia.verse === 5 && marginalia.position === 1}]" @click="showMarginalia(5, 1)"><font-awesome-icon :icon="['far', 'sticky-note']"/> exsultat. Unde subdit:</span>
                        </p>
                    </div>

                    <div class="lom--psalm-content" v-else-if="verse.id === 6" key="commentary-6">
                        <p>
                            Exultavit cor meum, quasi speravi in misericordia, unde <span class="lom--psalm-highlight">exultabit vel <span class="lom--interlinear-gloss">exulta</span> vit cor meum in salutari tuo</span>, id est in Ihesu, quem mente venturum conspicio. Unde et sibi bona data dicit iste, qui prius conquerebatur subdens: Dominus <span class="lom--psalm-highlight">tribuit mihi bona</span> spiritualia, non ad humanum diem pertinentia. Et ei <span class="lom--psalm-highlight">Domino, qui tribuit bona cantabo</span> corde, scilicet cordis letitia, quod ad contemplativam vitam pertinet. Et nota quod ait, tribuit, non tribuet. In quo notatur magna virtus fidei. Iam enim habet, quod futurum est. Sequitur: Et psallam opere, quod ad activam vitam pertinet, psallam, dico, <span class="lom--psalm-highlight">nomini Domini altissimi</span>. Et est sensus: Cantabo et <span class="lom--psalm-highlight">psallam nomini Domini altissimi</span>, id est cum gaudio gratias agam corde et opere. Si ergo iste fidelis tantum desiderat, si sic famulatur Christo, adhuc venturo. Quid faciendum est jam suscepto? Utique omni modo ei est famulandum.
                        </p>
                    </div>
                </transition>
            </section>
        </div>
        <div :class="['lom--cell', {'lom--author-cell': author.visible}, {'lom--marginalia-cell': marginalia.visible}]">
            <transition name="fade" mode="out-in">
                <section class="lom--author-description" v-if="author.visible && !marginalia.visible" key="author.quotation">
                    <div class="lom--close-button" @click="closeAll">
                        <font-awesome-icon :icon="['far', 'times']" />
                        close
                    </div>
                    <h2 class="lom--psalm-subtitle">
                        Source
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
                    <div class="lom--close-button" @click="closeAll">
                        <font-awesome-icon :icon="['far', 'times']" />
                        close
                    </div>

                    <h2 class="lom--psalm-subtitle">
                        Marginalia
                    </h2>
                    <p>
                        {{ glosses[this.marginalia.verse][this.marginalia.position].text }}
                    </p>
                    <div class="lom--marginalia-image">
                        <h3 class="lom-marginalia-title">
                            Preview
                        </h3>
                        <img :src="glosses[this.marginalia.verse][this.marginalia.position].img" width="100%">
                    </div>
                    <div v-if="glosses[this.marginalia.verse][this.marginalia.position].desc !== null">
                        <h3 class="lom-marginalia-title">
                            Description
                        </h3>
                        <p class="lom-marginalia-desc" v-html="glosses[this.marginalia.verse][this.marginalia.position].desc"></p>
                    </div>
                </section>
                <section class="lom--preview-cell" v-else>
                    <img-view :imgUrl="folio[folio.selected].src"
                              class="lom--preview-height"
                              :position="folio[folio.selected].position"
                              :size="folio[folio.selected].size"
                              background="#F9F9F9"
                    ></img-view>
                </section>
            </transition>
        </div>
    </main>
</template>

<script>
    import ImgView from './VueImage'

    export default {
        name: "Page--PsalmSingle",
        data() {
            return {
                folio: {
                    selected: 'v17',
                    v17: {
                        src: '/public/folios/17.jpg',
                        position: {
                            x: -434,
                            y: -40,
                        },
                        size: 2
                    },
                    v17v1: {
                        src: '/public/folios/17v1.jpg',
                        position: {
                            x: -743,
                            y: -643,
                        },
                        size: 3
                    },
                    r18: {
                        src: '/public/folios/18.jpg',
                        position: {
                            x: 0,
                            y: 0,
                        },
                        size: 2
                    },
                    r18v2: {
                        src: '/public/folios/18v2.jpg',
                        position: {
                            x: -71,
                            y: -16,
                        },
                        size: 2.75
                    },
                    r18v3: {
                        src: '/public/folios/18v3.jpg',
                        position: {
                            x: -77,
                            y: -134,
                        },
                        size: 2.75
                    },
                    r18v4: {
                        src: '/public/folios/18v4.jpg',
                        position: {
                            x: -83,
                            y: -495,
                        },
                        size: 2.75
                    },
                    r18v5: {
                        src: '/public/folios/18v5.jpg',
                        position: {
                            x: -330,
                            y: -20,
                        },
                        size: 2
                    },
                    r18v6: {
                        src: '/public/folios/18v6.jpg',
                        position: {
                            x: -485,
                            y: -107,
                        },
                        size: 2.5
                    }
                },
                author: {
                    visible: false,
                    quotation: null,
                    short: null
                },
                marginalia: {
                    visible: false,
                    verse: null,
                    position: null
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
                },
                glosses: {
                    0: [
                        {
                            text: 'In persona antiquorum propheta conqueritur; 1. De dilatione incarnationis unde usquequo; 2. De multitudine ceremoniarum unde quamdiu; 3. De exaltatione inimici unde usquequo exaltabitur',
                            desc: "Resume for verses 1 - 3.",
                            img: '/public/folios/gloss-1-3v.jpg'
                        }
                    ],
                    1: [
                        {
                            text: "Filius dicitur facies patris quod sicut homo cognoscitur per faciem ita Pater cognoscitur per Filium ab hiis quibus Filius demonstravit undem Philippe, qui videt me etc…",
                            desc: null,
                            img: '/public/folios/gloss-1v1.jpg'
                        }
                    ],
                    5: [
                        {
                            text: "… id est animalitati tue Si des anime tue concupiscentias[,] facies te gaudio inimicis tuis",
                            desc: "This marginalia seems to be related to the whole verse."
                        },
                        {
                            text: "firmus est in spe et interus iam videns illum quem in carne desiderat videre",
                            desc: null,
                            img: '/public/folios/gloss-5v1.jpg'
                        }
                    ]
                }
            }
        },
        methods: {
            selectFolio(id) {
                this.closeAll();
                this.folio.selected = id;
            },
            openAuthor(short, id) {
                if (id === this.author.quotation) {
                    this.closeAll();
                } else {
                    this.closeMarginalia();
                    this.author.visible = true;
                    this.author.quotation = id;
                    this.author.short = short;
                }
            },
            openVerse(id, marginalia = -1, folio = -1) {
                if (this.verse.id !== id) {
                    this.closeAll();
                }

                if (typeof marginalia === 'number') {
                    if (marginalia !== -1) {
                        this.showMarginalia(id, marginalia);
                    }
                } else {
                    this.showMarginalia(marginalia[0], marginalia[1]);
                }

                if (folio > -1) {
                    this.selectFolio(folio);
                }

                this.verse.id = id;
            },
            openVerseWithMarginalia(verse, marginalia, folio = -1) {
                this.openVerse(verse, marginalia, folio);
            },
            showMarginalia(verse, marginalia) {
                this.marginalia.verse = verse;
                this.marginalia.position = marginalia;
                this.marginalia.visible = true;
                this.author.visible = false;
            },
            closeAll() {
                this.closeAuthor();
                this.closeMarginalia();
            },
            closeAuthor() {
                this.author.visible = false;
                this.author.quotation = null;
                this.author.short = null;
            },
            closeMarginalia() {
                this.marginalia.visible = false;
                this.marginalia.verse = null;
                this.marginalia.position = null;
            }
        },
        components: {
            ImgView
        },
        created() {
            if (this.$route.hash > 0) {
                this.verse.id = this.$route.hash;
            }
        }
    }
</script>