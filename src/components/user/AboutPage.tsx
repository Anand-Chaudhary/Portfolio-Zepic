import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export function AboutPage() {
  const services = [
    {
      title: "Video Editing",
      description: "Professional cutting, pacing, and storytelling for all formats",
      price: "From ₹500-₹5000",
      features: ["Timeline editing", "Audio sync", "flow optimization", "podcast editing"]
    },
    {
      title: "Contract Basis",
      description: "Monthly contract basis projects . Contact for further details.",
      price: " Depends on project ",
      features: ["reel edits", "youtube edits", "podcast editing", "editing + management"]
    },
    {
      title: "Page Management",
      description: " Will manage and boost your instagram . Contact for further details.",
      price: "According to contract",
      features: ["edit your post", "latest trends", "boost engagement", "gain followers"]
    }
  ];
  const experience = [
    {
      year: "2021-2023",
      title: "Video Editor",
      Learned : "Basics of video editing and mastered advanced techniques.",
      description: "Worked on a variety of projects, honing skills in storytelling and visual aesthetics."
    },
    {
      year: "2023-2025", 
      title: "video editor + social media manager",
      Learned: "hands on experience with instagram and youtube algorithms",
      description: "Runed many pages and boosted their engagement by trying different strategies."
    },
    {
      year: "2025",
      title: "Editor + Social Media Manager + AI Specialist",
      learned: "Editing techniques with latest AI trends.",
      description: "Focused on integrating AI tools into the editing workflow for enhanced efficiency."
    }
  ];

  const testimonials = [
    {
      quote: "Outstanding work! The final video exceeded our expectations and really captured our brand vision.",
      author: "avantika rathore",  
      rating: 5
    },
    {
      quote: "Professional, timely, and creative. NextGen delivered exactly what we needed for our campaign.",
      author: "ashmit chaukhani", 
      rating: 5
    },
    {
      quote: "The color grading work was phenomenal. Really transformed our raw footage into something cinematic.",
      author: "ritesh jadav",
      rating: 5
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="about" className="min-h-screen relative overflow-x-hidden">
      {/* Header */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-20 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1 
            className="text-5xl font-black text-liquid-gray-900 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ABOUT ME
          </motion.h1>
          <motion.p 
            className="text-xl text-liquid-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Passionate about transforming raw footage into compelling visual narratives. 
            With 3+ years of experience, I specialize in creating content that not only looks stunning 
            but tells powerful stories that resonate with audiences.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl font-black text-liquid-gray-900 mb-8 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            SERVICES & PRICING
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, scale: 1.09 }}
              >
                <Card className="liquid-card border border-liquid-gray-200 hover:border-liquid-red/30 transition-colors duration-300 h-full liquid-glow-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-black text-liquid-gray-900">{service.title}</h3>
                      <Badge className="bg-liquid-red-light text-liquid-red border border-liquid-red/30">
                        {service.price}
                      </Badge>
                    </div>
                    
                    <p className="text-liquid-gray-600 text-sm leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-liquid-gray-500 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-liquid-red rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl font-black text-liquid-gray-900 mb-8 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            EXPERIENCE
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div 
                key={index} 
                className="flex gap-8 mb-8 last:mb-0"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="w-4 h-4 bg-liquid-red rounded-full liquid-glow"
                    whileHover={{ scale: 1.2 }}
                  />
                  {index !== experience.length - 1 && (
                    <div className="w-0.5 h-16 bg-liquid-gray-300 mt-4"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <Badge className="bg-liquid-red-light text-liquid-red border border-liquid-red/30 text-xs">
                      {exp.year}
                    </Badge>
                    <h3 className="text-liquid-gray-900 font-medium">{exp.title}</h3>
                    <span className="text-liquid-red text-sm">@ {exp.Learned}</span>
                  </div>
                  <p className="text-liquid-gray-600 text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl font-black text-liquid-gray-900 mb-8 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            CLIENT TESTIMONIALS
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0, rotateY: 10 }}
                whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
              >
                <Card className="liquid-card border border-liquid-gray-200 h-full liquid-glow-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex text-liquid-red text-sm">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.span 
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>
                    <p className="text-liquid-gray-600 italic">"{testimonial.quote}"</p>
                    <div className="border-t border-liquid-gray-200 pt-4">
                      <p className="text-liquid-gray-900 text-sm font-medium">{testimonial.author}</p>                  
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center liquid-card rounded-2xl p-12 border border-liquid-gray-200 liquid-glow-card"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-black text-liquid-gray-900 mb-4">READY TO START YOUR PROJECT?</h2>
          <p className="text-liquid-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and bring your story to life with professional video editing services.
          </p>
          <div className="flex justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection('contact')}
                className="liquid-button text-liquid-white hover:shadow-lg px-8 py-3"
              >
                GET STARTED
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection('portfolio')}
                variant="outline"
                className="border-liquid-gray-300 text-liquid-gray-700 hover:bg-liquid-gray-100 hover:text-liquid-gray-900 px-8 py-3 liquid-glass"
              >
                VIEW WORK
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
