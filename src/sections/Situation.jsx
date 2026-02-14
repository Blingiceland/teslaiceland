import React from 'react';

const Situation = () => {
    return (
        <section className="py-24 px-6 bg-zinc-900 border-b border-zinc-800">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
                        Staðan: Orðspor í Hættu
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        Undanfarið hefur umræða um Tesla á Íslandi snúist um tvennt. Annars vegar hafa fjölmiðlar greint frá því að tæplega þrjátíu prósent Tesla Y bíla hafi þurft í endurskoðun við fyrstu skoðun hér á landi. Hins vegar hefur umræða um Elon Musk og pólitísk umdeild mál hans haft áhrif á hvernig fólk talar um Tesla almennt.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-6 bg-black/50 rounded-lg border border-zinc-800">
                        <h3 className="text-red-500 font-mono text-sm mb-2 uppercase">Endurskoðun</h3>
                        <p className="text-gray-400">
                            Þegar tæknilegt mál – skoðun og viðhald – verður að spurningu um traust. Fjölmiðlar hafa skapað ramma sem þróast úr „tæknilegum frávikum“ yfir í „áhyggjur af öryggi“.
                        </p>
                    </div>
                    <div className="p-6 bg-black/50 rounded-lg border border-zinc-800">
                        <h3 className="text-red-500 font-mono text-sm mb-2 uppercase">Leiðtoginn</h3>
                        <p className="text-gray-400">
                            Ímynd Elon Musk hefur áhrif á vörumerkið. Vörumerkið lifir utan fyrirtækisins – í samtali fólks.
                        </p>
                    </div>
                </div>

                <blockquote className="border-l-2 border-gray-700 pl-6 italic text-gray-500">
                    "Í dag hefur vald yfir frásögninni færst frá fyrirtækjum til samfélagsins. Fyrirtæki geta ekki lengur stjórnað ímynd sinni – þau geta aðeins tekið þátt í að móta hana." <br />
                    <span className="not-italic text-sm text-gray-600 mt-2 block">— Argenti (2022)</span>
                </blockquote>
            </div>
        </section>
    );
};

export default Situation;
