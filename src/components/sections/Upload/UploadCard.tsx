import {useState, useEffect} from 'react'
import { AiOutlineUpload } from 'react-icons/ai';
import "../Upload/Upload.css"
import {PiTrashSimpleFill} from 'react-icons/pi';
import axios from "axios";


// interface IUploadCard{
//   imgUrl: string | null;
// }


const UploadCard = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // const [showImage, setShowImage] = useState<boolean>(true);
  // const [showDefaultImg, setShowDefaultImg] = useState<boolean>(false);

  // const uploadTransition = `${showImage ? 'color' : 'red'} ${showDefaultImg ? 'color' : 'blue'}`;
  useEffect(() => {
    const data:any = getData();
    console.log(data)
  }, [])
  const getData = async() => {
    try{
      const config = {
        headers: {
          'Content-Type': 'application/json', 
          'Accept': '*/*'

        },
      };
      const response = await axios.get('http://127.0.0.1:4010/api/166.705347729385/programs/nesciunt/application-form', config);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error creating post:', error);
      }
    };
  

  const handleDeleteFile = ()=>{
    if(selectedImage){
      setSelectedImage(null)
    }
  }
  const handleImageChange  = (e: any ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className='card'>
      <div className='title'>Upload Cover Image</div>
      <div className='cardBody'>
      <div className='upload' >
        <div className='uploadedImg'>
           {selectedImage && <img src={selectedImage} width="50%"  alt="Preview Image" />}
        </div>
        <AiOutlineUpload/>
        <input type="file"
        accept="image/*"
        onChange={handleImageChange}
         />
        <p>Upload cover Image</p>
        <p>16:9 ratio is recommended. Max image size 1mb</p>
      </div>
      <button className="deleteFile" onClick={handleDeleteFile} disabled={selectedImage === null}><PiTrashSimpleFill/> Delete</button>
      </div>
    </div>
    </div>
  )
}

export default UploadCard
