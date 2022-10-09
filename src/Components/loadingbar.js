import {useState} from "react"
 
function App() {
    const [file, setFile] = useState("");
 
    // Handles input change event and updates state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
 
    return (
        <div>
            <input type="file" accept="image/*" onChange={handleChange}/>
            <button>Upload to Firebase</button>
        </div>
    );
}
 
export default App;