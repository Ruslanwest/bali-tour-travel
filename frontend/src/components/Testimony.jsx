export default function Testimony() {
    const testimonials = [
      {
        id: 1,
        name: "Sarah Tan",
        text: "Pelayanan luar biasa! Tour ini membuat pengalaman liburan di Bali semakin menyenangkan.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        role: "Traveler dari Malaysia",
      },
      {
        id: 2,
        name: "David Smith",
        text: "Sangat direkomendasikan! Supirnya ramah, hotelnya nyaman, dan semua berjalan lancar.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        role: "Turis dari Australia",
      },
      {
        id: 3,
        name: "Ayaka Nakamura",
        text: "Paket wisata yang lengkap dan harga terjangkau. Saya pasti akan kembali lagi!",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        role: "Pelancong dari Jepang",
      },
    ];
  
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            alt="Bali Tour Travel Logo"
            src="https://via.placeholder.com/150?text=Bali+Tour+Travel"
            className="mx-auto h-12"
          />
          <figure className="mt-10">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center mb-12">
                <blockquote className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                  <p>“{testimonial.text}”</p>
                </blockquote>
                <figcaption className="mt-6">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="mx-auto size-10 rounded-full"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </figcaption>
              </div>
            ))}
          </figure>
        </div>
      </section>
    );
  }
  