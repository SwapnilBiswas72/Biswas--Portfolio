
export const portfolioData = {
  about: {
    description: "I am currently working as a research assistant at the CVIP Lab while pursuing a Master of Science in Electrical and Computer Engineering at Southern Illinois University Edwardsville. I hold a B.Sc. in Computer Science and Engineering from United International University. My work and research focus on Machine Learning, Computer Vision, Natural Language Processing, and Data Mining, with a particular interest in applying these technologies to solve real-world problems.",
    contact: "sbiswas@siue.edu",
    phone: "+1 (636) 517 7120",
    location: "Maryville, IL, USA",
    links: {
      linkedin: "https://www.linkedin.com/in/swapnil-biswas-6447b5218",
      scholar: "https://scholar.google.com/citations?user=-BgBK3kAAAAJ&hl=en&authuser=1",
      portfolio: "https://biswas-swapnil.vercel.app/",
      github: "https://github.com/SwapnilBiswas72",
      cv: "/cv/Biswas_Swapnil_Resume.pdf"
    }
  },
  research_interests: ["Deep Learning","Medical Image Analysis","Computer Vision","Image Processing"],
  education: [
    { period: "2024–Present", degree: "M.S. in Electrical and Computer Engineering", institution: "Southern Illinois University Edwardsville, USA", cgpa: "3.83/4.00 (Completed 18/33 credits)" },
    { period: "2019–2023", degree: "B.Sc. in Computer Science and Engineering", institution: "United International University, Dhaka, Bangladesh", cgpa: "3.88/4.00 (Top 2%)" },
    { period: "2016–2018", degree: "Higher Secondary Certificate", institution: "Dhaka City College, Dhaka, Bangladesh", cgpa: "5.00/5.00" }
  ],
  publications: [
    { title: "Advancing Skin Lesion Classification: The Role of SAM-Based Segmentation in Enhancing CNN Performance", authors: [{name:"S. Biswas"},{name:"S. M. M. Raza"},{name:"T. H. Nguyen"},{name:"R. W. LeAnder"},{name:"S. E. Umbaugh"}], subtitle: "Proc. SPIE 13605 (2025)", image: "/placeholder.svg", links: { paper: "https://doi.org/10.1117/12.3065735", code: "" } },
    { title: "LVM-Med-Based Thermographic Image Analysis for Canine Bone Cancer Detection", authors: [{name:"S. M. M. Raza"},{name:"S. Biswas"},{name:"R. W. LeAnder"},{name:"S. E. Umbaugh"}], subtitle: "Proc. SPIE 13605 (2025)", image: "/placeholder.svg", links: { paper: "https://doi.org/10.1117/12.3060176", code: "" } },
    { title: "Hybrid Image Enhancement for Thermographic Imaging in Canine Bone Cancer Detection", authors: [{name:"M. S. U. Hoque"},{name:"S. Biswas"},{name:"M. S. Sakib"},{name:"R. Leander"},{name:"S. E. Umbaugh"}], subtitle: "Thermosense XLVII, Proc. SPIE 13470 (2025)", image: "/placeholder.svg", links: { paper: "https://doi.org/10.1117/12.3053308", code: "" } },
    { title: "A Bidirectional Siamese RNN for Accurate Gait Recognition", authors: [{name:"Proma Hossain Progga"},{name:"Md Jobayer Rahman"},{name:"Swapnil Biswas"},{name:"Md. Shakil Ahmed"},{name:"Arif Reza Anwary"},{name:"Swakkhar Shatabda"}], subtitle: "Neurocomputing, 2024", image: "/placeholder.svg", links: { paper: "https://doi.org/10.1016/j.neucom.2024.128313", code: "" } },
    { title: "CropCare: Advanced Crop Management System with Intelligent Advisory and Machine Learning Techniques", authors: [{name:"Md. Jobayer Rahman"},{name:"Md. Shakil Ahmed"},{name:"Swapnil Biswas"},{name:"Anika Tabassum Orchi"},{name:"Raiyan Rahman"},{name:"A.K.M. Muzahidul Islam"}], subtitle: "IEEE ICEEICT, 2024", image: "/placeholder.svg", links: { paper: "https://doi.org/10.1109/ICEEICT62016.2024.10534582", code: "" } },
    { title: "K-Nearest Neighbour Classifier for Big Data Mining based on Informative Instances", authors: [{name:"Proma Hossain Progga"},{name:"Md Jobayer Rahman"},{name:"Swapnil Biswas"},{name:"Md. Shakil Ahmed"},{name:"Dewan Md Farid"}], subtitle: "IEEE I2CT, 2023", image: "/placeholder.svg", links: { paper: "https://doi.org/10.1109/I2CT57861.2023.10126147", code: "" } },
    { title: "Machine Learning for Load Forecasting in a Green Data Center", authors: [{name:"Md. Shakil Ahmed"},{name:"Swapnil Biswas"},{name:"Md Jobayer Rahman"},{name:"Md Habibur Rahaman Alhadi"},{name:"Rifat Ara Moon"},{name:"Md Motaharul Islam"}], subtitle: "IEEE, 2023", image: "/placeholder.svg", links: { paper: "https://doi.org/10.1109/STI59863.2023.10464816", code: "" } }
  ],
  under_review: [
    { title: "Data-Driven Approaches to Personalized Gamification: Recent Advances, Trends and Future Directions", journal: "IEEE Transactions on Human-Machine Systems" },
    { title: "Personality-Based Preference Prediction in the Metaverse: From Personality Traits to User Engagement", journal: "Knowledge and Information Systems (Springer)" }
  ],
  experience: [
    { position: "Graduate Research Assistant", institution: "CVIP Lab, Southern Illinois University Edwardsville", period: "Aug 2024 – Present", courses: ["Enhanced skin lesion segmentation using SAM and MedSAM models with transfer learning to improve diagnostic accuracy.","Mitigated class imbalance via a Conditional Variational Autoencoder (CVAE) to improve VGG-16 classification.","Modernized CVIP software stack by replacing ONCRPC with Flatbuffers for 32/64-bit compatibility.","Built a hybrid image enhancement pipeline for thermographic detection of canine bone cancer."] },
    { position: "Graduate Teaching Assistant", institution: "Southern Illinois University Edwardsville", period: "Summer 2025 – Present", courses: ["Assisted with undergraduate courses, grading assignments, and providing academic support to students."] },
    { position: "Research Engineer", institution: "Institute for Advanced Research, United International University", period: "Mar 2023 – Aug 2024", courses: ["Led a project submitted for government RIC funding—data-driven advisory for agriculture.","Collaborated with physicians to create and validate a CKD dataset for early risk identification.","Compared GNN vs. traditional ML for protein secondary structure prediction."] },
    { position: "Junior Software Developer", institution: "Amirus, Dhaka", period: "2023 – 2024", courses: ["Developed features, fixed bugs, and wrote unit tests within Agile sprints."] },
    { position: "Undergraduate Assistant & Grader", institution: "United International University, Dhaka", period: "2022 – 2023", courses: ["Graded assignments and assisted students with coursework and conceptual clarity."] }
  ],
  projects: [
    { title: "Protibaad", type: "Industry Project", description: "Crime alerts, missing person reports, and opinion surveys with a blog for community issues.", domain: ["PHP","MySQL","HTML","JavaScript","Bootstrap"] },
    { title: "Learn & Share", type: "Industry Project", description: "Tutorials, exam resources, discussion forum, note sharing, simulations, and expert online tutors.", domain: ["PHP","MySQL","HTML","JavaScript","Bootstrap"] },
    { title: "Online Food Ordering System", type: "Industry Project", description: "Ordering and delivery app with real-time order tracking and user-friendly interfaces.", domain: ["Java","JavaFX","Sockets","Multi-threading"] }
  ],
  honors: [
    { title: "Research Grants for Graduate Students (RGGS)", institution: "Southern Illinois University Edwardsville", year: "2025" },
    { title: "Competitive Graduate Award (CGA)", institution: "Southern Illinois University Edwardsville", year: "2024" },
    { title: "Research Grant", institution: "Institute for Advanced Research, United International University", year: "2023" },
    { title: "University Merit Scholarship", institution: "United International University", period: "2019–2023" },
    { title: "Magna Cum Laude", institution: "United International University", year: "2024" },
    { title: "Runner-Up", institution: "CSE Project Show, UIU", year: "May 2022" }
  ],
  extracurricular: [
    "President, Bangladesh Student Association (BSA), SIUE",
    "Medical Imaging Campaign Volunteer",
    "Computer Literacy Teacher for rural students",
    "Organized departmental academic tours",
    "Research data collection across universities"
  ],
  skills: {
    programming: ["Python", "Java", "C", "C++", "JavaScript"],
    web: ["HTML", "CSS", "PHP"],
    tools: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "MySQL", "LaTeX", "Google Colab"],
    soft: ["Communication", "Teamwork", "Problem Solving", "Leadership"]
  }
}
