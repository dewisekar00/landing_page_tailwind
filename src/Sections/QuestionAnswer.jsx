import React from 'react';
import Question from '../components/Question';

const QuestionAnswer = () => {
  return (
    <div className="my-32">
      <h2 className="text-center font-semibold text-4xl">Frequently asked Question</h2>
      <Question question="What should I consider when buying home?" answer="asnwer" />
      <Question question="How do I sell my property through your website?" answer="answer" />
      <Question question="How can I contact your customer support team" answer="answer" />
    </div>
  );
};

export default QuestionAnswer;
