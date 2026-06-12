const ContactDetails = () => {
  return (
    <aside aria-label="Директна връзка">
      <div className="direct-block">
        <span className="label">Имейл</span>

        <a
          className="big"
          href="mailto:hello@beecreative.studio"
        >
          hello@beecreative.studio
        </a>
      </div>

      <div className="direct-block">
        <span className="label">Телефон</span>

        <a
          className="big"
          href="tel:+359881234567"
        >
          +359 88 123 4567
        </a>

        <p className="contact-hours">
          Пон–Пет, 9:00–18:00
        </p>
      </div>

      <div className="direct-block">
        <span className="label">Кошерът</span>

        <p>
          Русе, България — работим с клиенти от
          целия свят, дистанционно или на място.
        </p>
      </div>

      <div className="direct-block">
        <span className="label">Социални</span>

        <p>
          <a href="#">LinkedIn</a>
          {" · "}
          <a href="#">GitHub</a>
          {" · "}
          <a href="#">Dribbble</a>
        </p>
      </div>

      <div className="direct-block">
        <span className="label">
          Време за отговор
        </span>

        <p>
          До един работен ден. Обикновено
          по-бързо — кошерът рядко спи.
        </p>
      </div>
    </aside>
  );
};

export default ContactDetails;