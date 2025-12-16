export default function CVDisplay({ personalInfo, education, experience, onEdit }) {
  
  const formatDate = (dateString) => {
    if (!dateString) return "Present";
    const [year, month] = dateString.split("-");
    const date = new Date(year, month - 1);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <div className="cv-document">
      
      <header className="cv-header">
        <h1>{personalInfo.name || "Your Name"}</h1>
        <div className="contact-info">
          <span>{personalInfo.email || "email@example.com"}</span>
          <span> | </span>
          <span>{personalInfo.phoneNum || "555-0000"}</span>
        </div>
      </header>

      <section className="cv-section">
        <h2 className="section-title">Education</h2>
        <div className="cv-entry">
          <div className="entry-header">
            <h3>{education.school || "School Name"}</h3>
            <span className="date-range">
              {formatDate(education.startDate)} - {formatDate(education.endDate)}
            </span>
          </div>
          <p className="degree">{education.degree || "Degree/Title of Study"}</p>
        </div>
      </section>

      <section className="cv-section">
        <h2 className="section-title">Experience</h2>
        <div className="cv-entry">
          <div className="entry-header">
            <h3>{experience.company || "Company Name"}</h3>
            <span className="date-range">
              {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
            </span>
          </div>
          <p className="job-title">{experience.position || "Position Title"}</p>
          <p className="responsibilities">
            {experience.responsibilities || "Main responsibilities"}
          </p>
        </div>
      </section>

      <button onClick={onEdit} className="edit-cv-btn">
        Edit CV
      </button>
    </div>
  );
}