import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Quote, Star, ArrowRight, Palette, Monitor, Zap } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Complete brand development from concept to execution, including logo design, visual systems, and comprehensive brand guidelines that ensure consistency across all touchpoints.',
    features: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Color Palettes', 'Typography Systems', 'Brand Applications']
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description: 'Modern, responsive websites that engage users and drive conversions while perfectly reflecting your brand identity and business objectives.',
    features: ['Responsive Design', 'UI/UX Design', 'Website Development', 'E-commerce Design', 'Landing Pages', 'User Experience']
  },
  {
    icon: Zap,
    title: 'Motion Graphics',
    description: 'Dynamic visual content that brings brands to life through animation, interactive design elements, and engaging motion graphics.',
    features: ['Animation Design', 'Interactive Elements', 'Video Graphics', 'Social Media Assets', 'Presentations', 'Brand Videos']
  }
]

const testimonials = [
  {
    name: 'Christelle Arouko',
    role: 'Founder at Lab Stellar',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face',
    content: "Alex's designs are not just visually breathtaking—they're also incredibly thoughtful and consistent. Every single element feels meticulously planned, ensuring that everything ties together seamlessly, from the colors and typography to the overall aesthetic. It's rare to find someone with such a keen eye for detail and the ability to see the bigger picture at the same time. If you're looking for a designer who is incredibly talented, professional, and a joy to work with, I cannot recommend Alex highly enough. He is truly one of a kind!",
    rating: 5
  },
  {
    name: 'Edwin Zargarian',
    role: 'Founder & CEO at Crypmoji',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: "Absolute pleasure to work with Alex! His design work was transformative for us, our entire branding was modernized including our website, collateral materials, multiple logos, and the UI/UX for our mobile and desktop applications. He took his time to learn what we were looking for and delivered exactly what we envisioned almost immediately, requiring very little iteration. Our team and our customers had high praise for the new designs. Highly recommended!!",
    rating: 5
  }
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-light tracking-tight mb-6">About Alex</h1>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I'm a communication designer with a passion for creating memorable and influential brands. 
                  Based in Dublin, I work with forward-thinking clients to develop visual identities that 
                  truly resonate with their audiences.
                </p>
                <p>
                  My approach combines strategic thinking with creative execution, ensuring that every 
                  design decision serves both aesthetic and business objectives. I believe great design 
                  should not only look beautiful but also solve problems and drive results.
                </p>
                <p>
                  With over 5 years of experience working with startups, established businesses, and 
                  creative agencies, I've developed a deep understanding of what makes brands successful 
                  in today's competitive landscape.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg">
                  <Link href="/work">View My Work</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                alt="Alex Ryan"
                width={600}
                height={800}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium">5+ Years</p>
                <p className="text-xs opacity-90">Design Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-4">Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I offer comprehensive design services to help your brand stand out in today's competitive market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="h-full">
                <CardContent className="p-8">
                  <service.icon className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <ArrowRight className="h-3 w-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-4">My Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology that ensures successful outcomes for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your business, goals, and target audience through comprehensive research and strategy sessions.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Developing a creative strategy that aligns with your business objectives and resonates with your audience.'
              },
              {
                step: '03',
                title: 'Design',
                description: 'Creating compelling visual solutions that bring your brand to life with attention to every detail.'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Providing all final assets, guidelines, and ongoing support to ensure successful implementation.'
              }
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-semibold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-4">Hear From My Clients</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What clients say about working with me and the results we've achieved together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="h-full">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <blockquote className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center bg-primary text-primary-foreground p-12 rounded-lg">
            <h2 className="text-4xl font-light tracking-tight mb-4">Ready to Work Together?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              I'm currently booking projects for early 2025. Let's discuss how we can elevate your brand.
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
        </div>
      </section>
    </div>
  )
} 