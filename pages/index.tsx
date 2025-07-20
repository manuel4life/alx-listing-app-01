import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { PROPERTYLISTINGSAMPLE, HERO_IMAGE_URL } from "../constants";

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const FILTER_OPTIONS = ["Top Villa", "Self Checkin", "Free Parking"];

  return (
    <Layout>
      <Head>
        <title>Property Listings</title>
      </Head>

      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-white text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2">
          {FILTER_OPTIONS.map((filter) => (
            <button
              key={filter}
              onClick={() =>
                setActiveFilter(filter === activeFilter ? null : filter)
              }
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <div
              key={property.name}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{property.name}</h3>
                  <div className="flex items-center">
                    <span>★</span>
                    <span className="ml-1">{property.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 my-2">
                  {property.address.city}, {property.address.country}
                </p>
                <p className="font-bold">${property.price}/night</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
