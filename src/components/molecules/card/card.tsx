import React, {useState} from 'react'
import { ImPlus } from 'react-icons/im';
import { GrFormAdd } from 'react-icons/gr';
import "../card/card.css"
import VideoOption from '../VideoOption/VideoOption';


interface ICard {
    children: React.ReactNode
    cardTitle: string;
}
const CardSkeleton = ({
    children, cardTitle}:ICard) => {
      const [showOptions, setShowOptions] = useState(false);
      const [selectedOption, setSelectedOption] = useState("")
      const [inputValues, setInputValues] = useState(['']); // Initialize with one input field

      const addInputField = () => {
        if(inputValues[inputValues.length - 1] === ""){
          alert('can no ada blbal')
        return
        }
        setInputValues([...inputValues, '']);
        
      };
    

      const handleSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        
        // Log the selected value to the console
        console.log('Selected option:', selectedValue);
      };

      const handleInputChange = (index:any, value:any) => {
        const updatedValues = [...inputValues];
        updatedValues[index] = value;
        setInputValues(updatedValues);
      };

      let content;
      if(selectedOption === 'paragraph'){
        content = <p> paragraph works</p>

      }else if(selectedOption === 'video'){
        content = <VideoOption/>
      }
      else if (selectedOption === 'multiChoice'){
        content = 
        <div>
        {inputValues.map((value, index) => (
          <div key={index} className='inputMax'>
          <input
            type="text"
            className="inputMax"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        </div>))}
        <button onClick={addInputField}><GrFormAdd/></button>
        <div>
            <button className='Delete'>Delete</button>
            <button className='save' onClick={()=>console.log(inputValues)}> Save</button>

          </div>
      </div>
     }else{
      content = null
     }
      
     
    

  return (
    <div className='card'>
      <div className='title'>{cardTitle}</div>
              <div className='cardBody'>
                  {children}
                  {content}
                <div className='addQuestionBtn' onClick={()=> setShowOptions(true)}>
                <ImPlus />
                <div>Add a question</div>
              </div>
       </div>
       {
        showOptions && (
          <div className='options'>
        <select value={selectedOption} onChange={handleSelectChange} className='inputQues'>
          <option></option>
          <option value="paragraph">Paraphrase</option>
          <option value="multiChoice">Multi Choice</option>
          <option value="video">Video</option>
          <option value="fileupload">File upload</option>
          </select>
          <div className='Question'>
            <label>Question</label>
            <input type="text" className='inputQues' placeholder='type here'/>
          </div>
          
       </div>
        )

       }
       
       {/* options*/}
       
    </div>
  )
}

export default CardSkeleton