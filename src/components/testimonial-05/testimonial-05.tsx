import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon, CheckCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Konstantin Kaiser",
    date: "2025.05.11.",
    testimonial: "top musik und personal brand man.",
    initials: "KK",
  },
  {
    id: 2,
    name: "Denis Tyurkov",
    date: "2025.05.11.",
    testimonial: "Ganz ehrlich wer sich bei Sascha rei",
    initials: "DT",
  },
  {
    id: 3,
    name: "Clare Ferguson",
    date: "2025.05.08.",
    testimonial: "We worked together in some works",
    initials: "CF",
  },
  {
    id: 4,
    name: "Johannes Reutet",
    date: "2025.05.05.",
    testimonial: "Ich arbeite seit Jahren mit A.T.E.M u",
    initials: "JR",
  },
];

const GoogleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Testimonial05 = () => (
  <section className="bg-black text-white py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
        Das sagen unsere <span style={{ color: '#8FEFE3' }}>Musiker & Brands</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-900 rounded-lg p-6 flex flex-col h-full border border-gray-800"
          >
            <div className="flex justify-center mb-4">
              <GoogleIcon />
            </div>
            
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <CheckCircle className="w-4 h-4 text-blue-500 ml-1" />
            </div>
            
            <div className="flex-grow">
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {testimonial.testimonial}
              </p>
              <p className="text-gray-500 text-center">...</p>
            </div>
            
            <div className="flex justify-center my-4">
              <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-gray-600"></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-4">
        {testimonials.map((testimonial) => (
          <div key={`user-${testimonial.id}`} className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-gray-700 text-white font-semibold">
                {testimonial.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-white font-medium text-sm">{testimonial.name}</p>
              <p className="text-gray-400 text-xs">{testimonial.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonial05;
