'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Bali Tour', href: '#' },
  { name: 'Bali Driver', href: '#' },
  { name: 'Airport Transfer', href: '#' },
  { name: 'Bali Activities', href: '#' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">Bali Tour Travel</span>
              <img
                alt="Bali Tour Travel Logo"
                src="/logo.png" 
                className="h-8 w-auto"
              />
              <span className="ml-2 font-bold text-xl text-gray-800">Bali Tour Travel</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#contact" className="text-sm font-semibold text-gray-900">
              Contact Us <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-gray-900/50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center">
                <img alt="Bali Tour Travel Logo" src="/logo.png" className="h-8 w-auto" />
                <span className="ml-2 font-bold text-lg text-gray-800">Bali Tour Travel</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="block py-2 text-lg font-semibold text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl">
              Nikmati Liburan Tak Terlupakan di Bali
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Jelajahi keindahan Bali dengan layanan eksklusif dari kami: tur pribadi, sopir profesional, transfer bandara, dan aktivitas seru!
            </p>
            <div className="mt-8 flex justify-center gap-x-4">
              <a href="#services" className="rounded-md bg-indigo-600 px-5 py-3 text-white text-lg font-semibold shadow-md hover:bg-indigo-500">
                Lihat Layanan
              </a>
              <a href="#contact" className="text-lg font-semibold text-gray-900">
                Hubungi Kami <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
