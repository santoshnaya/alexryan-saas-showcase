import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, ArrowRight } from 'lucide-react'

const featuredProjects = [
  {
    id: 'lab-stellar',
    title: 'Lab Stellar',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1634224143147-d1c5e0bf4373?w=800&h=600&fit=crop&crop=entropy',
    description: 'Scientific precision meets holistic wellness branding.'
  },
  {
    id: 'ark-logistics',
    title: 'Ark',
    category: 'Logo Design',
    image: 'https://images.unsplash.com/photo-1586973188236-80e7017b4e87?w=800&h=600&fit=crop&crop=entropy',
    description: 'Forward-thinking logistics company branding.'
  },
  {
    id: 'aloka-event',
    title: 'Aloka Event',
    category: 'Event Design',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&crop=entropy',
    description: 'Music event poster and branding design.'
  },
  {
    id: 'crypto-ui',
    title: 'Crypto Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&crop=entropy',
    description: 'Modern cryptocurrency platform interface.'
  },
  {
    id: 'plotpoint-brand',
    title: 'Plotpoint',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&crop=entropy',
    description: 'Data visualization platform branding.'
  },
  {
    id: 'tango-packaging',
    title: 'Tango Packaging',
    category: 'Packaging Design',
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=800&h=600&fit=crop&crop=entropy',
    description: 'Vibrant product packaging design.'
  }
]

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&h=1080&fit=crop&crop=entropy')] bg-cover bg-center opacity-10" />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          {/* Availability Banner */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Calendar className="h-4 w-4 text-green-400" />
            <span className="text-sm text-white/90">Booking projects from Mid January 2025</span>
          </div>

          {/* Main Hero Content */}
          <div className="mb-8">
            <h1 className="hero-text mb-6 animate-fade-in">
              Alex{' '}
              <div className="relative inline-block">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Alex Ryan"
                  width={120}
                  height={120}
                  className="inline rounded-full border-4 border-white/20 mx-4"
                />
              </div>
              {' '}Ryan
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Communication designer consistently building memorable and influential brands.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
              <Link href="/work">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-4">Featured Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of recent projects showcasing brand identity, web design, and creative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card key={project.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button asChild variant="ghost" className="p-0 h-auto">
                    <Link href={`/work/${project.id}`} className="flex items-center gap-2">
                      View Project <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/work">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light tracking-tight mb-6">Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
                  <p className="text-muted-foreground">Complete brand development from concept to execution, including logo design, visual systems, and brand guidelines.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Web Design</h3>
                  <p className="text-muted-foreground">Modern, responsive websites that engage users and drive conversions while reflecting your brand identity.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Motion Graphics</h3>
                  <p className="text-muted-foreground">Dynamic visual content that brings brands to life through animation and interactive design elements.</p>
                </div>
              </div>
              <Button asChild className="mt-6">
                <Link href="/about">Learn More About My Process</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff27e?w=600&h=800&fit=crop"
                alt="Design process"
                width={600}
                height={800}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-light tracking-tight mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Let's collaborate to create something extraordinary. Book a discovery call or send me a message to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/booking">Book Discovery Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/contact">Send Message</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 