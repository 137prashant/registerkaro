"use client"; // For using hooks and interactivity
import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Landing from "./component/Landing";
import Comapany from "./component/Company";
import Services from "./component/Services";
import Footer from "./component/Footer";

export default function Home() {
  const [companiesWithDirectors, setCompaniesWithDirectors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch("/api/testConnection");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCompaniesWithDirectors(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCompanies();
  }, []);

  if (error) return <p>Error: {error}</p>;

  if (companiesWithDirectors.length === 0) return <p>Loading...</p>;

  return (
    <div>
      {/* <h1>Companies and Directors</h1>
      <ul>
        {companiesWithDirectors.map((company) => (
          <li key={company.id}>
            <h2>{company.name}</h2>
            <p>Details: {company.details}</p>
            <h3>Directors:</h3>
            <ul>
              {company.directors.map((director) => (
                <li key={director.id}>{director.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
      <Header />
      <div className="mt-[107px]">
      <Landing />
      <Comapany />
      <Services />
      <Footer />

      </div>
     
    </div>
  );
}
