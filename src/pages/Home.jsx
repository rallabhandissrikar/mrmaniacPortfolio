import { Link } from 'react-router-dom';
import TypingText from '../components/TypingText';
import SectionDivider from '../components/SectionDivider';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#E0E0E0]">
      <div className="container mx-auto px-6 py-20">
        <section className="min-h-screen flex flex-col justify-center items-center text-center">
          <h1 className="text-7xl font-bold text-[#00FF99] neon-glow mb-6">
            MR. MANIAC
          </h1>
          <p className="text-xl text-[#E0E0E0] mb-8 max-w-4xl">
            Computer Science Engineer | Electronics Engineer | Communication Engineer | VLSI Engineer | Inventor
          </p>
          <div className="text-2xl h-16 mb-8">
            <TypingText />
          </div>
          <div className="text-xs text-[#00FF99] text-opacity-60 mt-12">
            Built with ReactJS + TailwindCSS | File-Based Routing | Sharp Gradient Boxes
          </div>
        </section>

        <SectionDivider />

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#00FF99] mb-8">ABOUT</h2>
          <div className="breathing-gradient border border-[#00FF99] border-opacity-30 p-8">
            <p className="text-[#E0E0E0] leading-relaxed text-lg">
              I'm Mr. Maniac — an engineer who believes technology should be as elegant as it is efficient.
              I navigate the intersections of Computer Science, Electronics, Communication, and VLSI,
              where logic meets imagination and precision breeds innovation.
              <br /><br />
              I don't just code — I engineer systems that think, respond, and evolve.
              My work blends the physical discipline of circuits with the abstract artistry of software.
              Whether it's crafting frontends in React, wiring backends in Django, or designing
              hardware-level logic, I build with intent — to create, to optimize, and to invent.
              <br /><br />
              For me, engineering isn't just a field — it's a craft, a philosophy, and a lifelong experiment.
            </p>
          </div>
        </section>

        <SectionDivider />

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#00FF99] mb-8">STACK</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="breathing-gradient border border-[#00FF99] border-opacity-30 p-6">
              <h3 className="text-xl font-bold text-[#00FF99] mb-4">FRONTEND</h3>
              <p className="text-[#E0E0E0]">Flutter, ReactJS, React Native</p>
            </div>
            <div className="breathing-gradient border border-[#00FF99] border-opacity-30 p-6">
              <h3 className="text-xl font-bold text-[#00FF99] mb-4">BACKEND</h3>
              <p className="text-[#E0E0E0]">Python, Django, REST API, JWT</p>
            </div>
            <div className="breathing-gradient border border-[#00FF99] border-opacity-30 p-6">
              <h3 className="text-xl font-bold text-[#00FF99] mb-4">TOOLS</h3>
              <p className="text-[#E0E0E0]">Git, VSCode, Render, Vercel, Firebase</p>
            </div>
            <div className="breathing-gradient border border-[#00FF99] border-opacity-30 p-6">
              <h3 className="text-xl font-bold text-[#00FF99] mb-4">HARDWARE</h3>
              <p className="text-[#E0E0E0]">VLSI, Embedded Systems, Communication Circuits</p>
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#00FF99] mb-8">PROJECTS</h2>
          <div className="space-y-6">
            <div className="breathing-gradient border border-[#00FF99] border-opacity-30 p-8">
              <h3 className="text-2xl font-bold text-[#00FF99] mb-3">TASKY – Task Manager App</h3>
              <p className="text-sm text-[#00FF99] text-opacity-70 mb-4">Stack: Flutter + Django REST + JWT</p>
              <p className="text-[#E0E0E0] mb-6">A clean CRUD productivity app with authentication.</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="px-6 py-2 border border-[#00FF99] text-[#00FF99] neon-glow-hover transition-all"
                >
                  [LIVE DEMO]
                </a>
                <a
                  href="#"
                  className="px-6 py-2 border border-[#00FF99] text-[#00FF99] neon-glow-hover transition-all"
                >
                  [GITHUB]
                </a>
              </div>
            </div>

            <div className="breathing-gradient border border-[#00FF99] border-opacity-30 p-8">
              <h3 className="text-2xl font-bold text-[#00FF99] mb-3">SHOPORA – E-Commerce Platform</h3>
              <p className="text-sm text-[#00FF99] text-opacity-70 mb-4">Stack: Flutter + Django REST</p>
              <p className="text-[#E0E0E0] mb-6">Full-stack shop with cart, orders, and admin panel.</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="px-6 py-2 border border-[#00FF99] text-[#00FF99] neon-glow-hover transition-all"
                >
                  [LIVE DEMO]
                </a>
                <a
                  href="#"
                  className="px-6 py-2 border border-[#00FF99] text-[#00FF99] neon-glow-hover transition-all"
                >
                  [GITHUB]
                </a>
              </div>
            </div>

            <div className="breathing-gradient border border-[#00FF99] border-opacity-30 p-8">
              <h3 className="text-2xl font-bold text-[#00FF99] mb-3">SKILLCHECK – AI Resume Analyzer</h3>
              <p className="text-sm text-[#00FF99] text-opacity-70 mb-4">Stack: Flutter + Django + OpenAI API</p>
              <p className="text-[#E0E0E0] mb-6">Upload a resume, get AI-based skill insights.</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="px-6 py-2 border border-[#00FF99] text-[#00FF99] neon-glow-hover transition-all"
                >
                  [LIVE DEMO]
                </a>
                <a
                  href="#"
                  className="px-6 py-2 border border-[#00FF99] text-[#00FF99] neon-glow-hover transition-all"
                >
                  [GITHUB]
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-block px-8 py-3 border-2 border-[#00FF99] text-[#00FF99] text-xl neon-glow-hover transition-all"
            >
              [SEE MORE PROJECTS]
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
