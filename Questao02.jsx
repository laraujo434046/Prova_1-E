import React, { useState } from 'react';

const Questao02 = () => {
  const [virar, setVirar] = useState(false);
  //No evento de clique do botão onClick, 
  //a função handleClick é chamada para alternar o valor de virar entre true e false.

  const handleClick = () => {
    setVirar(!virar);
  };
  //A variável imagemFrente armazena o caminho da imagem frontal do Pokémon, enquanto a 
  //variável imagemCostas armazena o caminho da imagem de costas.
  
  const imagemFrente = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
  const imagemCostas = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png';
  const imagem = virar ? imagemCostas : imagemFrente;

  return (
    //No retorno do JSX de Questao02, é exibida a imagem do Pokémon 
    //utilizando a variável imagem como o atributo src da tag <img>.
    <div>
      <h1>Componente Questao02</h1>
      <img src={imagem} alt="Pokemon" />
      <button onClick={handleClick}>Virar</button>
    </div>
  );
};

export default Questao02;
