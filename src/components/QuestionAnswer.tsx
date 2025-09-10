import React from 'react'

interface QuestionAnswerProps {
  question: string
  answer: string
}

const QuestionAnswer: React.FC<QuestionAnswerProps> = ({ question, answer }) => (
  <div className="pb-6 sm:pb-8">
    <p className="text-black mb-2 sm:mb-2">{question}</p>
    <p className="text-black opacity-60">{answer}</p>
  </div>
)

export default QuestionAnswer 