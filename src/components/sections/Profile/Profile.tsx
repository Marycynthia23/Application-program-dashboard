import {useState, useEffect} from 'react';
import CardSkeleton from '../../molecules/card/card'
import { Switch } from 'antd';
import { Checkbox } from 'antd';
// import type { CheckboxChangeEvent } from 'antd/es/checkbox';
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
  const [profile, setProfile] = useState<any>({})
  const [showEducation, setShowEducation] = useState(false)
  const [showExperience, setShowExperience] = useState(false)
  const [showResume, setShowResume] = useState(false)
  const [education, setEducation] = useState(false)
  const [experience, setExperience] = useState(false)
  const [resume, setResume] = useState(false)
  // const [checkEducation, setCheckEducation] = useState(false)

 var profiledetails :any
//  var checkEducation: boolean =false

useEffect(() => {
  const getData = async() => ( 
    
    await axios.get('http://127.0.0.1:4010/api/385.83489307014327/programs/quo/application-form')
    .then((response:any)=>{
     // console.log(response.data?.data.attributes.profile)
      profiledetails =response.data?.data.attributes.profile
     
     setProfile(profiledetails)
    setEducation(profiledetails.education)
    setExperience(profiledetails.experience)
    setResume(profiledetails.resume)
    setEducation(!education)
    setShowEducation(!showEducation)
    setShowExperience(!showExperience)
    setShowResume(!showResume)
    setExperience(!showExperience)
    setResume(!setResume)
   // checkEducation =profile.education?.mandatory
    })

)
 getData()

}, [])

const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const onChangeCheckboxEdu = () => {
  //  console.log(`checked = ${e.target.checked}`);
  //checkEducation = e.target.checked ==profile.education?.mandatory
   setEducation(!education)
  

  };
   const onChangeCheckboxExp = () => {
    setExperience(!experience)

  };
  const onChangeCheckboxResume = () => {
    setResume(!resume)

  };
const handleShowEdu = () => {
  setShowEducation(!showEducation)
}
const handleShowExp = () => {
  setShowExperience(!showExperience)
}
const handleShowResume = () => {
  setShowResume(!showResume)
}
  return (
    <div>
        <CardSkeleton cardTitle='Profile'>
        {profile && (
          <>
          <div className='threefields' >
                <p>Education</p>
                <Checkbox checked={education ==profile.education?.mandatory} onChange={onChangeCheckboxEdu} className='width'>Mandatory</Checkbox>
                <div className='switch'>
                <Switch checked={showEducation ==profile.education?.show}  onChange={onChange} onClick={handleShowEdu}/>
                <span>{showEducation ? 'Hide' : 'Show'}</span>
                </div>
            </div>
          </>
        )}
           
             <div className='threefields'>
                <p>Experience</p>
                <Checkbox checked={experience ==profile.experience?.mandatory} onChange={onChangeCheckboxExp} className='width'>Internal</Checkbox>
                <div className='switch'>
                <Switch defaultChecked checked={showExperience ==profile.experience?.show} onChange={onChange} onClick={handleShowExp}/>
                <span>{showExperience ? 'Hide' : 'Show'}</span>
                </div>
            </div>
            <div className='threefields'>
                <p>Resume</p>
                <Checkbox checked={resume ==profile.resume?.mandatory} onChange={onChangeCheckboxResume} className='width'>Internal</Checkbox>
                <div className='switch'>
                <Switch defaultChecked checked={showResume ==profile.resume?.show} onChange={onChange} onClick={handleShowResume}/>
                <span>{showResume ? 'Hide' : 'Show'}</span>
                </div>
            </div> 
            </CardSkeleton>
    </div>
  )
}

export default Profile