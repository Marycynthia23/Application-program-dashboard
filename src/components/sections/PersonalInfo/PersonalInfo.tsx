
import CardSkeleton from '../../molecules/card/card'
import { Switch } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import "../PersonalInfo/PersonalInfo.css"
import { useState } from 'react';
// import {getData} from '../../../../api';





const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const onChangeCheckbox = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
const PersonalInfo = () => {
  const [showPhone, setShowPhone] = useState(false)

  const handleShowPhone = () => {
    setShowPhone(!showPhone)
}


// const data =  getData();
// console.log(data)

  return (
    <div>
        <CardSkeleton cardTitle='Personal Information'>
            <div className='inputCont'>
                <label>First Name</label>
                <input type="text" className='input'/>
            </div>
            <div className='inputCont'>
                <label>Last Name</label>
                <input type="text" className='input'/>
            </div>
            <div className='inputCont'>
                <label>Email</label>
                <input type="email" className='input'/>
            </div>
            <div className='threefields'>
                <p>Phone (without dial code)</p>
                <Checkbox onChange={onChangeCheckbox} className='width'>Internal</Checkbox>
                <div className='switch'>
                <Switch defaultChecked onChange={onChange} onClick={handleShowPhone}/>
                <span>{showPhone ? 'Hide' : 'Show'}</span>
                </div>
            </div>
            <div className='threefields'>
                <p>Nationality</p>
                <Checkbox onChange={onChangeCheckbox} className='width'>Internal</Checkbox>
                <div className='switch'>
                <Switch defaultChecked onChange={onChange}/>
                <span>Hide</span>
                </div>
            </div>
            <div className='threefields'>
                <p>Current Residence </p>
                <Checkbox onChange={onChangeCheckbox} className='width'>Internal</Checkbox>
                <div className='switch'>
                <Switch defaultChecked onChange={onChange}/>
                <span>Hide</span>
                </div>
            </div>
            <div className='threefields'>
                <p>ID Number</p>
                <Checkbox onChange={onChangeCheckbox} className='width'>Internal</Checkbox>
                <div className='switch'>
                <Switch defaultChecked onChange={onChange}/>
                <span>Hide</span>
                </div>
            </div>
            <div className='threefields'>
                <p>Date of Birth </p>
                <Checkbox onChange={onChangeCheckbox} className='width'>Internal</Checkbox>
                <div className='switch'>
                <Switch defaultChecked onChange={onChange}/>
                <span>Hide</span>
                </div>
            </div>
            <div className='threefields'>
                <p>Gender</p>
                <Checkbox onChange={onChangeCheckbox} className='width'>Checkbox</Checkbox>
                <div className='switch'>
                <Switch defaultChecked onChange={onChange}/>
                <span>Hide</span>
                </div>
            </div>
        </CardSkeleton>
    </div>
  )
}

export default PersonalInfo