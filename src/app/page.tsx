import HeroSearch from '@/components/HeroSearch';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';
import { ToothMascot } from '@/components/ToothMascot';

async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/blogs`, { cache: 'no-store' });
  if (!res.ok) return [];
  const data = await res.json();
  return data.articles ?? [];
}

export default async function Home() {
  const articles = await getBlogs();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-primary">
                <ToothMascot size={32} />
              </div>
              <span className="text-xl font-display font-semibold text-foreground">
                ToothHealth
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/dentists" className="text-foreground hover:text-primary transition-colors">
                Find a Dentist
              </Link>
              <Link href="/privacy" className="text-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <section className="hero pt-32 pb-20 px-4">
          <div className="hero__inner max-w-4xl mx-auto text-center">
            <span className="hero__eyebrow inline-block px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium mb-6">
              Dental Health, Simplified
            </span>
            <h1 className="hero__headline text-5xl md:text-6xl font-display font-semibold text-foreground mb-6">
              <em>Understand</em> your dental concerns.<br />
              <span className="text-primary">Find the Right Dentist.</span>
            </h1>
            <p className="hero__sub text-xl text-muted mb-8 max-w-2xl mx-auto">
              Ask questions anonymously. Learn what your symptoms might mean. Discover real dentists near you.
            </p>
            <HeroSearch />
            <p className="hero__note text-sm text-muted mt-4">No account required. No data stored.</p>
          </div>
        </section>

        {/* Features */}
        <section className="features py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="features__grid grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="feature-card bg-surface border border-border rounded-2xl p-8 hover:border-primary transition-colors">
                <i className="ti ti-shield-lock text-4xl text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Anonymous questions</h3>
                <p className="text-muted">No login, no account, no tracking. Just ask.</p>
              </div>
              <div className="feature-card bg-surface border border-border rounded-2xl p-8 hover:border-primary transition-colors">
                <i className="ti ti-books text-4xl text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Educational guidance</h3>
                <p className="text-muted">Plain-language explanations of what your symptoms might mean.</p>
              </div>
              <div className="feature-card bg-surface border border-border rounded-2xl p-8 hover:border-primary transition-colors">
                <i className="ti ti-map-pin text-4xl text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Real dentists nearby</h3>
                <p className="text-muted">Live data from OpenStreetMap. Real clinics, real addresses, real phone numbers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="blog py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-display font-semibold text-foreground mb-4 text-center">Dental Health Publications</h2>
            <p className="blog__sub text-muted text-center mb-12 max-w-2xl mx-auto">
              Real articles from Colgate, Healthline, WebMD, and the ADA.
            </p>
            <div className="blog__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((a: any, i: number) => (
                <BlogCard key={i} article={a} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <div className="text-primary">
                <ToothMascot size={32} />
              </div>
              <span className="text-lg font-display font-semibold text-foreground">
                ToothHealth
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span>© 2026 ToothHealth</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
