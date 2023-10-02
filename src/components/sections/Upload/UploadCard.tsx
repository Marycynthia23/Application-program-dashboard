import {useState} from 'react'
import CardSkeleton from '../../molecules/card/card';
import { AiOutlineUpload } from 'react-icons/ai';
import "../Upload/Upload.css"
import {PiTrashSimpleFill} from 'react-icons/pi';

const UploadCard = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
  // const beforeUpload = (file: RcFile) => {
  //   const isJpgOrPng:boolean = file.type === 'image/jpeg' || file.type === 'image/png';
  //   if (!isJpgOrPng) {
  //     message.error('You can only upload JPG/PNG file!');
  //   }
  //   const isLt2M = file.size / 1024 / 1024 < 2;
  //   if (!isLt2M) {
  //     message.error('Image must smaller than 2MB!');
  //   }
  //   return isJpgOrPng && isLt2M;
  // };

  // const uploadButton = (
  //   <div>
  //     {loading ? <LoadingOutlined /> : <UploadOutlined />}
  //     <div style={{ marginTop: 8 }}>Upload</div>
  //   </div>
  // );
  return (
    <div>
    <CardSkeleton cardTitle='Upload Cover Image'>
      <div className='upload'>
        <div className='uploadedImg'>
           {selectedImage && <img src={selectedImage} width="40%"  alt="Preview Image" />}
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
    </CardSkeleton>
    </div>
  )
}

export default UploadCard
