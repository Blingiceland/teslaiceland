import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Radio } from 'lucide-react';

const stakeholders = [
    {
        id: 'owners',
        icon: Users,
        title: 'Eigendur & Kaupendur',
        desc: 'Lykilstoð orðsporsins. Kjósa með veskinu.',
        detail: 'Fyrir þennan hóp snýst málið um öryggi og áreiðanleika. Þegar fréttir um „fall á skoðun“ birtast án skýringa skapast óöryggi. Ef Tesla mætir ekki til að útskýra málið, túlka eigendur þögnina sem staðfestingu á galla. Með vandaðri upplýsingagjöf í Kveik getum við sýnt fram á að endurskoðun snýst oft um minniháttar atriði (t.d. ljósabúnað) en ekki alvarlega öryggisbresti.'
    },
    {
        id: 'government',
        icon: Building2,
        title: 'Stjórnvöld & Eftirlit',
        desc: 'Hafa raunverulegt og táknrænt vald.',
        detail: 'Stjórnvöld vilja sjá ábyrgð. Ef Tesla hundsar boð í viðtal, lítur það út eins og fyrirtækið telji sig hafið yfir íslensk lög og reglur. Það eykur líkur á harðari aðgerðum og regluverki. Með því að mæta og eiga samtal sýnum við að Tesla er samstarfsaðili sem tekur öryggismál alvarlega, sem minnkar þörfina fyrir opinberar aðgerðir.'
    },
    {
        id: 'media',
        icon: Radio,
        title: 'Fjölmiðlar & Almenningur',
        desc: 'Móta frásögnina og samfélagsumræðuna.',
        detail: 'Vörumerki er í dag það sem fólk segir hvert við annað. Elon Musk er umdeildur, og sú umræða smitar út í vörumerkið hér á landi. Ef við mætum ekki, fær sú neikvæða eða pólitíska umræða að lifa óáreitt. Með því að mæta getum við „staðfært“ vörumerkið: Tesla á Íslandi er ekki Elon Musk á Twitter, heldur þjónustufyrirtæki sem hugsar um íslenska kúnna.'
    }
];

const Stakeholders = () => {
    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Hagaðilagreining</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {stakeholders.map((s) => (
                        <motion.div
                            key={s.id}
                            className="p-8 rounded-xl border bg-zinc-900 border-zinc-800 hover:border-red-900/50 transition-colors h-full flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-red-900/10 rounded-lg">
                                    <s.icon className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                                    <p className="text-gray-500 text-xs uppercase tracking-wider">{s.desc}</p>
                                </div>
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                {s.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stakeholders;
