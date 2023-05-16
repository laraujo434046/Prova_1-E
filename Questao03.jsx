import React, { useState, useEffect } from 'react';

const Questao03 = () => {
  const [maiorPopulacao, setMaiorPopulacao] = useState('');
  const [menorPopulacao, setMenorPopulacao] = useState('');

//No useEffect, é realizada uma função assíncrona fetchData 
//para buscar os dados dos países da Europa através da API https://restcountries.com/v3.1/region/europe?fields=capital,population.
  
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
        const data = await response.json();

//Em seguida, é percorrido o vetor data contendo os países, 
//e são comparadas as populações para encontrar o país com a maior e menor população, além de seus respectivos índices.

        let maiorPop = Number.NEGATIVE_INFINITY;
        let menorPop = Number.POSITIVE_INFINITY;
        let maiorIndex = -1;
        let menorIndex = -1;

        for (let i = 0; i < data.length; i++) {
          const country = data[i];
          const population = country.population;

          if (population > maiorPop) {
            maiorPop = population;
            maiorIndex = i;
          }

          if (population < menorPop) {
            menorPop = population;
            menorIndex = i;
          }
        }
//Após encontrar os índices, os valores das capitais correspondentes 
//são armazenados nos estados maiorPopulacao e menorPopulacao.

        if (maiorIndex !== -1) {
          setMaiorPopulacao(data[maiorIndex].capital[0]);
        }

        if (menorIndex !== -1) {
          setMenorPopulacao(data[menorIndex].capital[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Componente Questao03</h1>
      <p>Capital com maior população: {maiorPopulacao}</p>
      <p>Capital com menor população: {menorPopulacao}</p>
    </div>
  );
};

export default Questao03;
