import React from 'react'

interface QuestionAnswerProps {
  question: string
  answer: string
}

const QuestionAnswer: React.FC<QuestionAnswerProps> = ({ question, answer }) => (
  <div className="py-2 sm:py-3">
    <p className="font-semibold mb-2 sm:mb-2">{question}</p>
    <p>{answer}</p>
  </div>
)

export default QuestionAnswer 