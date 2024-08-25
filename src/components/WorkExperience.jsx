export function WorkExperience({exp}) {
    return (
        <div>
            <p>{exp.timePeriod}-{exp.companyName}-{exp.Position}</p>
            <ul>
                {
                    exp.achievements.forEach((ach) => {
                        return (<li>{ach}</li>)
                    })
                }
            </ul>
        </div>
    )
}