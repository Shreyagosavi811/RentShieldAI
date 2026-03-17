import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import { useState } from "react";
import PGList from "../components/PGList";
import { searchPGs } from "../api/axios.js";


const Home = () => {
  const [pgs, setPGs] = useState([]);
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async (loc, pageNumber = 1) => {
    console.log("Home search:", location, page);
    const res = await searchPGs(loc, pageNumber);
    console.log("API response:", res);
    setPGs(res.data.data);
    setLocation(loc);
    setPage(res.data.page);
    setTotalPages(res.data.totalPages);

  };
  return (
    <>
      <Navbar />
      <HeroSection onSearch={handleSearch} />
      {pgs?.length > 0 ? (
        <PGList
          pgs={pgs}
          page={page}
          totalPages={totalPages}
          location={location}
          onPageChange={handleSearch}
        />) :
        (
          <>
            <FeaturesSection />
            <TestimonialsSection />
          </>
        )}

      <Footer />
    </>
  );
};

export default Home;