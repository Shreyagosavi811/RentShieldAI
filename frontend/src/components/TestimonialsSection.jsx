import TestimonialCard from "./TestimonialCard";

const testimonials = [
  { name: "Arjun M.", role: "Engineering Student, Pune", text: "RentShield AI helped me avoid a fake PG listing...", avatar: "A" },
  { name: "Priya K.", role: "MBA Student, Mumbai", text: "The landlord reputation feature gave me confidence...", avatar: "P" },
  { name: "Rohan S.", role: "Working Professional, Bangalore", text: "Contract risk analysis saved me from a clause...", avatar: "R" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-12">Trusted by Students</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {testimonials.map(t => <TestimonialCard key={t.name} {...t} />)}
      </div>
    </section>
  );
}