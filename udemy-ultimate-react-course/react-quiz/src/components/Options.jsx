// import { useQuiz } from "../contexts/QuizContext";

function Options({ question, answer, dispatch }) {
  // const { dispatch, answer } = useQuiz();

  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={index}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          // disabled={hasAnswered}
        >
          {hasAnswered && index === answer? (index === question.correctOption ? "✔️" : "❌") : ""}
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
