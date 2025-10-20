import { Github, Linkedin, Mail } from 'lucide-react';
import SectionDivider from '../components/SectionDivider';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-[#E0E0E0]">
      <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-32">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#00FF99] mb-8 text-center neon-glow">
          CONTACT
        </h1>

        <SectionDivider />

        <div className="max-w-3xl mx-auto">
          <div className="breathing-gradient border border-[#00FF99] border-opacity-30 p-8 sm:p-12 text-center">
            <p className="text-2xl sm:text-3xl text-[#E0E0E0] mb-8 leading-relaxed">
              Let's build something real.
            </p>

            <SectionDivider />

            <div className="space-y-6 sm:space-y-8 mt-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <Mail className="text-[#00FF99]" size={24} />
                <a
                  href="mailto:srikarrallabhandi.16@outlook.com"
                  className="text-lg sm:text-xl text-[#00FF99] neon-glow-hover"
                >
                  srikarrallabhandi.16@outlook.com
                </a>
              </div>

              <div className="text-[#00FF99] text-opacity-40 text-xs">
                ------------------------------------------
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                <a
                  href="https://github.com/rallabhandissrikar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 border border-[#00FF99] text-[#00FF99] neon-glow-hover transition-all"
                >
                  <Github size={20} />
                  [GITHUB]
                </a>
                <a
                  href="https://www.linkedin.com/in/rallabhandi-srikar-1692b1271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 border border-[#00FF99] text-[#00FF99] neon-glow-hover transition-all"
                >
                  <Linkedin size={20} />
                  [LINKEDIN]
                </a>
              </div>
            </div>

            <div className="mt-16 text-[#E0E0E0] text-opacity-60 text-sm sm:text-base">
              <p className="mb-2">Available for:</p>
              <p>Full-Stack Development | Hardware Projects | VLSI Design | System Architecture</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="breathing-gradient border border-[#00FF99] border-opacity-30 p-6 sm:p-8">
              <p className="text-[#E0E0E0] text-opacity-70 text-sm sm:text-base leading-relaxed">
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
