import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const blogPosts = [
  {
    id: "1",
    title: "Complete Guide to UAE Freezone Company Setup in 2024",
    excerpt: "Everything you need to know about setting up your business in UAE freezones, from choosing the right zone to completing the registration process.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "Business Setup",
    readTime: "8 min read",
    date: "Dec 28, 2024",
    author: "Sarah Ahmed",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
  },
  {
    id: "2",
    title: "VAT Registration in UAE: A Step-by-Step Process",
    excerpt: "Understanding VAT requirements and how to register your business for VAT compliance in the United Arab Emirates.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    category: "VAT & Compliance",
    readTime: "6 min read",
    date: "Dec 25, 2024",
    author: "Mohammed Khan",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
  },
  {
    id: "3",
    title: "Top 10 Freezones for Tech Startups in Dubai",
    excerpt: "Discover the best freezones tailored for technology companies, with benefits ranging from 100% ownership to tax exemptions.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    category: "Freezones",
    readTime: "10 min read",
    date: "Dec 22, 2024",
    author: "Ahmed Hassan",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  },
  {
    id: "4",
    title: "Corporate Bank Account Opening: What Documents You Need",
    excerpt: "A comprehensive checklist of documents required to open a business bank account in the UAE for your new company.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    category: "Banking",
    readTime: "5 min read",
    date: "Dec 20, 2024",
    author: "Fatima Al-Rashid",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
  },
  {
    id: "5",
    title: "Understanding UAE Golden Visa for Entrepreneurs",
    excerpt: "Learn about the eligibility criteria, benefits, and application process for the UAE Golden Visa program for business owners.",
    image: "https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=800&q=80",
    category: "Visa Services",
    readTime: "7 min read",
    date: "Dec 18, 2024",
    author: "Sarah Ahmed",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
  },
  {
    id: "6",
    title: "License Renewal Process: Avoid These Common Mistakes",
    excerpt: "Ensure smooth license renewal by avoiding these frequent errors that delay the process and cost businesses time and money.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    category: "Licenses",
    readTime: "4 min read",
    date: "Dec 15, 2024",
    author: "Mohammed Khan",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
  }
];

const categories = ["All", "Business Setup", "VAT & Compliance", "Freezones", "Banking", "Visa Services", "Licenses"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, guides, and updates on business setup, compliance, and growing your company in the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-foreground">{post.author}</p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
