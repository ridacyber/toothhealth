import { NextResponse } from 'next/server';

// Manually curated dental articles from approved sources
const DENTAL_ARTICLES = [
  {
    title: "How to Brush Your Teeth Properly",
    link: "https://www.colgate.com/en-us/oral-health/basics/brushing-and-flossing/how-to-brush",
    description: "Learn the proper technique for brushing your teeth to maintain good oral health.",
    pubDate: "2024-06-01",
    category: "Oral Hygiene",
    source: "Colgate Oral Care",
  },
  {
    title: "What Causes Bleeding Gums?",
    link: "https://www.healthline.com/health/bleeding-gums",
    description: "Bleeding gums can be a sign of gum disease or other oral health issues.",
    pubDate: "2024-05-28",
    category: "Gum Health",
    source: "Healthline",
  },
  {
    title: "Understanding Tooth Decay and Cavities",
    link: "https://www.webmd.com/oral-health/guide/tooth-decay-cavities",
    description: "Learn about the causes, symptoms, and treatments for tooth decay and cavities.",
    pubDate: "2024-06-02",
    category: "Cavities",
    source: "WebMD Oral Health",
  },
  {
    title: "ADA Statement on Fluoride in Community Water",
    link: "https://www.ada.org/en/public-programs/advocacy/fluoride",
    description: "The American Dental Association supports community water fluoridation as a safe and effective public health measure.",
    pubDate: "2024-05-15",
    category: "Fluoride",
    source: "American Dental Association",
  },
  {
    title: "Flossing: Why It's Important and How to Do It Right",
    link: "https://www.colgate.com/en-us/oral-health/basics/brushing-and-flossing/flossing",
    description: "Flossing removes plaque and food particles from between your teeth where your toothbrush can't reach.",
    pubDate: "2024-05-20",
    category: "Oral Hygiene",
    source: "Colgate Oral Care",
  },
  {
    title: "Signs of Gum Disease You Shouldn't Ignore",
    link: "https://www.healthline.com/health/gum-disease-symptoms",
    description: "Early detection of gum disease can help prevent serious oral health problems.",
    pubDate: "2024-06-03",
    category: "Gum Health",
    source: "Healthline",
  },
  {
    title: "Root Canal Treatment: What to Expect",
    link: "https://www.webmd.com/oral-health/guide/root-canals",
    description: "Understanding the root canal procedure can help ease anxiety about this common dental treatment.",
    pubDate: "2024-05-25",
    category: "Dental Procedures",
    source: "WebMD Oral Health",
  },
  {
    title: "Choosing the Right Toothbrush for Your Needs",
    link: "https://www.ada.org/en/member-center/oral-health-topics/toothbrush",
    description: "The ADA provides guidance on selecting the right toothbrush for your oral health needs.",
    pubDate: "2024-05-30",
    category: "Oral Hygiene",
    source: "American Dental Association",
  },
];

export async function GET() {
  console.log('Returning curated dental articles');
  
  // Validate all articles are from approved sources
  const approvedSources = ['colgate.com', 'healthline.com', 'webmd.com', 'ada.org'];
  
  const validArticles = DENTAL_ARTICLES.filter(article => {
    const domain = new URL(article.link).hostname.replace('www.', '');
    return approvedSources.some(source => domain.includes(source.replace('www.', '')));
  });

  console.log(`Returning ${validArticles.length} valid dental articles`);
  
  if (validArticles.length === 0) {
    return NextResponse.json({ 
      articles: [],
      message: "No verified dental articles available from approved sources."
    });
  }

  return NextResponse.json({ articles: validArticles });
}
