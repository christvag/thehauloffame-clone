import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Haul of Fame"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="hover:text-red-500 transition-colors">Shop</Link>
            <Link href="#" className="hover:text-red-500 transition-colors">Collections</Link>
            <Link href="#" className="hover:text-red-500 transition-colors">Live Shows</Link>
            <Link href="#" className="hover:text-red-500 transition-colors">About</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hover:text-red-500 transition-colors">Log in</button>
            <button className="hover:text-red-500 transition-colors">Cart</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="Haul of Fame Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                100% Authentic.<br />Zero Fakes.
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-8">
                We don't do high-quality reps. We only do authentic. We source the real deal so you can shop with zero doubt. If it's in our rack, it's 100% legit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Drip Check Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Drip Check. Level Up.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stop settling for basic. Find and grab the latest streetwear grails, no mids, all fire. No cap.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all hover:scale-105">
            Shop Now
          </button>
        </div>
      </section>

      {/* The OG Section */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-black mb-6">
            Straight From <span className="text-red-500">"THE OG"!</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tracking down the rarest finds so you don't have to. We skip the basic drops and bring you the genuine drip. If we've got it, it's bussin.
          </p>
        </div>
      </section>

      {/* Live Haul Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-4">
            <p className="text-red-500 font-bold text-sm uppercase tracking-wider mb-2">
              Catch Us Live on Whatnot!
            </p>
            <h2 className="text-3xl font-black text-gray-400 mb-4">
              REAL-TIME DROPS. REAL-TIME HYPE.
            </h2>
          </div>

          <div className="bg-gradient-to-br from-red-600/20 to-zinc-900 rounded-3xl p-12 text-center border border-red-600/30">
            <h3 className="text-5xl md:text-6xl font-black mb-6">
              The Live Haul
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              TikTok, Whatnot, you name it! We're live. Secure the rarest finds and exclusive drip you won't see anywhere else. Get instant deals and behind-the-scenes access to our massive haul. Don't sleep! Join the stream and upgrade your fit.
            </p>
            <p className="text-2xl font-bold text-red-500 mb-8">
              All starts at $1. No cap.
            </p>
            <button className="bg-white text-black font-bold py-4 px-12 rounded-full text-lg hover:bg-gray-200 transition-all hover:scale-105">
              Join Live Stream
            </button>
          </div>
        </div>
      </section>

      {/* Start Flexing Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-red-500 font-bold text-sm uppercase tracking-wider mb-2">
              LIMITED DROPS. LEGENDARY LOOKS.
            </p>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Start Flexing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Upgrade your rotation with pieces that actually stand out. We skip the basic, mass-produced drops to bring you a hand-picked vault of THE cleanest fits. Easy access OOTD and verified for the streets. Nothing but the real deal here.
            </p>
          </div>
        </div>
      </section>

      {/* Real Recognize Real Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-red-500 font-bold text-sm uppercase tracking-wider mb-2">
              TRUSTED SUPPLIERS. VERIFIED QUALITY.
            </p>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Real Recognize Real.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All legit straight from the source. Every item in The Haul of Fame goes through intense legit checks. We don't do fakes, we don't do mid, just 100% authentic.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Discover Your Unique Style with Haul Of Fame!
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-black rounded-2xl p-8 text-center border border-zinc-800 hover:border-red-600/50 transition-all">
              <div className="text-6xl mb-6">📺</div>
              <h3 className="text-2xl font-bold mb-4">Join Our Daily Live Shows!</h3>
              <p className="text-gray-400">
                Tune in and spot your must-have piece. Get real-time updates, insider commentary, and instant access to limited pieces as they hit the spotlight.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-black rounded-2xl p-8 text-center border border-zinc-800 hover:border-red-600/50 transition-all">
              <div className="text-6xl mb-6">🔥</div>
              <h3 className="text-2xl font-bold mb-4">Cop All The Bangers!</h3>
              <p className="text-gray-400">
                Place your offers and claim the fame. Send your offers during the stream, watch the countdown, and secure your haul before it disappears.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-black rounded-2xl p-8 text-center border border-zinc-800 hover:border-red-600/50 transition-all">
              <div className="text-6xl mb-6">📦</div>
              <h3 className="text-2xl font-bold mb-4">1-Day Shipping: GUARANTEED!</h3>
              <p className="text-gray-400">
                Tracked delivery, wherever you are. You'll receive tracking updates from dispatch to doorstep, ensuring your haul arrives safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Explore Our Streetwear Collection
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Box Sets", "Shoes", "Clothes"].map((collection) => (
              <div key={collection} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-zinc-800 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-3xl font-black">{collection}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="border-2 border-white hover:bg-white hover:text-black font-bold py-4 px-12 rounded-full text-lg transition-all">
              View all Products
            </button>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            The Haul of Fame Commitment
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            We do the legwork so you don't have to. We've ditched the corporate script to build a haul that's 100% legit and street-approved. We skip the mass-produced noise to bring you nothing but the real deal. Secure the heat and stay valid.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all hover:scale-105">
            Shop Now
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What makes The Haul of Fame apparel unique?",
                a: "We curate authentic streetwear and limited drops that you won't find elsewhere. Everything is verified and sourced from trusted suppliers."
              },
              {
                q: "Are your items authentic and ethically sourced?",
                a: "100%. Every item goes through rigorous authentication checks. We only work with verified suppliers and guarantee authenticity on every piece."
              },
              {
                q: "How often do you release new collections?",
                a: "We drop new pieces regularly through our live shows on TikTok and Whatnot. Follow us on social media to catch the latest releases."
              },
              {
                q: "What sizes do you carry?",
                a: "We carry a wide range of sizes across all our collections. Check individual product pages for specific size availability."
              },
              {
                q: "Do you ship internationally?",
                a: "Yes! We offer reliable international shipping with full tracking. Delivery times vary by location."
              }
            ].map((faq, i) => (
              <details key={i} className="bg-zinc-900 rounded-xl p-6 cursor-pointer group">
                <summary className="text-xl font-bold list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-red-500 group-open:rotate-180 transition-transform text-2xl">▼</span>
                </summary>
                <p className="mt-4 text-gray-400 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-red-600/20 to-black border-t border-red-600/30">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Your Next Big Haul Starts Here.
          </h2>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-16 rounded-full text-xl transition-all hover:scale-105">
            Start Shopping
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="font-bold mb-2">Follow us on</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Link href="#" className="hover:text-red-500 transition-colors">Facebook</Link>
                <Link href="#" className="hover:text-red-500 transition-colors">Instagram</Link>
                <Link href="#" className="hover:text-red-500 transition-colors">TikTok</Link>
                <Link href="#" className="hover:text-red-500 transition-colors">WhatNot</Link>
                <Link href="#" className="hover:text-red-500 transition-colors">Ebay</Link>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">Privacy policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Refund policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of service</Link>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-8">
            © 2026, Haul of Fame
          </div>
        </div>
      </footer>
    </div>
  );
}
