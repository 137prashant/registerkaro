import Image from "next/image";
import groupphoto from "../../public/Group 1261153018.jpg";

export default function Services() {
  return (
    <>
      <div className="bg-[#fafafa] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-base text-[#ffa229] font-semibold tracking-wide uppercase">
            Welcome to RegisterKaro.in
          </h2>
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Our Services
          </h1>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {/* Service Card */}
          {[
            {
              title: "Company Formation",
              description:
                "Build web-based solutions that enhance customer experience.",
              icon: "⚙️", // Replace with actual icon/image
            },
            {
              title: "Company Secretarial Services",
              description:
                "Make data-driven decisions and utilize technology to reach business goals.",
              icon: "📊",
            },
            {
              title: "Virtual Office Address",
              description:
                "Foster customer relationships by effectively serving your market.",
              icon: "⭐",
            },
            {
              title: "Annual Compliance Services",
              description:
                "Turn your ideas into modern products with our design experts.",
              icon: "🧱",
            },
            {
              title: "Payroll Services",
              description:
                "Expand your business across the globe with minimal effort.",
              icon: "🛒",
            },
            {
              title: "Bookkeeping Services",
              description:
                "Steering user behaviors with creative design, data insights & technology.",
              icon: "📋",
            },
          ].map((service, index) => (
            <div key={index} className=" p-6 text-center">
              <div className="text-orange-400 text-4xl">{service.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {service.description}
              </p>
              <a
                href="#"
                className="mt-4 flex items-center justify-center gap-1 text-gray-600 font-medium hover:underline text-sm"
              >
                Learn more{" "}
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3599 8.44043C16.3599 12.7217 12.8911 16.1904 8.60989 16.1904C4.32864 16.1904 0.859891 12.7217 0.859891 8.44043C0.859891 4.15918 4.32864 0.69043 8.60989 0.69043C12.8911 0.69043 16.3599 4.15918 16.3599 8.44043ZM2.35989 8.44043C2.35989 11.9092 5.14114 14.6904 8.60989 14.6904C12.0474 14.6904 14.8599 11.9092 14.8599 8.44043C14.8599 5.00293 12.0474 2.19043 8.60989 2.19043C5.14114 2.19043 2.35989 5.00293 2.35989 8.44043ZM4.60989 9.06543V7.81543C4.60989 7.62793 4.76614 7.44043 4.98489 7.44043H8.60989V5.34668C8.60989 5.03418 8.98489 4.84668 9.23489 5.09668L12.3286 8.19043C12.4849 8.34668 12.4849 8.56543 12.3286 8.72168L9.23489 11.8154C8.98489 12.0654 8.60989 11.8779 8.60989 11.5342V9.44043H4.98489C4.76614 9.44043 4.60989 9.28418 4.60989 9.06543Z"
                    fill="#001038"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-block bg-[#1c4670] text-white px-6 py-3 text-sm font-medium rounded-md shadow hover:bg-[#2f75bc]"
          >
            See All Services
          </a>
        </div>
      </div>
      <div className="bg-[#fafafa] py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="mr-10">
              <h2 className="text-base text-[#ffa229] font-semibold tracking-wide uppercase">
                Welcome to RegisterKaro.in
              </h2>
              <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About <span className="text-[#ffa229]">Register Karo</span>
              </h1>
              <p className="mt-4 text-gray-600 md:text-lg">
                We have been using Intelegencia as our DevOps vendor for our
                field service applications over the last couple of years and I’m
                extremely pleased with their performance, ability to execute,
                and willingness to adapt in our ever-changing environment.
              </p>
              <p className="mt-4 text-gray-600 md:text-lg">
                Perry is an outstanding leader who is fanatical about customer
                satisfaction. He has built a solid team which has consistently
                delivered on projects thereby exceeding everyone’s expectations.
              </p>
              <p className="mt-4 text-gray-600 md:text-lg">
                I would strongly recommend their services to any organization
                that is looking for solid, reliable, and predictable outcomes.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-block bg-[#1c4670] text-white px-6 py-3 text-sm font-medium rounded-md shadow hover:bg-[#2f75bc]"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <Image
                src={groupphoto}
                alt="Team"
                className="rounded-lg shadow-lg object-cover"
              />
              <div className="absolute -z-10 top-4 left-4 w-full h-full border-2 border-orange-300 rounded-lg" />
            </div>
            <div className="absolute top-0 right-0">
              <svg
                width="52"
                height="531"
                viewBox="0 0 52 531"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.4328 350.766C-51.8067 170.886 49.7945 41.972 111 0L89.068 750C89.068 750 41.1284 706.029 31.4328 643.571C21.7372 581.113 114.672 530.646 31.4328 350.766Z"
                  fill="#FFA229"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
