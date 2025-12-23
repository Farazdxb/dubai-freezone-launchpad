import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { Clock, User, ArrowLeft, Share2, Bookmark, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPost = {
  title: "Complete Guide to Starting a Business in Dubai Freezone 2024",
  excerpt: "Everything you need to know about setting up your company in one of Dubai's thriving Freezones.",
  image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
  category: "Guides",
  readTime: "8 min read",
  date: "December 15, 2024",
  author: {
    name: "Sarah Ahmed",
    role: "Business Setup Expert",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    bio: "Sarah is a seasoned business setup consultant with over 10 years of experience helping entrepreneurs establish their companies in the UAE. She has assisted 500+ businesses across various industries and is passionate about simplifying the company formation process.",
    linkedin: "https://linkedin.com/in/sarah-ahmed",
  },
};

const tableOfContents = [
  "What is a Dubai Freezone?",
  "Benefits of Freezone Company",
  "Types of Freezone Licenses",
  "Step-by-Step Setup Process",
  "Required Documents",
  "Cost Breakdown",
  "Common Mistakes to Avoid",
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <div className="container-wide mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
              {blogPost.category}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6 max-w-4xl">
              {blogPost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <img
                  src={blogPost.author.avatar}
                  alt={blogPost.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {blogPost.author.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {blogPost.author.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{blogPost.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blogPost.readTime}
                </span>
              </div>
              <div className="flex gap-2 ml-auto">
                <Button variant="outline" size="sm">
                  <Bookmark className="w-4 h-4" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden mb-12"
          >
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="container-wide">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Table of Contents - Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="sticky top-24">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={item}
                      href={`#section-${index}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3 prose prose-lg max-w-none"
            >
              <div className="space-y-8 text-foreground">
                <section id="section-0">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    What is a Dubai Freezone?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A Dubai Freezone is a designated economic zone that offers unique benefits to businesses, including 100% foreign ownership, tax exemptions, and simplified business setup processes. These zones are designed to attract foreign investment and promote international trade.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Dubai has over 30 freezones, each catering to specific industries such as technology, media, healthcare, and trading. Popular freezones include DMCC, IFZA, JAFZA, and Dubai Silicon Oasis.
                  </p>
                </section>

                <section id="section-1">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    Benefits of Freezone Company
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span><strong className="text-foreground">100% Foreign Ownership:</strong> No need for a local sponsor or partner.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span><strong className="text-foreground">Tax Benefits:</strong> 0% corporate and personal income tax.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span><strong className="text-foreground">Full Profit Repatriation:</strong> Transfer 100% of your profits abroad.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span><strong className="text-foreground">Quick Setup:</strong> Get your license in 3-7 working days.</span>
                    </li>
                  </ul>
                </section>

                <div className="bg-accent p-6 rounded-2xl my-8">
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    Ready to Start Your Business?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Use our free search tool to compare Freezones and get instant pricing.
                  </p>
                  <Link to="/search-activity">
                    <Button variant="hero">Search Business Activities</Button>
                  </Link>
                </div>

                <section id="section-2">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    Types of Freezone Licenses
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    There are three main types of licenses available in UAE Freezones:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 bg-secondary rounded-xl">
                      <h4 className="font-semibold text-foreground mb-2">Trading License</h4>
                      <p className="text-sm text-muted-foreground">For import, export, and distribution of goods.</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-xl">
                      <h4 className="font-semibold text-foreground mb-2">Service License</h4>
                      <p className="text-sm text-muted-foreground">For consultancy, marketing, and professional services.</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-xl">
                      <h4 className="font-semibold text-foreground mb-2">Industrial License</h4>
                      <p className="text-sm text-muted-foreground">For manufacturing and production activities.</p>
                    </div>
                  </div>
                </section>

                {/* Author Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mt-16 p-8 bg-gradient-to-br from-white via-white to-primary/5 rounded-3xl border border-white/50 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm relative overflow-hidden"
                >
                  {/* Glossy overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                  
                  <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    {/* Author Avatar */}
                    <div className="relative shrink-0">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-white shadow-xl">
                        <img
                          src={blogPost.author.avatar}
                          alt={blogPost.author.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Verified badge */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Author Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                        Written by
                      </p>
                      <h3 className="text-xl font-display font-bold text-foreground mb-1">
                        {blogPost.author.name}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-3">
                        {blogPost.author.role}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {blogPost.author.bio}
                      </p>
                      <a
                        href={blogPost.author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-white hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all duration-300 shadow-sm"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          Connect on LinkedIn
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.article>
          </div>
        </div>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
