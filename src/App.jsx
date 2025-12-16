import { useState } from 'react'
import PersonalInfo from './modules/Personal'
import { Education } from './modules/Education'
import { Experience } from './modules/Experience'
import CVDisplay from './modules/CVDisplay'

function App() {
  // Personal Info State
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNum, setPhoneNum] = useState("")

  // Education State
  const [school, setSchool] = useState("")
  const [degree, setDegree] = useState("")
  const [eduStartDate, setEduStartDate] = useState("")
  const [eduEndDate, setEduEndDate] = useState("")

  // Experience State
  const [company, setCompany] = useState("")
  const [position, setPosition] = useState("")
  const [responsibilities, setResponsibilities] = useState("")
  const [expStartDate, setExpStartDate] = useState("")
  const [expEndDate, setExpEndDate] = useState("")

  // One editing state for everything
  const [isEditing, setIsEditing] = useState(true)

  const handleGenerateCV = (e) => {
    e.preventDefault()
    setIsEditing(false)  
  }

  return (
    <div className="cv-builder">
      <h1>CV Builder</h1>
      
      {isEditing ? (
        // EDIT MODE - Show all forms
        <form onSubmit={handleGenerateCV} className="cv-forms">
          <PersonalInfo
            name={name}
            email={email}
            phoneNum={phoneNum}
            setName={setName}
            setEmail={setEmail}
            setPhoneNum={setPhoneNum}
          />

          <Education
            school={school}
            degree={degree}
            startDate={eduStartDate}
            endDate={eduEndDate}
            setSchool={setSchool}
            setDegree={setDegree}
            setStartDate={setEduStartDate}
            setEndDate={setEduEndDate}
          />

          <Experience
            company={company}
            position={position}
            responsibilities={responsibilities}
            startDate={expStartDate}
            endDate={expEndDate}
            setCompany={setCompany}
            setPosition={setPosition}
            setResponsibilities={setResponsibilities}
            setStartDate={setExpStartDate}
            setEndDate={setExpEndDate}
          />

          <button type="submit" className="generate-btn">
            Generate CV Preview
          </button>
        </form>
      ) : (
        // Dispaly
        <CVDisplay
          personalInfo={{ name, email, phoneNum }}
          education={{ school, degree, startDate: eduStartDate, endDate: eduEndDate }}
          experience={{ company, position, responsibilities, startDate: expStartDate, endDate: expEndDate }}
          onEdit={() => setIsEditing(true)}
        />
      )}
    </div>
  )
}

export default App
