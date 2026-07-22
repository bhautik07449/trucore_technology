import {
    FaAngular,
    FaReact,
    FaVuejs,
    FaNodeJs,
    FaLaravel,
    FaPhp,
    FaJava,
    FaPython,
    FaAndroid,
    FaAppStoreIos,
    FaWordpress,
    FaShopify,
    FaRobot,
    FaCogs,
    FaProjectDiagram,
    FaBrain ,
    FaLaptopCode,
    FaMobileAlt,
    FaDraftingCompass,
    FaPaintBrush ,
    FaShoppingCart ,
    FaPenNib ,
    FaBullhorn,
    FaUsers ,
    FaBuilding ,
    FaBoxes ,
    FaFileInvoiceDollar ,
    FaUserCheck ,
    FaTachometerAlt ,
    FaVials ,

} from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiN8N, SiDotnet  } from "react-icons/si";


export const servicesMenu = [
    {
        title: "Mobile App Development",
        items: [
            { icon: SiFlutter, name: "Flutter", link: "/service/flutter" },
            { icon: FaAndroid, name: "Android", link: "/service/android" },
            { icon: FaAppStoreIos, name: "iOS", link: "/service/ios" },
            { icon: FaReact, name: "React Native", link: "/service/react-native" },
        ],
    },
    {
        title: "Frontend Development",
        items: [
            { icon: FaReact, name: "React", link: "/service/react" },
            { icon: FaAngular, name: "Angular", link: "/service/angular" },
            { icon: SiNextdotjs, name: "Next.js", link: "/service/next" },
            { icon: FaVuejs, name: "Vue.js", link: "/service/vue" },
            // { icon: FaBootstrap, name: "Bootstrap", link: "/service/bootstrap" },
        ],
    },
    {
        title: "Backend Development",
        items: [
            { icon: FaNodeJs, name: "Node.js", link: "/service/node" },
            { icon: SiDotnet, name: ".NET", link: "/service/dotnet" },
            { icon: FaLaravel, name: "Laravel", link: "/service/laravel" },
            { icon: FaPhp, name: "Core PHP", link: "/service/php" },
            { icon: FaJava, name: "Java", link: "/service/java" },
            { icon: FaPython, name: "Python", link: "/service/python" },
        ],
    },
    {
        title: "AI Solution",
        items: [
            { icon: FaRobot, name: "AI Chatbots", link: "/service/ai_chatbot" },
            { icon: SiN8N, name: "n8n Workflows", link: "/service/n8n" },
            { icon: FaCogs, name: "In App AI Integration", link: "/service/ai_integration" },
            { icon: FaBrain, name: "AI Automation", link: "/service/ai_automation" },
            { icon: FaProjectDiagram, name: "Automation Tools", link: "/service/automation_tools" },
        ],
    },
    {
        title: "UI/UX Design",
        items: [
            { icon: FaLaptopCode, name: "Website Design", link: "/service/website_ui" },
            { icon: FaMobileAlt, name: "App Design", link: "/service/app_ui" },
            { icon: FaDraftingCompass, name: "Softwere Design", link: "/service/software_ui" },
            { icon: FaPaintBrush, name: "Graphic Design", link: "/service/graphic_design" },
        ],
    },
    {
        title: "E-Commerce Development",
        items: [
            { icon: FaShopify, name: "Shopify", link: "/service/shopify" },
            { icon: FaWordpress, name: "WordPress", link: "/service/wordpress" },
            { icon: FaShoppingCart , name: "Custom e-Commerce", link: "/service/e-commerce" },
            { icon: FaPenNib, name: "Content Writing", link: "/service/content-writing" },
            { icon: FaBullhorn , name: "Social Media Marketing", link: "/service/social-media-marketing" },
        ],
    },
    {
        title: "Custom Software Solution",
        items: [
            { icon: FaUsers , name: "CRM Solutions", link: "/service/crm" },
            { icon: FaBuilding , name: "ERP Systems", link: "/service/erp" },
            { icon: FaBoxes, name: "Inventory Systems", link: "/service/inventory_management" },
            { icon: FaFileInvoiceDollar , name: "Billing Software", link: "/service/billing_software" },

        ],
    },
    {
        title: "Quality Assurance",
        items: [
            { icon: FaUserCheck , name: "Manual Testing", link: "/service/manual_testing" },
            { icon: FaVials , name: "Automation Testing", link: "/service/automation_testing" },
            { icon: FaTachometerAlt , name: "Performance Testing", link: "/service/performance_testing" },
        ],
    },
];