import CardSkeleton from '../../molecules/card/card'
import { SlPencil } from 'react-icons/sl';
import { ImPlus } from 'react-icons/im';
import { BiListUl } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';

import "../AdditionalQuestions/AdditionalQuestions.css"

const AdditionalQuestions = () => {
  return (
    <div>
        <CardSkeleton cardTitle='Additional Questions'>
            <div className='EditQuestion'>
                <p className='headInfo'>Paragraph</p>
                <div className='editItem'>
                    <p className='editText'>Please tell me about yourself in less than 500 words</p>
                    <SlPencil/>
                </div>
            </div>
            <div className='EditQuestion'>
                <p className='headInfo'>Dropdown</p>
                <div className='editItem'>
                    <p className='editText'>Please select the year of graduation from the list below</p>
                    <SlPencil/>
                </div>
            </div>
            <div className='inputCont'>
                <label>Question</label>
                <input type="text" className='inputQues' placeholder='Type here'/>
            </div>
            <div> 
                <div className='inputCont'>
                <label className='Choicelabel'>Choice</label>
                <div className='Choice'>
                <BiListUl sx={{width: "32px"}}/>
                <input type="text" className='inputChoice' placeholder='Type here'/>
                <ImPlus />
                </div>
                </div>
               
            </div>
            <div className='DelQuestionBtn'>
            <IoCloseSharp />
            <div className='DelText'>Delete question</div>
            </div>
            <div className='EditQuestion'>
                <p className='headInfo'>Yes/No questions</p>
                <div className='editItem'>
                    <p className='editText'>Have you ever been rejected by the UK embassy?</p>
                    <SlPencil/>
                </div>
            </div>
        </CardSkeleton>
    </div>
  )
}

export default AdditionalQuestions