import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"

export default function SearchBox() {

    let [city, setcity] = userState("");

let handleChange = (evt) =>{
    setcity(evt.target.value);
};
    return (
        <div className="SearchBox">
            <h3>Serach for the weather</h3>
            <form action="">
                <TextField 
                 id="city" 
                 label="City Name" 
                 variant="outlined" 
                 required
                 onChange={handleChange}/>
                <br></br><br></br>
                <Button variant="outlined" type="submit">Search</Button>
            </form>
        </div>
    );
}