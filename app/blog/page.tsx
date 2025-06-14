import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 'brands-breaking-rules',
    title: 'Brands Breaking All The Rules',
    excerpt: 'In today\'s crowded market, standing out from the noise is essential for small businesses and creative agencies to thrive. Here\'s how to break conventional branding rules and create something memorable.',
    image: '/images/blog/brand-strategy.jpg',
    date: '2024-01-15',
    readTime: '7 min read',
    category: 'Branding'
  },
  {
    id: 'design-trends-2024',
    title: 'Design Trends That Actually Matter in 2024',
    excerpt: 'Looking beyond the surface-level trends to identify design movements that will have lasting impact on how brands communicate and connect with their audiences.',
    image: '/images/blog/design-thinking.jpg',
    date: '2024-01-08',
    readTime: '5 min read',
    category: 'Design'
  },
  {
    id: 'building-memorable-brands',
    title: 'Building Memorable Brands in a Digital World',
    excerpt: 'The fundamentals of creating brand experiences that stick with audiences across digital touchpoints, from social media to websites and beyond.',
    image: '/images/blog/remote-collaboration.jpg',
    date: '2024-01-01',
    readTime: '6 min read',
    category: 'Strategy'
  },
  {
    id: 'color-psychology-branding',
    title: 'The Psychology of Color in Brand Design',
    excerpt: 'Understanding how color choices impact consumer behavior and brand perception, with practical tips for choosing the right palette for your brand.',
    image: '/images/projects/gallery-website.jpg',
    date: '2023-12-20',
    readTime: '8 min read',
    category: 'Design'
  },
  {
    id: 'typography-that-converts',
    title: 'Typography That Converts: Beyond Pretty Fonts',
    excerpt: 'How strategic typography choices can improve readability, user experience, and ultimately drive better conversion rates for your brand.',
    image: '/images/blog/typography-trends.jpg',
    date: '2023-12-15',
    readTime: '5 min read',
    category: 'Design'
  },
  {
    id: 'future-of-brand-identity',
    title: 'The Future of Brand Identity Design',
    excerpt: 'Exploring emerging technologies and changing consumer behaviors that will shape how brands express themselves in the coming decade.',
    image: '/images/blog/future-design.jpg',
    date: '2023-12-10',
    readTime: '9 min read',
    category: 'Strategy'
  }
]

const categories = ['All', 'Branding', 'Design', 'Strategy']

export default function BlogPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light tracking-tight mb-6">Check Out My Blog</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Insights on design, branding, and creative strategy. Sharing thoughts on what makes brands memorable and how design can drive real business results.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    Featured
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="text-3xl font-light tracking-tight mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(blogPosts[0].date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Button asChild>
                  <Link href={`/blog/${blogPosts[0].id}`} className="flex items-center gap-2">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Recent Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-light tracking-tight mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={600}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Button asChild variant="ghost" className="p-0 h-auto">
                    <Link href={`/blog/${post.id}`} className="flex items-center gap-2 text-sm">
                      Read More <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-muted/50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-light tracking-tight mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get notified when I publish new articles about design, branding, and creative strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button>Subscribe</Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-16 border-t">
          <h2 className="text-3xl font-light tracking-tight mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's bring your brand vision to life with thoughtful design and strategic thinking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/work">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 