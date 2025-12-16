export default function PersonalInfo({name, email, phoneNum, setName, setEmail, setPhoneNum}){  

    const handleSubmit = (e)=>{
      e.preventDefault()
      console.log("Form Submitted", {name, email, phoneNum})
   
    }
    
    return (
    <form>
        <fieldset>
         <legend>Personal Information</legend>
           <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Name"
            required  // ← Add validation
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phoneNum}
            placeholder="Phone Number"
            required  // ← Add validation
            pattern="[0-9]{10}"  // ← Add validation
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Email ID"
            required  // ← Add validation
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Save Info</button>
        </fieldset>
    </form>
    )
}