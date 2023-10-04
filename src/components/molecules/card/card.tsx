import React, { useState, useEffect } from 'react'
import { ImPlus } from 'react-icons/im';
import { SlPencil } from 'react-icons/sl';
import { BiListUl } from 'react-icons/bi';
import "../card/card.css"
import VideoOption from '../VideoOption/VideoOption';


interface ICard {
  children: React.ReactNode
  cardTitle: string;
}
const CardSkeleton = ({
  children, cardTitle }: ICard) => {
  let index = 1
  const [showOptions, setShowOptions] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showMultipleOptionsDiv, setShowMultipleOptionsDiv] = useState(false);
  const [selectedOption, setSelectedOption] = useState("")

  const [inputValues, setInputValues] = useState<any>(['']);
  const [questionText, setQuestionText] = useState<any>('');
  const [question, setQuestion] = useState<any>(null);
  const [questions, setQuestions] = useState<any>([]);

  // useEffect(() => {
  //   const data:any = getData();
  //     console.log(data)
      
  // }, [])
  
  
  //   const getData = async() => {
  //     try{
  //       const config = {
  //         headers: {
  //           'Content-Type': 'application/json', 
  //           'Accept': '*/*'
  
  //         },
  //       };
  //       const response = await axios.put('http://127.0.0.1:4010/api/619.509707169813/programs/dolores/application-form', config);
  //       console.log(response.data)
  //       // return response.data;
  //       // setProfile(response.data);
  //     } catch (error) {
  //       console.error('Error creating post:', error);
  //       }
  //     };

  useEffect(() => {
    fetchQuestions()
  }, [questions])

  const fetchQuestions = () => {
    console.log(questions)
  }

  // const handleDeleteFile = ()=>{
  //   if(selectedImage){
  //     setSelectedImage(null)
  //   }
  // }
  const addInputField = () => {
    if (inputValues[inputValues.length - 1] === "") {
      alert('can not add an empty field')
      return
    }
    setInputValues([...inputValues, '']);

  };

  const editQuestion = (id: number, question: any) => {
    console.log(question)
    //setQuestion(question)
    setQuestions([...questions.filter((x:any)=>x.id!==id), question])
  }
  const SaveMultipleChoice = () => {
    console.log("i got here")
    console.log(questionText, inputValues)
    setQuestions([{
      id: index,
      quest: questionText,
      option: selectedOption,
      values: inputValues
    }, ...questions])
    index += 1
    setQuestionText("")
    setShowOptions(false)
    setShowMultipleOptionsDiv(false)
    setSelectedOption("")
    setInputValues([''])
    console.log(questions)
  }

  const handleDetails = (item: any) => {
    setQuestion(item)
    setShowDetails(true)
  }
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Log the selected value to the console
    console.log('Selected option:', selectedValue);
    setShowMultipleOptionsDiv(true)
  };

  const handleInputChange = (index: any, value: any) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
  };

  const handleQuestionChange = (e: any) => {
    setQuestionText(e.target.value)
  }

  const onChange = (e: any) => {
    console.log(e.target.value)

    setQuestion((prevState: any) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))

  }

  const handleOptionChange = (e: any, index: number) => {
    console.log(index, e.target.value)
    console.log(question.values.splice(index, 1, e.target.value))
    setQuestion((prevState: any) => ({
      ...prevState,
      [e.target.id]: [...question.values.splice(index, 1, e.target.value)]
    }))

  }
  let content;
  if (selectedOption === 'paragraph') {
    content = <p> paragraph works</p>

  } else if (selectedOption === 'video') {
    content = <VideoOption />
  }
  else if (selectedOption === 'multiChoice') {
    if (showMultipleOptionsDiv) {
      content =
        <div>
          <label className='Choicelabel'>Choice</label>
          {inputValues.map((value: any, index: any) => (
            <div key={index} >
              <div>
                <div className='inputCont'>
                  
                  <div className='Choice'>
                    <BiListUl sx={{ width: "32px" }} />
                    <input type="text" className='inputChoice' placeholder='Type here'
                      value={value}
                      onChange={(e) => handleInputChange(index, e.target.value)} />
                    <ImPlus onClick={addInputField} />
                  </div>
                </div>

              </div>

            </div>))}
          <div style={{
            width: "95%",
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: "center"}}>
            <button className='Delete'>Delete</button>
            <button className='save' type='button' onClick={SaveMultipleChoice}> Save</button>

          </div>
        </div>
    }
  } else {
    content = null
  }




  return (
    <div className='card'>
      <div className='title'>{cardTitle}</div>
      <div className='cardBody'>
        {children}
        {content}

        {questions.map((item: any) => (
          <>
            <div className='EditQuestion'>
              <p className='headInfo'>{item.option}</p>
              <div className='editItem'>
                <p className='editText'>{item.quest}</p>
                <SlPencil onClick={() => handleDetails(item)} style={{fontSize: "22px"}}/>
              </div>
            </div>
            {showDetails && (<div  className='inp'>
              <label>Choice</label>
              <input type="text" defaultValue={question.quest} id="quest" onChange={onChange} className='inputQues' />
              {question.option === "multiChoice" && (
                question.values.map((i: any, index: number) => (
                  <input type="text" defaultValue={i} id="values" onChange={(e) => handleOptionChange(e, index)} className='inputQues' />
                )))
              }
              <div style={{
                width: "95%",
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: "center"}}>
                <button className='Delete'>Delete</button>
              <button className='save' onClick={() => editQuestion(question.id, question)}>Save</button></div>
            </div>)}
          </>

        ))
        }


{
        showOptions && (
          <div className='options'>
            <label>Type</label>
            <select value={selectedOption} onChange={handleSelectChange} className='inputQues'>
              <option>Select an option</option>
              <option value="paragraph" className='inputQues'>Paraphrase</option>
              <option value="multiChoice" className='inputQues'>Multi Choice</option>
              <option value="video" className='inputQues'>Video</option>
              <option value="fileupload" className='inputQues'>File upload</option>
            </select>
            <div className='Question'>
              <label style={{textAlign: "left"}}>Question</label>
              <input type="text" className='inputQues' onChange={handleQuestionChange} placeholder='Type here' value={questionText} />
            </div>

          </div>
        )

      }

        <div className='addQuestionBtn' onClick={() => setShowOptions(true)}>
          <ImPlus />
          <div>Add a question</div>
        </div>
      </div>
      

      {/* options*/}

    </div>
  )
}

export default CardSkeleton