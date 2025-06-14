'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 'lab-stellar',
    title: 'Lab Stellar',
    category: 'Brand Identity',
    year: '2024',
    image: '/images/projects/lab-stellar.jpg',
    description: 'Scientific precision meets holistic wellness branding.',
    tags: ['Brand Identity', 'Logo Design', 'Brand Guidelines']
  },
  {
    id: 'ark-logistics',
    title: 'Ark',
    category: 'Logo Design',
    year: '2024',
    image: '/images/projects/ark-logistics.jpg',
    description: 'Forward-thinking logistics company branding.',
    tags: ['Logo Design', 'Brand Identity']
  },
  {
    id: 'aloka-event',
    title: 'Aloka Event',
    category: 'Event Design',
    year: '2024',
    image: '/images/projects/aloka-event.jpg',
    description: 'Music event poster and branding design.',
    tags: ['Event Design', 'Poster Design', 'Branding']
  },
  {
    id: 'crypto-ui',
    title: 'Crypto Dashboard',
    category: 'Web Design',
    year: '2024',
    image: '/images/projects/crypto-dashboard.jpg',
    description: 'Modern cryptocurrency platform interface.',
    tags: ['Web Design', 'UI/UX', 'Dashboard']
  },
  {
    id: 'plotpoint-brand',
    title: 'Plotpoint',
    category: 'Brand Identity',
    year: '2024',
    image: '/images/projects/plotpoint.jpg',
    description: 'Data visualization platform branding.',
    tags: ['Brand Identity', 'Web Design', 'Data Visualization']
  },
  {
    id: 'tango-packaging',
    title: 'Tango Packaging',
    category: 'Packaging Design',
    year: '2023',
    image: '/images/projects/tango-packaging.jpg',
    description: 'Vibrant product packaging design.',
    tags: ['Packaging Design', 'Product Design']
  },
  {
    id: 'gallery-website',
    title: 'Gallery Website',
    category: 'Web Design',
    year: '2023',
    image: '/images/projects/gallery-website.jpg',
    description: 'Art gallery website with modern interface.',
    tags: ['Web Design', 'UI/UX', 'Gallery']
  },
  {
    id: 'data-insights',
    title: 'Data Insights',
    category: 'Dashboard Design',
    year: '2023',
    image: '/images/projects/data-insights.jpg',
    description: 'Analytics dashboard for business intelligence.',
    tags: ['Dashboard Design', 'Data Visualization', 'UI/UX']
  },
  {
    id: 'stellar-motion',
    title: 'Stellar Motion',
    category: 'Motion Graphics',
    year: '2023',
    image: '/images/projects/stellar-motion.jpg',
    description: 'Animated brand identity and motion graphics.',
    tags: ['Motion Graphics', 'Animation', 'Brand Identity']
  }
]

const categories = ['All', 'Brand Identity', 'Web Design', 'Logo Design', 'Event Design', 'Packaging Design', 'Dashboard Design', 'Motion Graphics']

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light tracking-tight mb-6">Work</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive collection of projects spanning brand identity, web design, and creative solutions for forward-thinking clients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button asChild variant="secondary" size="sm">
                    <Link href={`/work/${project.id}`}>
                      View Project
                    </Link>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.year}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="ghost" className="p-0 h-auto group-hover:text-primary">
                  <Link href={`/work/${project.id}`} className="flex items-center gap-2">
                    View Case Study <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-16 border-t">
          <h2 className="text-3xl font-light tracking-tight mb-4">Like What You See?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with thoughtful design and strategic thinking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/booking">Book Discovery Call</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 