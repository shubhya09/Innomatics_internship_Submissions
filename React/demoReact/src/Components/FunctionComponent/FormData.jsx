import React, {useState}from 'react'

const FormData = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function getDetails (e) {
         e.preventDefault();
         console.log(email, password);
         
    }

  return (
    <div>
        <div className='email'>
            <input type="text" placeholder='Enter your email' onChange={(e) =>  setEmail(e.target.value)} />
        </div> <br /> <br />

        <div className='password'>
            <input type="password" placeholder='Enter your password' onChange={(e) =>  setPassword(e.target.value)} />
        </div> <br /> <br />

        <button onClick={(e)=> getDetails(e)}>Get Details</button>

    </div>
  )
}

export default FormData