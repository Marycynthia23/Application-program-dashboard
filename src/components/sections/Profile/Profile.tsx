import {useState, useEffect} from 'react';
import CardSkeleton from '../../molecules/card/card'
import { Switch } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import "../Profile/Profile.css"
import axios from 'axios';

interface PersonalQuestion {
  id: string;
  type: string;
  question: string;
  choices: string[];
  maxChoice: number;
  disqualify: boolean;
  other: boolean;
}

interface Profile {
  education: {
    mandatory: boolean;
    show: boolean;
  };
  experience: {
    mandatory: boolean;
    show: boolean;
  };
  resume: {
    mandatory: boolean;
    show: boolean;
  };
  profileQuestions: PersonalQuestion[];
}


const Profile = () => {
  const [profile, setProfile] = useState({})
  const [showEducation, setShowEducation] = useState(false)
  const [showExperience, setShowExperience] = useState(false)
  const [showResume, setShowResume] = useState(false)
  const [education, setEducation] = useState(false)
  // const [experience, setExperience] = useState(false)

 

useEffect(() => {
  const data:any = getData();
    console.log(data)
    
    // setEducation(profile?.data?.profile?.education?.mandatory)
}, [])


  const getData = async() => {
    try{
      const config = {
        headers: {
          // Add your headers here
          'Content-Type': 'application/json', 
          'Accept': '*/*'

        },
      };
      const response = await axios.get('http://127.0.0.1:4010/api/299.4850686487526/programs/aut/application-form', config);
      console.log(response.data)
      // return response.data;
      setProfile(response.data);
    } catch (error) {
      console.error('Error creating post:', error);
      }
    };

const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const onChangeCheckboxEdu = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    setEducation(!education)

  };
   const onChangeCheckboxExp = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    // setEducation(!education)

  };
  const onChangeCheckboxResume = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    // setEducation(!education)

  };
  // console.log(education)
const handleShowEdu = () => {
  setShowEducation(!showEducation)
}
const handleShowExp = () => {
  setShowExperience(!showExperience)
}
const handleShowResume = () => {
  setShowResume(!showResume)
}
// console.log(profile?.data?.id)
  return (
    <div>
        <CardSkeleton cardTitle='Profile'>
        {profile && (
          <>
          <div className='threefields' >
                <p>Education</p>
                <Checkbox onChange={onChangeCheckboxEdu} className='width'>Mandatory</Checkbox>
                <div className='switch'>
                <Switch defaultChecked onChange={onChange} onClick={handleShowEdu}/>
                <span>{showEducation ? 'Hide' : 'Show'}</span>
                </div>
            </div>
          </>
        )}
              
           
             <div className='threefields'>
                <p>Experience</p>
                <Checkbox onChange={onChangeCheckboxExp} className='width'>Internal</Checkbox>
                <div className='switch'>
                <Switch defaultChecked onChange={onChange} onClick={handleShowExp}/>
                <span>{showExperience ? 'Hide' : 'Show'}</span>
                </div>
            </div>
            <div className='threefields'>
                <p>Resume</p>
                <Checkbox onChange={onChangeCheckboxResume} className='width'>Internal</Checkbox>
                <div className='switch'>
                <Switch defaultChecked onChange={onChange} onClick={handleShowResume}/>
                <span>{showResume ? 'Hide' : 'Show'}</span>
                </div>
            </div> 
            </CardSkeleton>
    </div>
  )
}

export default Profile