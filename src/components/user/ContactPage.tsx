import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

export function ContactPage() {

  const contactInfo = [
    {
      title: "Email",
      value: "Zepicnewera@gmail.com",
      icon: "📧"
    },
    {
      title: "Response Time  /  availability", 
      value: "Within 12 hours  /  Mon-sun, 9AM-9PM ",
      icon: "⚡"
    },
    {
      title: "Contact number",
      value: "7870814247",
      icon: "📞"
    }
  ];

  const packages = [
    {
      name: "BASIC EDIT / short form",
      price: "₹300-₹1000",
      description: "Perfect for social media and simple projects",
      features: [
        "30sec to 1min long ",
        "Basic cutting & transitions and effects",
        "Audio sync & cleanup",
        "1-2 revisions included",
        "48-72 hour delivery"
      ],
      popular: false
    },
    {
      name: "PROFESSIONAL / long form",
      price: "₹700-₹4000",
      description: "Commercial quality with motion graphics",
      features: [
        "Up to 20 minutes long",
        "Advanced transitions & effects",
        "Motion graphics & titles",
        "Color grading included",
        "3-5 revisions included",
        "Smooth storytelling ",
        "48-72 hour delivery"
      ],
      popular: true
    },
    {
      name: "PODCAST",
      price: "₹2000+",
      description: "Premium storytelling with complete smooth flow",
      features: [
        "Unlimited length video",
        "with eye pleasing visuals",
        "Custom motion graphics",
        "Professional color grading",
        "Seamless audio integration",
        "Priority 48-72 hour delivery"
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
            LET&apos;S WORK TOGETHER
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

        <div className="p-8 mb-20">
          {/* Contact Form */}
          <motion.div 
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >



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
                    a: "Each package includes revisions. Additional changes will be charged accordingly."
                  },
                  {
                    q: "Do you work with raw footage?",
                    a: "Yes! Send via telegram, Google Drive, or whatsapp documents."
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