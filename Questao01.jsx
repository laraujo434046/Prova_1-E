import React, { useState, useEffect } from 'react';

const Questao01B = ({ alunos, setMedias }) => {
  useEffect(() => {
    const calcularMedias = () => {
      const medias = alunos.map(aluno => (aluno.notas.ap1 + aluno.notas.ap2) / 2);
      setMedias(medias);
    };

    calcularMedias();
  }, [alunos, setMedias]);

  return null; // Componente Questao01B não precisa renderizar nada
};
//O componente Questao01A tem os estados medias e loading, sendo inicializados como um 
//vetor vazio e true, respectivamente.

const Questao01A = () => {
  const [medias, setMedias] = useState([]);
  const [loading, setLoading] = useState(true);

  const alunos = [
    { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
    { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
    { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }
  ];

  useEffect(() => {
    if (medias.length > 0) {
      setLoading(false);
    }
  }, [medias]);
  
//A função renderAlunosAcimaDaMedia filtra os alunos com média superior ou igual a 6.0 
//e gera um vetor de elementos JSX contendo apenas os nomes desses alunos.

  const renderAlunosAcimaDaMedia = () => {
    return alunos
      .filter((aluno, index) => medias[index] >= 6.0)
      .map(aluno => <p key={aluno.nome}>{aluno.nome}</p>);
  };

  return (
    <div>
      <h1>Componente Questao01A</h1>
      {loading ? <p>Calculando médias...</p> : renderAlunosAcimaDaMedia()}
      <Questao01B alunos={alunos} setMedias={setMedias} />
    </div>
  );
};

export default Questao01A;
