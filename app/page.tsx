export default function Home() {
  const hotels = [
    {
      name: "Ancient Sands Golf Resort & Residences",
      opened: 2024,
      stars: 5,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect fill='%230077BE' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3ELuxury Beach Resort%3C/text%3E%3C/svg%3E",
      features: [
        { icon: "🏖️", text: "Private pristine beach with soft sand" },
        { icon: "🐠", text: "Direct access to vibrant coral reef" },
        { icon: "🤿", text: "On-site PADI dive center" },
        { icon: "⛳", text: "Championship golf course" },
        { icon: "🍽️", text: "10+ dining venues" }
      ],
      highlight: "Features the newest house reef in the area with excellent snorkeling right off the beach. Recent reviews praise the unspoiled coral gardens."
    },
    {
      name: "Steigenberger ALDAU Beach Hotel",
      opened: 2023,
      stars: 5,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect fill='%2300A9E0' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EBeachfront Paradise%3C/text%3E%3C/svg%3E",
      features: [
        { icon: "🏖️", text: "700m private sandy beach" },
        { icon: "🪸", text: "Live coral reef 50m from shore" },
        { icon: "🏊", text: "Multiple infinity pools" },
        { icon: "🧖", text: "Luxury spa & wellness center" },
        { icon: "🎭", text: "Daily entertainment programs" }
      ],
      highlight: "Recently renovated with a focus on reef preservation. Known for crystal-clear waters and abundant marine life including sea turtles."
    },
    {
      name: "Jaz Aquamarine Resort",
      opened: 2022,
      stars: 5,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect fill='%231E90FF' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3ECoral Reef Resort%3C/text%3E%3C/svg%3E",
      features: [
        { icon: "🏖️", text: "Exclusive sandy beach access" },
        { icon: "🐟", text: "Protected house reef with rich biodiversity" },
        { icon: "🏄", text: "Water sports center" },
        { icon: "👶", text: "Family-friendly with kids club" },
        { icon: "🎵", text: "Beach bar with live music" }
      ],
      highlight: "Eco-certified resort with active coral restoration program. Snorkeling here offers encounters with colorful reef fish, rays, and occasionally dolphins."
    },
    {
      name: "Cleopatra Luxury Resort Makadi Bay",
      opened: 2023,
      stars: 5,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect fill='%234682B4' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EMakadi Bay Luxury%3C/text%3E%3C/svg%3E",
      features: [
        { icon: "🏖️", text: "Secluded white sand beach" },
        { icon: "🪸", text: "Shallow reef perfect for beginners" },
        { icon: "🍹", text: "All-inclusive premium packages" },
        { icon: "🎾", text: "Tennis courts & fitness center" },
        { icon: "🛏️", text: "Spacious suites with sea views" }
      ],
      highlight: "Located in Makadi Bay, famous for some of the best-preserved coral reefs in Hurghada. The shallow house reef is ideal for families and new snorkelers."
    },
    {
      name: "Baron Palace Sahl Hasheesh",
      opened: 2022,
      stars: 5,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect fill='%235F9EA0' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3ERoyal Beach Palace%3C/text%3E%3C/svg%3E",
      features: [
        { icon: "🏖️", text: "Private beach in Sahl Hasheesh bay" },
        { icon: "🐠", text: "Pristine coral gardens nearby" },
        { icon: "⛵", text: "Marina access for boat excursions" },
        { icon: "🏰", text: "Palace-style architecture" },
        { icon: "🌟", text: "Butler service available" }
      ],
      highlight: "Sahl Hasheesh is renowned for exceptional water quality and healthy coral ecosystems. The bay's natural protection creates perfect conditions for reef development."
    }
  ];

  return (
    <div className="container">
      <header>
        <h1>🌊 Newest 5-Star Hotels in Hurghada</h1>
        <p>Luxury Resorts with Pristine Beaches & Live Coral Reefs</p>
      </header>

      <div className="info-section">
        <h2>Why Hurghada for Coral Reef Snorkeling?</h2>
        <p>
          Hurghada, located on Egypt's Red Sea coast, is world-renowned for its spectacular coral reefs and crystal-clear waters.
          The Red Sea is home to over 1,200 species of fish and 200 types of coral, making it one of the planet's premier
          diving and snorkeling destinations.
        </p>
        <p>
          These newest 5-star resorts offer direct beach access to live house reefs, meaning you can snorkel incredible
          coral gardens right from the shore without needing a boat. Many of these properties have implemented coral
          conservation programs to preserve these fragile ecosystems for future generations.
        </p>
      </div>

      <div className="hotel-grid">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-content">
              <div className="hotel-header">
                <h2 className="hotel-name">
                  {hotel.name}
                  <span className="new-badge">NEW {hotel.opened}</span>
                </h2>
              </div>
              <div className="hotel-rating">
                <span className="stars">{'⭐'.repeat(hotel.stars)}</span>
                <span className="opening-year">Opened {hotel.opened}</span>
              </div>
              <ul className="hotel-features">
                {hotel.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-icon">{feature.icon}</span>
                    {feature.text}
                  </li>
                ))}
              </ul>
              <div className="highlight">
                <strong>🪸 Coral Reef Highlight:</strong> {hotel.highlight}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="info-section">
        <h2>Best Time to Visit</h2>
        <p>
          <strong>Peak Season (March-May, September-November):</strong> Ideal water temperatures (23-28°C),
          excellent visibility, and comfortable air temperatures.
        </p>
        <p>
          <strong>Summer (June-August):</strong> Warmest period with water temps up to 29°C. Still excellent
          for reef exploration.
        </p>
        <p>
          <strong>Winter (December-February):</strong> Cooler air but water remains swimmable (20-22°C).
          Great for avoiding crowds.
        </p>
      </div>

      <div className="info-section">
        <h2>Top Nearby Dive Sites</h2>
        <p>
          <strong>Gota Abu Ramada (The Aquarium):</strong> 20 minutes by boat, perfect for all skill levels
          with stunning coral formations and diverse marine life.
        </p>
        <p>
          <strong>Shaab El Erg:</strong> Famous for dolphin encounters and beautiful coral gardens.
        </p>
        <p>
          <strong>Carless Reef:</strong> World-class wall diving with pristine hard and soft corals.
        </p>
      </div>

      <footer className="footer">
        <p>🐠 Discover the wonders of the Red Sea at these premium coral reef resorts 🐠</p>
        <p>Last updated: November 2025</p>
      </footer>
    </div>
  );
}
