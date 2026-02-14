import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const Strategy = () => {
    return (
        <section className="py-24 px-6 bg-zinc-900">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                    Ákvörðunin: Kveikur
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Option A: Decline */}
                    <div className="opacity-50 hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-4 mb-4">
                            <XCircle className="text-gray-500 w-8 h-8" />
                            <h3 className="text-2xl font-bold text-gray-500">Mæta Ekki</h3>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Hætta á að umræðan verði einhliða. Þögn er sjaldnast hlutlaus – hún er túlkuð sem varnartákn eða skortur á ábyrgð (Coombs, 2007).
                        </p>
                    </div>

                    {/* Option B: ATTEND (Selected) */}
                    <div className="bg-black border-2 border-red-600 rounded-2xl p-8 relative shadow-2xl shadow-red-900/20 transform md:scale-105">
                        <div className="absolute -top-4 -right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                            Ráðlögð Leið
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <CheckCircle2 className="text-red-500 w-10 h-10" />
                            <h3 className="text-3xl font-bold text-white">Mæta í Viðtal</h3>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                'Útskýra hvað "endurskoðun" þýðir í raun',
                                'Setja tölur í rétt samhengi',
                                'Sýna samstarfsvilja og ábyrgð',
                                'Aðgreina íslenskan rekstur frá Musk'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2" />
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-zinc-900/50 p-4 rounded border border-zinc-800">
                            <h4 className="text-white font-bold mb-2 text-sm uppercase">Markmið</h4>
                            <p className="text-gray-400 text-sm">
                                Viðhalda trausti eigenda með staðreyndum. Tryggja að stjórnvöld upplifi Tesla sem samstarfsaðila.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Strategy;
