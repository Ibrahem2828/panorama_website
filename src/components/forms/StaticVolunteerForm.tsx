type VolunteerFormContent = {
  title: string;
  description: string;
  unavailable: string;
  fields: { name: string; university: string; faculty: string; academicYear: string; email: string; phone: string; track: string; skills: string; motivation: string; availability: string; portfolio: string; consent: string };
  tracks: Array<{ value: string; label: string }>;
  submit: string;
};

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: string }) {
  return <label className="text-sm font-extrabold text-[var(--color-foreground)]" htmlFor={htmlFor}>{children}</label>;
}

const fieldClass = "mt-2 min-h-11 w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)]";

export function StaticVolunteerForm({ content }: { content: VolunteerFormContent }) {
  return (
    <section aria-labelledby="volunteer-form-title" className="surface-card p-6 sm:p-8">
      <h2 className="text-2xl font-extrabold text-[var(--color-foreground)]" id="volunteer-form-title">{content.title}</h2>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{content.description}</p>
      <p className="mt-4 rounded-[var(--radius-sm)] border border-[color-mix(in_srgb,var(--color-brand-gold)_42%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-brand-gold)_10%,transparent)] px-4 py-3 text-sm font-semibold leading-6 text-[var(--color-foreground)]" id="volunteer-form-note">{content.unavailable}</p>
      <form aria-describedby="volunteer-form-note" className="mt-6 grid gap-5 sm:grid-cols-2">
        <div><FieldLabel htmlFor="volunteer-name">{content.fields.name}</FieldLabel><input autoComplete="name" className={fieldClass} id="volunteer-name" name="name" type="text" /></div>
        <div><FieldLabel htmlFor="volunteer-university">{content.fields.university}</FieldLabel><input className={fieldClass} id="volunteer-university" name="university" type="text" /></div>
        <div><FieldLabel htmlFor="volunteer-faculty">{content.fields.faculty}</FieldLabel><input className={fieldClass} id="volunteer-faculty" name="faculty" type="text" /></div>
        <div><FieldLabel htmlFor="volunteer-year">{content.fields.academicYear}</FieldLabel><input className={fieldClass} id="volunteer-year" name="academicYear" type="text" /></div>
        <div><FieldLabel htmlFor="volunteer-email">{content.fields.email}</FieldLabel><input autoComplete="email" className={fieldClass} id="volunteer-email" name="email" type="email" /></div>
        <div><FieldLabel htmlFor="volunteer-phone">{content.fields.phone}</FieldLabel><input autoComplete="tel" className={fieldClass} id="volunteer-phone" name="phone" type="tel" /></div>
        <div><FieldLabel htmlFor="volunteer-track">{content.fields.track}</FieldLabel><select className={fieldClass} defaultValue="" id="volunteer-track" name="track"><option disabled value="">—</option>{content.tracks.map((track) => <option key={track.value} value={track.value}>{track.label}</option>)}</select></div>
        <div><FieldLabel htmlFor="volunteer-availability">{content.fields.availability}</FieldLabel><input className={fieldClass} id="volunteer-availability" name="availability" type="text" /></div>
        <div className="sm:col-span-2"><FieldLabel htmlFor="volunteer-skills">{content.fields.skills}</FieldLabel><textarea className={`${fieldClass} min-h-24 resize-y`} id="volunteer-skills" name="skills" rows={4} /></div>
        <div className="sm:col-span-2"><FieldLabel htmlFor="volunteer-motivation">{content.fields.motivation}</FieldLabel><textarea className={`${fieldClass} min-h-32 resize-y`} id="volunteer-motivation" name="motivation" rows={5} /></div>
        <div className="sm:col-span-2"><FieldLabel htmlFor="volunteer-portfolio">{content.fields.portfolio}</FieldLabel><input className={fieldClass} id="volunteer-portfolio" name="portfolio" type="url" /></div>
        <label className="sm:col-span-2 flex items-start gap-3 text-sm leading-6 text-[var(--color-muted)]"><input className="mt-1 h-4 w-4 accent-[var(--color-brand-navy)]" name="consent" type="checkbox" />{content.fields.consent}</label>
        <button aria-describedby="volunteer-form-note" aria-disabled="true" className="button-base button-primary cursor-not-allowed opacity-60 sm:col-span-2" disabled type="button">{content.submit}</button>
      </form>
    </section>
  );
}
