type Article = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category: string;
  source: string;
};

export default function BlogCard({ article }: { article: Article }) {
  const date = article.pubDate
    ? new Date(article.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : '';

  return (
    <a href={article.link} target="_blank" rel="noopener noreferrer" className="blog-card">
      <div className="blog-card__meta">
        <span className="blog-card__source">{article.source}</span>
        {date && <span className="blog-card__date">{date}</span>}
      </div>
      <h3 className="blog-card__title">{article.title}</h3>
      <p className="blog-card__excerpt">{article.description}</p>
      <span className="blog-card__category">{article.category}</span>
    </a>
  );
}
