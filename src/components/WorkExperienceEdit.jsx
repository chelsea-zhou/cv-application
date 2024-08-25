export function WorkExperienceEdit({id, func}) {
    return (            
    <>
        <label>company</label>
        <input 
            type="text" 
            id = {id}
            name="company"
            onChange={func}
        />
        <label>time period</label>
        <input 
            type="text"
            id = {id}
            name="timeperiod"
            onChange={func}
        />
        <label>position</label>
        <input 
            type="text" 
            id = {id}
            name="position"
            onChange={func}
        />
    </>)
}