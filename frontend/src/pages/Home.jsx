'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Quienes somos', href: '#' },
  { name: 'Donaciones', href: '#' },
  { name: 'Emprendimientos de los pacientes', href: '/emprendimientos' },
  { name: 'Voluntariado', href: '#' },
  { name: 'Test de adicciones', href: '#' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">FUNDACIÓN RESSURGIR</span>
              <img
                alt="Fundación Ressurgir Logo"
                src="./logo.jpg"
                className="h-12 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Abrir menú</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">FUNDACIÓN RESSURGIR</span>
                <img
                  alt="Fundación Ressurgir Logo"
                  src="./logo.jpg"
                  className="h-12 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Cerrar menú</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
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
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#1e90ff] sm:text-6xl" style={{ fontFamily: 'Dancing Script, sans-serif' }}>
            Fundacion Ressurgir
          </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Somos una fundación dedicada a apoyar a personas en su proceso de resurgimiento personal y profesional, brindando oportunidades y acompañamiento.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#1e90ff] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1c7ed6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Conoce más
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-[#f08080]">
                Haz una donación <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
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
      </div>

      {/* Aquí empieza el código del footer */}
      <footer className="bg-gray-500 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">FUNDACIÓN RESSURGIR</h3>
              <p>Trabajamos para apoyar a quienes más lo necesitan y ayudarles a superar las dificultades.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Enlaces útiles</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Inicio</a></li>
                <li><a href="#" className="hover:underline">Quienes somos</a></li>
                <li><a href="#" className="hover:underline">Donaciones</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contacto</h3>
              <ul className="space-y-2">
                <li>Teléfono: (555) 123-4567</li>
                <li>Email: contacto@fundacionressurgir.org</li>
                <li>Dirección: Calle 123, Ciudad, País</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm">&copy; 2024 Fundación Ressurgir. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
