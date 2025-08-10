import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, AlertCircle, Send, Calculator } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Real-time validation
  useEffect(() => {
    const errors: Record<string, string> = {};
    
    if (formData.name && formData.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    
    if (formData.message && formData.message.length < 10) {
      errors.message = 'Please provide more details (at least 10 characters)';
    }
    
    setFormErrors(errors);
    setIsFormValid(
      formData.name.length >= 2 && 
      /\S+@\S+\.\S+/.test(formData.email) && 
      !!formData.projectType && 
      formData.message.length >= 10
    );
  }, [formData]);

  // Calculate estimated price based on selections
  useEffect(() => {
    if (formData.projectType && formData.budget) {
      const basePrice = {
        'commercial': 800,
        'social': 300,
        'music': 600,
        'corporate': 700,
        'documentary': 1200,
        'other': 500
      }[formData.projectType] || 500;

      const budgetMultiplier = {
        '200-500': 0.8,
        '500-1200': 1,
        '1200-2500': 1.5,
        '2500+': 2
      }[formData.budget] || 1;

      const timelineMultiplier = {
        'rush': 1.5,
        'week': 1.2,
        '2weeks': 1,
        'month': 0.9,
        'flexible': 0.8
      }[formData.timeline] || 1;

      const estimated = Math.round(basePrice * budgetMultiplier * timelineMultiplier);
      setEstimatedPrice(estimated);
    } else {
      setEstimatedPrice(null);
    }
  }, [formData.projectType, formData.budget, formData.timeline]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const contactInfo = [
    {
      title: "Email",
      value: "hello@nextgen.video",
      icon: "📧"
    },
    {
      title: "Response Time", 
      value: "Within 24 hours",
      icon: "⚡"
    },
    {
      title: "Availability",
      value: "Mon-Fri, 9AM-6PM EST",
      icon: "🕐"
    }
  ];

  const packages = [
    {
      name: "BASIC EDIT",
      price: "$200-500",
      description: "Perfect for social media and simple projects",
      features: [
        "Up to 5 minutes final video",
        "Basic cutting & transitions",
        "Audio sync & cleanup", 
        "1-2 revisions included",
        "48-72 hour delivery"
      ],
      popular: false
    },
    {
      name: "PROFESSIONAL",
      price: "$500-1200",
      description: "Commercial quality with motion graphics",
      features: [
        "Up to 15 minutes final video",
        "Advanced transitions & effects",
        "Motion graphics & titles",
        "Color grading included",
        "3-5 revisions included", 
        "24-48 hour delivery"
      ],
      popular: true
    },
    {
      name: "CINEMATIC",
      price: "$1200+",
      description: "Premium storytelling with full post-production",
      features: [
        "Unlimited length video",
        "Advanced VFX & compositing",
        "Custom motion graphics",
        "Professional color grading",
        "Unlimited revisions",
        "Priority 24hr delivery"
      ],
      popular: false
    }
  ];

  return (
    <section id="contact" className="min-h-screen relative">
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1 
            className="text-5xl font-black dark-text-primary mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            LET'S WORK TOGETHER
          </motion.h1>
          <motion.p 
            className="text-xl dark-text-secondary max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to bring your vision to life? Get in touch to discuss your project and receive a custom quote.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div 
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <h2 className="text-2xl font-black dark-text-primary mb-4">PROJECT INQUIRY</h2>
              <p className="dark-text-secondary mb-6">Tell me about your project and I'll get back to you with a detailed proposal.</p>
            </div>

            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Message sent successfully! I'll get back to you within 24 hours.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="grid md:grid-cols-2 gap-4"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <Label htmlFor="name" className="dark-text-primary">Name *</Label>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`dark-glass dark-border dark-text-primary mt-2 transition-all ${
                        formErrors.name ? 'border-red-400' : formData.name ? 'border-accent-red' : ''
                      }`}
                      placeholder="Your name"
                      required
                    />
                  </motion.div>
                  <AnimatePresence>
                    {formErrors.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-1 mt-1"
                      >
                        <AlertCircle className="w-3 h-3 text-red-400" />
                        <span className="text-red-400 text-xs">{formErrors.name}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="relative">
                  <Label htmlFor="email" className="dark-text-primary">Email *</Label>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`dark-glass dark-border dark-text-primary mt-2 transition-all ${
                        formErrors.email ? 'border-red-400' : formData.email && !formErrors.email ? 'border-accent-red' : ''
                      }`}
                      placeholder="your@email.com"
                      required
                    />
                  </motion.div>
                  <AnimatePresence>
                    {formErrors.email && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-1 mt-1"
                      >
                        <AlertCircle className="w-3 h-3 text-red-400" />
                        <span className="text-red-400 text-xs">{formErrors.email}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.div 
                className="grid md:grid-cols-2 gap-4"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  <Label htmlFor="projectType" className="dark-text-primary">Project Type *</Label>
                  <Select onValueChange={(value) => handleInputChange('projectType', value)}>
                    <SelectTrigger className="dark-glass dark-border dark-text-primary mt-2">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="commercial">Commercial/Ad</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="music">Music Video</SelectItem>
                      <SelectItem value="corporate">Corporate Video</SelectItem>
                      <SelectItem value="documentary">Documentary</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="budget" className="dark-text-primary">Budget Range</Label>
                  <Select onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger className="dark-glass dark-border dark-text-primary mt-2">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="200-500">$200 - $500</SelectItem>
                      <SelectItem value="500-1200">$500 - $1,200</SelectItem>
                      <SelectItem value="1200-2500">$1,200 - $2,500</SelectItem>
                      <SelectItem value="2500+">$2,500+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Label htmlFor="timeline" className="dark-text-primary">Timeline</Label>
                <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                  <SelectTrigger className="dark-glass dark-border dark-text-primary mt-2">
                    <SelectValue placeholder="When do you need this completed?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rush">Rush (24-48 hours) +50%</SelectItem>
                    <SelectItem value="week">Within 1 week</SelectItem>
                    <SelectItem value="2weeks">Within 2 weeks</SelectItem>
                    <SelectItem value="month">Within 1 month</SelectItem>
                    <SelectItem value="flexible">Flexible timeline</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Price Estimator */}
              <AnimatePresence>
                {estimatedPrice && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    className="bg-accent-red/10 border border-accent-red/30 rounded-lg p-4 dark-glow"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calculator className="w-4 h-4 dark-text-accent" />
                      <span className="dark-text-accent text-sm font-medium">ESTIMATED PROJECT COST</span>
                    </div>
                    <div className="text-2xl font-black dark-text-primary">${estimatedPrice}</div>
                    <p className="text-xs dark-text-secondary mt-1">*Final price may vary based on project complexity</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Label htmlFor="message" className="dark-text-primary">Project Details *</Label>
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`dark-glass dark-border dark-text-primary mt-2 min-h-[120px] transition-all ${
                      formErrors.message ? 'border-red-400' : formData.message.length >= 10 ? 'border-accent-red' : ''
                    }`}
                    placeholder="Tell me about your project, vision, target audience, and any specific requirements..."
                    required
                  />
                </motion.div>
                <div className="flex justify-between items-center mt-1">
                  <AnimatePresence>
                    {formErrors.message && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3 text-red-400" />
                        <span className="text-red-400 text-xs">{formErrors.message}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span className={`text-xs ${
                    formData.message.length >= 10 ? 'dark-text-accent' : 'dark-text-secondary'
                  }`}>
                    {formData.message.length}/10 minimum
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: isFormValid ? 1.02 : 1 }}
                whileTap={{ scale: isFormValid ? 0.98 : 1 }}
              >
                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-3 tracking-wide transition-all relative overflow-hidden ${
                    isFormValid 
                      ? 'dark-button dark-text-primary hover:shadow-lg dark-glow-card' 
                      : 'bg-dark-gray-700 dark-text-secondary cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      SENDING...
                    </motion.div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      SEND MESSAGE
                    </div>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Contact Info & Quick Info */}
          <motion.div 
            className="space-y-8"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-black dark-text-primary mb-6">CONTACT INFO</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-4 p-4 dark-card rounded-lg dark-border cursor-pointer hover:border-accent-red/30 transition-colors dark-glow-card"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, scale: 1.02, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <p className="dark-text-primary text-sm font-medium">{info.title}</p>
                      <p className="dark-text-accent text-sm">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-xl font-black dark-text-primary mb-6">QUICK FAQ</h3>
              <div className="space-y-4 text-sm">
                {[
                  {
                    q: "What file formats do you deliver?",
                    a: "MP4, MOV, or any format you need. Includes source files."
                  },
                  {
                    q: "How do revisions work?",
                    a: "Each package includes revisions. Additional changes at $50/hour."
                  },
                  {
                    q: "Do you work with raw footage?",
                    a: "Yes! Send via WeTransfer, Google Drive, or Dropbox."
                  }
                ].map((faq, index) => (
                  <motion.div 
                    key={index} 
                    className="p-4 dark-card rounded-lg dark-border cursor-pointer hover:border-accent-red/30 transition-colors dark-glow-card"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <p className="dark-text-accent mb-2 font-medium">Q: {faq.q}</p>
                    <p className="dark-text-secondary">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Pricing Packages */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-black dark-text-primary mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              PRICING PACKAGES
            </motion.h2>
            <motion.p 
              className="dark-text-secondary"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Choose the package that fits your project needs
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="cursor-pointer"
              >
                <Card className={`relative dark-card dark-border h-full transition-all duration-300 dark-glow-card ${
                  pkg.popular ? 'border-accent-red' : 'hover:border-accent-red/30'
                }`}>
                  {pkg.popular && (
                    <motion.div 
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      initial={{ scale: 0, y: 10 }}
                      whileInView={{ scale: 1, y: 0 }}
                      transition={{ delay: 0.5, type: "spring" }}
                      viewport={{ once: true }}
                    >
                      <Badge className="dark-button dark-text-primary px-4 py-1">
                        MOST POPULAR
                      </Badge>
                    </motion.div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="dark-text-primary text-lg">{pkg.name}</CardTitle>
                    <div className="text-3xl font-black dark-text-accent">
                      {pkg.price}
                    </div>
                    <p className="dark-text-secondary text-sm">{pkg.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="text-sm dark-text-secondary flex items-center gap-2"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 + idx * 0.05, duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-red"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant={pkg.popular ? 'default' : 'outline'}
                        className={`w-full transition-all ${
                          pkg.popular 
                            ? 'dark-button dark-text-primary hover:shadow-lg' 
                            : 'dark-border dark-text-secondary hover:border-accent-red hover:dark-text-accent dark-glass'
                        }`}
                      >
                        GET STARTED
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}