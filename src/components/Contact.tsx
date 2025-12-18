import { Mail, MessageCircle, MapPin } from "lucide-react";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="fade-in-up">
      <Title title="Let's work together" />

      <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-start mt-6">
        <div className="glass-card-soft p-6 md:p-8 space-y-5">
          <p className="text-sm md:text-base text-base-content/80">
            You have a project, an internship offer, or just want to talk about
            web development and design? Feel free to reach out — I usually
            answer quickly.
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="btn btn-circle btn-sm btn-ghost border border-base-300/70">
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
              <div className="btn btn-circle btn-sm btn-ghost border border-base-300/70">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-base-content/80">
                Available for internships, projects and collaborations.
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="btn btn-circle btn-sm btn-ghost border border-base-300/70">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-base-content/80">Based in Vannes, France</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 md:p-7 space-y-4">
          <h3 className="font-semibold text-lg">Quick message</h3>
          <p className="text-xs md:text-sm text-base-content/80">
            This form opens your default mail client with a pre-filled email.
          </p>

          <form
            action="mailto:marin.weis@gmail.com"
            method="GET"
            className="space-y-4"
          >
            <label className="form-control w-full">
              <span className="label-text text-xs md:text-sm">Subject</span>
              <input
                type="text"
                name="subject"
                className="input input-bordered input-sm md:input-md w-full"
                placeholder="Internship opportunity, project idea…"
              />
            </label>

            <label className="form-control w-full">
              <span className="label-text text-xs md:text-sm">Message</span>
              <textarea
                name="body"
                className="textarea textarea-bordered textarea-sm md:textarea-md w-full min-h-28"
                placeholder="Tell me more about your project or idea."
              />
            </label>

            <button
              type="submit"
              className="btn btn-accent btn-block md:btn-md btn-sm normal-case"
            >
              Send email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


