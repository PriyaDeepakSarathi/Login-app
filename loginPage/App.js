import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Container} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './App.css'
function App(){
const[username,setUsername]=useState('');
const[password,setPassword]=useState('');
const[error,setError]=useState(false);
let history= useHistory();

const handleSubmit=(e)=>{
e.preventDefault();
if((username ==='priya' && password==='123')||(username ==='charu' && password==='123')){
    
    history.push("/home");
    setError(false)

}
else{
    setError(true)
    console.log(error)
}
};
return(<div className='body'>
<Container>
    <h1>Login Page</h1>
<form action="" className='login'>
 <Row className='input1'>
<Col><label htmlFor="">User Name</label></Col>
<Col><input type="text" id='uname'value={username} onChange={e=>setUsername(e.target.value)}/></Col>
</Row>

 <Row className='input2'>
<Col><label htmlFor="password">Password</label></Col>
<Col><input type="text" id='password'value={password} onChange={e=>setPassword(e.target.value)}/></Col>
</Row>

<button type='submit' className='btn' onClick={handleSubmit}>Login</button>
{error && 'invalid username or password' }

</form>  


</Container>
</div>)
}
export default App;