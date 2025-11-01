"use client"

export default function Hero({ isLoaded }: { isLoaded: boolean }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Grid effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(217,119,6,.05)_25%,rgba(217,119,6,.05)_26%,transparent_27%,transparent_74%,rgba(217,119,6,.05)_75%,rgba(217,119,6,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div
        className={`relative z-10 text-center max-w-4xl mx-auto transform transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
            🔐 Cybersecurity Workshop
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
          SEC Talk <span className="text-primary">2025</span>
        </h1>

        <p className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed max-w-2xl mx-auto">
         Master cybersecurity from the ground up — explore real-world concepts, practice with powerful open-source tools, and build your own professional security toolkit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
  <a
    href="https://forms.gle/DKKFAvMoHJjrdbmh9"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md text-center"
  >
    Register Now
  </a>
  <a
    href="https://chat.whatsapp.com/CociXeILN3oHZxjVPXah1R"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 rounded-full border-2 border-foreground/20 text-foreground font-semibold hover:bg-foreground/5 transform hover:scale-105 transition-all duration-300 text-center"
  >
    Learn More
  </a>
</div>


        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-sm">
          <div className="p-3 rounded-lg bg-card border border-border">
            <div className="font-bold text-primary">📅 Nov 6 2025</div>
            
          </div>
          <div className="p-3 rounded-lg bg-card border border-border">
            <div className="font-bold text-foreground">🏫 GNDU RC Jalandhar</div>

          </div>
          <div className="p-3 rounded-lg bg-card border border-border">
            <div className="font-bold text-foreground">💻 Computer Lab</div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
