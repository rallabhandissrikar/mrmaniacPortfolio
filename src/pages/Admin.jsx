import * as React from 'react';
import { supabase } from '../../utils/supabase';
import SectionDivider from '../components/SectionDivider';
import Modal from '../components/Modal';

export default function Admin() {

    const [loading, setLoading] = React.useState(true);
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [projects, setProjects] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [openModal, setOpenModal] = React.useState(false);
    const PAGE_SIZE = 10;
    const [metaData, setMetaData] = React.useState({});
    

    const clearFields = () => {
        document.getElementById("name").value = "";
        document.getElementById("stack").value = "";
        document.getElementById("description").value = "";
        document.getElementById("liveDemo").value = "";
        document.getElementById("github").value = "";
    };

    const fetchData = async () => {
        const { data, error } = await supabase
            .from('Projects')
            .select('*');
        if (error) {
            //console.error('Error fetching data:', error);
        } else {
            setProjects(data);
            //console.log(data);
        }
    };
    const checkUser = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            setLoggedIn(true);
            setEmail(user.email);
            setPassword(user.password);
            setLoading(false);
        } else {
            setLoggedIn(false);
            setLoading(false);
        }
    };

    const handleDelete = async (project) => {
        const { data, error } = await supabase
            .from('Projects')
            .delete()
            .eq('sno', project.sno);
        if (error) {
            alert("Error deleting project: " + error.message);
            //console.error("Error deleting project:", error);
        } else {
            //console.log("Project deleted successfully:", data);
            alert("Project deleted successfully!");
            await fetchData();
        }
    };

    const handleEdit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const dt = Object.fromEntries(formData.entries());
        
        const { data, error } = await supabase
            .from('Projects')
            .update(dt)
            .eq('sno', metaData.sno);
        if (error) {
            alert("Error editing project: " + error.message);
            //console.error("Error editing project:", error);
            fetchData();
            setMetaData({});
            setOpenModal(false);
        } else {
            //console.log("Project edited successfully:", data);
            alert("Project edited successfully!");
            fetchData();
            setMetaData({});
            setOpenModal(false);
        }
    }

    React.useEffect(() => {
        fetchData();
        checkUser();
    }, []);
    if (loading) {
        return <div className="min-h-screen bg-black text-[#E0E0E0] flex items-center justify-center">Loading...</div>;
    } else if (loggedIn) {
        return (
            <>

                <div className="min-h-screen bg-black text-[#E0E0E0]">
                    <div className="container mx-auto px-4 sm:px-6 py-20 pt-32">
                        <h1 className="text-4xl sm:text-5xl font-bold text-[#00FF99] mb-3 neon-glow">
                            Edit Projects
                        </h1>
                    </div>
                    <section className="mb-20 container mx-auto px-4 sm:px-6">
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
                                                        <div className="breathing-gradient border border-[#00FF99] border-opacity-30 p-6 sm:p-8 space-y-4">
                                                            <h2 className="text-2xl font-bold text-[#00FF99]">{project.name}</h2>
                                                            <p className="text-sm text-[#00FF99] text-opacity-70">Stack: {project.tools}</p>
                                                            <p className="text-[#E0E0E0] leading-relaxed">{project.desc}</p>
                                                            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                                                                {project.l_d && (
                                                                    <a
                                                                        target="_blank" rel="noopener noreferrer"
                                                                        href={project.l_d}
                                                                        className="px-6 py-2 border border-[#00FF99] text-[#00FF99] neon-glow-hover transition-all text-center"
                                                                    >
                                                                        [LIVE DEMO]
                                                                    </a>
                                                                )}
                                                                <a
                                                                    target="_blank" rel="noopener noreferrer"
                                                                    href={project.github}
                                                                    className="px-6 py-2 border border-[#00FF99] text-[#00FF99] neon-glow-hover transition-all text-center"
                                                                >
                                                                    [GITHUB]
                                                                </a>
                                                                <button
                                                                    className="px-6 py-2 border border-[#00FF99] text-[#00FF99] neon-glow-hover transition-all"
                                                                    onClick={() => {
                                                                        setOpenModal(true);
                                                                        setMetaData(project);
                                                                    }}
                                                                >
                                                                    [EDIT]
                                                                </button>
                                                                <button
                                                                    className="px-6 py-2 border border-[#ff0000] text-[#800303] neon-glow-hover-alert transition-all"
                                                                    onClick={async () => {
                                                                        const confirmation = window.confirm("Are you sure you want to delete this project?");
                                                                        if (confirmation) {
                                                                            await handleDelete(project);
                                                                        }
                                                                    }}
                                                                >
                                                                    [DELETE]
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                );
                                            })}

                                            <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
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
                    </section>

                    <SectionDivider />

                    <div className="container mx-auto px-4 sm:px-6 py-20 pt-20">
                        <h1 className="text-4xl sm:text-5xl font-bold text-[#00FF99] mb-3 neon-glow">
                            Add New Projects
                        </h1>
                    </div>

                    <section className="mb-20 container mx-auto px-4 sm:px-6">
                        <div className="max-w-3xl mx-auto">
                            <form className="space-y-6 breathing-gradient border border-[#00FF99] border-opacity-30 p-6 sm:p-8 rounded-lg">
                                <div>
                                    <label className="block text-sm font-medium text-[#00FF99] mb-1" htmlFor="name">Project Name</label>
                                    <input className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" type="text" id="name" name="name" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#00FF99] mb-1" htmlFor="name">Stack</label>
                                    <input className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" type="text" id="stack" name="stack" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#00FF99] mb-1" htmlFor="name">Description</label>
                                    <input className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" type="text" id="description" name="description" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#00FF99] mb-1" htmlFor="name">Live Demo Link</label>
                                    <input className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" type="url" id="liveDemo" name="liveDemo" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#00FF99] mb-1" htmlFor="name">GitHub Link</label>
                                    <input className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" type="url" id="github" name="github" required />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="flex-1 bg-[#00FF99] text-black px-6 py-2 rounded hover:bg-[#00cc7a]" type="submit"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const name = document.getElementById("name").value;
                                            const stack = document.getElementById("stack").value;
                                            const description = document.getElementById("description").value;
                                            const liveDemo = document.getElementById("liveDemo").value;
                                            const github = document.getElementById("github").value;
                                            if (!name && !stack && !description && !github) {
                                                alert("Please fill in all required fields.");
                                            } else {
                                                supabase.from('Projects').insert([
                                                    { name: name, tools: stack, desc: description, l_d: liveDemo, github: github }
                                                ]).then(({ data, error }) => {
                                                    if (error) {
                                                        alert("Error adding project: " + error.message);
                                                        //console.error("Error adding project:", error);

                                                    } else {
                                                        //console.log("Project added successfully:", data);
                                                        alert("Project added successfully!");
                                                        clearFields();
                                                        fetchData();
                                                    }
                                                });
                                            }

                                        }}
                                    >
                                        Add Project
                                    </button>
                                    <button className="flex-1 bg-[#00FF99] text-black px-6 py-2 rounded hover:bg-[#00cc7a]" type="button" onClick={() => clearFields()}>
                                        Clear
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>



                    <Modal isOpen={openModal} setIsOpen={setOpenModal} title="Project Details">
                        <form className="text-gray-800 space-y-6 breathing-gradient border border-[#00FF99] w-full max-w-2xl mx-auto border-opacity-30 p-6 sm:p-8 rounded-lg"
                        onSubmit={handleEdit}
                        >
                                <div>
                                    <label className="block text-white text-sm font-medium mb-1" htmlFor="name">Project Name</label>
                                    <input defaultValue={metaData.name || ''}  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" type="text" id="name" name="name" required disabled />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-1" htmlFor="tools">Stack</label>
                                    <input defaultValue={metaData.tools} className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" type="text" id="stack" name="tools" required />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-1" htmlFor="desc">Description</label>
                                    <input defaultValue={metaData.desc} className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" type="text" id="description" name="desc" required />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-1" htmlFor="l_d">Live Demo Link</label>
                                    <input defaultValue={metaData.l_d} className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" type="url" id="liveDemo" name="l_d" />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-1" htmlFor="github">GitHub Link</label>
                                    <input defaultValue={metaData.github} className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" type="url" id="github" name="github" required />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="flex-1 bg-[#00FF99] text-black px-6 py-2 rounded hover:bg-[#00cc7a]" type="submit">
                                        Edit Project
                                    </button>
                                    <button className="flex-1 bg-[#00FF99] text-black px-6 py-2 rounded hover:bg-[#00cc7a]" type="button" onClick={() => clearFields()}>
                                        Clear
                                    </button>
                                </div>
                            </form>
                    </Modal>
                </div>

            </>
        );
    } else {
        return (
            <div className="min-h-screen bg-black text-[#E0E0E0]">
                <div className="container mx-auto px-4 sm:px-6 py-20">
                    <section className="min-h-screen flex flex-col justify-center items-center text-center space-y-4">
                        <h1 className="text-4xl sm:text-5xl font-bold text-[#00FF99] neon-glow">
                            Admin Login
                        </h1>
                        <div className="w-full max-w-sm space-y-4">
                            <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className="w-full bg-[#00FF99] text-black px-6 py-2 rounded hover:bg-[#00cc7a]" onClick={async () => {
                                setLoading(true);
                                supabase.auth.signInWithPassword({
                                    email: email,
                                    password: password
                                }).then(({ user, error }) => {
                                    if (error) {
                                        //console.error('Error logging in:', error);
                                        alert('Login failed: ' + error.message);
                                    } else {
                                        setLoggedIn(true);
                                    }
                                    setLoading(false);
                                });
                            }} >
                                Login
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
