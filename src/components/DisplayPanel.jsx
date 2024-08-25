import { WorkExperience } from "./WorkExperience"

export function DisplayPanel({data}) {
    return (
        <div>
            <div className="generalInfo">
                <p>{data.generalInfo.name}</p>
                <p>{data.generalInfo.phoneNumber}</p>
                <p>{data.generalInfo.email}</p>
            </div>
            <div className="workExperiences">
                {/* <p>Work Experiences</p>
                {
                    props.workExperiences.forEach((exp) => {
                        return (
                            <WorkExperience exp={exp}/>
                        )
                    })
                } */}
            </div>
            <div className="education">
                {/* <p>{education.timePeriod}{education.schoolName}</p>
                <p>{education.degree}</p> */}
            </div>
        </div>
    )
}