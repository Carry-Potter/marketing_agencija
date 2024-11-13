import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Facebook, Instagram, Linkedin, Twitter, Play, CheckCircle, Globe, Camera, PenTool, Zap, Users, BarChart, Mail, Phone, MapPin } from 'lucide-react'
import slika from './marketing.jpg'
import slika2 from './mragent.png'
import slika3 from './dig.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function CreativeAgencyPremium() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('all')

  const portfolioItems = [
    { id: 1, category: 'web', title: 'E-commerce Platforma', image: slika },
    { id: 2, category: 'branding', title: 'Rebrand Startupa', image:  slika },
    { id: 3, category: 'marketing', title: 'Virusna Kampanja', image: slika2 },
    { id: 4, category: 'video', title: 'Promo Video', image: slika },
    { id: 5, category: 'web', title: 'Web Aplikacija', image: slika },
    { id: 6, category: 'branding', title: 'Brend Identitet', image: slika },
    { id: 7, category: 'marketing', title: 'SEO Optimizacija', image: slika },
    { id: 8, category: 'video', title: 'Animirani Explainer', image: slika },
  ]

  const filteredItems = activeTab === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === activeTab)

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-purple-600">CreativePulse</div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition duration-300">Početna</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition duration-300">O Nama</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition duration-300">Usluge</a>
              <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition duration-300">Portfolio</a>
              <a href="#process" className="text-gray-700 hover:text-purple-600 transition duration-300">Proces</a>
              <a href="#team" className="text-gray-700 hover:text-purple-600 transition duration-300">Tim</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition duration-300">Kontakt</a>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none">
              <svg className="h-6 w-6 fill-current text-gray-700" viewBox="0 0 24 24">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className="mt-4 md:hidden">
              <a href="#home" className="block py-2 text-gray-700 hover:text-purple-600 transition duration-300">Početna</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-purple-600 transition duration-300">O Nama</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-purple-600 transition duration-300">Usluge</a>
              <a href="#portfolio" className="block py-2 text-gray-700 hover:text-purple-600 transition duration-300">Portfolio</a>
              <a href="#process" className="block py-2 text-gray-700 hover:text-purple-600 transition duration-300">Proces</a>
              <a href="#team" className="block py-2 text-gray-700 hover:text-purple-600 transition duration-300">Tim</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-purple-600 transition duration-300">Kontakt</a>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="container mx-auto px-6 py-16 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Kreativnost Koja Pokreće Rast
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transformišemo vaše ideje u moćne digitalne strategije koje donose rezultate
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="#contact" className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300 inline-flex items-center">
              Započnite Projekat
              <ChevronDown className="ml-2" />
            </a>
          </motion.div>
        </section>

        <section id="about" className="bg-purple-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">O Nama</h2>
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <img src={slika3} alt="Our Team" className="rounded-lg shadow-lg" />
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Vaš Partner za Digitalni Uspeh</h3>
                <p className="text-gray-600 mb-6">
                  CreativePulse je tim strastvenih stručnjaka posvećenih stvaranju izuzetnih digitalnih iskustava. Sa našim inovativnim pristupom i najnovijim tehnologijama, pomažemo brendovima da se istaknu u digitalnom svetu.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-500 mr-2" />
                    Preko 10 godina iskustva u digitalnom marketingu
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-500 mr-2" />
                    Nagrađivani kreativni tim
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-500 mr-2" />
                    Prilagođena rešenja za svaki brend
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-500 mr-2" />
                    Fokus na merljive rezultate i ROI
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Naše Usluge</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Globe className="h-12 w-12 text-purple-600" />, title: "Digitalni Marketing", description: "SEO, PPC, Email marketing i strategije za društvene mreže koje povećavaju vidljivost i angažman." },
                { icon: <PenTool className="h-12 w-12 text-purple-600" />, title: "Grafički Dizajn", description: "Kreiranje vizuelnog identiteta, logotipa, brošura i marketinških materijala koji ostavljaju utisak." },
                { icon: <Globe className="h-12 w-12 text-purple-600" />, title: "Web Razvoj", description: "Izrada modernih, responzivnih i optimizovanih sajtova i web aplikacija po meri." },
                { icon: <Camera className="h-12 w-12 text-purple-600" />, title: "Video Produkcija", description: "Produkcija visokokvalitetnih video sadržaja, od koncepta do finalne montaže." },
                { icon: <Zap className="h-12 w-12 text-purple-600" />, title: "Brend Strategija", description: "Razvoj sveobuhvatnih brend strategija koje definišu i pozicioniraju vaš brend." },
                { icon: <Users className="h-12 w-12 text-purple-600" />, title: "Influenser Marketing", description: "Povezivanje brendova sa relevantnim influenserima za autentičnu promociju." },
                { icon: <BarChart className="h-12 w-12 text-purple-600" />, title: "Analitika i Izveštavanje", description: "Detaljno praćenje i analiza performansi kampanja za optimizaciju rezultata." },
                { icon: <PenTool className="h-12 w-12 text-purple-600" />, title: "Copywriting", description: "Kreiranje ubedljivog i SEO optimizovanog sadržaja koji privlači i konvertuje." }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Naš Portfolio</h2>
            <div className="flex justify-center mb-8">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`mx-2 px-4 py-2 rounded-full ${activeTab === 'all' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700'}`}
              >
                Sve
              </button>
              <button 
                onClick={() => setActiveTab('web')} 
                className={`mx-2 px-4 py-2 rounded-full ${activeTab === 'web' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700'}`}
              >
                Web
              </button>
              <button 
                onClick={() => setActiveTab('branding')} 
                className={`mx-2 px-4 py-2 rounded-full ${activeTab === 'branding' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700'}`}
              >
                Brending
              </button>
              <button 
                onClick={() => setActiveTab('marketing')} 
                className={`mx-2 px-4 py-2 rounded-full ${activeTab === 'marketing' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700'}`}
              >
                Marketing
              </button>
              <button 
                onClick={() => setActiveTab('video')} 
                className={`mx-2 px-4 py-2 rounded-full ${activeTab === 'video' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700'}`}
              >
                Video
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredItems.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-lg shadow-lg"
                  >
                    <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center">
                        <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                        <a href="#" className="text-purple-300 hover:text-purple-100 transition duration-300">Pogledaj Projekat</a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section id="process" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Naš Proces</h2>
            <div className="flex flex-wrap justify-center">
              {[
                { step: 1, title: "Otkrivanje", description: "Upoznajemo vaš brend, ciljeve i izazove." },
                { step: 2, title: "Strategija", description: "Razvijamo prilagođenu strategiju za vaš uspeh." },
                { step: 3, title: "Kreacija", description: "Stvaramo sadržaj i dizajn koji privlači pažnju." },
                { step: 4, title: "Implementacija", description: "Lansiramo kampanje i optimizujemo performanse." },
                { step: 5, title: "Analiza", description: "Merimo rezultate i pružamo detaljne izveštaje." }
              ].map((phase, index) => (
                <div key={index} className="w-full md:w-1/5 px-4 mb-8">
                  <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{phase.title}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="bg-purple-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Naš Tim</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Marina Jelić", role: "Kreativni Direktor", image: "/placeholder.svg?height=300&width=300&text=AM" },
                { name: "Ivan Jelić", role: "Tehnički Direktor", image: "/placeholder.svg?height=300&width=300&text=MN" },
                { name: "Tanja Valenćik", role: "Grafički Direktor", image: "/placeholder.svg?height=300&width=300&text=JJ" },
                
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Šta Klijenti Kažu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Ana Marković", role: "CEO, TechStart", content: "CreativePulse je transformisao naš brend. Njihova kreativnost i profesionalnost su nenadmašni." },
                { name: "Marko Nikolić", role: "Marketing Direktor, FreshFoods", content: "Izuzetno smo zadovoljni rezultatima naše kampanje. CreativePulse je premašio sva naša očekivanja." },
                { name: "Jelena Jovanović", role: "Vlasnik, Bloom Boutique", content: "Sjajan tim koji razume potrebe malih biznisa. Naš online prodaja je porasla za 200%!" }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="rounded-full bg-purple-200 h-12 w-12 flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-semibold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Kontaktirajte Nas</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <form className="bg-white rounded-lg shadow-md p-8">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ime</label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Poruka</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">Pošalji Poruku</button>
                </form>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="bg-white rounded-lg shadow-md p-8 h-full">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Informacije za Kontakt</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="text-purple-600 mr-4 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-gray-600">info@creativepulse.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="text-purple-600 mr-4 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">Telefon</p>
                        <p className="text-gray-600">+381 11 123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="text-purple-600 mr-4 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">Adresa</p>
                        <p className="text-gray-600">Bulevar Kralja Aleksandra 123, 11000 Beograd, Srbija</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Pratite Nas</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-600 hover:text-purple-600 transition duration-300"><Facebook /></a>
                      <a href="#" className="text-gray-600 hover:text-purple-600 transition duration-300"><Instagram /></a>
                      <a href="#" className="text-gray-600 hover:text-purple-600 transition duration-300"><Twitter /></a>
                      <a href="#" className="text-gray-600 hover:text-purple-600 transition duration-300"><Linkedin /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">CreativePulse</h3>
              <p className="text-gray-400">Vaš partner za digitalni uspeh</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Brzi Linkovi</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Početna</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">O Nama</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Usluge</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-white transition duration-300">Portfolio</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Kontakt</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
              <p className="text-gray-400 mb-2">Prijavite se za najnovije vesti i savete</p>
              <form className="flex">
                <input type="email" placeholder="Vaš email" className="px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none" />
                <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition duration-300">Prijava</button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 CreativePulse. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>
    </div>
  )
  
}