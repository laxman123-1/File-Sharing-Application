import{ useRef ,useState,useEffect} from "react";
import './App.css';
import {uploadFile} from './services/api';
function App() {

  const [file,setfile]=useState('');
  const [result, setResult] = useState('');

  const fileInputRef=useRef();

  const logo="https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  useEffect(()=>{
    const getImage=async()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response=await uploadFile(data);
        setResult(response.path);
        
      }
    }

    getImage();

  },[file])
  const onUploadClick=()=>{

    fileInputRef.current.click();
  }
  console.log(file);
  return(
   <div className='container'>
      <img src={logo} alt="banner" />
      <div className='wrapper'>
        <h1>Simple File Sharing</h1>
        <p>Upload And Share The Download Link</p>
        <button onClick={()=>onUploadClick()}>Upload</button>
        <input type="file"
          ref={fileInputRef}
          style={{display:'none'}}
          onChange={(e)=>{setfile(e.target.files[0])}}

        />
        <a href={result} target='blank'>{result}</a> 
      </div>
   </div>
  );
}

export default App;
