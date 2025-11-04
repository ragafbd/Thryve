export const mockData = {
  hero: {
    title: "THRYVE COWORKING",
    subtitle: "Where Ideas Meet Innovation",
    description: "Premium coworking space in Faridabad designed for entrepreneurs, startups, and professionals who want to thrive.",
    cta: "Get Started"
  },
  about: {
    title: "About Thryve",
    description: "Located in the heart of Faridabad, Thryve Coworking offers a vibrant community workspace designed to fuel productivity and collaboration. Our modern facility combines comfort, functionality, and affordability to create the perfect environment for your business to thrive.",
    stats: [
      { number: "200+", label: "Seats" },
      { number: "12 Hours", label: "Six Days a Week" },
      { number: "100%", label: "Value for Money" }
    ]
  },
  amenities: [
    { id: 1, name: "High-Speed WiFi", icon: "wifi" },
    { id: 2, name: "Meeting Rooms", icon: "users" },
    { id: 3, name: "Café & Refreshments", icon: "coffee" },
    { id: 4, name: "Table Tennis", icon: "activity" },
    { id: 5, name: "Foosball", icon: "gamepad2" },
    { id: 6, name: "Spacious Washrooms", icon: "droplet" },
    { id: 7, name: "24/7 Access", icon: "clock" },
    { id: 8, name: "Printing Services", icon: "printer" },
    { id: 9, name: "Air Conditioned", icon: "wind" },
    { id: 10, name: "Power Backup", icon: "zap" },
    { id: 11, name: "Parking Space", icon: "car" },
    { id: 12, name: "Ergonomic Seating", icon: "armchair" }
  ],
  pricing: [
    {
      id: 1,
      name: "Hot Desk",
      price: "5,500",
      period: "per seat/month",
      description: "Flexible seating option perfect for freelancers and part-time workers",
      features: [
        "Flexible seating",
        "High-speed WiFi",
        "Access to amenities",
        "Community events",
        "Printing credits"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Dedicated Desk",
      price: "6,000",
      period: "per seat/month",
      description: "Your own permanent desk in our collaborative workspace",
      features: [
        "Fixed dedicated desk",
        "Personal storage locker",
        "High-speed WiFi",
        "Meeting room access",
        "Mail handling",
        "All amenities included"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Private Office",
      price: "39,000",
      period: "per month",
      description: "Fully furnished private office space for teams and businesses",
      features: [
        "Private lockable office",
        "Customizable space",
        "Dedicated phone line",
        "Priority meeting rooms",
        "24/7 access",
        "Team collaboration tools",
        "Premium support"
      ],
      popular: false
    }
  ],
  contact: {
    address: "Plot No. 3, Next to Neelam Chowk Metro Station, 18/3, Mathura Road, Faridabad",
    email: "info@thryvecoworking.com",
    phone: "+91 98765 43210",
    hours: "Mon - Sat: 9:00 AM - 9:00 PM (12 Hours/Day)"
  }
};
