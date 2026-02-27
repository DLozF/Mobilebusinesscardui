import { Phone, Mail, FileText, Github, Linkedin } from 'lucide-react';

export function BusinessCard() {
  const skills = ['C++', 'Web Dev', 'Linux', 'Python', 'React', 'Data Structures'];

  const handleResumeClick = () => {
    // This would link to the actual PDF in a real implementation
    console.log('Opening resume PDF...');
  };

  const handleGitHubClick = () => {
    // This would link to the GitHub profile
    console.log('Opening GitHub profile...');
  };

  const handleLinkedInClick = () => {
    // This would link to the LinkedIn profile
    console.log('Opening LinkedIn profile...');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden" style={{ backgroundColor: '#121212' }}>
      {/* Subtle Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Neon Blue Glow */}
      <div 
        className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0) 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Card Container */}
      <div className="relative w-full max-w-md">
        {/* Top Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
            Diego Lozano Flores
          </h1>
          <p className="text-lg text-gray-300 mb-1.5">
            Computer Science Student
          </p>
          <p className="text-sm text-gray-500">
            University of Texas Rio Grande Valley • Class of 2028
          </p>
        </div>

        {/* Contact Row */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center">
          <a 
            href="tel:956-445-3604"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-gray-300 hover:text-white hover:bg-white/[0.08] transition-all"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="text-sm font-medium">956-445-3604</span>
          </a>
          <a 
            href="mailto:diegolozano628@gmail.com"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-gray-300 hover:text-white hover:bg-white/[0.08] transition-all"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="text-sm font-medium">diegolozano628@gmail.com</span>
          </a>
        </div>

        {/* Middle Section - Buttons */}
        <div className="flex flex-col gap-4 mb-10">
          {/* Primary CTA - Resume */}
          <button
            onClick={handleResumeClick}
            className="relative w-full py-4 px-6 rounded-2xl bg-blue-600 text-white font-semibold text-base flex items-center justify-center gap-3 transition-all hover:bg-blue-500 active:scale-[0.98] overflow-hidden group"
            style={{
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), 0 4px 16px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <FileText className="w-5 h-5 relative z-10" />
            <span className="relative z-10">View Resume (PDF)</span>
          </button>

          {/* Glassmorphism Button - GitHub */}
          <button
            onClick={handleGitHubClick}
            className="relative w-full py-4 px-6 rounded-2xl font-semibold text-base flex items-center justify-center gap-3 transition-all hover:bg-white/[0.03] active:scale-[0.98] overflow-hidden group"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.015)',
              backdropFilter: 'blur(16px)',
              boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -1px 1px rgba(255, 255, 255, 0.05), 0 1px 3px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#e5e7eb',
            }}
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </button>

          {/* Glassmorphism Button - LinkedIn */}
          <button
            onClick={handleLinkedInClick}
            className="relative w-full py-4 px-6 rounded-2xl font-semibold text-base flex items-center justify-center gap-3 transition-all hover:bg-white/[0.03] active:scale-[0.98] overflow-hidden group"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.015)',
              backdropFilter: 'blur(16px)',
              boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -1px 1px rgba(255, 255, 255, 0.05), 0 1px 3px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#e5e7eb',
            }}
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </button>
        </div>

        {/* Bottom Section - Skills */}
        <div>
          <p className="text-xs font-semibold tracking-widest text-gray-500 mb-4 text-center">TECHNICAL SKILLS</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-xs font-medium transition-all"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#d1d5db',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}