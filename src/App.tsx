/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Specifications } from './components/Specifications';
import { FacilityShowcase } from './components/FacilityShowcase';
import { Process } from './components/Process';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-minerax-dark selection:bg-minerax-blue/50">
      <Header />
      <main>
        <Hero />
        <Specifications />
        <FacilityShowcase />
        <Process />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
