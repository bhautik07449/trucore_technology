import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Contact from './components/Contact'
import ServicesOuttoClient from "./components/ServicesOuttoClient";
import Testimonials from "./components/Testimonials";
import { Helmet } from "react-helmet-async";
import logo from "./assets/named_logo.png";
import ProjectDelivery from "./components/ProjectDelivery";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Trucore Technology | Software Development Company</title>
                <meta name="description" content="Trucore Technology offers custom software development, web apps, and digital solutions to help businesses grow efficiently." />
                <meta name="keywords" content="software development, web development, IT services, digital solutions, Trucore Technology" />

                <link rel="canonical" href="https://Trucore.com/" />

                <meta property="og:title" content="Trucore Technology" />
                <meta property="og:description" content="Custom software and web development services for modern businesses." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://Trucore.com/" />
                <meta property="og:image" content="https://Trucore.com/logo.png" />

                {/* Organization Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Trucore Technology",
                        "url": "https://Trucore.com/",
                        "logo": "https://Trucore.com/logo.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91 9510353853\n +91 9512464749\n +91 8469431768",
                            "contactType": "customer service"
                        },
                        "sameAs": [
                            "https://x.com/Trucoretech",
                            "https://www.instagram.com/Trucore_tech?igsh=NjY4NTJpMDhmaW53",
                            "https://www.linkedin.com/company/115810898/admin/dashboard/"
                        ]
                    })}
                </script>

                {/* Site Navigation Schema for Sitelinks */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": [
                            {
                                "@type": "SiteNavigationElement",
                                "position": 1,
                                "name": "Services",
                                "description": "Explore our wide range of software development and digital services.",
                                "url": "https://Trucore.com/service"
                            },
                            {
                                "@type": "SiteNavigationElement",
                                "position": 2,
                                "name": "Portfolio",
                                "description": "View our successful projects and case studies.",
                                "url": "https://Trucore.com/portfolio"
                            },
                            {
                                "@type": "SiteNavigationElement",
                                "position": 3,
                                "name": "About Us",
                                "description": "Learn more about Trucore Technology and our mission.",
                                "url": "https://Trucore.com/about"
                            },
                            {
                                "@type": "SiteNavigationElement",
                                "position": 4,
                                "name": "Contact Us",
                                "description": "Get in touch with our experts for your next project.",
                                "url": "https://Trucore.com/contact"
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <Hero />
            <Services />
            <ServicesOuttoClient />
            <Portfolio />
            <Technologies />
            <ProjectDelivery />
            <Testimonials />
            <Contact />
        </>
    )
}
