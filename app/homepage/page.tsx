import Head from "next/head";
import Link from "next/link";
import { Home, BarChart, Calculator, User } from 'lucide-react';

const footerItems = [
  { name: "Collaborate", icon: Home, active: true, link: "/" },
  { name: "Solutions", icon: BarChart, active: false, link: "/solutions" },
  { name: "Calculators", icon: Calculator, active: false, link: "/calculators/page" },
  { name: "My Dashboard", icon: User, active: false, link: "/dashboard" },
];

export default function Homepage() {

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Noto+Sans:wght@400;500;700;900&display=swap"
        />
        <title>Galileo Design</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
      </Head>

      <div className="relative flex flex-col min-h-screen bg-white overflow-x-hidden group/design-root font-manrope">
        {/* Header */}
        <div className="flex items-center justify-between p-4 pb-2 bg-white">
          <h2 className="text-lg font-bold leading-tight text-center tracking-[-0.015em] text-[#141414] flex-1 pl-12">
            FarmLink
          </h2>
          <div className="flex items-center justify-end w-12">
            <button className="flex items-center justify-center h-12 text-[#141414] bg-transparent rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex overflow-y-auto">
          <div className="flex items-stretch gap-3 p-4">
            {[
              {
                title: "Beekeeper Collaboration",
                description: "Connect with local beekeepers",
                image: "https://cdn.usegalileo.ai/sdxl10/78b59baa-eb67-4fd5-beb0-aa6f105ae268.png",
              },
              {
                title: "Packaging Solutions",
                description: "Biodegradable packaging",
                image: "https://cdn.usegalileo.ai/sdxl10/dc261c18-3e73-444a-a0df-7e49f9724008.png",
              },
              {
                title: "Solar Panels",
                description: "Estimate cost and savings",
                image: "https://cdn.usegalileo.ai/sdxl10/a678858b-1473-49be-81a7-4bd084535ed8.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col flex-1 gap-4 bg-white shadow-md rounded-xl min-w-60"
              >
                <div
                  className="w-full bg-center bg-cover bg-no-repeat rounded-xl aspect-square"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="flex flex-col justify-between p-4 gap-4">
                  <div>
                    <p className="text-base font-medium text-[#141414]">{item.title}</p>
                    <p className="text-sm font-normal text-neutral-500">{item.description}</p>
                  </div>
                  <button className="flex items-center justify-center h-10 px-4 text-sm font-bold bg-[#F4F4F4] rounded-xl text-[#141414]">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Collaborations */}
        <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold text-[#141414] tracking-[-0.015em]">
          Trending Collaborations
        </h2>
        {[
          {
            title: "Waste to compost service",
            description: "by Modern Waste",
            image: "https://cdn.usegalileo.ai/sdxl10/22281da4-897f-49c2-9867-4bb8049254f2.png",
          },
          {
            title: "Water conservation plan",
            description: "by Waterwise",
            image: "https://cdn.usegalileo.ai/sdxl10/f64d6b25-affb-4362-bb01-9df11053a6b8.png",
          },
          {
            title: "Carbon footprint analysis",
            description: "by CarbonIQ",
            image: "https://cdn.usegalileo.ai/sdxl10/e002d53b-039f-4d96-8269-422b23bf8dac.png",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 px-4 py-3 bg-white"
          >
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-cover bg-no-repeat rounded-lg aspect-video h-14 w-fit"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="flex flex-col">
                <p className="text-base font-medium text-[#141414]">{item.title}</p>
                <p className="text-sm font-normal text-neutral-500">{item.description}</p>
              </div>
            </div>
            <button className="h-8 px-4 text-sm font-medium bg-[#F4F4F4] rounded-xl text-[#141414]">
              Start
            </button>
          </div>
        ))}

        {/* Community */}
          <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold text-[#141414] tracking-[-0.015em]">
            Community
          </h2>
          <div className="flex items-center px-4 py-3">
            <div className="flex items-center">
              {[
                "pfp1.jpg",
                "pfp2.jpg",
                "pfp3.jpg",
                "pfp4.jpg",
                "pfp5.jpg",
              ].map((src, idx) => (
                <div
                  key={idx}
                  className={`bg-center bg-cover bg-no-repeat aspect-square rounded-full h-11 ${
                    idx > 0 ? "-ml-4" : ""
                  }`}
                  style={{ backgroundImage: `url(${src})` }}
                > </div>
              ))}
            </div>
          </div>
  
          {/* Footer */}
          <div className="flex justify-between px-4 py-3 bg-white border-t border-[#F4F4F4]">
          {footerItems.map((item, index) => (
            <Link key={index} href={item.link}>
              <div className={`flex flex-col items-center flex-1 ${item.active ? "text-[#141414]" : "text-neutral-500"}`}>
                {/* Icon Rendering */}
                <item.icon
                  className={`w-6 h-6 ${item.active ? "text-[#141414] fill-current" : "text-neutral-500"}`}
                />
                <p className="text-xs font-medium">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </>
    );
  }
