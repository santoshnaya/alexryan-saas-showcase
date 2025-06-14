'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, User, Video, MapPin, CheckCircle } from 'lucide-react'

interface TimeSlot {
  time: string
  available: boolean
}

const timeSlots: TimeSlot[] = [
  { time: '14:30', available: true },
  { time: '15:00', available: true },
  { time: '15:30', available: true },
  { time: '16:00', available: true },
  { time: '16:30', available: false },
  { time: '17:00', available: true },
  { time: '17:30', available: true },
  { time: '18:00', available: true },
  { time: '18:30', available: false },
  { time: '19:00', available: true }
]

const calendar = [
  { date: 16, day: 'Mon', available: true, selected: true },
  { date: 17, day: 'Tue', available: true, selected: false },
  { date: 18, day: 'Wed', available: false, selected: false },
  { date: 19, day: 'Thu', available: true, selected: false },
  { date: 20, day: 'Fri', available: true, selected: false },
  { date: 21, day: 'Sat', available: false, selected: false },
  { date: 22, day: 'Sun', available: false, selected: false },
  { date: 23, day: 'Mon', available: true, selected: false },
  { date: 24, day: 'Tue', available: true, selected: false },
  { date: 25, day: 'Wed', available: true, selected: false },
  { date: 26, day: 'Thu', available: true, selected: false },
  { date: 27, day: 'Fri', available: true, selected: false },
  { date: 28, day: 'Sat', available: false, selected: false },
  { date: 29, day: 'Sun', available: false, selected: false },
  { date: 30, day: 'Mon', available: true, selected: false }
]

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(16)
  const [selectedTime, setSelectedTime] = useState('')
  const [isBooked, setIsBooked] = useState(false)

  const handleDateSelect = (date: number) => {
    setSelectedDate(date)
    setSelectedTime('') // Reset time when date changes
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleBooking = () => {
    setIsBooked(true)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light tracking-tight mb-6">Book a Discovery Call</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Schedule a free 30-minute discovery call to discuss your project, share your ideas, and get a personalized quote.
          </p>
        </div>

        {isBooked ? (
          /* Confirmation State */
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-light tracking-tight mb-4">Call Scheduled!</h2>
              <p className="text-muted-foreground mb-6">
                Your discovery call has been scheduled for Monday, June {selectedDate} at {selectedTime}.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg mb-6 text-left">
                <h3 className="font-semibold mb-3">What's Next?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• You'll receive a calendar invitation within 5 minutes</li>
                  <li>• A brief questionnaire will be sent to prepare for our call</li>
                  <li>• We'll discuss your project goals, timeline, and budget</li>
                  <li>• I'll provide strategic insights and next steps</li>
                </ul>
              </div>
              <Button onClick={() => setIsBooked(false)} variant="outline">
                Schedule Another Call
              </Button>
            </CardContent>
          </Card>
        ) : (
          /* Booking Interface */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Call Details */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Alex Ryan
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Discovery Call</h3>
                    <p className="text-sm text-muted-foreground">
                      Schedule a free discovery call to share your ideas with me, so I can provide you with a personalised quote.
                    </p>
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>30m</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Video className="h-4 w-4 text-muted-foreground" />
                      <span>Zoom Video</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Asia/Kolkata</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Calendar & Time Selection */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    June 2025
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2 mb-8">
                    {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                      <div key={day} className="text-center text-xs font-medium text-muted-foreground p-2">
                        {day}
                      </div>
                    ))}
                    {calendar.map((day) => (
                      <button
                        key={day.date}
                        onClick={() => day.available && handleDateSelect(day.date)}
                        disabled={!day.available}
                        className={`
                          aspect-square p-2 text-sm rounded-md transition-colors
                          ${day.available 
                            ? selectedDate === day.date
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-muted'
                            : 'text-muted-foreground cursor-not-allowed'
                          }
                        `}
                      >
                        {day.date}
                      </button>
                    ))}
                  </div>

                  {/* Time Slots */}
                  <div>
                    <h3 className="font-semibold mb-4">Available Times</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.time}
                          onClick={() => slot.available && handleTimeSelect(slot.time)}
                          disabled={!slot.available}
                          className={`
                            p-2 text-sm rounded-md border transition-colors
                            ${slot.available
                              ? selectedTime === slot.time
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'border-border hover:bg-muted'
                              : 'text-muted-foreground border-muted cursor-not-allowed'
                            }
                          `}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Book Button */}
                  <div className="mt-8 pt-6 border-t">
                    <Button 
                      size="lg" 
                      className="w-full"
                      disabled={!selectedTime}
                      onClick={handleBooking}
                    >
                      {selectedTime 
                        ? `Book for June ${selectedDate} at ${selectedTime}`
                        : 'Select a time to book'
                      }
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Additional Information */}
        {!isBooked && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Free Consultation</h3>
              <p className="text-sm text-muted-foreground">
                No cost, no commitment. Just a friendly chat about your project.
              </p>
            </div>
            <div>
              <Video className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Video Call</h3>
              <p className="text-sm text-muted-foreground">
                We'll meet via Zoom so we can have a face-to-face conversation.
              </p>
            </div>
            <div>
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Strategic Insights</h3>
              <p className="text-sm text-muted-foreground">
                Get actionable advice and clear next steps for your project.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 