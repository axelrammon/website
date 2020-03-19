import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';

import img from './img/me.jpg';
import './styles.css';

function App() {
  
  const [ repositorios, setRepositorios ] = useState([]);
  let [ mostrarRepos, setMostrarRepos ] = useState({ display: 'none' });
  let [ mostrarArtigos, setMostrarArtigos ] = useState({ display: 'none' });
  let [ mostrarHabilidades, setMostrarHabilidades ] = useState({ display: 'none' });
  let [ projects, setProjects ] = useState({ display: 'block' });
  const medium = 'https://medium.com/@Axel7/como-colocar-seu-app-em-reactjs-no-github-pages-b1cd94f1230';

  useEffect(() => {
    async function pegarRepos() {
      const response = await fetch('https://api.github.com/users/axelrammon/repos');
  
      const data = await response.json();
  
      setRepositorios(data);
    }
    pegarRepos();
  
  }, [])

  function handleSubmitRepositorios(e) {
    e.preventDefault();

    function mostrarRepositorio() {
      if (mostrarRepos.display === 'none') {
        setMostrarRepos(mostrarRepos = {display: 'block'});
        setProjects(projects = {display: 'none'});
      } else {
        setMostrarRepos(mostrarRepos = {display: 'none'});
        setProjects(projects = {display: 'block'});
      }
    }

    mostrarRepositorio();
  }

  function handleSubmitArtigo(e) {
    e.preventDefault();

    function mostrarArtigo() {
      if (mostrarArtigos.display === 'none') {
        setMostrarArtigos(mostrarArtigos = {display: 'block'});
        setProjects(projects = {display: 'none'});
      } else {
        setMostrarArtigos(mostrarArtigos = {display: 'none'});
        setProjects(projects = {display: 'block'});
      }
    }

    mostrarArtigo();
  }

  function handleSubmitHabilidade(e) {
    e.preventDefault();

    function mostrarHabilidade() {
      if (mostrarHabilidades.display === 'none') {
        setMostrarHabilidades(mostrarHabilidades = {display: 'block'});
        setProjects(projects = {display: 'none'});
      } else {
        setMostrarHabilidades(mostrarHabilidades = {display: 'none'});
        setProjects(projects = {display: 'block'});
      }
    }

    mostrarHabilidade();
  }
  
  return (
    <>
      <div id="container">
        
        <div id="conteudo">
          
          <div className="sobre">
            <div className="img img-efect">
              <img src={img} alt=""/>
              <div className="legenda">
                <h3>Hey, how are you?</h3>
                <h2>I'm Axel</h2>
              </div>
            </div>
            <h3>I'm a web developer in constant learning...</h3>
            <p>Follow me on social media!</p>
          </div>

          <div className="projects">
            <div className="card">
              <div className="projects-name" style={projects}>
                <ul>
                  <li><button onClick={handleSubmitRepositorios}>Repositórios</button></li>
                  <li><button onClick={handleSubmitArtigo}>Artigos</button></li>
                  <li><button onClick={handleSubmitHabilidade}>Habilidades</button></li>
                </ul>
              </div>
              <div className="projects-conteudo">
                <div className="repositorios" style={mostrarRepos}>
                  <ul className="ul-repositorios">
                    {repositorios.map(repo => {
                      return <a href={repo.html_url} key={repo.id}><li>{repo.name}</li></a>
                    })}
                  </ul>
                  <button onClick={handleSubmitRepositorios}>Voltar</button>
                </div>
                <div className="artigos" style={mostrarArtigos}>
                  <a href={medium} rel="noopener noreferrer">Como hospedar seu ReactJS App no Github Pages</a><br/>
                  <button onClick={handleSubmitArtigo}>Voltar</button>
                </div>
                <div className="habilidades" style={mostrarHabilidades}>
                  <p>Em breve</p>
                  <button onClick={handleSubmitHabilidade}>Voltar</button>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        
        <div id="footer">
        
          <ul className="ul_social">
            <div>
              <li>
                <SocialIcon 
                  network="github"
                  url="https://github.com/axelrammon"
                  bgColor="#ecf0f1"
                />
              </li>
            </div>
            <div>
              <li>
                <SocialIcon 
                  network="twitter"
                  url="https://twitter.com/axel_rammon"
                  bgColor="#ecf0f1"
                />
              </li>
            </div>
            <div>
              <li>
                <SocialIcon 
                  network="linkedin"
                  url="https://www.linkedin.com/in/axel-rammon-536ab6119/"
                  bgColor="#ecf0f1"
                />
              </li>
            </div>
            <div>
              <li>
                <SocialIcon 
                  network="instagram"
                  url="https://instagram.com/axel_rammon"
                  bgColor="#ecf0f1"
                />
              </li>
            </div>
          </ul>
        
        </div>

      </div>
    </>
  );
}

export default App;
