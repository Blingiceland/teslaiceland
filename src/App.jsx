import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Situation from './sections/Situation';
import Stakeholders from './sections/Stakeholders';
import Strategy from './sections/Strategy';
import References from './sections/References';

function App() {
    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-red-900 selection:text-white">
            <Header />
            <main>
                <Hero />
                <Situation />
                <Stakeholders />
                <Strategy />
            </main>
            <References />
        </div>
    );
}

export default App;
