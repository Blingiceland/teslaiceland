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
                                Undanfarið hefur umfjöllun íslenskra fjölmiðla um Tesla einkennst af tveimur samtvinnuðum þáttum. Annars vegar hafa birtst fréttir um að umtalsvert hlutfall Tesla Y-bíla hafi farið í endurskoðun við fyrstu skoðun hér á landi (Vísir, 2026a; 2026b). Hins vegar hefur alþjóðleg og pólitísk umræða um forstjóra fyrirtækisins, Elon Musk, haft áhrif á hvernig almenningur talar um Tesla sem vörumerki (Vísir, 2025).
                            </p>
                            <p className="indent-8">
                                Þegar þessi tvö álitamál mætast verður tæknilegt atriði eins og skoðun og viðhald fljótt að spurningu um traust, ábyrgð og gildi fyrirtækisins.
                            </p>
                            <p className="indent-8 font-medium text-white">
                                En þessi staða er ekki einungis tæknilegt gæðamál. Hún er orðsporsmál.
                            </p>
                        </div>
                    </div>

                    {/* --- 2. FRÆÐILEGUR RAMMI --- */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">2. Fræðilegur rammi</h3>
                        <div className="text-gray-300 leading-relaxed space-y-4 text-[15px]">
                            <p className="indent-8">
                                Samkvæmt Argenti (2023) er orðspor sú heildarmynd sem myndast í huga hagaðila út frá reynslu þeirra, umræðu og hegðun fyrirtækisins. Í samtengdum heimi lifir vörumerki utan fyrirtækisins sjálfs, í fjölmiðlum, á samfélagsmiðlum og í samtali fólks. Þess vegna skiptir ekki bara máli hvað fyrirtæki segir, heldur hvort það taki þátt í umræðunni yfir höfuð.
                            </p>
                            <p className="indent-8">
                                Samkvæmt Argenti (2023) þarf að greina skýrt á milli þriggja atriða:
                            </p>
                            <ul className="list-disc pl-12 space-y-2 text-gray-300">
                                <li><strong className="text-white">Corporate identity</strong> – hvernig fyrirtækið skilgreinir sjálft sig.</li>
                                <li><strong className="text-white">Corporate image</strong> – skammtímaskynjun hagaðila.</li>
                                <li><strong className="text-white">Corporate reputation</strong> – langtímamat sem byggist á stöðugleika og samræmi.</li>
                            </ul>
                            <p className="indent-8">
                                Orðspor Tesla byggir á nýsköpun, tæknilegri forystu og umbreytingu samgangna. Sú sjálfsmynd er enn sterk. Hins vegar hefur ímynd Tesla á Íslandi orðið fyrir aðkasti. Þegar fjölmiðlar setja háa endurskoðunartíðni í forgrunn, færist skynjun frá tæknilegum frávikum yfir í mögulegar öryggisáhyggjur.
                            </p>
                            <p className="indent-8">
                                Þegar Vísir greinir frá háu hlutfalli endurskoðana (Vísir, 2026a) og birtir jafnframt viðtöl þar sem eigendur eru hvattir til að fylgjast með bilunum (Vísir, 2026b), skapast rammi sem getur auðveldlega þróast úr „tæknilegum frávikum" yfir í „áhyggjur af öryggi". Ef Tesla tekur ekki þátt í þeirri umræðu er hætta á að túlkun annarra verði ráðandi.
                            </p>
                            <p className="indent-8">
                                Argenti (2023) bendir á að í dag hafi vald yfir frásögninni færst frá fyrirtækjum til samfélagsins. Fyrirtæki geta ekki lengur stjórnað ímynd sinni, þau geta aðeins tekið þátt í að móta hana.
                            </p>
                            <p className="indent-8">
                                Kenningin um innrömmun (<em>framing</em>) sýnir að fjölmiðlar hafa áhrif á hvaða málefni almenningur telur mikilvæg. Þegar Kveikur setur Tesla og öryggismál í dagskrá er málið orðið samfélagslegt. Innrömmun sýnir hvernig sama staðreynd getur verið túlkuð á mismunandi hátt. Til dæmis getur talan 30% í endurskoðun verið römmuð sem óeðlilega hátt hlutfall sem bendir til kerfisbundins vanda, og ef Tesla tekur ekki þátt í umræðunni getur hver sem er túlkað þessa 30% á sinn hátt.
                            </p>
                            <p className="indent-8">
                                <em>Situational Crisis Communication Theory</em> (Coombs, 2007) leggur áherslu á að viðbrögð fyrirtækja þurfi að taka mið af skynjaðri ábyrgð. Ef almenningur skynjar að fyrirtækið hefði getað komið í veg fyrir vandann eykst vænting um sýnilega ábyrgð, gagnsæi og skýrar úrbætur. Þögn í slíkum aðstæðum getur aukið skynjaða ábyrgð.
                            </p>
                        </div>
                    </div>

                    {/* --- 3. HAGAÐILAR --- */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">3. Hagaðilar</h3>
                        <div className="text-gray-300 leading-relaxed space-y-4 text-[15px]">
                            <p className="indent-8">
                                Fyrir Tesla á Íslandi eru lykilhóparnir fyrst og fremst eigendur og væntanlegir kaupendur, stjórnvöld og eftirlitsaðilar, fjölmiðlar og almenningur, og innri hagaðilar.
                            </p>
                            <p className="indent-8">
                                Fyrir Tesla-eigendur snýst málið um öryggi og áreiðanleika. Þegar fréttir um endurskoðun birtast (Vísir, 2026a) og opinberir aðilar hvetja eigendur til að fylgjast með bilunum (Vísir, 2026b) hefur það bein áhrif á upplifun þessa hóps. Samkvæmt Argenti (2023) eru viðskiptavinir lykilstoð orðspors, þeir „kjósa með veskinu" og bregðast hratt við ef traust veikist.
                            </p>
                            <p className="indent-8">
                                Næst koma stjórnvöld og eftirlitsaðilar. Þeir hafa bæði raunverulegt vald og táknrænt vald. Ef umræðan festist í sessi sem öryggisvandi getur það kallað á aukið regluverk eða pólitíska umræðu. Þar skiptir máli að fyrirtækið sýni samstarfsvilja og ábyrgð, ekki varnarviðbrögð.
                            </p>
                            <p className="indent-8">
                                Fjölmiðlar og almenningur eru einnig lykilþáttur. Umræðan um Elon Musk sýnir að ímynd leiðtoga getur haft áhrif á það hvernig fólk túlkar vörumerkið sjálft (Vísir, 2025). Argenti (2023) útskýrir að vörumerki sé ekki lengur það sem fyrirtæki segir að það sé, heldur það sem fólk segir hvert við annað að það sé. Því er mikilvægt að aðgreina staðbundna ábyrgð Tesla á Íslandi frá alþjóðlegri pólitískri umræðu.
                            </p>
                            <p className="indent-8">
                                Innri hagaðilar skipta einnig máli. Ef starfsfólk upplifir að fyrirtækið forðist umræðu sem snýr að öryggi getur það grafið undan innra trausti.
                            </p>
                            <p className="indent-8">
                                Þegar málið snýr að öryggi er það ekki bara ímyndarmál heldur samfélagslegt mál. Rannsóknir sem Argenti (2023) vísar til sýna að samfélagsleg ábyrgð virkar eins og „trygging" fyrir orðspor. Fyrirtæki sem sýna ábyrgð og gagnsæi eru betur í stakk búin til að takast á við neikvæða umræðu. En ábyrgðin þarf að vera raunveruleg. Ef fyrirtæki reynir að beina athyglinni frá gæðum vörunnar yfir í ímyndarsinnaðar yfirlýsingar getur það skaðað orðspor (Argenti, 2023). Þess vegna þarf Tesla að leggja áherslu á staðreyndir um skoðunarferli, úrbætur og samstarf við eftirlitsaðila, ekki bara almennar yfirlýsingar um gildi.
                            </p>
                        </div>
                    </div>

                    {/* --- 4. AÐ MÆTA EÐA EKKI MÆTA --- */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">4. Að mæta eða ekki mæta, í viðtal</h3>
                        <div className="text-gray-300 leading-relaxed space-y-4 text-[15px]">
                            <p className="indent-8">
                                Í ljósi þessarar greiningar er skynsamlegra að mæta í viðtal hjá Kveik.
                            </p>
                            <p className="indent-8">
                                Ef forstjóri Tesla mætir ekki er hætta á að umræðan verði einhliða og byggi eingöngu á gagnrýnum sjónarmiðum, sérstaklega í ljósi þess að fjölmiðlar hafa þegar sett málið í neikvæðan ramma um hátt hlutfall endurskoðana (Vísir, 2026a). Samkvæmt kenningum um krísúsamskipti er þögn sjaldnast hlutlaus, hún er túlkuð sem varnartákn eða skortur á ábyrgð (Coombs, 2007).
                            </p>
                            <p className="indent-8">
                                Á sama hátt bendir Benoit (1995) á að þegar ásakanir beinast að fyrirtæki skipti máli hvernig það útskýrir og rammar málið inn. Með skýrum skýringum, ábyrgri framkomu og áherslu á úrbætur er hægt að draga úr neikvæðum áhrifum á orðspor.
                            </p>
                            <p className="indent-8">
                                Með því að mæta getur Tesla:
                            </p>
                            <ul className="list-disc pl-12 space-y-2 text-gray-300">
                                <li>Útskýrt hvað „endurskoðun" þýðir í raun fyrir Tesla-bíla.</li>
                                <li>Sett tölur í samhengi.</li>
                                <li>Sýnt samstarfsvilja gagnvart stjórnvöldum.</li>
                                <li>Aðgreint íslenskan rekstur frá alþjóðlegri orðræðu um Elon Musk (Vísir, 2025).</li>
                            </ul>
                            <p className="indent-8">
                                Mætingin þarf þó að vera faglega undirbúin, með skýrum lykilskilaboðum og staðreyndum. Langtímaáhættan af fjarveru er meiri en áhættan af stýrðri viðveru.
                            </p>
                            <p className="indent-8">
                                Við, sem samskiptaráðgjafar Tesla á Íslandi, mælum með því að framkvæmdastjóri mæti í viðtal hjá Kveik af eftirfarandi ástæðum: Orðspor mótast í opinberri umræðu og ramminn er þegar orðinn neikvæður. SCCT bendir til þess að sýnileg viðbrögð séu nauðsynleg þegar skynjuð ábyrgð eykst. Tesla verður að styðjast við gjörðir, ekki þögn.
                            </p>
                            <p className="indent-8 font-medium text-white">
                                Viðvera gerir fyrirtækinu kleift að stýra samtalinu. Fjarvera gerir það að áhorfanda.
                            </p>
                        </div>
                    </div>

                    {/* --- 5. MARKMIÐ SAMSKIPTA --- */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">5. Markmið samskipta</h3>
                        <div className="text-gray-300 leading-relaxed space-y-4 text-[15px]">
                            <p className="indent-8">
                                Markmiðið er fyrst og fremst að viðhalda trausti eigenda með skýrri og staðreyndamiðaðri upplýsingagjöf. Annað markmið er að tryggja að stjórnvöld upplifi fyrirtækið sem samstarfsaðila fremur en aðila sem reynir að koma sér undan ábyrgð. Þriðja markmiðið er að halda umræðunni í ramma staðreynda, svo hún þróist ekki yfir í alls konar getgátur og upplýsingaóreiðu.
                            </p>
                            <p className="indent-8">
                                Samkvæmt Argenti (2023) byggist sterkt orðspor á samræmi milli orða og gjörða. Ef Tesla styður yfirlýsingar sínar með raunverulegum aðgerðum og gagnsæi aukast líkurnar á að traust haldist, jafnvel þótt gagnrýni haldi áfram til skamms tíma.
                            </p>
                        </div>
                    </div>

                    {/* --- 6. NIÐURSTAÐA --- */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">6. Niðurstaða</h3>
                        <div className="text-gray-300 leading-relaxed space-y-4 text-[15px]">
                            <p className="indent-8">
                                Í samfélagi þar sem fjölmiðlar og almenningur móta frásögnina getur fyrirtæki ekki valið að vera utan umræðunnar. Með hliðsjón af íslenskri umfjöllun um endurskoðun (Vísir, 2026a; 2026b) og orðræðu um Elon Musk (Vísir, 2025) er ljóst að málið er þegar orðið hluti af opinberri umræðu. Í ljósi áhrifa, <em>framing</em>, SCCT og greiningar á hagaðilum er niðurstaða okkar skýr.
                            </p>
                            <p className="indent-8 text-xl font-bold text-white">
                                Tesla á Íslandi ætti að mæta í viðtal hjá Kveik.
                            </p>
                            <p className="indent-8">
                                Ekki vegna þess að staðan sé áhættulaus, heldur vegna þess að ábyrg, undirbúin og staðreyndamiðuð þátttaka er líklegri til að verja og styrkja orðspor fyrirtækisins til lengri tíma.
                            </p>
                            <p className="indent-8">
                                Með því að mæta í viðtal, tala skýrt um öryggi og sýna ábyrgð getur Tesla á Íslandi tekið virkan þátt í að móta þá umræðu – í stað þess að láta hana mótast án sín.
                            </p>
                        </div>
                    </div>

                    {/* --- 7. HEIMILDASKRÁ --- */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">7. Heimildaskrá</h3>
                        <div className="text-gray-400 leading-relaxed space-y-3 text-sm">
                            <p className="pl-8 -indent-8">Argenti, P. A. (2023). <em>Corporate communication</em> (8th ed.). McGraw-Hill Education.</p>
                            <p className="pl-8 -indent-8">Benoit, W. L. (1995). <em>Accounts, excuses, and apologies: A theory of image restoration strategies.</em> State University of New York Press.</p>
                            <p className="pl-8 -indent-8">Coombs, W. T. (2007). Protecting organization reputations during a crisis: The development and application of situational crisis communication theory. <em>Corporate Reputation Review, 10</em>(3), 163–176. <span className="text-gray-500">https://doi.org/10.1057/palgrave.crr.1550049</span></p>
                            <p className="pl-8 -indent-8">Vísir. (2025, 6. júlí). Fólk ekki fasistar þó það eigi Teslu. <span className="text-gray-500">https://www.visir.is/g/20252706047d/folk-ekki-fas-istar-tho-thad-eigi-teslu</span></p>
                            <p className="pl-8 -indent-8">Vísir. (2026a, 17. janúar). Tæplega þrjátíu prósent Tesla Y þurftu í endurskoðun. <span className="text-gray-500">https://www.visir.is/g/20262836108d/taep-lega-thrja-tiu-prosent-tesla-y-thurftu-i-endur-skodun</span></p>
                            <p className="pl-8 -indent-8">Vísir. (2026b, 15. janúar). Hvetur eigendur Tesla til að fylgjast með bílunum. <span className="text-gray-500">https://www.visir.is/g/20262834556d/hvetur-eig-endur-tesla-til-ad-fylgjast-med-bilunum</span></p>
                        </div>
                    </div>

                </div>{/* end ref wrapper */}

            </div>
        </section>
    );
};

export default Report;
