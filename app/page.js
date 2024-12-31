"use client"; 

import Header from "./component/Header";
import Landing from "./component/Landing";
import Comapany from "./component/Company";
import Services from "./component/Services";
import Footer from "./component/Footer";
import Tools from "./component/Tools";

export default function Home() {
  
  return (
    <div>
      <Header />
      <div className="mt-[107px]">
      <Landing />
      <Comapany />
      <Services />
      <Tools />
      <Footer />

      </div>
     
    </div>
  );
}
