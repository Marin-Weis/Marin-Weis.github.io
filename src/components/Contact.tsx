import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import Title from "./Title";
import { useLanguage } from "../i18n/language";

// Web3Forms access key (public by design — protected by spam filter + domain
// restriction). Overridable per-environment via VITE_WEB3FORMS_KEY in .env.
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY ??
  "0d78bef9-7246-47be-a0ba-03b6fdc6e708";

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("from_name", "Portfolio Marin Weis");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fade-in-up">
      <Title title={t.contact.title} />

      <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-start mt-6">
        <div className="glass-card-soft p-6 md:p-8 space-y-5">
          <p className="text-sm md:text-base text-base-content/80">
            {t.contact.intro}
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="btn btn-circle btn-sm btn-ghost border border-base-300/70 text-accent">
                <Mail className="w-4 h-4" />
              </div>
              <a
                href="mailto:marin.weis@gmail.com"
                className="link link-hover font-medium"
              >
                marin.weis@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="btn btn-circle btn-sm btn-ghost border border-base-300/70 text-accent">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-base-content/80">
                {t.contact.availability}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="btn btn-circle btn-sm btn-ghost border border-base-300/70 text-accent">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-base-content/80">{t.contact.location}</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 md:p-7 space-y-4">
          {status === "success" ? (
            <div className="flex flex-col items-center text-center gap-3 py-6">
              <CheckCircle2 className="w-12 h-12 text-accent" />
              <h3 className="font-semibold text-lg">{t.contact.successTitle}</h3>
              <p className="text-sm text-base-content/80">
                {t.contact.successMsg}
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-semibold text-lg">{t.contact.formTitle}</h3>
              <p className="text-xs md:text-sm text-base-content/80">
                {t.contact.formHint}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot — hidden from humans, traps bots */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="form-control w-full">
                    <span className="label-text text-xs md:text-sm">
                      {t.contact.nameLabel}
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="input input-bordered input-sm md:input-md w-full"
                      placeholder={t.contact.namePlaceholder}
                    />
                  </label>

                  <label className="form-control w-full">
                    <span className="label-text text-xs md:text-sm">
                      {t.contact.emailLabel}
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="input input-bordered input-sm md:input-md w-full"
                      placeholder={t.contact.emailPlaceholder}
                    />
                  </label>
                </div>

                <label className="form-control w-full">
                  <span className="label-text text-xs md:text-sm">
                    {t.contact.subjectLabel}
                  </span>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="input input-bordered input-sm md:input-md w-full"
                    placeholder={t.contact.subjectPlaceholder}
                  />
                </label>

                <label className="form-control w-full">
                  <span className="label-text text-xs md:text-sm">
                    {t.contact.messageLabel}
                  </span>
                  <textarea
                    name="message"
                    required
                    className="textarea textarea-bordered textarea-sm md:textarea-md w-full min-h-28"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </label>

                {status === "error" && (
                  <p className="text-xs md:text-sm text-error">
                    {t.contact.errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-accent btn-block md:btn-md btn-sm normal-case gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t.contact.sending}
                    </>
                  ) : (
                    t.contact.send
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
