import { useState } from 'react';
import '../styles/EditPanel.css'
import {v4 as uuid} from 'uuid'

export function EditPanel({submitData}) {

    const defaultGeneralInfo = {
        name: 'Jane Doe',
        email: 'janeDoe@gmail.com',
        phoneNumber: '123-456-7980',
        github: 'jd.github.io',
        linkedin: 'https://www.linkedin.com/in/jd'
    };

    const defualtEduInfo = {
        school: 'University of Waterloo',
        timePeriod: '2014 - 2019',
        degree: 'Bachelor of Computer Science'
    }

    const defaultExperience = {
        "0" : {
            company: 'Amazon Inc',
            timePeriod: '2020 Jan - 2024 April',
            position: 'Software Development Engineer II',
            achievements: `- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
            - aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            - ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            - eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            `
        }
    }

    const defaultComp = <WorkExperienceEdit id="0" />;

    const [generalInfo, setGeneralInfo] = useState(defaultGeneralInfo);
    const [eduInfo, setEduInfo] = useState(defualtEduInfo);
    const [experiences, setExperiences] = useState(defaultExperience);
    const [expComps, setExpComps] = useState([defaultComp]);

    const handleGeneralInfoInputChange = (e) => {
        const {name, value} = e.target;
        setGeneralInfo({
            ...generalInfo,
            [name]: value
        });
    }

    const handleEduInfoInputChange = (e) => {
        const {name, value} = e.target;
        setEduInfo({
            ...eduInfo,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            generalInfo,
            eduInfo,
            experiences
        }
        submitData(data);
    };

    const handleWorkExperienceChange = (e) => {
        const {id, name, value} = e.target;
        // updating the same item several times, using prev
        // to accumulate the effect
        setExperiences((prevExperiences) => ({
            ...prevExperiences,
            ["0"]: {
                ...prevExperiences["0"],
                [name]: value
            }
        }));
    }

    function WorkExperienceEdit({id}) {
        return (            
            <div className='form-group'>
                <label>company</label>
                <input 
                    type="text" 
                    id = {id}
                    name="company"
                    onChange={handleWorkExperienceChange}
                />
                <label>time period</label>
                <input 
                    type="text"
                    id = {id}
                    name="timePeriod"
                    onChange={handleWorkExperienceChange}
                />
                <label>position</label>
                <input 
                    type="text" 
                    id = {id}
                    name="position"
                    onChange={handleWorkExperienceChange}
                />
                <label>achievements</label>
                <textarea
                    id= {id}
                    name="achievements"
                    onChange={handleWorkExperienceChange}
                    rows="5"
                >{defaultExperience["0"].achievements}</textarea>
            </div>
        )
    }


    const addNewExperience = (e) => {
        e.preventDefault();
        // todo: add delete button
        const id = expComps.length;
        const newComp = <WorkExperienceEdit key={id} id={id} />;
        setExpComps([...expComps, newComp])
    }

    return (
        <>
        <form className='editPanel'>
            <p>Edit Panel</p>
            <div className='form-group'>
                <label className='sectionTitle'>General Info</label>
                <label>name</label>
                <input 
                    type="text" 
                    name="name"
                    value={generalInfo.name}
                    onChange={handleGeneralInfoInputChange}
                />
                <label>email</label>
                <input 
                    type="text" 
                    name="email"
                    value={generalInfo.email}
                    onChange={handleGeneralInfoInputChange}
                />
                <label>phoneNumber</label>
                <input 
                    type="text" 
                    name="phoneNumber"
                    value={generalInfo.phoneNumber}
                    onChange={handleGeneralInfoInputChange}
                />
                <label>github</label>
                <input 
                    type="text" 
                    name="github"
                    value={generalInfo.github}
                    onChange={handleGeneralInfoInputChange}
                />
                <label>linkedin</label>
                <input 
                    type="text" 
                    name="linkedin"
                    value={generalInfo.linkedin}
                    onChange={handleGeneralInfoInputChange}
                />
            </div>
            
            <div className='form-group'>
            <label className='sectionTitle'>Education</label>
            <label>school name</label>
            <input 
                type="text" 
                name="school"
                value={eduInfo.school}
                onChange={handleEduInfoInputChange}
            />
            <label>year</label>
            <input 
                type="text" 
                name="timePeriod"
                value={eduInfo.timePeriod}
                onChange={handleEduInfoInputChange}
            />
            <label>Degree</label>
            <input 
                type="text" 
                name="degree"
                value={eduInfo.degree}
                onChange={handleEduInfoInputChange}
            />
            </div>


        <div className='form-group'>
            <label className="sectionTitle">Work Experiences</label>
            {expComps.map((comp) => comp)}
            <button onClick={addNewExperience}> Add New Experience</button>
        </div>

        <button  onClick={handleSubmit}>Preview</button>
        </form>
        </>
    )
}