import Button from '@mui/material/Button';

function App() {
 
  let handleClick = () => {
    console.log("button was clicked");
  }

  return (
    <>
      <h2>Material Ui demo</h2>

      <Button variant="contained" onClick = {handleClick}>Contained</Button>
     
    </>
  )
}

export default App
