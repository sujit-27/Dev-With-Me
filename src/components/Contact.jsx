import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_API_KEY;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,   
        templateId,
        formData,
        publicKey 
      );

      setIsSuccess(true);
      toast({
        title: "Message Sent! ✨",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  const contactLinks = [
    { icon: Mail, label: "Email", value: "sujitshaw205@gmail.com", href: "mailto:sujitshaw205@gmail.com" },
    { icon: FaLinkedinIn, label: "LinkedIn", value: "/in/sujit-kumar-shaw/", href: "https://www.linkedin.com/in/sujit-kumar-shaw/" },
    { icon: FaGithub, label: "GitHub", value: "sujit-27", href: "https://github.com/sujit-27" },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-gray-600 bg-clip-text text-transparent inline-block">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <br />
              <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <Textarea name="message" placeholder="Your Message" rows={6} value={formData.message} onChange={handleChange} required />
              <Button type="submit" size="lg" disabled={isSubmitting || isSuccess} className="w-full sm:w-auto">
                {isSuccess ? <div className="flex"><CheckCircle2 className="h-5 w-5 mr-2" /> Message Sent!</div> :
                 isSubmitting ? <div className="flex"><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="h-5 w-5 mr-2 border-2 border-primary-foreground border-t-transparent rounded-full" /> Sending...</div> :
                 <div className="flex"><Send className="h-5 w-5 mr-2" /> Send Message</div>
                }
              </Button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-6">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-card border border-card-border rounded-lg hover-elevate transition-all group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">{link.label}</p>
                    <p className="text-sm text-muted-foreground">{link.value}</p>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
