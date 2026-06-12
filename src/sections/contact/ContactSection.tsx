import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      className="section contact-section"
      id="forma"
    >
      <div className="wrap">
        <div className="contact-grid">
          <div data-reveal>
            <ContactForm />
          </div>

          <div data-reveal>
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;