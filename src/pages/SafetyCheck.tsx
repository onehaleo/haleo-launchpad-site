import React, { useMemo, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import SEOHead from '@/components/SEOHead';
import { cn } from '@/lib/utils';

const TEAM_SIZES = ['1 to 4 people', '5 to 15 people', '16 to 50 people', 'More than 50'] as const;
const INDUSTRIES = ['Accounting or bookkeeping', 'Insurance', 'Legal', 'Property management', 'Health or wellness', 'Other'] as const;
const AI_TOOLS = [
  'ChatGPT',
  'Microsoft Copilot',
  'Google Gemini',
  'Claude',
  'AI built into other software',
  'Meeting note recorders',
  'Not sure what people use',
] as const;
const MEETING = ['In person (Triangle area)', 'Zoom', 'Either is fine'] as const;

/** Same Formspree inbox as the old workflow review; override with VITE_WORKFLOW_FORM_ENDPOINT. */
const DEFAULT_ENDPOINT = 'https://formspree.io/f/mojrjebn';
const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

const field =
  'mt-1.5 w-full rounded-md border border-haleo-line bg-white px-3 py-2.5 text-[16px] text-haleo-ink placeholder:text-haleo-muted/70 focus:border-haleo-pine focus:outline-none focus:ring-2 focus:ring-haleo-pine/30';
const labelCls = 'block text-[15px] font-semibold text-haleo-ink';

const ChoiceGroup = ({
  name,
  legend,
  options,
  value,
  onChange,
  multiple = false,
  invalid = false,
}: {
  name: string;
  legend: string;
  options: readonly string[];
  value: string | string[];
  onChange: (v: string) => void;
  multiple?: boolean;
  invalid?: boolean;
}) => (
  <fieldset>
    <legend className={labelCls}>{legend}</legend>
    <div className={cn('mt-2 grid gap-2 sm:grid-cols-2', invalid && 'rounded-md ring-2 ring-haleo-blocked/60 ring-offset-2')}>
      {options.map((opt) => {
        const checked = multiple ? (value as string[]).includes(opt) : value === opt;
        return (
          <label
            key={opt}
            className={cn(
              'flex cursor-pointer items-center gap-3 rounded-md border bg-white px-3 py-2.5 text-[15px] text-haleo-ink',
              checked ? 'border-haleo-pine bg-haleo-sage/50' : 'border-haleo-hairline hover:border-haleo-line'
            )}
          >
            <input
              type={multiple ? 'checkbox' : 'radio'}
              name={name}
              value={opt}
              checked={checked}
              onChange={() => onChange(opt)}
              className="h-4 w-4 accent-[#1F6B60]"
            />
            {opt}
          </label>
        );
      })}
    </div>
  </fieldset>
);

const SafetyCheck = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [business, setBusiness] = useState('');
  const [website, setWebsite] = useState('');
  const [size, setSize] = useState('');
  const [industry, setIndustry] = useState('');
  const [tools, setTools] = useState<string[]>([]);
  const [worry, setWorry] = useState('');
  const [meeting, setMeeting] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const endpoint = useMemo(
    () => (import.meta.env.VITE_WORKFLOW_FORM_ENDPOINT as string | undefined)?.trim() || DEFAULT_ENDPOINT,
    []
  );

  const toggleTool = (t: string) =>
    setTools((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  const validate = () => {
    if (!name.trim()) return 'Please add your name.';
    if (!isValidEmail(email)) return 'Please add an email address I can reply to.';
    if (!business.trim()) return 'Please add your business name.';
    if (!size) return 'Please choose your team size.';
    if (!worry.trim()) return 'Please tell me a little about what prompted you to reach out.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    setError(null);
    const problem = validate();
    if (problem) {
      setError(problem);
      return;
    }
    const payload = {
      _subject: `AI Safety Check request from ${business.trim()}`,
      _replyto: email.trim(),
      name: name.trim(),
      email: email.trim(),
      business: business.trim(),
      website: website.trim() || 'Not given',
      team_size: size,
      industry: industry || 'Not given',
      ai_tools: tools.length ? tools.join(', ') : 'Not given',
      what_prompted_this: worry.trim(),
      meeting_preference: meeting || 'Either is fine',
    };
    setSubmitting(true);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError('That didn\'t go through. Please try again, or email hello@onehaleo.com and I\'ll set up a time with you directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const invalid = (cond: boolean) => touched && cond;

  return (
    <PageTransition>
      <SEOHead
        title="Book a free AI Safety Check | Haleo"
        description="A free one hour review of how your team uses AI, with a one page summary of your top three risks and the quickest fixes."
      />
      <Navigation />
      <main className="bg-haleo-surface px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow mb-3">Free AI Safety Check</p>
            <h1 className="text-[36px] font-bold leading-[1.1] text-haleo-ink sm:text-[42px]">
              One hour, and you'll know where you stand.
            </h1>
            <div className="reading mt-6 space-y-4 text-haleo-muted">
              <p>
                We'll talk through which AI tools your team uses, where client information ends up, and what's on your mind. Within two business days you get a one page summary with your top three risks and three fixes.
              </p>
              <p>
                There's no cost and no obligation. If it would help, I'm happy to sign a simple NDA before we get into specifics.
              </p>
            </div>
            <p className="mt-6 text-[15px] text-haleo-muted">
              Prefer email? Write to{' '}
              <a href="mailto:hello@onehaleo.com" className="font-semibold text-haleo-pine underline underline-offset-4">
                hello@onehaleo.com
              </a>
              .
            </p>
          </div>

          <div className="rounded-lg border border-haleo-hairline bg-white p-6 sm:p-8">
            {success ? (
              <div role="status">
                <h2 className="text-[24px] font-bold text-haleo-ink">Thanks, I've got your request.</h2>
                <p className="reading mt-3 text-haleo-muted">
                  I'll reply within one business day with a few times that work. If anything is urgent, email hello@onehaleo.com.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="sc-name" className={labelCls}>Your name</label>
                    <input id="sc-name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)}
                      className={cn(field, invalid(!name.trim()) && 'border-haleo-blocked')} />
                  </div>
                  <div>
                    <label htmlFor="sc-email" className={labelCls}>Email</label>
                    <input id="sc-email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)}
                      className={cn(field, invalid(!isValidEmail(email)) && 'border-haleo-blocked')} />
                  </div>
                  <div>
                    <label htmlFor="sc-business" className={labelCls}>Business name</label>
                    <input id="sc-business" name="business" autoComplete="organization" value={business} onChange={(e) => setBusiness(e.target.value)}
                      className={cn(field, invalid(!business.trim()) && 'border-haleo-blocked')} />
                  </div>
                  <div>
                    <label htmlFor="sc-website" className={labelCls}>
                      Website <span className="font-normal text-haleo-muted">(optional)</span>
                    </label>
                    <input id="sc-website" name="website" autoComplete="url" value={website} onChange={(e) => setWebsite(e.target.value)} className={field} />
                  </div>
                </div>

                <ChoiceGroup name="team_size" legend="How many people are on your team?" options={TEAM_SIZES} value={size} onChange={setSize} invalid={invalid(!size)} />
                <ChoiceGroup name="industry" legend="What kind of business is it?" options={INDUSTRIES} value={industry} onChange={setIndustry} />
                <ChoiceGroup name="ai_tools" legend="Which AI tools does your team use? Pick any that apply." options={AI_TOOLS} value={tools} onChange={toggleTool} multiple />

                <div>
                  <label htmlFor="sc-worry" className={labelCls}>What prompted you to reach out?</label>
                  <p className="mt-1 text-sm text-haleo-muted">A sentence or two is plenty. Please don't include any client details.</p>
                  <textarea id="sc-worry" name="what_prompted_this" rows={4} value={worry} onChange={(e) => setWorry(e.target.value)}
                    className={cn(field, invalid(!worry.trim()) && 'border-haleo-blocked')} />
                </div>

                <ChoiceGroup name="meeting" legend="How would you like to meet?" options={MEETING} value={meeting} onChange={setMeeting} />

                {error && (
                  <p role="alert" className="rounded-md border border-haleo-blocked/40 bg-[#FCE8E6] px-4 py-3 text-[15px] text-haleo-blocked">
                    {error}
                  </p>
                )}

                <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
                  {submitting ? 'Sending' : 'Request my Safety Check'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default SafetyCheck;
