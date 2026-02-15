import React, { useRef } from 'react';
import { Download } from 'lucide-react';

const Report = () => {
    const reportRef = useRef(null);

    const handleDownload = async () => {
        const html2pdf = (await import('html2pdf.js')).default;
        const element = reportRef.current;

        const opt = {
            margin: [15, 15, 15, 15],
            filename: 'Tesla_Samskiptaaetlun_2026.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                backgroundColor: '#ffffff',
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        };

        // Temporarily swap to print-friendly styles
        element.classList.add('print-mode');
        await html2pdf().set(opt).from(element).save();
        element.classList.remove('print-mode');
    };

    return (
        <section id="skyrsla" className="py-24 px-6 bg-zinc-950 border-t border-zinc-800">
            <div className="max-w-3xl mx-auto">

                {/* Download Button */}
                <div className="flex justify-center mb-12">
                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-3 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-red-900/30 cursor-pointer"
                    >
                        <Download size={18} />
                        Hlaða niður skýrslu (PDF)
                    </button>
                </div>

                <div ref={reportRef}>

                    {/* --- FORSÍÐA --- */}
                    <div className="text-center mb-20 py-16 border border-zinc-800 rounded-xl bg-black/50">
                        <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Háskólinn á Bifröst</p>
                        <h2 className="text-4xl font-bold text-white mb-3">Samskiptaráðgjöf fyrir Tesla á Íslandi</h2>
                        <p className="text-xl text-gray-400 mb-6">Að mæta í Kveik – og af hverju það skiptir máli</p>
                        <div className="text-gray-500 text-sm space-y-1">
                            <p>Fyrirtækjasamskipti — Paraverkefni</p>
                            <p>Kennari: Gunnsteinn</p>
                            <p>Vorönn 2026</p>
                        </div>
                        <div className="mt-8 inline-block px-4 py-2 bg-zinc-900 rounded text-xs text-gray-500 border border-zinc-800">
                            Gagnvirk útgáfa: <a href="https://teslaiceland.vercel.app" className="text-red-500 hover:underline">teslaiceland.vercel.app</a>
                        </div>
                    </div>

                    {/* --- 1. INNGANGUR --- */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">1. Inngangur</h3>
                        <div className="text-gray-300 leading-relaxed space-y-4 text-[15px]">
                            <p className="indent-8">
                                Undanfarið hefur umræða um Tesla á Íslandi snúist um tvennt. Annars vegar hafa fjölmiðlar greint frá því að tæplega þrjátíu prósent Tesla Y bíla hafi þurft í endurskoðun við fyrstu skoðun hér á landi (Vísir, 2026a). Hins vegar hefur umræða um Elon Musk og pólitísk umdeild mál hans haft áhrif á hvernig fólk talar um Tesla almennt, jafnvel hér á Íslandi (Vísir, 2025). Þegar þessi tvö þemu mætast verður tæknilegt mál – skoðun og viðhald – fljótt að spurningu um traust, ábyrgð og gildi fyrirtækisins.
                            </p>
                            <p className="indent-8">
                                Þetta er dæmigert orðsporsmál. Samkvæmt Argenti (2022) er orðspor sú heildarmynd sem myndast í huga hagaðila út frá reynslu þeirra, umræðu og hegðun fyrirtækisins. Í samtengdum heimi lifir vörumerki utan fyrirtækisins sjálfs – í fjölmiðlum, á samfélagsmiðlum og í samtali fólks. Þess vegna skiptir ekki bara máli hvað fyrirtæki segir, heldur hvort það taki þátt í umræðunni yfirhöfuð.
                            </p>
                            <p className="indent-8">
                                Þegar Vísir greinir frá háu hlutfalli endurskoðana (2026a) og birtir jafnframt viðtöl þar sem eigendur eru hvattir til að fylgjast með bilunum (Vísir, 2026b), skapast rammi sem getur auðveldlega þróast úr „tæknilegum frávikum" yfir í „áhyggjur af öryggi". Ef Tesla tekur ekki þátt í þeirri umræðu er hætta á að túlkun annarra verði ráðandi.
                            </p>
                            <p className="indent-8">
                                Argenti (2022) bendir á að í dag hafi vald yfir frásögninni færst frá fyrirtækjum til samfélagsins. Fyrirtæki geta ekki lengur stjórnað ímynd sinni – þau geta aðeins tekið þátt í að móta hana. Saga Walmart, sem Argenti rekur, sýnir að þegar fyrirtæki áttar sig of seint á því að orðspor þess er orðið samfélagslegt málefni getur það kostað traust og viðskipti.
                            </p>
                            <p className="indent-8">
                                Í þessari skýrslu förum við í hlutverk samskiptaráðgjafa fyrir Tesla á Íslandi. Við greinum hagaðila fyrirtækisins, metum stöðu orðsporsins og leggjum til stefnu varðandi boð Kveiks um viðtal. Að lokum rökstyðjum við tillögu okkar með vísan í fræði fyrirtækjasamskipta og raunveruleg dæmi.
                            </p>
                        </div>
                    </div>

                    {/* --- 2. HAGAÐILAGREINING --- */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">2. Hagaðilagreining</h3>
                        <div className="text-gray-300 leading-relaxed space-y-4 text-[15px]">
                            <p className="indent-8">
                                Samkvæmt Argenti (2022) eru hagaðilar þeir hópar sem hafa áhrif á, eða verða fyrir áhrifum af, starfsemi skipulagsheildar. Við forgangsröðum hagaðilum í þessari greiningu út frá mikilvægi þeirra fyrir orðspor og viðskiptalega afkomu Tesla á Íslandi. Freeman (1984) leggur grunn að hagaðilakenningunni og bendir á að fyrirtæki þurfi að taka tillit til allra þeirra sem eiga hagsmuna að gæta, ekki aðeins hluthafa. Þetta er sérstaklega mikilvægt á tímum þar sem samfélagið krefst gagnsæis.
                            </p>

                            <h4 className="text-lg font-bold text-white mt-8 mb-3">2.1 Eigendur og væntanlegir kaupendur</h4>
                            <p className="indent-8">
                                Þessi hópur er í forgangi vegna þess að hann er grunnur tekjustreymis og orðspors Tesla. Argenti (2022) útskýrir að viðskiptavinir séu lykilstoð orðspors – þeir „kjósa með veskinu" og bregðast hratt við ef traust veikist. Þegar fréttir um endurskoðun birtast (Vísir, 2026a) og opinberir aðilar hvetja eigendur til að fylgjast með bilunum (Vísir, 2026b) hefur það bein áhrif á upplifun þessa hóps.
                            </p>
                            <p className="indent-8">
                                <strong className="text-white">Skilaboð til þessa hóps:</strong> „Endurskoðun þýðir ekki bilun. Tesla-bílar uppfylla öryggisstaðla og við vinnum náið með eftirlitsaðilum til að tryggja gæði."
                            </p>
                            <p className="indent-8">
                                <strong className="text-white">Leiðir til að koma skilaboðum til skila:</strong> Viðtal í Kveik (þar sem eigendur horfa), beint samband við eigendur í gegnum Tesla-appið og tölvupóst, og skýrar upplýsingar á vefsíðu Tesla á Íslandi.
                            </p>

                            <h4 className="text-lg font-bold text-white mt-8 mb-3">2.2 Stjórnvöld og eftirlitsaðilar</h4>
                            <p className="indent-8">
                                Stjórnvöld hafa bæði raunverulegt vald (löggjöf, regluverk) og táknrænt vald (þau setja dagskrána í opinberri umræðu). Ef umræðan festist í sessi sem öryggisvandi getur það kallað á aukið regluverk eða pólitíska umræðu. Grunig og Hunt (1984) bentu á mikilvægi þess að viðhalda samhverfum samskiptum við valdaaðila – þ.e. að hlusta og bregðast við, ekki bara upplýsa einhliða.
                            </p>
                            <p className="indent-8">
                                <strong className="text-white">Skilaboð til þessa hóps:</strong> „Tesla er samstarfsaðili sem tekur öryggismál alvarlega. Við viljum vinna með ykkur, ekki á móti ykkur."
                            </p>
                            <p className="indent-8">
                                <strong className="text-white">Leiðir:</strong> Bein samskipti við eftirlitsstofnanir áður en viðtal fer í loftið, og opinber yfirlýsing um samstarf.
                            </p>

                            <h4 className="text-lg font-bold text-white mt-8 mb-3">2.3 Fjölmiðlar og almenningur</h4>
                            <p className="indent-8">
                                Argenti (2022) útskýrir að vörumerki sé ekki lengur það sem fyrirtæki segir að það sé, heldur það sem fólk segir hvert við annað að það sé. Umræðan um Elon Musk (Vísir, 2025) sýnir að ímynd leiðtoga getur haft bein áhrif á það hvernig fólk túlkar vörumerkið sjálft. Í íslensku samhengi er þetta sérstaklega viðkvæmt vegna þess að samfélagið er lítið og umræðan ferðast hratt.
                            </p>
                            <p className="indent-8">
                                <strong className="text-white">Skilaboð:</strong> „Tesla á Íslandi er sjálfstætt rekið þjónustufyrirtæki sem hugsar um íslenska viðskiptavini. Við berum ábyrgð á gæðum og þjónustu hér á landi."
                            </p>
                            <p className="indent-8">
                                <strong className="text-white">Leiðir:</strong> Mæta í Kveik og gefa viðtal þar sem þessi skilaboð eru sterk; fylgja eftir með grein á vef Tesla.
                            </p>

                            <h4 className="text-lg font-bold text-white mt-8 mb-3">2.4 Innri hagaðilar (starfsfólk)</h4>
                            <p className="indent-8">
                                Ef starfsfólk upplifir að fyrirtækið forðist umræðu sem snýr að öryggi getur það grafið undan innra trausti. Argenti (2022) undirstrikar að innri samskipti séu hornsteinn ytri samskipta – ef starfsfólk trúir ekki á skilaboð fyrirtækisins mun það aldrei hljóma sannfærandi út á við.
                            </p>
                            <p className="indent-8">
                                <strong className="text-white">Skilaboð:</strong> Innri tölvupóstur til starfsfólks áður en viðtalið fer í loftið, þar sem staðan er útskýrð og lykilskilaboð kynnt.
                            </p>
                        </div>
                    </div>

                    {/* --- 3. SAMFÉLAGSLEG ÁBYRGÐ OG ORÐSPOR --- */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">3. Samfélagsleg ábyrgð, orðspor og leiðtoginn</h3>
                        <div className="text-gray-300 leading-relaxed space-y-4 text-[15px]">
                            <p className="indent-8">
                                Þegar málið snýr að öryggi er það ekki bara ímyndarmál heldur samfélagslegt mál. Rannsóknir sem Argenti (2022) vísar til sýna að samfélagsleg ábyrgð (CSR) virkar eins og „trygging" fyrir orðspor. Fyrirtæki sem sýna ábyrgð og gagnsæi eru betur í stakk búin til að takast á við neikvæða umræðu. Carroll (1991) skilgreindi fjórar víddir samfélagslegrar ábyrgðar: efnahagslega, lagalega, siðferðislega og góðgerðarlega. Í tilviki Tesla á Íslandi er siðferðislega víddin í brennidepli – fyrirtækið þarf að vera opin um gæði og öryggi jafnvel þótt lög krefjist þess ekki beinlínis.
                            </p>
                            <p className="indent-8">
                                En ábyrgðin þarf að vera raunveruleg. Ef fyrirtæki reynir að beina athyglinni frá gæðum vörunnar yfir í ímyndarsinnaðar yfirlýsingar getur það bakslafist (Argenti, 2022). Þess vegna þarf Tesla að leggja áherslu á staðreyndir um skoðunarferli, úrbætur og samstarf við eftirlitsaðila – ekki bara almennar yfirlýsingar um gildi.
                            </p>
                            <p className="indent-8">
                                Hvað leiðtogann varðar — Elon Musk er einstakur í sögu fyrirtækjasamskipta. Hann er bæði stærsta auðlind Tesla (sem nýsköpunarhetja) og stærsta áhættan (sem pólitískt umdeildir aðili). Argenti (2022) bendir á að orðspor forstjóra og orðspor fyrirtækis séu nátengd, sérstaklega þegar forstjórinn er opinber persóna. Á Íslandi hefur umræða um Musk birst í samhengi við „fasisma" og pólitískar yfirlýsingar hans (Vísir, 2025), sem skapar viðkvæman ramma fyrir Tesla sem vörumerki.
                            </p>
                            <p className="indent-8">
                                Aðgreining er því lykilatriði. Framkvæmdastjóri Tesla á Íslandi þarf að staðfæra vörumerkið: „Við erum íslenskt þjónustufyrirtæki. Ímynd Musk er hans mál – okkar mál er þjónusta og öryggi."
                            </p>
                        </div>
                    </div>

                    {/* --- 4. ÁKVÖRÐUN OG RÖKSTUÐNINGUR --- */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">4. Ákvörðun: Mæta í viðtal hjá Kveik</h3>
                        <div className="text-gray-300 leading-relaxed space-y-4 text-[15px]">
                            <p className="indent-8">
                                Í ljósi fyrrgreindrar greiningar ráðleggjum við Tesla á Íslandi að mæta í viðtal hjá Kveik. Þessi ákvörðun byggist á eftirfarandi röksemdum:
                            </p>

                            <p className="indent-8">
                                <strong className="text-white">Ef Tesla mætir ekki</strong> er hætta á að umræðan verði einhliða og byggi eingöngu á gagnrýnum sjónarmiðum. Coombs (2007) bendir á í Situational Crisis Communication Theory (SCCT) sinni að þögn sé sjaldnast hlutlaus – hún er túlkuð sem varnartákn eða skortur á ábyrgð. Í íslensku samhengi, þar sem Kveikur er einn áhrifamesti rannsóknarþáttur landsins, myndi fjarvera Tesla skapa tómarúm sem gagnrýnendur og stjórnvöld myndu fylla. Þá gæti starfsfólk upplifað að fyrirtækið treysti sér ekki til að svara fyrir sig, sem grefur undan innri starfsanda.
                            </p>

                            <p className="indent-8">
                                <strong className="text-white">Með því að mæta</strong> getur Tesla:
                            </p>
                            <ul className="list-disc pl-12 space-y-2 text-gray-300">
                                <li>Útskýrt hvað „endurskoðun" þýðir í raun – margir bilar sem valda „falli" eru smávægilegir (t.d. ljósabúnaður) en ekki alvarlegir öryggisbresti.</li>
                                <li>Sett tölurnar í rétt samhengi, t.d. borið við önnur bílamerki.</li>
                                <li>Sýnt samstarfsvilja gagnvart stjórnvöldum og eftirlitsaðilum, sem minnkar hættu á harðari opinberum viðbrögðum.</li>
                                <li>Aðgreint staðbundna starfsemi Tesla á Íslandi frá alþjóðlegri pólitískri umræðu um Elon Musk.</li>
                            </ul>

                            <p className="indent-8 mt-4">
                                Benoit (1997) skilgreinir fimm aðferðir við endurreisn ímyndar (image restoration theory), þar á meðal „leiðréttingu" og „minnkun á alvarleika". Við mælum með blöndu af þessum aðferðum: leiðrétta misskilning um hvað endurskoðun þýðir, og setja málið í samhengi til að draga úr skynjuðum alvarleika.
                            </p>

                            <p className="indent-8">
                                Mætingin þarf að vera vel undirbúin. Framkvæmdastjórinn ætti að hafa 3-4 lykilskilaboð sem hann endurtekur óháð því hvaða spurningar eru lagðar fyrir:
                            </p>
                            <ol className="list-decimal pl-12 space-y-2 text-gray-300">
                                <li>„Endurskoðun er eðlilegur hluti af skoðunarferli – hún þýðir ekki bilun."</li>
                                <li>„Við vinnum náið með Samgöngustofu og eftirlitsaðilum."</li>
                                <li>„Tesla á Íslandi er staðbundið þjónustufyrirtæki. Okkar forgangsatriði er öryggi og ánægja viðskiptavina."</li>
                                <li>„Við bjóðum öllum eigendum að láta skoða bílinn sinn hjá okkur án endurgjalds."</li>
                            </ol>
                        </div>
                    </div>

                    {/* --- 5. MARKMIÐ SAMSKIPTASTEFNU --- */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">5. Markmið samskiptastefnu</h3>
                        <div className="text-gray-300 leading-relaxed space-y-4 text-[15px]">
                            <p className="indent-8">
                                Markmiðið er fyrst og fremst að <strong className="text-white">viðhalda trausti eigenda</strong> með skýrri og staðreyndamiðaðri upplýsingagjöf. Mælanleg niðurstaða: minnka neikvæða umræðu um „gallaða" Tesla-bíla á samfélagsmiðlum um 30% innan mánaðar.
                            </p>
                            <p className="indent-8">
                                Annað markmið er að <strong className="text-white">tryggja að stjórnvöld upplifi fyrirtækið sem samstarfsaðila</strong> fremur en varnarsinnaðan aðila. Mælanleg niðurstaða: engar opinberar tilkynningar frá stjórnvöldum um frekari aðgerðir gegn Tesla í kjölfar viðtalsins.
                            </p>
                            <p className="indent-8">
                                Þriðja markmiðið er að <strong className="text-white">halda umræðunni í ramma staðreynda</strong>, svo hún þróist ekki yfir í víðtækari traustskreppu sem tengist Elon Musk. Mælanleg niðurstaða: tón fjölmiðlaumfjöllunar í viku eftir viðtalið er hlutlaus eða jákvæður.
                            </p>
                            <p className="indent-8">
                                Samkvæmt Argenti (2022) byggist sterkt orðspor á samræmi milli orða og gjörða. Ef Tesla styður yfirlýsingar sínar með raunverulegum aðgerðum og gagnsæi – t.d. ókeypis skoðun á bílum eða opinberum gögnum um bilanir – aukast líkurnar á að traust haldist, jafnvel þótt gagnrýni haldi áfram til skamms tíma.
                            </p>
                        </div>
                    </div>

                    {/* --- 6. LOKAORÐ --- */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">6. Lokaorð</h3>
                        <div className="text-gray-300 leading-relaxed space-y-4 text-[15px]">
                            <p className="indent-8">
                                Í samfélagi þar sem fjölmiðlar og almenningur móta frásögnina getur fyrirtæki ekki valið að vera utan umræðunnar. Með hliðsjón af íslenskri umfjöllun um endurskoðun (Vísir, 2026a; 2026b) og orðræðu um Elon Musk (Vísir, 2025) er ljóst að málið er þegar orðið hluti af opinberri umræðu.
                            </p>
                            <p className="indent-8">
                                Með því að mæta í viðtal, tala skýrt um öryggi og sýna ábyrgð getur Tesla á Íslandi tekið virkan þátt í að móta þá umræðu – í stað þess að láta hana mótast án sín. Eins og Argenti (2022) orðar það: fyrirtæki geta ekki lengur stjórnað ímynd sinni, en þau geta valið að vera aðili í samtalinu.
                            </p>
                        </div>
                    </div>

                    {/* --- 7. HEIMILDASKRÁ --- */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">7. Heimildaskrá</h3>
                        <div className="text-gray-400 leading-relaxed space-y-3 text-sm">
                            <p className="pl-8 -indent-8">Argenti, P. A. (2022). <em>Corporate communication</em> (8th ed.). McGraw-Hill Education.</p>
                            <p className="pl-8 -indent-8">Benoit, W. L. (1997). Image repair discourse and crisis communication. <em>Public Relations Review, 23</em>(2), 177–186.</p>
                            <p className="pl-8 -indent-8">Carroll, A. B. (1991). The pyramid of corporate social responsibility: Toward the moral management of organizational stakeholders. <em>Business Horizons, 34</em>(4), 39–48.</p>
                            <p className="pl-8 -indent-8">Coombs, W. T. (2007). Protecting organization reputations during a crisis: The development and application of situational crisis communication theory. <em>Corporate Reputation Review, 10</em>(3), 163–176.</p>
                            <p className="pl-8 -indent-8">Freeman, R. E. (1984). <em>Strategic management: A stakeholder approach.</em> Pitman.</p>
                            <p className="pl-8 -indent-8">Grunig, J. E., & Hunt, T. (1984). <em>Managing public relations.</em> Holt, Rinehart and Winston.</p>
                            <p className="pl-8 -indent-8">Vísir. (2025, 6. júlí). Fólk ekki fasistar þó það eigi Teslu. <span className="text-gray-500">https://www.visir.is/g/20252706047d/</span></p>
                            <p className="pl-8 -indent-8">Vísir. (2026a, 17. janúar). Tæplega þrjátíu prósent Tesla Y þurftu í endurskoðun. <span className="text-gray-500">https://www.visir.is/g/20262836108d/</span></p>
                            <p className="pl-8 -indent-8">Vísir. (2026b, 15. janúar). Hvetur eigendur Tesla til að fylgjast með bílunum. <span className="text-gray-500">https://www.visir.is/g/20262834556d/</span></p>
                        </div>
                    </div>

                </div>{/* end ref wrapper */}

            </div>
        </section>
    );
};

export default Report;
