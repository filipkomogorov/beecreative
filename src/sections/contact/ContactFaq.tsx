import SectionHeading from "../../components/shared/SectionHeading";
import { contactFaqItems } from "../../data/faq";

const ContactFaq = () => {
  return (
    <section
      className="section contact-faq-section"
      aria-label="Често задавани въпроси"
    >
      <div className="wrap">
        <SectionHeading
          eyebrow="Преди да пишете"
          title={
            <>
              Често ни <em>питат</em>
            </>
          }
          description="Кратките отговори — за дългите е разговорът."
        />

        <div
          className="faq-list"
          data-reveal
        >
          {contactFaqItems.map((item) => (
            <details
              className="faq"
              key={item.question}
            >
              <summary>
                <span>{item.question}</span>

                <span
                  className="plus"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <p className="answer">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFaq;