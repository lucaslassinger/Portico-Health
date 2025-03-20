import Image from "next/image"
import { Mail, Linkedin, FileText, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-800">Portico Health</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#product" className="text-sm font-medium hover:text-blue-800 transition-colors">
              Product
            </a>
            <a href="#benefits" className="text-sm font-medium hover:text-blue-800 transition-colors">
              Benefits
            </a>
            <a
              href="mailto:info@portico-health.com"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-800 rounded-md shadow hover:bg-blue-900"
            >
              Contact Us
            </a>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Revolutionizing Laminoplasty Implants
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Portico Health is transforming cervical spinal stenosis treatment with our innovative, single-screw
                  laminoplasty system.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#product"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-800 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-900"
                  >
                    Learn More
                  </a>
                  <a
                    href="mailto:info@portico-health.com"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Portico Health Laminoplasty System"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white" id="product">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">The Problem</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Cervical Spinal Stenosis
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Up to 21% of the population is affected by Cervical Spinal Stenosis. Current laminoplasty procedures
                  require 2-4 grain of rice-sized screws per implant, consuming up to 60% of procedure time.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-3 rounded-full bg-blue-100 text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">$9B</h3>
                <p className="text-center text-gray-500">Global Cervical Spine System Market</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-3 rounded-full bg-blue-100 text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">21%</h3>
                <p className="text-center text-gray-500">Population Affected by Cervical Stenosis</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-3 rounded-full bg-blue-100 text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">60%</h3>
                <p className="text-center text-gray-500">Of Procedure Time Spent on Screw Placement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-blue-50" id="benefits">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Solution</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Portico Laminoplasty System
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our patent-pending technology aims to simplify the laminoplasty procedure with a single-screw implant
                  system.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-start space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-2 rounded-full bg-blue-100 text-blue-800">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">Easier Technique</h3>
                <p className="text-gray-500">
                  Laminoplasty with only 1 screw per implant, making the procedure easier to perform and train.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-2 rounded-full bg-blue-100 text-blue-800">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">Faster Surgeries</h3>
                <p className="text-gray-500">
                  Significantly reduced procedure time benefits both patients and hospitals.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-2 rounded-full bg-blue-100 text-blue-800">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">Reduced Risk</h3>
                <p className="text-gray-500">Fewer screws means reduced risk of patient injury and complications.</p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <a
                href="https://patents.google.com/patent/US20230338165A1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-800 shadow-sm border border-blue-200 hover:bg-blue-50"
              >
                <FileText className="h-4 w-4" />
                View Our Patent
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-blue-800 text-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Spinal Care?
                </h2>
                <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us in revolutionizing laminoplasty procedures with our innovative, single-screw implant system.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-end">
                <a
                  href="mailto:info@portico-health.com"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-800 shadow transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-900"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </a>
                <a
                  href="https://www.linkedin.com/company/portico-health/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-blue-400 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:gap-8 md:px-6 md:py-8">
          <div className="flex-1">
            <div className="font-semibold text-blue-800">Portico Health</div>
            <div className="text-sm text-gray-500">© 2025 Portico Health. All rights reserved.</div>
          </div>
          <div className="flex gap-4">
            <a
              href="https://patents.google.com/patent/US20230338165A1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-blue-800"
            >
              Patent
            </a>
            <a href="mailto:info@portico-health.com" className="text-sm text-gray-500 hover:text-blue-800">
              Contact
            </a>
            <a
              href="https://www.linkedin.com/company/portico-health/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-blue-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

