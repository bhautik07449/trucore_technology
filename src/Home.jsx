import Hero from "./components/Hero";
import AboutCompany from "./components/AboutCompany";
import Services from "./components/Services";
import ProcessSteps from "./components/ProcessSteps";
import TeamStats from "./components/TeamStats";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import ServicesOuttoClient from "./components/ServicesOuttoClient";
import Testimonials from "./components/Testimonials";
import BottomCTA from "./components/BottomCTA";
import { Helmet } from "react-helmet-async";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Trucore Technologies | Autonomous AI & Full-Stack Web/App Company</title>
                <meta name="description" content="Trucore Technologies engineers custom AI solutions, Next.js web applications, mobile apps, and enterprise ERP systems globally." />
                <meta name="keywords" content="AI development, custom software, web app development, mobile app development, Trucore Technologies" />

                <link rel="canonical" href="https://www.trucoretechnology.com/" />

                <meta property="og:title" content="Trucore Technologies | AI & Full-Stack Engineering" />
                <meta property="og:description" content="Custom software, autonomous AI systems, and web apps for modern enterprises." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.trucoretechnology.com/" />
            </Helmet>

            {/* 1. Hero Section */}
            <Hero />

            {/* 2. About Company */}
            <AboutCompany />

            {/* 4. Services / Products */}
            <Services />

            {/* 5. Why Choose Us & Process Pipeline */}
            <ProcessSteps />

            {/* 6. Animated Counters & Statistics */}
            <TeamStats />

            {/* 7. Portfolio / Case Studies */}
            <Portfolio />

            {/* 8. Modern AI & Tech Stack */}
            <Technologies />

            {/* 9. Bento Industry Grid */}
            <ServicesOuttoClient />

            {/* 10. Testimonials Carousel */}
            <Testimonials />

            {/* 11. Strong Bottom CTA Section */}
            <BottomCTA />
        </>
    )
}
