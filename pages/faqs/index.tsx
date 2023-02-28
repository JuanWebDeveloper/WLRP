import { frequentlyQuestions } from '@/core/utils/frequentlyQuestions';

const FAQS = () => {
  const toggleAnswer = (event: any): void => {
    const currentQuestionAnswer = event.target.parentNode.querySelector('.answer');
    const answers = document.querySelectorAll('.answer');
    const questions = document.querySelectorAll('.question');

    answers.forEach((answer, i) => {
      if (answer == currentQuestionAnswer) {
        answer.classList.toggle('active');
        questions[i].classList.toggle('active');
      } else {
        answer.classList.remove('active');
        questions[i].classList.remove('active');
      }
    });
  };

  return (
    <div className='faqs'>
      <h2>
        <span>FAQ&lsquo;S</span>
      </h2>
      <div className='content'>
        {frequentlyQuestions.map((faq, i) => (
          <div key={i} className='faq'>
            <div className='question' onClick={toggleAnswer}>
              {faq.question} <i className='fas fa-plus'></i>
            </div>
            <div className='answer'>{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
