import React, { Component } from 'react';
import './body.css';

export default class Corpo extends Component{
	render(){
		return(
			<div class="container">
				<p>Criando uma interface para receber uma api.</p><br/>
				<h3>Tarefas</h3><br/>
				<ol>
					<li>Baixar o browserSync do React-Dom.</li>
					<li>Colocar rotas eleatorias no nosso projeto so para navegação</li>
					<li>Consumir api do pokemon usando o state do react.</li>
					<li>Deixar o menu e pagina de forma responsiva.</li>
					<li>Criar um diretorio da minha conta no github.</li>
					<li>Colocar meu projeto no github.</li>
				</ol>
			</div>
		);
	}
}