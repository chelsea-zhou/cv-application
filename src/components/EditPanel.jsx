import { useState } from 'react';
import '../styles/EditPanel.css'

export function EditPanel({submitData}) {

    const defaultGeneralInfo = {
        name: '',
        email: '',
        phoneNumber: '',
        //location: ''
    };

    const [generalInfo, setGeneralInfo] = useState(defaultGeneralInfo);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setGeneralInfo({
            ...generalInfo,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            generalInfo
        }
        submitData(data);
    };
    return (
        <>
        <form className='editPanel'>
            <label>General Info</label>
            <label>name</label>
            <input 
                type="text" 
                name="name"
                value={generalInfo.name}
                onChange={handleInputChange}
            />
            <label>email</label>
            <input 
                type="text" 
                name="email"
                value={generalInfo.email}
                onChange={handleInputChange}
            />
            <label>phoneNumber</label>
            <input 
                type="text" 
                name="phoneNumber"
                value={generalInfo.phoneNumber}
                onChange={handleInputChange}
            />
            <button  onClick={handleSubmit}>submit</button>
        </form>
        </>
    )
}