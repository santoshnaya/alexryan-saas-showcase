'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageCircle, Calendar, MapPin, Phone } from 'lucide-react'

interface FormData {
  name: string
  email: string
  projectType: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light tracking-tight mb-6">Get in Touch</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how we can bring your vision to life with thoughtful design and strategic thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      ✓
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a project type</option>
                        <option value="brand-identity">Brand Identity</option>
                        <option value="web-design">Web Design</option>
                        <option value="motion-graphics">Motion Graphics</option>
                        <option value="consulting">Design Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, goals, and timeline..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Alternatives */}
          <div className="space-y-8">
            {/* Book a Call */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Book a Discovery Call</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Schedule a free 30-minute discovery call to discuss your project and get a personalized quote.
                    </p>
                    <Button asChild>
                      <Link href="/booking">Book Discovery Call</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Direct Contact */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MessageCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Direct Contact</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <a href="mailto:Hello@AlexRyan.Design" className="text-primary hover:underline">
                          Hello@AlexRyan.Design
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Dublin, Ireland</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Availability */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Current Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Booking projects from Mid January 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Discovery calls available this week</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-4">
                    Response time: Usually within 24 hours
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Frequently Asked</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">What's your typical project timeline?</h4>
                    <p className="text-muted-foreground">Most brand identity projects take 4-8 weeks, while web design projects typically require 6-12 weeks.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Do you work with clients globally?</h4>
                    <p className="text-muted-foreground">Yes! I work with clients worldwide and am comfortable with remote collaboration.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">What's included in a discovery call?</h4>
                    <p className="text-muted-foreground">We'll discuss your project goals, timeline, budget, and I'll provide initial strategic insights.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 