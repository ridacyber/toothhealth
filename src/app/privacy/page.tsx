import Link from 'next/link';
import { Shield } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - ToothHealth',
  description: 'Learn how ToothHealth protects your privacy and handles your data.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-24">
        <Link
          href="/"
          className="inline-flex items-center text-muted hover:text-primary mb-8 transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="bg-surface border border-border rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl font-display font-semibold text-foreground">
              Privacy Policy
            </h1>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-muted mb-8">
              <strong>ToothHealth · Last updated June 5, 2025</strong>
            </p>

            <div className="bg-primary-light/50 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-3">
                Plain-English summary
              </h2>
              <p className="text-muted leading-relaxed">
                No account is required. No personal health data is collected or stored. Questions typed into ToothHealth are processed by Groq's AI infrastructure and are subject to Groq's privacy policy. Location data is used only to find nearby dentists and is never stored. ToothHealth does not advertise, track, or sell any data.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">
              What ToothHealth collects
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              ToothHealth does not require an account, login, or any identifying information to use. No names, email addresses, or health records are collected or retained. Questions submitted through the AI search are sent directly to Groq's API for processing and are not stored on ToothHealth's servers after a response is returned.
            </p>

            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Location data
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              When a visitor chooses to find nearby dentists, the browser requests their device's approximate location via the standard Geolocation API. This coordinate is used only to query OpenStreetMap's Overpass API for real dental clinics in the area. The location is not logged, stored, or associated with any other data. Granting or denying location access is entirely the visitor's choice — denying it only disables the dentist search feature.
            </p>

            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">
              AI processing — Groq
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              All questions submitted to ToothHealth are processed by Groq, Inc.'s large language model infrastructure. Groq has its own data handling policies that govern how submitted text is processed, retained, or used. Visitors should review Groq's privacy policy directly at{' '}
              <a 
                href="https://groq.com/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                groq.com/privacy-policy
              </a>{' '}
              to understand how their questions are handled at the infrastructure level.
            </p>

            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Hosting — Vercel
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              ToothHealth is deployed on Vercel's platform. Vercel may collect standard web server logs (IP addresses, request timestamps, browser type) as part of normal hosting operations. This is governed by Vercel's own privacy policy, available at{' '}
              <a 
                href="https://vercel.com/legal/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                vercel.com/legal/privacy-policy
              </a>.
            </p>

            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Dentist directory data
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Dental clinic information displayed on ToothHealth is sourced from OpenStreetMap via the Overpass API, a publicly contributed geographic database. No data from the dentist directory is stored by ToothHealth. OpenStreetMap data is made available under the Open Database License.
            </p>

            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Blog content
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Articles displayed in the blog section are sourced from publicly available RSS feeds published by third-party dental health organizations including Colgate, Healthline, WebMD, and the American Dental Association. ToothHealth does not store or republish this content — it is fetched directly and linked back to the original source. Each publication's own privacy policy governs any interaction that occurs on their site.
            </p>

            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Cookies and tracking
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              ToothHealth does not use advertising cookies, tracking pixels, analytics scripts, or third-party trackers. No behavioral data is collected. If any functional cookies are set by the hosting infrastructure, they are strictly technical in nature and contain no personal information.
            </p>

            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Children
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              ToothHealth does not knowingly collect any information from children under 13. The platform does not require any data submission to use — questions are anonymous by design.
            </p>

            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Changes to this policy
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              This policy may be updated from time to time. The date at the top of this page reflects the most recent revision. Continued use of ToothHealth after a policy update constitutes acceptance of the revised terms.
            </p>

            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">
              Contact
            </h2>
            <p className="text-muted leading-relaxed">
              Questions about this privacy policy can be directed to{' '}
              <a href="mailto:info@tawakalstudio.com" className="text-primary hover:underline">
                info@tawakalstudio.com
              </a>
            </p>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted text-sm">
                Built by TawakalStudio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
