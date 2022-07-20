
import React ,{useState} from 'react'

export default function Signup({setIsAuth}) {
    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch('http://localhost:4000/user/sign-up' ,{
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password 
            }) ,
            headers: {
                "Content-Type": "application/json",
            }, 
        }).then(response => response.json())
        .then(data => {
            localStorage.setItem('token', data.jwtToken)
            setIsAuth(data.isAuthenticated)
        })
        .catch(error => console.log(error))
    }
    return (
    <div className='center container' style={{maxwitdh: '500px'}}>
        <h3>please Signup!</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-field ">
          <input type= "email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
          <input type= "password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
          
        </div>
        <button type='submit' className="btn gry">Signup</button>
        </form>
    </div>
  )
}
