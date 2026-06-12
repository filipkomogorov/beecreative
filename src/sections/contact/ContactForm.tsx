import {
  type FormEvent,
  useState,
} from "react";

interface ContactFormState {
  name: string;
  email: string;
  topic: string;
  budget: string;
  message: string;
  company: string;
}

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  topic: "Нов уебсайт",
  budget: "още не знам",
  message: "",
  company: "",
};

const budgetOptions = [
  "до 2 000 евро",
  "2–5 000 евро",
  "5–10 000 евро",
  "над 10 000 евро",
  "още не знам",
];

const ContactForm = () => {
  const [form, setForm] =
    useState<ContactFormState>(initialFormState);

  const [statusVisible, setStatusVisible] =
    useState(false);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    if (form.company.trim()) {
      return;
    }

    const subject =
      `Запитване: ${form.topic} — ${form.name}`;

    const body = [
      `Име: ${form.name}`,
      `Имейл: ${form.email}`,
      `Проект: ${form.topic}`,
      `Бюджет: ${form.budget || "—"}`,
      "",
      form.message,
    ].join("\n");

    setStatusVisible(true);

    window.location.href =
      `mailto:hello@beecreative.studio` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="f-name">Име</label>

        <input
          type="text"
          id="f-name"
          name="name"
          autoComplete="name"
          required
          value={form.name}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              name: event.target.value,
            }))
          }
        />
      </div>

      <div className="field">
        <label htmlFor="f-email">Имейл</label>

        <input
          type="email"
          id="f-email"
          name="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              email: event.target.value,
            }))
          }
        />
      </div>

      <div className="field">
        <label htmlFor="f-topic">
          За какво е проектът
        </label>

        <select
          id="f-topic"
          name="topic"
          value={form.topic}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              topic: event.target.value,
            }))
          }
        >
          <option>Нов уебсайт</option>
          <option>Онлайн магазин</option>
          <option>Уеб приложение</option>
          <option>Анимация и интеракции</option>
          <option>Дигитален маркетинг</option>
          <option>Друго</option>
        </select>
      </div>

      <fieldset className="field budget-fieldset">
        <legend className="field-legend">
          Ориентировъчен бюджет
        </legend>

        <div className="chip-set">
          {budgetOptions.map((budget) => (
            <label key={budget}>
              <input
                type="radio"
                name="budget"
                value={budget}
                checked={form.budget === budget}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    budget: event.target.value,
                  }))
                }
              />

              <span>{budget}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="f-msg">
          Съобщение
        </label>

        <textarea
          id="f-msg"
          name="message"
          placeholder="Какво градите, за кого е и кога трябва да е готово?"
          required
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
        />
      </div>

      <p className="hp" aria-hidden="true">
        <label>
          Фирма (оставете празно)

          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                company: event.target.value,
              }))
            }
          />
        </label>
      </p>

      <button
        className="btn btn-big contact-submit"
        type="submit"
      >
        Изпрати съобщението

        <span
          className="arr"
          aria-hidden="true"
        >
          →
        </span>
      </button>

      {statusVisible && (
        <p
          className="form-status"
          role="status"
        >
          Отваряме имейл приложението ви… Ако не се
          отвори, пишете ни директно на
          hello@beecreative.studio.
        </p>
      )}
    </form>
  );
};

export default ContactForm;