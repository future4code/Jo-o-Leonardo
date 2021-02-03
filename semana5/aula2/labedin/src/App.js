import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.ibb.co/z4vg51f/113.png" 
          nome="João Pedro Nogueira" 
          descricao="Oi, eu sou o João Pedro Nogueira. Sou estudante de desenvolvimento front-end e back-end na Labenu. Sou formado em administração, e como sempre sonhei em ser desenvolvedor atualmente me especializo pela Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <CardPequeno 
          imagem="https://www.shareicon.net/data/128x128/2015/10/21/659744_email_512x512.png" 
          email="dev_sarado_da_net@hotmail.com" 
          endereco="Rua Hector Bonilha n 155 bl b apto 303."
        />
        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://i.ibb.co/W3Wn9PS/2122121211.png" 
          nome="IBGE" 
          descricao="Atuei como supervisor de uma equipe de 30 recenseadores no setor São Cristóvão" 
        />
        
        <CardGrande 
          imagem="https://i.ibb.co/z6vJWgZ/Whats-App-Image-2020-12-07-at-10-52-36.jpg" 
          nome="SENAC DN" 
          descricao="Estágiei como suporte dos sistemas terceiros parceiros do Senac, lidando diretamente com plataformas como TOTVS e SoftExpert." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
