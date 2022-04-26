import { useRef, useState } from "react";
import axios from "axios";
import "./App.css";

const URL = "http://localhost:3001";

function App() {
  const upload = () => {
    const formData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    formData.append("picture", ref.current.files[0]);
    axios.post(URL, formData, config).then((res) => setText(res.data));
  };

  const ref = useRef(null);
  const [text, setText] = useState("");

  return (
    <div className="App">
      <input ref={ref} type="file" accept="image/*"></input>
      <button onClick={() => upload()}>Upload</button>
      <div className="text">{text}</div>
    </div>
  );
}

export default App;
