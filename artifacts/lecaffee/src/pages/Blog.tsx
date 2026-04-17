import { Link } from "wouter";
import { Calendar, ArrowRight, User } from "lucide-react";

const posts = [
  {
    id: "bean-to-cup",
    title: "From Bean to Cup: Our Coffee Sourcing Journey",
    excerpt:
      "Ever wondered what goes into making the perfect cup of coffee? It starts long before the barista touches the machine. We travel the world sourcing the finest single-origin beans, building direct relationships with farmers in Ethiopia, Colombia, and Guatemala.",
    fullText: `Ever wondered what goes into making the perfect cup of coffee? It starts long before the barista touches the machine.

We travel the world sourcing the finest single-origin beans, building direct relationships with farmers in Ethiopia, Colombia, and Guatemala. Each batch is carefully roasted in small quantities to preserve the unique flavour profile of each origin.

From the moment a coffee cherry is picked to the final pour into your cup, our commitment to quality never wavers. We believe the best coffee tells a story — of the land it was grown on, the hands that harvested it, and the care that went into every step.

At Lecaffee, we cup every new lot before it reaches your cup. We look for brightness, sweetness, body and aftertaste. If it doesn't meet our standard, it doesn't make it to the menu — simple as that.`,
    date: "February 11, 2026",
    author: "Le Caffee",
    category: "Coffee",
    img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=700&q=80",
    readTime: "5 min read",
  },
  {
    id: "brunch-best-meal",
    title: "Why Brunch is the Best Meal of the Day",
    excerpt:
      "There's something magical about brunch — that sweet spot between breakfast and lunch where anything goes and everything tastes better. At Lecaffee, we've crafted a brunch menu that celebrates both.",
    fullText: `There's something magical about brunch — that sweet spot between breakfast and lunch where anything goes and everything tastes better.

At Lecaffee, we've crafted a brunch menu that celebrates both. Whether you're after a Full English with proper crispy bacon, or a lighter egg and cheese croissant with a flat white, we've got you covered.

Sundays are for savouring — come in, sit down, and take your time. Order a second coffee. Split a cinnamon roll. Let the morning stretch into afternoon at its own gentle pace.

We believe brunch is less about the food and more about the ritual. The pace of it. The permission it gives you to slow down, connect, and actually taste what you're eating. That's what we try to create every morning at Lecaffee.`,
    date: "February 11, 2026",
    author: "Le Caffee",
    category: "Food",
    img: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=700&q=80",
    readTime: "4 min read",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f0e8" }}>
      {/* Header */}
      <section
        className="py-20 text-center px-4"
        style={{ backgroundColor: "#0f2318" }}
        data-testid="section-blog-header"
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c8873a" }}>
          Our Stories
        </p>
        <h1
          className="text-5xl font-bold mb-4"
          style={{ color: "#f0e8d8", fontFamily: "'Playfair Display', serif" }}
        >
          Blog
        </h1>
        <p className="text-base max-w-lg mx-auto" style={{ color: "#6b8a6b" }}>
          Stories, tips, and insights from the world of coffee and food.
        </p>
      </section>

      {/* Posts */}
      <section className="py-16 px-4 sm:px-6" data-testid="section-blog-posts">
        <div className="max-w-4xl mx-auto space-y-10">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              data-testid={`card-blog-${post.id}`}
            >
              <div className="md:flex">
                <div className="md:w-2/5 h-60 md:h-auto overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: "rgba(200,135,58,0.12)", color: "#c8873a" }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs" style={{ color: "#8a7a64" }}>{post.readTime}</span>
                    </div>
                    <h2
                      className="text-2xl font-bold mb-3 leading-tight"
                      style={{ color: "#1a3a2a", fontFamily: "'Playfair Display', serif" }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b5c4c" }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs" style={{ color: "#8a7a64" }}>
                      <span className="flex items-center gap-1.5">
                        <User size={12} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                    </div>
                    <button
                      className="flex items-center gap-1.5 text-xs font-semibold transition-colors hover:gap-2"
                      style={{ color: "#c8873a" }}
                      data-testid={`button-read-more-${post.id}`}
                    >
                      Read more
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section
        className="py-16 px-4 sm:px-6 text-center"
        style={{ backgroundColor: "#1a3a2a" }}
        data-testid="section-newsletter"
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-3" style={{ color: "#f0e8d8", fontFamily: "'Playfair Display', serif" }}>
            Stay in the Loop
          </h2>
          <p className="text-sm mb-8" style={{ color: "#6b8a6b" }}>
            Get the latest stories, menu updates and special offers from Lecaffee.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full text-sm outline-none"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#f0e8d8", border: "1px solid rgba(255,255,255,0.12)" }}
              data-testid="input-newsletter-email"
            />
            <button
              className="px-5 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "#c8873a", color: "#fff" }}
              data-testid="button-newsletter-subscribe"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
