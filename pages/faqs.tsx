import { frequentlyQuestions } from '@/core/utils/frequentlyQuestions';

const FAQS = () => {
  return (
    <div className='faqs'>
      <h2>
        <span>FAQ&lsquo;S</span>
      </h2>
      <div className='content'>
        {frequentlyQuestions.map((faq, i) => (
          <div key={i} className='faq'>
            <div className='question'>
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
