type ContactFormContent = {
  title: string;
  description: string;
  unavailable: string;
  fields: { name: string; email: string; phone: string; inquiryType: string; faculty: string; subject: string; message: string; consent: string };
  inquiryTypes: Array<{ value: string; label: string }>;
  submit: string;
};

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: string }) {
  return <label className="text-sm font-extrabold text-[var(--color-foreground)]" htmlFor={htmlFor}>{children}</label>;
}

const fieldClass = "mt-2 min-h-11 w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)]";

export function StaticContactForm({ content }: { content: ContactFormContent }) {
  return (
    <section aria-labelledby="contact-form-title" className="surface-card p-6 sm:p-8">
      <h2 className="text-2xl font-extrabold text-[var(--color-foreground)]" id="contact-form-title">{content.title}</h2>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{content.description}</p>
      <p className="mt-4 rounded-[var(--radius-sm)] border border-[color-mix(in_srgb,var(--color-brand-gold)_42%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-brand-gold)_10%,transparent)] px-4 py-3 text-sm font-semibold leading-6 text-[var(--color-foreground)]" id="contact-form-note">{content.unavailable}</p>
      <form aria-describedby="contact-form-note" className="mt-6 grid gap-5 sm:grid-cols-2">
        <div><FieldLabel htmlFor="contact-name">{content.fields.name}</FieldLabel><input autoComplete="name" className={fieldClass} id="contact-name" name="name" type="text" /></div>
        <div><FieldLabel htmlFor="contact-email">{content.fields.email}</FieldLabel><input autoComplete="email" className={fieldClass} id="contact-email" name="email" type="email" /></div>
        <div><FieldLabel htmlFor="contact-phone">{content.fields.phone}</FieldLabel><input autoComplete="tel" className={fieldClass} id="contact-phone" name="phone" type="tel" /></div>
        <div><FieldLabel htmlFor="contact-type">{content.fields.inquiryType}</FieldLabel><select className={fieldClass} defaultValue="" id="contact-type" name="inquiryType"><option disabled value="">—</option>{content.inquiryTypes.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></div>
        <div><FieldLabel htmlFor="contact-faculty">{content.fields.faculty}</FieldLabel><input className={fieldClass} id="contact-faculty" name="faculty" type="text" /></div>
        <div><FieldLabel htmlFor="contact-subject">{content.fields.subject}</FieldLabel><input className={fieldClass} id="contact-subject" name="subject" type="text" /></div>
        <div className="sm:col-span-2"><FieldLabel htmlFor="contact-message">{content.fields.message}</FieldLabel><textarea className={`${fieldClass} min-h-32 resize-y`} id="contact-message" name="message" rows={5} /></div>
        <label className="sm:col-span-2 flex items-start gap-3 text-sm leading-6 text-[var(--color-muted)]"><input className="mt-1 h-4 w-4 accent-[var(--color-brand-navy)]" name="consent" type="checkbox" />{content.fields.consent}</label>
        <button aria-describedby="contact-form-note" aria-disabled="true" className="button-base button-primary cursor-not-allowed opacity-60 sm:col-span-2" disabled type="button">{content.submit}</button>
      </form>
    </section>
  );
}
