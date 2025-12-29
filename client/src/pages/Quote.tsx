import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Quote() {
  const { toast } = useToast();
  const createInquiry = useCreateInquiry();
  const [isSuccess, setIsSuccess] = useState(false);

  const searchParams = new URLSearchParams(window.location.search);
  const initialProduct = searchParams.get("product") || "";

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: initialProduct ? `I'm interested in getting a quote for: ${initialProduct}` : "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    createInquiry.mutate(data, {
      onSuccess: () => {
        setIsSuccess(true);
        form.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
          
          {/* Left Side: Info */}
          <div className="bg-secondary text-white p-12 lg:p-24 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-primary">Get a Fast Quote</h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-lg">
              Looking to order in bulk? Fill out the form and our sales team will get back to you within 24 hours with pricing and shipping details.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">Tell us what you need</h3>
                  <p className="text-gray-400">Specify products and estimated quantities.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">We prepare your offer</h3>
                  <p className="text-gray-400">We calculate best shipping rates and bulk discounts.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">Start shipping</h3>
                  <p className="text-gray-400">Once approved, we handle logistics to your port.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white p-12 lg:p-24 flex flex-col justify-center items-center">
            {isSuccess ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center max-w-md"
              >
                <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-display font-bold text-secondary mb-4">Request Sent!</h2>
                <p className="text-gray-500 mb-8">
                  Thank you for your interest. Our team will review your inquiry and contact you shortly at {form.getValues("email")}.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-primary font-bold hover:underline uppercase tracking-wide"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <div className="w-full max-w-md">
                <h2 className="text-2xl font-bold text-secondary mb-8 font-display uppercase">Inquiry Form</h2>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wide text-gray-700">Full Name</label>
                    <input
                      {...form.register("name")}
                      className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="John Doe"
                    />
                    {form.formState.errors.name && (
                      <span className="text-red-500 text-xs">{form.formState.errors.name.message}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wide text-gray-700">Business Email</label>
                    <input
                      {...form.register("email")}
                      type="email"
                      className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="john@company.com"
                    />
                    {form.formState.errors.email && (
                      <span className="text-red-500 text-xs">{form.formState.errors.email.message}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wide text-gray-700">Message / Product Details</label>
                    <textarea
                      {...form.register("message")}
                      rows={5}
                      className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      placeholder="I'm interested in ordering..."
                    />
                    {form.formState.errors.message && (
                      <span className="text-red-500 text-xs">{form.formState.errors.message.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={createInquiry.isPending}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded uppercase tracking-widest shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {createInquiry.isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
