import React from "react";
import Navbar from "../components/layout/navbar/navbar";
import HeroSection from "../components/pages/HeroSection";
import SaleSection from "../components/pages/Sales";
import FAQComponent from "../components/pages/FAQComponent";
import TeamSection from "../components/pages/TeamSection";
import Footer from "../components/layout/footer/Footer";
import Apple from "../components/pages/apple";

const Feature = () => {
    return (
        <div>
            <Navbar />
            <main>
                <HeroSection />
                <SaleSection />
                <TeamSection />
                <FAQComponent />
                {/* <Apple/> */}
            </main>
            <Footer />
        </div>
    );
};

export default Feature;