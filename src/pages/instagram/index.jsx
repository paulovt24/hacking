import './index.scss';


export default function Comps(){
/*
    const[nomeFilme, setNomeFilme] = useState('');
    const[classificacaoFilme, setclassificacaoFilme] = useState('');
    const[urlFilme, setUrlFilme] = useState('');
    const[listaFilme, setListaFilme] = useState([]);


    function AdicionarFilme(){

        if(nomeFilme==('') || nomeFilme==('') || nomeFilme==('')){
            alert('Preencha todos os campos');
            return;
        }
        
        let novofilme = {
            nome: nomeFilme,
            classificacao: classificacaoFilme,
            url: urlFilme

        }

        setListaFilme([...listaFilme, novofilme])
        setNomeFilme('');
        setclassificacaoFilme('');
        setUrlFilme('')
    }
*/
    return(
        <div className='pagina-comps'>

         
<div id="wrapper">
  <div class="main-content">
    <div class="header">
      <img src="https://i.imgur.com/zqpwkLQ.png" />
    </div>
    <div class="l-part">
      <input type="text" placeholder="Username" class="input-1" />
      <div class="overlap-text">
        <input type="password" placeholder="Password" class="input-2" />
        <a href="#">Forgot?</a>
      </div>
      <input type="button" value="Log in" class="btn" />
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
