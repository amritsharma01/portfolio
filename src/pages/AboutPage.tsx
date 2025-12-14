import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/widgets/button";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-20 pb-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <Link to="/">
                <Button variant="outline" className="mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-4">
                About Amrit Sharma
              </h1>
              <p className="text-lg text-muted-foreground">
                Backend Engineer & Software Developer from Nepal
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Who is Amrit Sharma?</h2>
                <p className="text-foreground/90 mb-4">
                  <strong>Amrit Sharma</strong> is a skilled Backend Engineer and Software Developer based in 
                  <strong> Lalitpur, Nepal</strong>. With a passion for building scalable and efficient backend systems, 
                  Amrit Sharma specializes in modern technologies including <strong>Go</strong>, <strong>Python</strong>, 
                  <strong> Django</strong>, and the <strong>Echo framework</strong>.
                </p>

                <p className="text-foreground/90 mb-4">
                  Currently working as a <strong>Backend Engineer at Rara Labs</strong> in Manbhawan, Lalitpur, 
                  Amrit Sharma brings expertise in cloud computing, API development, and system architecture. 
                  Prior to this role, Amrit Sharma served as a <strong>Cloud Apprentice at Aerawat Corp</strong> 
                  and worked as a <strong>Mobile Application Developer at ExamMate Pvt. Ltd</strong>.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Education & Background</h2>
                <p className="text-foreground/90 mb-4">
                  Amrit Sharma is pursuing a <strong>Bachelor's degree in Computer Engineering</strong> from 
                  <strong> IOE, Pulchowk Campus</strong> in Chakupat, Lalitpur (2021-2025). This prestigious 
                  institution is part of the Institute of Engineering, Tribhuvan University, Nepal's leading 
                  engineering college.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Technical Expertise</h2>
                <p className="text-foreground/90 mb-4">
                  As a Backend Engineer, <strong>Amrit Sharma</strong> has extensive experience in:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                  <li><strong>Backend Development:</strong> Building robust RESTful APIs and microservices</li>
                  <li><strong>Cloud Computing:</strong> AWS infrastructure and cloud-native applications</li>
                  <li><strong>Database Management:</strong> PostgreSQL, SQL, and database optimization</li>
                  <li><strong>DevOps:</strong> Docker, Linux, and CI/CD pipelines</li>
                  <li><strong>System Design:</strong> Scalable architecture and software engineering best practices</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Professional Experience</h2>
                <div className="space-y-6 mb-6">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg">Backend Engineer</h3>
                        <p className="text-muted-foreground">Rara Labs, Manbhawan, Lalitpur</p>
                        <p className="text-sm text-muted-foreground">April 2025 - Present</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg">Cloud Apprentice</h3>
                        <p className="text-muted-foreground">Aerawat Corp, Lalitpur, Nepal</p>
                        <p className="text-sm text-muted-foreground">January 2025 - April 2025</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Location & Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-sm text-muted-foreground">Lalitpur, Nepal</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Current Role</p>
                      <p className="text-sm text-muted-foreground">Backend Engineer at Rara Labs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

