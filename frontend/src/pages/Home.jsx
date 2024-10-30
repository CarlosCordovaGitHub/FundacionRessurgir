'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, BookOpen, ArrowRight, ChevronDown } from 'lucide-react';

// Statistics data
const stats = [
  { id: 1, name: 'Personas Ayudadas', value: '500+', icon: Users },
  { id: 2, name: 'Años de Experiencia', value: '10+', icon: Heart },
  { id: 3, name: 'Programas Activos', value: '5', icon: BookOpen },
];

export default function Home() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <main className="bg-white">
      {/* Hero Section with enhanced visual appeal */}
      <section className="relative min-h-screen flex items-center">
        <div className="relative isolate px-6 lg:px-8 w-full">
          {/* Background effects */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f08080] to-[#1e90ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          {/* Hero Content */}
          <div className="mx-auto max-w-4xl">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-[#1e90ff] sm:text-6xl mb-6" 
                  style={{ fontFamily: 'Dancing Script, sans-serif' }}>
                Fundación Ressurgir
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
                Somos una fundación dedicada a apoyar a personas en su proceso de resurgimiento personal y profesional, 
                brindando oportunidades y acompañamiento integral para un futuro mejor.
              </p>
              
              {/* Call to Action Buttons */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <motion.a
                  href="#about"
                  className="rounded-md bg-[#1e90ff] px-5 py-3 text-base font-semibold text-white shadow-lg hover:bg-[#1c7ed6] focus:outline-none focus:ring-2 focus:ring-[#1e90ff] focus:ring-offset-2 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Conoce más
                </motion.a>
                <motion.a 
                  href="#donate"
                  className="group text-base font-semibold leading-6 text-[#f08080] hover:text-[#e06666] flex items-center gap-2 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Haz una donación
                  <ArrowRight className="inline-block transition-transform group-hover:translate-x-1" />
                </motion.a>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.button
              onClick={scrollToContent}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              aria-label="Scroll para más contenido"
            >
              <ChevronDown size={32} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nuestro Impacto
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Trabajamos incansablemente para hacer una diferencia en la vida de las personas.
            </p>
          </motion.div>

          <div className="mx-auto max-w-7xl">
            <dl className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.id}
                    className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: stat.id * 0.1 }}
                  >
                    <Icon className="h-12 w-12 text-[#1e90ff] mb-4" />
                    <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                    <dd className="text-4xl font-semibold tracking-tight text-gray-900 mt-2">{stat.value}</dd>
                  </motion.div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#f08080] to-[#1e90ff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </main>
  );
}