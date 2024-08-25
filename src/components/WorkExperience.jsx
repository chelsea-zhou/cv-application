import '../styles/displayPanel.css';

export function WorkExperience({exp}) {
    function ProcessAchievements ({achs}) {
        const arr = achs.split("-");
        return (
            <div className='achievements'>
                <ul>
                    {        
                        arr.map((item, index) => {
                            if(item.length <=0) {
                                return;
                            }
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>

        )
    }
    return (
        <div className="workExp">
            <p className='h2'>{exp.company}, {exp.position}</p>
            <p className='timePeriod'>{exp.timePeriod}</p>
            <ProcessAchievements achs={exp.achievements} />
        </div>
    )
}