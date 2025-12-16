import { motion } from "framer-motion"

export default function CVDisplay({ personalInfo, education, experience, onEdit }) {
  
  const formatDate = (dateString) => {
    if (!dateString) return "Present";
    const [year, month] = dateString.split("-");
    const date = new Date(year, month - 1);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  // Stagger children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2  // Each child animates 0.2s after previous
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      className="cv-document"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.header 
        className="cv-header"
        variants={itemVariants}
      >
        <h1>{personalInfo.name || "Your Name"}</h1>
        <div className="contact-info">
          <span>{personalInfo.email || "email@example.com"}</span>
          <span> | </span>
          <span>{personalInfo.phoneNum || "555-0000"}</span>
        </div>
      </motion.header>

      {/* Education */}
      <motion.section 
        className="cv-section"
        variants={itemVariants}
      >
        <h2 className="section-title">Education</h2>
        <div className="cv-entry">
          <div className="entry-header">
            <h3>{education.school || "School Name"}</h3>
            <span className="date-range">
              {formatDate(education.startDate)} - {formatDate(education.endDate)}
            </span>
          </div>
          <p className="degree">{education.degree || "Degree"}</p>
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section 
        className="cv-section"
        variants={itemVariants}
      >
        <h2 className="section-title">Experience</h2>
        <div className="cv-entry">
          <div className="entry-header">
            <h3>{experience.company || "Company Name"}</h3>
            <span className="date-range">
              {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
            </span>
          </div>
          <p className="job-title">{experience.position || "Position"}</p>
          <p className="responsibilities">
            {experience.responsibilities || "Responsibilities"}
          </p>
        </div>
      </motion.section>

      <motion.button 
        onClick={onEdit} 
        className="edit-cv-btn"
        variants={itemVariants}
        whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        Edit CV
      </motion.button>
    </motion.div>
  )
}