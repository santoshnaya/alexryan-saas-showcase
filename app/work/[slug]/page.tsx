import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink, Calendar, User, Target } from 'lucide-react'

interface ProjectData {
  id: string
  title: string
  category: string
  year: string
  client: string
  duration: string
  url?: string
  description: string
  challenge: string
  solution: string
  outcome: string
  role: string[]
  deliverables: string[]
  images: string[]
  tags: string[]
}

const projectsData: Record<string, ProjectData> = {
  'lab-stellar': {
    id: 'lab-stellar',
    title: 'Lab Stellar',
    category: 'Brand Identity',
    year: '2024',
    client: 'Lab Stellar',
    duration: '8 weeks',
    url: 'https://labstellar.com',
    description: 'Lab Stellar is a brand identity that unites scientific precision with nature\'s purity to embody holistic wellness.',
    challenge: 'Create a brand identity that bridges the gap between scientific credibility and holistic wellness, appealing to health-conscious consumers who value both evidence-based approaches and natural solutions.',
    solution: 'Developed a sophisticated visual identity that combines clean, scientific typography with organic shapes and earth-toned color palette. The logo features a crystalline structure that represents both molecular precision and natural crystal formations.',
    outcome: 'The brand successfully launched with 300% increase in website engagement and secured partnerships with 15 wellness centers in the first quarter.',
    role: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines'],
    deliverables: ['Logo & Brand Mark', 'Color Palette', 'Typography System', 'Brand Guidelines', 'Business Card Design', 'Letterhead Design'],
    images: [
      'https://images.unsplash.com/photo-1634224143147-d1c5e0bf4373?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop'
    ],
    tags: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Wellness', 'Scientific']
  },
  'ark-logistics': {
    id: 'ark-logistics',
    title: 'Ark',
    category: 'Logo Design',
    year: '2024',
    client: 'Ark Logistics',
    duration: '4 weeks',
    description: 'Logo design for Ark, a forward-thinking logistics company that grows with you.',
    challenge: 'Design a logo that represents growth, reliability, and forward-thinking approach for a logistics company entering a competitive market.',
    solution: 'Created a minimalist logo combining an upward arrow with architectural elements, symbolizing both growth and solid foundation. The dark color scheme conveys professionalism and reliability.',
    outcome: 'Ark gained 45% brand recognition increase and secured 3 major enterprise contracts within the first month of brand launch.',
    role: ['Logo Design', 'Brand Strategy', 'Visual Identity'],
    deliverables: ['Logo Design', 'Logo Variations', 'Brand Colors', 'Usage Guidelines'],
    images: [
      'https://images.unsplash.com/photo-1586973188236-80e7017b4e87?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop'
    ],
    tags: ['Logo Design', 'Brand Identity', 'Logistics', 'B2B']
  },
  'aloka-event': {
    id: 'aloka-event',
    title: 'Aloka Event',
    category: 'Event Design',
    year: '2024',
    client: 'Aloka Music Festival',
    duration: '6 weeks',
    description: 'Event branding and poster design for Aloka, featuring emerging artists like OutlLer, Lychee, and arva.',
    challenge: 'Create vibrant event branding that captures the energy of electronic music while maintaining artistic sophistication for a multi-artist event.',
    solution: 'Developed a dynamic visual system using bold typography overlays, vibrant red and cyan color scheme, and fragmented portrait photography to represent the diverse artist lineup.',
    outcome: 'Event sold out in 48 hours with 12K+ social media engagement and received coverage in major music publications.',
    role: ['Event Branding', 'Poster Design', 'Social Media Assets', 'Merchandise Design'],
    deliverables: ['Event Poster', 'Social Media Templates', 'Merchandise Design', 'Ticket Design', 'Venue Signage'],
    images: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1200&h=800&fit=crop'
    ],
    tags: ['Event Design', 'Poster Design', 'Music', 'Branding']
  }
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/work" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>
        </Button>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h1 className="text-5xl font-light tracking-tight mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
            
            {project.url && (
              <Button asChild className="mb-8">
                <Link href={project.url} target="_blank" className="flex items-center gap-2">
                  View Live Project <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>

          {/* Project Details */}
          <div className="bg-muted/50 p-6 rounded-lg h-fit">
            <h3 className="font-semibold mb-4">Project Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Client</p>
                  <p className="font-medium">{project.client}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Year</p>
                  <p className="font-medium">{project.year}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Target className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">{project.duration}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Role</h4>
              <div className="flex flex-wrap gap-1">
                {project.role.map((role) => (
                  <span key={role} className="text-xs bg-background px-2 py-1 rounded">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Deliverables</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {project.deliverables.map((deliverable) => (
                  <li key={deliverable}>• {deliverable}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <Image
            src={project.images[0]}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full h-[60vh] object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-3xl font-light tracking-tight mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h2 className="text-3xl font-light tracking-tight mb-4">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Additional Images */}
        {project.images.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {project.images.slice(1).map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 2}`}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            ))}
          </div>
        )}

        {/* Outcome */}
        <div className="bg-muted/50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-light tracking-tight mb-4">The Outcome</h2>
          <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-16">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-16 border-t">
          <Button asChild variant="outline">
            <Link href="/work">← Back to All Work</Link>
          </Button>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Button asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/booking">Book a Call</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 