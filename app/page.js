"use client"; 

import Header from "./component/Header";
import Landing from "./component/Landing";
import Comapany from "./component/Company";
import Services from "./component/Services";
import Footer from "./component/Footer";

export default function Home() {
  
  return (
    <div>
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
