import Link from 'next/link';

type Props = {

};

const Faq: React.FC<Props> = () => {

  // data sample
  const faqList = [
    {
      question: 'What is NFTCreator?',
      answers: ['Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. Craft beer labore wes anderson cred nesciunt sapiente ea proident.',]
    },
    {
      question: 'How Can I Help You?',
      answers: [
        'Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.',
        'Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.'
      ]
    },
    {
      question: 'Is my data safe with App Showcase?',
      answers: ['Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.',]
    },
    {
      question: 'How much fees does App Showcase?',
      answers: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',]
    },
    {
      question: 'Why app showcase one page template?',
      answers: [
        'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.',
        'Craft beer labore wes anderson cred nesciunt sapiente ea proident. Nihil anim keffiyeh helvetica, Ad vegan excepteur butcher vice lomo.'
      ]
    },
  ];

  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="text-9 fw-600 text-center">Frequently Asked Questions</h2>
        <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
        <p className="lead text-center mb-4">You can present your app FAQ here!</p>
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <hr className="mb-0 opacity-1" />
            <div className="accordion accordion-flush arrow-end" id="faqTopics">
              {faqList.map((faq, idx) => (
                <div className="accordion-item" key={idx}>
                  <h2 className="accordion-header" id={`flush-heading${idx}`}>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${idx}`}
                      aria-expanded="true"
                      aria-controls={`flush-collapse${idx}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${idx}`}
                    className={`accordion-collapse collapse ${idx === 0 && 'show'}`}
                    aria-labelledby={`flush-heading${idx}`}
                    data-bs-parent="#faqTopics"
                  >
                    <div className="accordion-body">
                      {faq.answers.map((answer, idx) => (
                        <p key={idx} className={`${idx===faq.answers.length-1 && 'mb-0'}`} >
                          {answer}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr className="mt-0 opacity-1" />
          </div>
        </div>
        <div className="lead text-center mt-4">
          Can't find it here?&nbsp;
          <Link href="#contact">
            <a className="btn-link smooth-scroll">
              Tell us your query here.
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faq;
