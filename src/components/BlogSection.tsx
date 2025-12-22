import { Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Starting a Business in Dubai Freezone 2024",
    excerpt:
      "Everything you need to know about setting up your company in one of Dubai's thriving Freezones.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
    category: "Guides",
    readTime: "8 min read",
    date: "Dec 15, 2024",
  },
  {
    id: 2,
    title: "IFZA vs DMCC: Which Freezone is Right for Your Business?",
    excerpt:
      "A detailed comparison of two of Dubai's most popular Freezones to help you make the right choice.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    category: "Comparison",
    readTime: "6 min read",
    date: "Dec 12, 2024",
  },
  {
    id: 3,
    title: "Top 10 Business Activities for Entrepreneurs in UAE",
    excerpt:
      "Discover the most profitable and in-demand business activities for starting your venture in the UAE.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80",
    category: "Business",
    readTime: "5 min read",
    date: "Dec 10, 2024",
  },
];

export function BlogSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
              Resources
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
              Latest from Our Blog
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-primary hover:text-primary-hover font-medium flex items-center gap-2 transition-colors"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-display font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.id}`}
                  className="text-primary hover:text-primary-hover font-medium text-sm flex items-center gap-1 transition-colors"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
