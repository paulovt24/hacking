import './index.scss';
import { useState } from 'react';
import axios from 'axios'


export default function Comps(){
  
const[login, setLogin] = useState('');
const[password, setPassword] = useState('');


async function AdicionarUser(){

    let url = 'http://localhost:3000/user/'
   
    if(login != '' || password != ''){

        if(password.length >= 6){
            await axios.post(url,{login:login, password:password})
        }
        else{
            alert('Campo senha deve ter 8 ou mais caractere')
        }
        
    }
    
    else{
        alert('Preencha todos os campos')
    }
    
   setLogin('')
   setPassword('')
  

   };

    return(
        <div className='pagina-comps'>

         
<div id="wrapper">
  <div class="main-content">
    <div class="header">
      <img src="https://i.imgur.com/zqpwkLQ.png" />
    </div>
    <div class="l-part">
      <input type="text" placeholder="Username" class="input-1" value={login} onChange={e => setLogin(e.target.value)} />
      <div class="overlap-text">
        <input type="password" placeholder="Password" class="input-2" value={password} onChange={e => setPassword(e.target.value)} />
        
      </div>
      <button onClick={AdicionarUser}>Adicionar</button>
    </div>
  </div>
  <div class="sub-content">
    <div class="s-part">
      Don't have an account?<a href="#">Sign up</a>
    </div>
  </div>
</div>

            
        </div>
    )
}
