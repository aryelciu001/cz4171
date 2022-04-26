import { useRef, useState } from "react";
import axios from "axios";
import "./App.css";

const URL = "http://localhost:3001";

function App() {
  const upload = () => {
    if (!ref) return;
    const formData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    formData.append("picture", ref.current.files[0]);
    setLoading(true);
    axios.post(URL, formData, config).then((res) => {
      setText(res.data);
      setLoading(false);
    });
  };

  const ref = useRef(null);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <h1 className="row">CZ4171</h1>
      <div className="row">Upload an image to read what the image says</div>
      <input
        onChange={() => setName(ref.current.files[0].name)}
        id="picture"
        ref={ref}
        type="file"
        accept="image/*"
        hidden
      ></input>
      {name ? <div className="row">{name}</div> : null}
      <div className="buttons">
        <label htmlFor="picture" className="row">
          Upload File
        </label>
        <button onClick={() => upload()} className="row">
          Read File
        </button>
      </div>
      {loading ? <div className="row">reading text...</div> : null}
      {text ? (
        <div className="row text">
          <span>Result</span>
          <hr></hr>
          {text}
        </div>
      ) : null}
    </div>
  );
}

export default App;
