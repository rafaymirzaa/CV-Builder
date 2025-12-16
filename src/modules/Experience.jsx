export function Experience({ company, position, responsibilities, startDate, endDate, setCompany, setPosition, setResponsibilities, setStartDate, setEndDate }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Experience Submitted", { company, position, responsibilities, startDate, endDate });
    
  };

  return (
    <form>
      <fieldset>
        <legend>Practical Experience</legend>

        <div className="form-group">
          <label htmlFor="company">Company Name</label>
          <input
            type="text"
            id="company"
            value={company}
            placeholder="e.g., Google Inc."
            required
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="position">Position Title</label>
          <input
            type="text"
            id="position"
            value={position}
            placeholder="e.g., Software Engineer"
            required
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="responsibilities">Main Responsibilities</label>
          <textarea
            id="responsibilities"
            value={responsibilities}
            placeholder="Describe your main job responsibilities..."
            rows="4"
            required
            onChange={(e) => setResponsibilities(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exp-startDate">Start Date</label>
          <input
            type="month"
            id="exp-startDate"
            value={startDate}
            required
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exp-endDate">End Date</label>
          <input
            type="month"
            id="exp-endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={!endDate}
              onChange={(e) => setEndDate(e.target.checked ? "" : new Date().toISOString().slice(0, 7))}
            />
            Currently working here
          </label>
        </div>

        <button type="submit">Save Experience</button>
      </fieldset>
    </form>
  );
}
