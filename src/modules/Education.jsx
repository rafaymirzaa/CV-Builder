import { motion } from "framer-motion"

export function Education({ school, degree, startDate, endDate, setSchool, setDegree, setStartDate, setEndDate }) {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2  // Starts after PersonalInfo
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.fieldset
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="form-section"
    >
      <motion.legend
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        Educational Experience
      </motion.legend>

      <motion.div 
        className="form-group"
        variants={itemVariants}
      >
        <label htmlFor="school">School Name</label>
        <motion.input
          type="text"
          id="school"
          value={school}
          placeholder="e.g., University of California"
          required
          onChange={(e) => setSchool(e.target.value)}
          whileFocus={{ 
            scale: 1.02, 
            boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.3)",
            transition: { duration: 0.2 }
          }}
        />
      </motion.div>

      <motion.div 
        className="form-group"
        variants={itemVariants}
      >
        <label htmlFor="degree">Title of Study</label>
        <motion.input
          type="text"
          id="degree"
          value={degree}
          placeholder="e.g., Bachelor of Computer Science"
          required
          onChange={(e) => setDegree(e.target.value)}
          whileFocus={{ 
            scale: 1.02, 
            boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.3)",
            transition: { duration: 0.2 }
          }}
        />
      </motion.div>

      <motion.div 
        className="form-row"
        variants={itemVariants}
      >
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <motion.input
            type="month"
            id="startDate"
            value={startDate}
            required
            onChange={(e) => setStartDate(e.target.value)}
            whileFocus={{ 
              scale: 1.02, 
              boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.3)",
              transition: { duration: 0.2 }
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <motion.input
            type="month"
            id="endDate"
            value={endDate}
            required
            onChange={(e) => setEndDate(e.target.value)}
            whileFocus={{ 
              scale: 1.02, 
              boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.3)",
              transition: { duration: 0.2 }
            }}
          />
        </div>
      </motion.div>
    </motion.fieldset>
  )
}