import { FaGear } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { FaBusinessTime } from "react-icons/fa";

interface Card {
  icon: React.ElementType;
  title: string;
  content: string;
}

export const sliderCards: Card[] = [
  {
    icon: FaGear,
    title: "Soluciones Personalizadas",
    content:
      "Ofrecemos soluciones tecnológicas adaptadas a las necesidades específicas de tu empresa, garantizando una integración eficiente y sin complicaciones.",
  },
  {
    icon: BiSupport,
    title: "Soporte Técnico Continuo",
    content:
      "Nuestro equipo está disponible para solucionar cualquier inconveniente y asegurarse de que tu infraestructura tecnológica esté siempre funcionando al máximo.",
  },
  {
    icon: MdSecurity,
    title: "Seguridad Garantizada",
    content:
      "Implementamos las mejores prácticas de seguridad para proteger tus datos y sistemas, asegurando la confidencialidad y la integridad de tu información.",
  },
  {
    icon: GrOptimize,
    title: "Optimización del Rendimiento",
    content:
      "Mejoramos la eficiencia de tus sistemas y procesos, optimizando los recursos y maximizando la productividad de tu empresa con soluciones inteligentes.",
  },
  {
    icon: FaBusinessTime,
    title: "Consultoría para Empresas",
    content:
      "Brindamos asesoramiento a pequeñas y medianas empresas en administración interna comercial, gestión de costos, compras y ventas para minimizar impuestos. Evaluamos problemas, desarrollamos estrategias y colaboramos en su implementación.",
  },
];
