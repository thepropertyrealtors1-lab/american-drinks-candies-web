import { validateHeaderValue } from "http";
import img1 from "../assets/images/brands/50.png";
import img2 from "../assets/images/brands/51.png";
import img3 from "../assets/images/brands/52.png";
import img4 from "../assets/images/brands/53.png";
import img5 from "../assets/images/brands/54.png";
import img6 from "../assets/images/brands/55.png";
import img7 from "../assets/images/brands/56.png";
import img8 from "../assets/images/brands/57.png";
import img9 from "../assets/images/brands/58.png";
import img10 from "../assets/images/brands/66.png";
import img11 from "../assets/images/brands/60.png";
import img12 from "../assets/images/brands/61.png";
import img13 from "../assets/images/brands/62.png";
import img14 from "../assets/images/brands/63.png";
import img15 from "../assets/images/brands/64.png";
import img16 from "../assets/images/brands/65.png";

export default function BrandsSection() {
  const brands = [
    {
      name: "Celsius",
      logo: img1,
    },
    {
      name: "Red Bull",
      logo: img2,
    },
    {
      name: "Ghost",
      logo: img3,
    },
    {
      name: "Prime",
      logo: img4,
    },
    {
      name: "FIJI",
      logo: img5,
    },
    {
      name: "Essentia",
      logo: img6,
    },
    {
      name: "Evian",
      logo: img7,
    },
    {
      name: "Dasani",
      logo: img8,
    },
    {
      name: "Aquafina",
      logo: img9,
    },
    {
      name: "Yoohoo",
      logo: img10,
    },
    {
      name: "Mystic",
      logo: img11,
    },
    {
      name: "Fanta",
      logo: img12,
    },
    {
      name: "Minute Maid",
      logo: img13,
    },
    {
      name: "Pepsi",
      logo: img14,
    },
    {
      name: "Dr Pepper",
      logo: img15,
    },
    {
      name: "7UP",
      logo: img16,
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
