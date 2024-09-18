import React from "react";
import picture from "../assets/Picture1.png";


interface ServiceProps {
  title: string;
  description?: string;
  imageUrl: string;
}

const Service: React.FC<ServiceProps> = ({ title, description, imageUrl }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
    <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {description && (
      <p className="text-sm text-gray-600 text-center mb-4">{description}</p>
    )}
    <button className="text-sm text-blue-600 hover:underline">
      Learn more
    </button>
  </div>
);

const Home: React.FC = () => {
  const services: ServiceProps[] = [
    {
      title: "Investment",
      description:
        "Let BazaFarm find for you where to gain investment or invest into",
      imageUrl:
        "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/11/06/209144-investment-ians.jpg?itok=WbVvCvL5&c=c5af8c0f92ccc8e249257bf0f1cb18e8",
    },
    {
      title: "Insurance",
      imageUrl:
        "https://tohoza.com/wp-content/uploads/2023/12/Insurance-in-Rwanda-Assurance-au-Rwanda-A-Comprehensive-Guide-to-Reliable-Insurance-Coverage-Guide-complet-pour-souscrire-a-une-assurance-fiable-1.jpg",
    },
    {
      title: "Funds",
      imageUrl:
        "https://www.investopedia.com/thmb/2JbrZuvkzmKYXQiAjCBC3pRozzo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fund.asp-FINAL-1-993839a2f1c543659e95225e69a022de.png",
    },
    {
      title: "Financial Institution",
      imageUrl:
        "https://cdn.vectorstock.com/i/1000x1000/99/39/financial-institution-line-icon-linear-vector-25479939.webp",
    },
    {
      title: "Trade",
      imageUrl:
        "https://realtrading.com/wp-content/uploads/2017/02/enter-and-exit.jpg",
    },
    {
      title: "BazaFarm",
      imageUrl:
        "https://www.stesgroup.rw/wp-content/uploads/2019/11/BazaFarm-logo.png",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative bg-gray-100 ">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-100 w-1/2 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-left lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">BazaFarm-Connect</span>{" "}
                  <span className="block xl:inline">provides the best</span>{" "}
                  <span className="block xl:inline">way to boost</span>{" "}
                  <span className="block text-green-600 xl:inline">
                    agriculture
                  </span>
                </h1>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div
            className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${picture})`,
              clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          ></div>
        </div>
      </div>

      <div className="bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            About the platform
          </h2>
          <p className="text-gray-600 text-center leading-relaxed">
            BazaFarm connect platform is a platform that will be bridging the
            gap between the farmers to different services and opportunities.
            This is platform will be a digital way to access service such as
            investment, insurance, financial institution and funds. In addition
            to this it will be having lots of prediction of the farm basing on
            the IoT based system that collect data daily known as BazaFarm. This
            will allow farm to access them easily and scale faster hence making
            the agricultural yields higher.
          </p>
        </div>
      </div>
      <div className="bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Service on the Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
