export function Education({ school, degree, startDate, endDate, setSchool, setDegree, setStartDate, setEndDate }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Education Submitted", { school, degree, startDate, endDate });
 
  };

  return (
    <form>
      <fieldset>
        <legend>Educational Experience</legend>

        <div className="form-group">
          <label htmlFor="school">School Name</label>
          <input
            type="text"
            id="school"
            value={school}
            placeholder="e.g., University of California"
            required
            onChange={(e) => setSchool(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="degree">Title of Study</label>
          <input
            type="text"
            id="degree"
            value={degree}
            placeholder="e.g., Bachelor of Computer Science"
            required
            onChange={(e) => setDegree(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="month"
            id="startDate"
            value={startDate}
            required
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="month"
            id="endDate"
            value={endDate}
            required
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <button type="submit">Save Education</button>
      </fieldset>
    </form>
  );
}
