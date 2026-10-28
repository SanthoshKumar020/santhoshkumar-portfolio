import { useState } from 'react';
import { CheckCircle2, Loader2, Mail, MailOpen, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { socials } from '../data/content';

const AJAX_ENDPOINT = 'https://formsubmit.co/ajax/kumarsanthosh2743@gmail.com';
const FORM_ACTION = 'https://formsubmit.co/kumarsanthosh2743@gmail.com';
const SITE_URL = 'https://santhoshkumar-portfolio-coral.vercel.app/';

type InquiryType = 'client' | 'recruiter';
type Status = 'idle' | 'sending' | 'sent' | 'failed';

/** Contact form: AJAX POST to FormSubmit (with honeypot + no-JS fallback
 *  action). On fetch failure the visitor is offered a pre-filled mailto
 *  instead — the form never silently swallows a message. */
export default function Contact() {
  const [type, setType] = useState<InquiryType>('client');
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', service: 'Marketing & business website', message: '' });

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const mailtoHref = () => {
    const subject = encodeURIComponent(
      type === 'client' ? `Project enquiry from ${form.name || 'website visitor'}` : `Recruiter enquiry — ${form.role || 'role'} at ${form.company || 'your company'}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n${type === 'client' ? `Service: ${form.service}` : `Role: ${form.role}`}\n\n${form.message}`,
    );
    return `mailto:${socials.email}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(AJAX_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: type === 'client' ? 'New project enquiry — portfolio' : 'New recruiter enquiry — portfolio',
          _template: 'table',
          _captcha: 'false',
          inquiry_type: type,
          name: form.name,
          email: form.email,
          company: form.company,
          role: form.role,
          service: form.service,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error(`FormSubmit responded ${res.status}`);
      setStatus('sent');
    } catch {
      setStatus('failed');
    }
  };

  const inputCls =
    'w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none';

  return (
    <section id="contact" className="border-t border-line bg-surface/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHeading
          eyebrow="Contact"
          title="Tell me what you are building — or hiring for"
          description="Clients get a free discovery call and a fixed written quote. Recruiters get a fast, honest reply. Either way, expect an answer within one working day."
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="space-y-4 text-base text-muted">
              <p className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-accent" />
                <a href={`mailto:${socials.email}`} className="font-medium text-text hover:underline">
                  {socials.email}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-accent" />
                <a href={`tel:${socials.phone.replace(/-/g, '')}`} className="font-medium text-text hover:underline">
                  {socials.phone}
                </a>
              </p>
              <p className="text-sm leading-relaxed">
                Prefer LinkedIn or GitHub? Both are linked in the About section and the footer. This
                form delivers to the same inbox as a direct email.
              </p>
              <p className="rounded-2xl border border-line bg-surface p-4 text-sm">
                <strong className="text-text">First submission note:</strong> the form provider sends
                a one-time activation email before the first message is delivered — it is activated
                once and then every message arrives normally.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            {status === 'sent' ? (
              <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-line bg-surface p-8">
                <CheckCircle2 size={32} className="text-accent" />
                <h3 className="font-display mt-4 text-2xl font-bold text-text">Message sent — thank you.</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  Your message is on its way to {socials.email}. Expect a reply within one working day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setForm({ name: '', email: '', company: '', role: '', service: 'Marketing & business website', message: '' });
                  }}
                  className="mt-6 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-text hover:border-line-strong"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                action={FORM_ACTION}
                method="POST"
                className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
              >
                {/* Honeypot — real visitors leave this blank; bots fill it. */}
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <input type="hidden" name="_subject" value="New enquiry — portfolio" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={SITE_URL} />

                <div className="flex gap-2" role="tablist" aria-label="Enquiry type">
                  {(['client', 'recruiter'] as InquiryType[]).map((t) => (
                    <button
                      key={t}
                      type="button"
                      role="tab"
                      aria-selected={type === t}
                      onClick={() => setType(t)}
                      className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                        type === t ? 'bg-accent text-accent-text' : 'border border-line text-muted hover:text-text'
                      }`}
                    >
                      {t === 'client' ? "I'm a client" : "I'm a recruiter"}
                    </button>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-text">
                    Your name *
                    <input required value={form.name} onChange={set('name')} name="name" placeholder="Your full name" className={`${inputCls} mt-1.5`} />
                  </label>
                  <label className="block text-sm font-medium text-text">
                    Email *
                    <input required type="email" value={form.email} onChange={set('email')} name="email" placeholder="you@example.com" className={`${inputCls} mt-1.5`} />
                  </label>
                  <label className="block text-sm font-medium text-text sm:col-span-1">
                    {type === 'client' ? 'Company / business (optional)' : 'Company *'}
                    <input
                      required={type === 'recruiter'}
                      value={form.company}
                      onChange={set('company')}
                      name="company"
                      placeholder={type === 'client' ? 'Your business name' : 'Hiring company'}
                      className={`${inputCls} mt-1.5`}
                    />
                  </label>
                  {type === 'client' ? (
                    <label className="block text-sm font-medium text-text">
                      Service needed
                      <select value={form.service} onChange={set('service')} name="service" className={`${inputCls} mt-1.5`}>
                        <option>Marketing &amp; business website</option>
                        <option>Web application</option>
                        <option>Automation / internal tool</option>
                        <option>AI-powered feature</option>
                        <option>Not sure yet — need advice</option>
                      </select>
                    </label>
                  ) : (
                    <label className="block text-sm font-medium text-text">
                      Role *
                      <input required value={form.role} onChange={set('role')} name="role" placeholder="e.g. Frontend Developer" className={`${inputCls} mt-1.5`} />
                    </label>
                  )}
                  <label className="block text-sm font-medium text-text sm:col-span-2">
                    Message *
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={set('message')}
                      name="message"
                      placeholder={
                        type === 'client'
                          ? 'What do you want to build, and who is it for?'
                          : 'Role, location, and what caught your eye — links welcome.'
                      }
                      className={`${inputCls} mt-1.5 resize-y`}
                    />
                  </label>
                </div>

                {status === 'failed' && (
                  <p className="mt-4 rounded-xl border border-line bg-elevated p-4 text-sm text-muted">
                    The form could not reach the inbox right now. Your message is not lost — open
                    your email app with everything pre-filled instead:{' '}
                    <a href={mailtoHref()} className="font-semibold text-accent hover:underline">
                      Send via email
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-text transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <MailOpen size={16} /> Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
