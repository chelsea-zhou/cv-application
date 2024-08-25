import { WorkExperience } from "./WorkExperience"
import '../styles/displayPanel.css'

export function DisplayPanel({data}) {
    return (
        <div className="displayPanel">
            <div className="infoContainer">
                <div className="username">
                    <p>{data.generalInfo.name}</p>
                </div>
                <div class='info'>
                    <a href={data.generalInfo.email}>
                        <img src="envelope-at.svg" width="24" height="24" />
                    </a>
                    
                    <a href={data.generalInfo.github}>
                        <img src="github.svg" width="24" height="24" />
                    </a>
                    <a href={data.generalInfo.linkedin}>
                        <img src="linkedin.svg" width="24" height="24" />
                    </a>
                </div>
            </div>

            <div className="workExperiences">
                <p className="sectionTitle">Work Experiences</p>
                {
                    Object.keys(data.experiences).map((key) => {
                        return <WorkExperience exp={data.experiences[key]} key={key}/>
                    })
                }
            </div>


            <div className="education">
                <p className="sectionTitle">Education</p>
                <p className="h2">
                    {data.eduInfo.school}, 
                    <span > {data.eduInfo.timePeriod}</span>
                </p>
                <p id="degree">{data.eduInfo.degree}</p>
                {/* <p id="timeperiod">{data.eduInfo.timePeriod}</p> */}
            </div>
        </div>
    )
}