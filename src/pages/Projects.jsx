import SectionDivider from '../components/SectionDivider';
import * as React from 'react';
import { supabase } from '../../utils/supabase';

export default function Projects() {
  const [projects, setProjects] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const PAGE_SIZE = 10;
  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('Projects') // replace with your table name
      .select('*');
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setProjects(data);
      //console.log(data);
    }
  }

  React.useEffect(() => {
    fetchProjects();
  }, []);
  

  return (
    <div className="min-h-screen bg-black text-[#E0E0E0]">
      <div className="container mx-auto px-6 py-32">
        <h1 className="text-5xl font-bold text-[#00FF99] mb-8 text-center neon-glow">
          MORE PROJECTS
        </h1>

        <div className="text-center mb-12 text-[#E0E0E0] text-opacity-70">
          A collection of systems I've engineered across hardware, software, and everything in between.
        </div>

        <SectionDivider />

        <div className="space-y-8">
          {projects.length === 0 ? (
            <div className="text-center text-[#E0E0E0]">No projects found.</div>
          ) : (
            (() => {
              const totalPages = Math.ceil(projects.length / PAGE_SIZE);
              const start = (currentPage - 1) * PAGE_SIZE;
              const end = start + PAGE_SIZE;
              const pageItems = projects.slice(start, end);

              return (
                <>
                  {pageItems.map((project, idx) => {
                    const index = start + idx;
                    return (
                      <div key={index}>
                        <div className="breathing-gradient border border-[#00FF99] border-opacity-30 p-8">
                          <h2 className="text-2xl font-bold text-[#00FF99] mb-3">{project.name}</h2>
                          <p className="text-sm text-[#00FF99] text-opacity-70 mb-4">Stack: {project.tools}</p>
                          <p className="text-[#E0E0E0] mb-6 leading-relaxed">{project.desc}</p>
                          <div className="flex gap-4">
                            {project.l_d && (
                              <a
                                target="_blank" rel="noopener noreferrer"
                                href={project.l_d}
                                className="px-6 py-2 border border-[#00FF99] text-[#00FF99] neon-glow-hover transition-all"
                              >
                                [LIVE DEMO]
                              </a>
                            )}
                            <a
                              target="_blank" rel="noopener noreferrer"
                              href={project.github}
                              className="px-6 py-2 border border-[#00FF99] text-[#00FF99] neon-glow-hover transition-all"
                            >
                              [GITHUB]
                            </a>
                          </div>
                        </div>
                        {index < projects.length - 1 && (
                          <div className="text-[#00FF99] text-opacity-20 text-xs my-6">
                            ------------------------------------------
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Pagination controls */}
                  <div className="flex justify-center items-center gap-3 mt-8">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className={`px-3 py-1 border rounded ${currentPage === 1 ? 'opacity-40 cursor-not-allowed' : ''}`}
                    >
                      Prev
                    </button>

                    {Array.from({ length: totalPages }).map((_, i) => {
                      const pageNum = i + 1;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-3 py-1 border rounded ${currentPage === pageNum ? 'bg-[#00FF99] text-black' : ''}`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}

                    <button
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === Math.ceil(projects.length / PAGE_SIZE)}
                      className={`px-3 py-1 border rounded ${currentPage === Math.ceil(projects.length / PAGE_SIZE) ? 'opacity-40 cursor-not-allowed' : ''}`}
                    >
                      Next
                    </button>
                  </div>
                </>
              );
            })()
          )}
        </div>
      </div>
    </div>
  );
}
