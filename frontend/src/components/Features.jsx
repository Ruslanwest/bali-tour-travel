
import React from 'react'
import { TruckIcon, PaperAirplaneIcon, TicketIcon, MapIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Bali Tour',
    description:
      'Jelajahi keindahan Bali dengan paket wisata terbaik. Nikmati pemandangan alam, budaya, dan kuliner khas Bali bersama pemandu profesional kami.',
    icon: MapIcon, // Ikon peta untuk tur
  },
  {
    name: 'Bali Driver',
    description:
      'Sewa mobil dengan sopir pribadi yang berpengalaman dan ramah. Nikmati perjalanan nyaman dan aman ke destinasi favorit Anda di Bali.',
    icon: TruckIcon, // Ikon mobil untuk layanan driver
  },
  {
    name: 'Airport Transfer',
    description:
      'Layanan antar-jemput dari dan ke Bandara Ngurah Rai dengan harga terjangkau. Nikmati perjalanan tanpa repot dengan layanan kami yang tepat waktu.',
    icon: PaperAirplaneIcon, // Ikon pesawat untuk airport transfer
  },
  {
    name: 'Bali Activities',
    description:
      'Temukan berbagai aktivitas menarik di Bali seperti snorkeling, rafting, ATV, dan lainnya. Pilih pengalaman terbaik untuk liburan Anda!',
    icon: TicketIcon, // Ikon tiket untuk aktivitas wisata
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Layanan Kami</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Pilihan Terbaik untuk Liburan Anda di Bali
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Kami menawarkan berbagai layanan perjalanan untuk memastikan pengalaman liburan Anda di Bali menjadi lebih mudah dan menyenangkan.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                  {React.createElement(feature.icon, { className: "size-6 text-white", "aria-hidden": "true" })}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
