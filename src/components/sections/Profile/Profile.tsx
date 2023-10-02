import React from 'react'
import CardSkeleton from '../../molecules/card/card'
import { Switch } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import "../Profile/Profile.css"

const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const onChangeCheckbox = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
const Profile = () => {
  return (
    <div>
        <CardSkeleton cardTitle='Profile'>
            <div className='threefields'>
                <p>Education</p>
                <Checkbox onChange={onChangeCheckbox} className='width'>Internal</Checkbox>
                <div className='switch'>
                <Switch defaultChecked onChange={onChange}/>
                <span>Hide</span>
                </div>
            </div>
            <div className='threefields'>
                <p>Experience</p>
                <Checkbox onChange={onChangeCheckbox} className='width'>Internal</Checkbox>
                <div className='switch'>
                <Switch defaultChecked onChange={onChange}/>
                <span>Hide</span>
                </div>
            </div>
            <div className='threefields'>
                <p>Resume</p>
                <Checkbox onChange={onChangeCheckbox} className='width'>Internal</Checkbox>
                <div className='switch'>
                <Switch defaultChecked onChange={onChange}/>
                <span>Hide</span>
                </div>
            </div>
            </CardSkeleton>
    </div>
  )
}

export default Profile