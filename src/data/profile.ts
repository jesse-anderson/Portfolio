export const profile = {
  name: 'Jesse Anderson',
  role: 'Data Systems & Automation Engineer',
  bio: "Chemical engineer turned computer scientist. BS ChemE at UIC, MCS at UIUC, with six peer-reviewed papers in microscopy image analysis along the way. I build automation-heavy data systems: pipelines, dashboards, IoT sensor networks, and the scripting that ties workflows together.",
  metaDescription:
    'Portfolio of Jesse Anderson, a data systems and automation engineer. Embedded IoT, ETL pipelines, and full-stack work, with six peer-reviewed publications in microscopy image analysis.',
  email: 'jesse@jesse-anderson.net',
  homepage: 'https://jesse-anderson.net',
  blog: 'https://blog.jesse-anderson.net',
  tools: 'https://tools.jesse-anderson.net',
  github: 'https://github.com/jesse-anderson',
  linkedin: 'https://www.linkedin.com/in/jesse-anderson-a7c5/',
  orcid: 'https://orcid.org/0000-0001-5731-5511',
  resume: '/files/resume.pdf',
  cv: '/files/CV.pdf',
  highlights: [
    { value: '3000+', label: 'labor-hours automated across roles' },
    { value: '6', label: 'peer-reviewed publications' },
    { value: 'Rust -> Wasm', label: 'systems that run in the browser' },
  ],
  certifications: [
    {
      name: 'Data Structures & Algorithms Specialization',
      issuer: 'UC San Diego',
      url: 'https://coursera.org/verify/specialization/RPQ9G4ELF5UM',
    },
    {
      name: 'Fundamentals of Accelerated Computing with CUDA C/C++',
      issuer: 'NVIDIA',
      url: 'https://learn.nvidia.com/certificates?id=yfRfq3QyS2Goy4x_wvhpnw',
    },
    {
      name: 'Google Data Analytics Certificate',
      issuer: 'Google',
      url: 'https://coursera.org/share/933c75658043a804a5c0318aacd0acd7',
    },
    {
      name: 'Google Project Management Certificate',
      issuer: 'Google',
      url: 'https://coursera.org/verify/professional-cert/FFBK533V7BPL',
    },
    {
      name: 'Lean Six Sigma Yellow Belt',
      issuer: 'UL Solutions',
      url: null,
    },
  ],
  alumniOf: [
    { name: 'University of Illinois Urbana-Champaign', sameAs: 'https://illinois.edu' },
    { name: 'University of Illinois Chicago', sameAs: 'https://uic.edu' },
  ],
} as const;

export type Profile = typeof profile;
