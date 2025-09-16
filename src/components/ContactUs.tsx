import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, Mail, Clock, Send, Calendar, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { API_ENDPOINTS } from "../config/api";

export function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(API_ENDPOINTS.contact, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(result.message || 'Thank you! Your message has been sent successfully.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          industry: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to revolutionize your inventory management? Contact our team of experts 
            to discuss your specific needs and schedule a personalized demo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-md">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="text-green-800">{submitMessage}</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-md">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <p className="text-red-800">{submitMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@company.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company Name" 
                    value={formData.company}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 123-4567" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <select 
                    id="industry" 
                    className="w-full px-3 py-2 bg-input-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                    value={formData.industry}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  >
                    <option value="">Select your industry</option>
                    <option value="mining">Mining & Aggregates</option>
                    <option value="agriculture">Agriculture & Feed</option>
                    <option value="construction">Construction Materials</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your inventory management challenges and what you're looking to achieve..."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full group" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Get in touch with our team through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Headquarters</h4>
                    <p className="text-muted-foreground">
                      123 Innovation Drive<br />
                      San Francisco, CA 94107<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:hello@bulkvision.ai" className="hover:text-foreground transition-colors">
                        hello@bulkvision.ai
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 2:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Need immediate assistance?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Demo Call
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="mr-2 h-4 w-4" />
                  Request a Callback
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="mr-2 h-4 w-4" />
                  Download Product Sheet
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions? We've got answers to help you get started.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">How accurate is BulkVision AI?</h4>
                <p className="text-muted-foreground">
                  Our 3D vision technology provides ±2% volume accuracy, making it the most precise 
                  solution available for bulk inventory measurement.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">What equipment do I need?</h4>
                <p className="text-muted-foreground">
                  BulkVision AI works with most commercial drones and can integrate with your 
                  existing hardware. We also offer complete hardware packages.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">How long does implementation take?</h4>
                <p className="text-muted-foreground">
                  Most customers are up and running within 24-48 hours, including training 
                  and system calibration.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Do you offer training?</h4>
                <p className="text-muted-foreground">
                  Yes, we provide comprehensive training for your team, including operation 
                  procedures and best practices for optimal results.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">What about data security?</h4>
                <p className="text-muted-foreground">
                  We use enterprise-grade encryption and comply with industry security standards 
                  to keep your operational data safe and secure.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Can I try before I buy?</h4>
                <p className="text-muted-foreground">
                  Absolutely! We offer a 30-day free trial so you can experience the full 
                  capabilities of BulkVision AI risk-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}