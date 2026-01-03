export default function BrandsSection() {
  const brands = [
    {
      name: "Celsius",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/celsius.png",
    },
    {
      name: "Red Bull",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/redbull.png",
    },
    {
      name: "Ghost",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/ghost.png",
    },
    {
      name: "Prime",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/prime.png",
    },
    {
      name: "FIJI",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/fiji.png",
    },
    {
      name: "Essentia",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/essentia.png",
    },
    {
      name: "Evian",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/evian.png",
    },
    {
      name: "Dasani",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/dasani.png",
    },
    {
      name: "Aquafina",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/aquafina.png",
    },
    {
      name: "Yoohoo",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/yoohoo.png",
    },
    {
      name: "Mystic",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/mystic.png",
    },
    {
      name: "Fanta",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/fanta.png",
    },
    {
      name: "Minute Maid",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/minute-maid.png",
    },
    {
      name: "Pepsi",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/pepsi.png",
    },
    {
      name: "Dr Pepper",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/dr-pepper.png",
    },
    {
      name: "7UP",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/7up.png",
    },
    {
      name: "Gatorade",
      logo: "https://sipnsnackinternational.com/wp-content/uploads/2024/06/gatorade.png",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-display font-bold uppercase mb-16">
          <span className="text-black">Brands We Always Have</span>{" "}
          <span className="text-primary">In Stock</span>
        </h2>

        <div
          className="
                    grid
                    grid-cols-2
                    sm:grid-cols-4
                    lg:grid-cols-8
                    gap-x-14
                    gap-y-16
                    items-center
                    justify-items-center
                    "
        >
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              className="
                        h-20 md:h-22 lg:h-24
                        object-contain
                        opacity-100
                        "
            />
          ))}
        </div>
      </div>
    </section>
  );
}
