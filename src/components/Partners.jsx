const partnerLogo = [
  {
    src: "../../assets/hoopyah.png",
  },
  {
    src: "../../assets/harina.png",
  },
  {
    src: "../../assets/goldilocks.svg",
  },
  {
    src: "../../assets/muhlach.png",
  },
];

export default function Partners() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly h-full lg:h-screen w-screen px-10 mb-20 lg:mb-0">
      <div className="flex flex-col flex-wrap justify-evenly items-end max-w-72 lg:max-w-[25vw] h-full">
        {partnerLogo.map((logo, index) => (
          <img key={index} src={logo.src} className="w-24 lg:w-60 my-4" />
        ))}
      </div>

      <div className="about__header--container px-10 my-8 w-screen lg:pl-32 lg:pr-10 lg:max-w-[50vw]">
        <div className="flex items-center">
          <span className="bg-[var(--primary)] w-full h-1"></span>
          <h1 className="text-md lg:text-xl text-nowrap ml-6 tracking-wider">
            TRUSTED PARTNERS
          </h1>
        </div>
        <h1 className="font-garamond font-semibold text-3xl lg:text-6xl my-6">
          Our affiliated partners is what makes us better.
        </h1>

        <p className="font-roboto text-sm font-light tracking-wider lg:text-base">
          Our partners play a key role in helping us deliver quality
          and convenience to our customers. Through these partnerships, we bring
          a curated selection of trusted brands, local specialties, and unique
          products that reflect the diversity and richness of the Philippines.
        </p>
      </div>
    </div>
  );
}
