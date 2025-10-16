import { Github, Linkedin, Mail } from 'lucide-react';
import SectionDivider from '../components/SectionDivider';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-[#E0E0E0]">
      <div className="container mx-auto px-6 py-32">
        <h1 className="text-5xl font-bold text-[#00FF99] mb-8 text-center neon-glow">
          CONTACT
        </h1>

        <SectionDivider />

        <div className="max-w-3xl mx-auto">
          <div className="breathing-gradient border border-[#00FF99] border-opacity-30 p-12 text-center">
            <p className="text-3xl text-[#E0E0E0] mb-8 leading-relaxed">
              Let's build something real.
            </p>

            <SectionDivider />

            <div className="space-y-8 mt-12">
              <div className="flex items-center justify-center gap-4">
                <Mail className="text-[#00FF99]" size={24} />
                <a
                  href="mailto:mrmaniac@example.com"
                  className="text-xl text-[#00FF99] neon-glow-hover"
                >
                  mrmaniac@example.com
                </a>
              </div>

              <div className="text-[#00FF99] text-opacity-40 text-xs">
                ------------------------------------------
              </div>

              <div className="flex justify-center gap-8">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-3 border border-[#00FF99] text-[#00FF99] neon-glow-hover transition-all"
                >
                  <Github size={20} />
                  [GITHUB]
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-3 border border-[#00FF99] text-[#00FF99] neon-glow-hover transition-all"
                >
                  <Linkedin size={20} />
                  [LINKEDIN]
                </a>
              </div>
            </div>

            <div className="mt-16 text-[#E0E0E0] text-opacity-60 text-sm">
              <p className="mb-2">Available for:</p>
              <p>Full-Stack Development | Hardware Projects | VLSI Design | System Architecture</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="breathing-gradient border border-[#00FF99] border-opacity-30 p-8">
              <p className="text-[#E0E0E0] text-opacity-70 text-sm leading-relaxed">
                Whether you're looking to collaborate on a cutting-edge project,
                need consultation on system design, or want to discuss the future of technology —
                my terminal is always open.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
