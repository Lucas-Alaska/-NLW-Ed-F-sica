const perguntas = [
  {
    pergunta: "O que é considerado um exercício aeróbico?",
    respostas: [
      "A) Levantamento de peso",
      "B) Corrida",
      "C) Flexões",
    ],
    correta: 1 // B) Corrida
  },
  {
    pergunta: "Qual é a principal função do alongamento antes do exercício?",
    respostas: [
      "A) Ganhar massa muscular",
      "B) Melhorar a flexibilidade",
      "C) Aumentar a força",
    ],
    correta: 1 // B) Melhorar a flexibilidade
  },
  {
    pergunta: "O que é o índice de massa corporal (IMC) e como ele é calculado?",
    respostas: [
      "A) Mede a força muscular, calculado dividindo o peso pela altura ao quadrado",
      "B) Indica a quantidade de gordura corporal, calculado multiplicando o peso pela altura",
      "C) Mede a relação entre peso e altura, calculado dividindo o peso pela altura ao quadrado",
    ],
    correta: 2 // C) Mede a relação entre peso e altura, calculado dividindo o peso pela altura ao quadrado
  },
  {
    pergunta: "O que é a frequência cardíaca de repouso?",
    respostas: [
      "A) A frequência cardíaca durante o exercício",
      "B) A frequência cardíaca após uma refeição",
      "C) A frequência cardíaca em repouso, sem atividade física",
    ],
    correta: 2 // C) A frequência cardíaca em repouso, sem atividade física
  },
  {
    pergunta: "Quais são os benefícios da prática regular de atividades físicas para a saúde mental?",
    respostas: [
      "A) Aumento do estresse",
      "B) Melhora do humor e redução da ansiedade",
      "C) Diminuição da concentração",
    ],
    correta: 1 // B) Melhora do humor e redução da ansiedade
  },
  {
    pergunta: "O que é fundamental para evitar lesões durante a prática esportiva?",
    respostas: [
      "A) Não se alongar antes do exercício",
      "B) Ignorar sinais de dor",
      "C) Realizar um aquecimento adequado e utilizar técnicas corretas",
    ],
    correta: 2 // C) Realizar um aquecimento adequado e utilizar técnicas corretas
  },
  {
    pergunta: "Qual é a importância da hidratação durante a prática de exercícios físicos?",
    respostas: [
      "A) Causar desconforto gástrico",
      "B) Reduzir o desempenho atlético",
      "C) Manter o equilíbrio hídrico e prevenir a desidratação",
    ],
    correta: 2 // C) Manter o equilíbrio hídrico e prevenir a desidratação
  },
  {
    pergunta: "O que é fundamental para se obter um condicionamento físico adequado?",
    respostas: [
      "A) Treinar apenas uma vez por semana",
      "B) Variedade nos tipos de exercícios e consistência na prática",
      "C) Descansar por longos períodos entre os treinos",
    ],
    correta: 1 // B) Variedade nos tipos de exercícios e consistência na prática
  },
  {
    pergunta: "Quais são os componentes principais da aptidão física?",
    respostas: [
      "A) Força e flexibilidade",
      "B) Resistência cardiovascular e velocidade",
      "C) Agilidade e equilíbrio",
    ],
    correta: 0 // A) Força e flexibilidade
  },
  {
    pergunta: "O que é importante para uma boa recuperação após um treino intenso?",
    respostas: [
      "A) Ignorar a fadiga muscular",
      "B) Descanso adequado e nutrição adequada",
      "C) Aumentar a intensidade dos treinos",
    ],
    correta: 1 // B) Descanso adequado e nutrição adequada
  },
];


  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

  // loop ou laço de repetição
 for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta,
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta

        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }

        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }


      
      quizItem.querySelector('dl').appendChild(dt)
    }
    

    quizItem.querySelector('dl dt').remove()
    
    
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }