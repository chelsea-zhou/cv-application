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
        },
        "1" : {
            company: 'Scotiabank DA Lab',
            timePeriod: '2018 Jan - 2018 April',
            position: 'Data Scientist Intern',
            achievements: `- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
            - aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            - ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            - eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            `
        },
        "2" : {
            company: 'IBM',
            timePeriod: '2018 Sept - 2019 April',
            position: 'AI & Iot Developer',
            achievements: `- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
            - aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            - ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            - eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            `
        }
    }

    const [generalInfo, setGeneralInfo] = useState(defaultGeneralInfo);
    const [eduInfo, setEduInfo] = useState(defualtEduInfo);
    const [experiences, setExperiences] = useState(defaultExperience);
    const [expComps, setExpComps] = useState([]);

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
            [id]: {
                ...prevExperiences[id],
                [name]: value
            }
        }));
    }



    function WorkExperienceEdit({id}) {

        return (            
        <>
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
             />
        </>)
    }


    const addNewExperience = (e) => {
        e.preventDefault();
        // push new experience into array
        // todo: should have delete experience as well?
        const id = expComps.length;
        const newComp = <WorkExperienceEdit key={id} id={id} />;
        setExpComps([...expComps, newComp])
    }

    return (
        <>
        <form className='editPanel'>
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



        <label className="sectionTitle">Work Experiences</label>

        <button onClick={addNewExperience}> add new experience</button>

        {expComps.map((comp) => comp)}


        <button  onClick={handleSubmit}>Preview</button>
        </form>
        </>
    )
}