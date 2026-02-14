import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Building2, Radio } from 'lucide-react';

const stakeholders = [
    {
        id: 'owners',
        icon: Users,
        title: 'Eigendur & Kaupendur',
        desc: 'Lykilstoð orðsporsins. Kjósa með veskinu.',
        detail: 'Fyrir þennan hóp snýst málið um öryggi og áreiðanleika. Þegar fréttir um endurskoðun birtast og opinberir aðilar hvetja eigendur til að fylgjast með bilunum, hefur það bein áhrif á upplifun þessa hóps.'
    },
    {
        id: 'government',
        icon: Building2,
        title: 'Stjórnvöld & Eftirlit',
        desc: 'Hafa raunverulegt og táknrænt vald.',
        detail: 'Ef umræðan festist í sessi sem öryggisvandi getur það kallað á aukið regluverk. Tesla þarf að sýna samstarfsvilja og ábyrgð, ekki varnarviðbrögð.'
    },
    {
        id: 'media',
        icon: Radio,
        title: 'Fjölmiðlar & Almenningur',
        desc: 'Móta frásögnina og samfélagsumræðuna.',
        detail: 'Vörumerki er í dag það sem fólk segir hvert við annað að það sé. Mikilvægt er að aðgreina staðbundna ábyrgð Tesla á Íslandi frá alþjóðlegri pólitískri umræðu um Elon Musk.'
    }
];

const Stakeholders = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Hagaðilagreining</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {stakeholders.map((s) => (
                        <motion.div
                            key={s.id}
                            layoutId={s.id}
                            onClick={() => setSelectedId(selectedId === s.id ? null : s.id)}
                            className={`cursor-pointer p-8 rounded-xl border transition-colors ${selectedId === s.id
                                    ? 'bg-zinc-800 border-red-600'
                                    : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                                }`}
                        >
                            <s.icon className="w-8 h-8 text-red-500 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{s.desc}</p>

                            <AnimatePresence>
                                {selectedId === s.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-300 text-sm pt-4 border-t border-zinc-700">
                                            {s.detail}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {selectedId !== s.id && (
                                <span className="text-xs text-red-500 mt-2 block uppercase tracking-wider">
                                    Lesa greiningu +
                                </span>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stakeholders;
