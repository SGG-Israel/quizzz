import './index.scss';
import React from 'react';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ correct, setCorrect, setStep, step }) {
  return (
    <div className="result">
      <img alt="congratulation" src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>

      <button
        onClick={() => {
          setCorrect((correct = 0));
          setStep((step = 0));
        }}
      >
        Попробовать снова
      </button>
    </div>
  );
}

function Game({ question, onClickVariable, step }) {
  const range = Math.round(((step + 0.5) / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${range}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li key={text} onClick={() => onClickVariable(index)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const question = questions[step];
  const [correct, setCorrect] = React.useState(0);
  console.log(question);

  const onClickVariable = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariable={onClickVariable} />
      ) : (
        <Result step={step} setStep={setStep} correct={correct} setCorrect={setCorrect} />
      )}
    </div>
  );
}

export default App;
