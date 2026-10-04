import CustomCursor from "./components/animation/CustomCursor";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  GraduationCap,
  Trophy,
  Users,
  Building2,
  Play,
  Quote,
  ChevronDown,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Campus Life", href: "#campus" },
  { label: "Admissions", href: "#admissions" },
];

const stats = [
  { value: "22", label: "Acres of campus", icon: Building2 },
  { value: "16+", label: "Olympic sports", icon: Trophy },
  { value: "6:1", label: "Student-teacher ratio", icon: Users },
  { value: "24/7", label: "Medical assistance", icon: GraduationCap },
];

const features = [
  {
    number: "01",
    title: "Academic Excellence",
    text: "A stimulating learning environment designed to develop curiosity, critical thinking and a lifelong love for learning.",
  },
  {
    number: "02",
    title: "Beyond the Classroom",
    text: "From sports and arts to leadership and outdoor experiences, students discover their strengths beyond academics.",
  },
  {
    number: "03",
    title: "A Global Outlook",
    text: "An inclusive community that prepares young people to become confident and responsible global citizens.",
  },
];

const testimonials = [
  {
    quote:
      "Tulas has created an environment where our child feels encouraged to explore, learn and become more confident every day.",
    name: "Parent of a TIS Student",
  },
  {
    quote:
      "The combination of academics, sports and personal development gives students an experience that goes far beyond a traditional classroom.",
    name: "TIS Parent",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f4ed] text-[#0b1f33]">
      <CustomCursor />
      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[100] h-1 origin-left bg-[#c9a45c]"
      />

      {/* Navbar */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
              <span className="font-serif text-xl text-white">T</span>
            </div>

            <div>
              <div className="text-sm font-bold tracking-[0.2em] text-white">
                TULAS
              </div>
              <div className="text-[9px] uppercase tracking-[0.25em] text-white/60">
                International School
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#admissions"
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0b1f33] transition hover:-translate-y-0.5 hover:bg-[#c9a45c] lg:flex"
          >
            Enquire Now
            <ArrowUpRight size={16} />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="mx-4 rounded-2xl border border-white/10 bg-[#0b1f33]/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-4 text-white/80 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#admissions"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#c9a45c] px-4 py-3 font-semibold"
            >
              Enquire Now
              <ArrowUpRight size={17} />
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[760px] items-end overflow-hidden bg-[#0b1f33] pb-16 pt-32 sm:min-h-screen lg:pb-20"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=85"
            alt="School campus"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#061321]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061321] via-transparent to-[#061321]/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d7bc7e]">
              <span className="h-px w-10 bg-[#c9a45c]" />
              Tulas International School
            </div>

            <h1 className="max-w-5xl font-serif text-5xl leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[92px]">
              Where potential
              <br />
              <span className="text-[#d7bc7e]">becomes purpose.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              A nurturing learning community where young minds are encouraged to
              question, explore, create and grow into confident global citizens.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#about"
                className="group flex items-center justify-center gap-3 rounded-full bg-[#c9a45c] px-7 py-4 text-sm font-bold text-[#0b1f33] transition hover:bg-white"
              >
                Discover Tulas
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#admissions"
                className="flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[#0b1f33]"
              >
                Begin Your Journey
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-16 grid grid-cols-2 border-t border-white/20 pt-6 md:grid-cols-4"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="border-white/15 px-3 py-4 first:pl-0 md:border-l md:px-6 md:first:border-l-0"
                >
                  <div className="flex items-center gap-2 text-[#d7bc7e]">
                    <Icon size={15} />
                    <span className="text-2xl font-semibold text-white sm:text-3xl">
                      {stat.value}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-white/55 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="absolute bottom-7 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50 lg:flex">
          <span>Scroll to explore</span>
          <ChevronDown size={15} className="animate-bounce" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#a18042]">
              About Tulas
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Education that
              <br />
              <span className="text-[#9d7b3d]">shapes character.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-8 text-[#53606b]">
              Tulas International School is a co-educational residential and day
              school in Dehradun, built around the belief that education should
              develop the whole person—not simply prepare students for
              examinations.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#53606b]">
              Our approach brings together academic excellence, meaningful
              relationships, sports, creativity, leadership and a strong sense
              of community.
            </p>

            <a
              href="#academics"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0b1f33]"
            >
              Explore our approach
              <ArrowRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section
        id="academics"
        className="bg-[#0b1f33] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#d7bc7e]">
              The Tulas Experience
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              More than a school.
              <br />
              <span className="text-[#d7bc7e]">A place to become.</span>
            </h2>
          </div>

          <div className="grid border-t border-white/15 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.article
                key={feature.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-white/15 px-0 py-9 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <span className="text-sm text-[#d7bc7e]">{feature.number}</span>

                <h3 className="mt-8 font-serif text-2xl">{feature.title}</h3>

                <p className="mt-5 leading-7 text-white/55">{feature.text}</p>

                <div className="mt-8 h-px w-10 bg-[#c9a45c]" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Campus */}
      <section id="campus" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2rem]"
            >
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=85"
                alt="School building"
                className="aspect-[4/3] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f33]/60 to-transparent" />

              <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full bg-white/15 px-4 py-3 text-sm text-white backdrop-blur-md">
                <Play size={15} fill="currentColor" />
                Explore our campus
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#a18042]">
                Life at Tulas
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                Space to
                <br />
                <span className="text-[#9d7b3d]">learn & explore.</span>
              </h2>

              <p className="mt-6 leading-7 text-[#66717d]">
                Set against the foothills of the Himalayas, the Tulas campus
                provides students with space to learn, play, reflect and build
                lasting friendships.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-[#d9d5ca] pt-6">
                <div>
                  <strong className="font-serif text-4xl">22</strong>
                  <p className="mt-1 text-sm text-[#66717d]">Acres of campus</p>
                </div>

                <div>
                  <strong className="font-serif text-4xl">16+</strong>
                  <p className="mt-1 text-sm text-[#66717d]">
                    Sports disciplines
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="overflow-hidden bg-[#e9e3d5] px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#a18042]">
                Beyond Academics
              </p>

              <h2 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Discover what
                <br />
                <span className="text-[#9d7b3d]">moves you.</span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[#66717d]">
              Sport, arts, leadership and outdoor experiences give every student
              the opportunity to discover new passions.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Football",
                "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80",
              ],
              [
                "Swimming",
                "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=80",
              ],
              [
                "Basketball",
                "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80",
              ],
              [
                "Tennis",
                "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=900&q=80",
              ],
            ].map(([name, image], index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={image}
                  alt={name}
                  className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <h3 className="absolute bottom-5 left-5 font-serif text-2xl text-white">
                  {name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#a18042]">
              Voices of Tulas
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              A community that
              <br />
              <span className="text-[#9d7b3d]">feels like home.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[2rem] bg-[#f7f4ed] p-8 sm:p-10"
              >
                <Quote className="text-[#c9a45c]" size={32} />

                <p className="mt-7 font-serif text-2xl leading-relaxed text-[#0b1f33]">
                  “{item.quote}”
                </p>

                <p className="mt-8 text-sm font-semibold text-[#66717d]">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section
        id="admissions"
        className="relative overflow-hidden bg-[#0b1f33] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#c9a45c]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#d7bc7e]">
            Admissions
          </p>

          <h2 className="mx-auto max-w-4xl font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Your child's next chapter
            <span className="text-[#d7bc7e]"> starts here.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-7 text-white/60">
            Discover a school where academic ambition meets character, curiosity
            and a sense of belonging.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#home"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c9a45c] px-8 py-4 font-bold text-[#0b1f33] transition hover:bg-white"
            >
              Enquire About Admissions
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              Learn More
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#061321] px-5 py-12 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20">
                  <span className="font-serif text-xl">T</span>
                </div>

                <div>
                  <div className="text-sm font-bold tracking-[0.2em]">
                    TULAS
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                    International School
                  </div>
                </div>
              </div>

              <p className="mt-6 max-w-md leading-7 text-white/45">
                Nurturing curious minds, developing confident individuals and
                preparing students for a changing world.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Explore</h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/50">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Contact</h3>

              <div className="mt-5 flex flex-col gap-3 text-sm leading-6 text-white/50">
                <p>
                  Dhoolkot, P.O. Selaqui,
                  <br />
                  Chakrata Road, Dehradun
                </p>

                <a
                  href="tel:+919837983791"
                  className="transition hover:text-white"
                >
                  +91 98379 83791
                </a>

                <a
                  href="mailto:info@tis.edu.in"
                  className="transition hover:text-white"
                >
                  info@tis.edu.in
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row">
            <p>© 2026 Tulas International School. All rights reserved.</p>
            <p>Designed for a modern learning experience.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
