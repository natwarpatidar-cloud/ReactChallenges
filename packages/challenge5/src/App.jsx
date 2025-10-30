import { useState } from "react"


function App() {

  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    age: '',
  });

  const [isData, setIsData] = useState(false);

  const [error, setError] = useState(null);

  function handleFormSubmit(e) {
    e.preventDefault();
    setError(null);
    if(!formData.username) {
      setError("Username is required");
      return;
    }
    if(!formData.fullname) {
      setError("Full name is required");
      return;
    }
    if(!formData.age) {
      setError("Age is required");
      return;
    }
    setIsData(true);
  }

  function resetForm() {
    setFormData({ 
      username: '', 
      fullname: '', 
      age: ''
    });
    setError(null);
    setIsData(false);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column',  width: '100%', justifyContent: 'center', marginTop: '30px' }}>
      <div style={{ width: '50%', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '20px 20px' }}>
        <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: "5px"}}>
          { error && (<p style={{ color: "red" }}>{error}</p> )}
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
          />
          <label htmlFor="fullName">Full name:</label>
          <input 
            type="text" 
            id="fullName"
            value={formData.fullname}
            onChange={(e) => setFormData({...formData, fullname: e.target.value})}  
          />
          <label htmlFor="age">Age:</label>
          <input 
            type="number"
            id="age" 
            value={formData.age} 
            onChange={(e) => setFormData({...formData, age: e.target.value})}  
          />

          <div style={{ marginTop: '10px' }}>
            <button type="submit" style={{ marginRight: '10px' }}>Submit</button>
            <button type="reset" onClick={resetForm}>Reset</button>
          </div>
        </form>
      </div>

      <div>
        {
          isData && (
            <>
              <h2>Request sent to DB with below request data</h2>
              <ul>
                <li>{formData?.username}</li>
                <li>{formData?.fullname}</li>
                <li>{formData?.age}</li>
              </ul>
            </>
          )
        }
      </div>
    </div>
  )
}

export default App
