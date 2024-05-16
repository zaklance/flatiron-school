import { useState } from 'react';

export default function Form() {
    // const [ name, setName ] = useState("");
    // const [ movie, setMovie ] = useState("");
    const [ memberData, setMemberData ] = useState({
        name: "",
        movie: ""
    });
    function handleChange(event){
        setMemberData({
            ...memberData, 
            [event.target.name]: event.target.value
        });
    }
    const character = memberData.movie.charAt(0)
    let colorText = character === character.toUpperCase() ? "#000000" : "#f54242";

    return (
        <form>
            <label><strong>Name </strong>
                <input name='name' value={memberData.name} onChange={handleChange} />
                {/* <input value={memberData.name} onChange={event => setMemberData({ ...memberData, name: event.target.value })} /> */}
            </label>
            <br/><br/>
            <label><strong>Movie </strong>
                <input style={{color: colorText}} name='movie' value={memberData.movie} onChange={handleChange} />
                {/* <input value={memberData.movie} onChange={event => setMemberData({ ...memberData, movie: event.target.value })} /> */}
            </label>
            <br/><br/>
            <em>Your lucky number is</em> <strong>{memberData.name.length * memberData.movie.length}</strong>!
            <br/><br/>
            <input type="submit" value="Sign Up"/>
            <h2>Members</h2>
            <sub>Fill out the form to add your first member!</sub>
        </form>
    )
}