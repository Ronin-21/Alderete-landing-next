import {
  FaDatabase,
  FaNetworkWired,
  FaTasks,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import { FaComputer, FaGear, FaLaptopCode } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";

interface Card {
  icon: React.ElementType;
  title: string;
  content: string;
}

export const servicesCards: Card[] = [
  {
    icon: FaNetworkWired,
    title: "Montaje de Infraestructura Informática",
    content:
      "Diseñamos e implementamos la infraestructura tecnológica necesaria para tu empresa, garantizando un funcionamiento óptimo y seguro de tus sistemas.",
  },
  {
    icon: GrSystem,
    title: "Implementación de Software",
    content:
      "Nos encargamos de configurar soluciones de software adaptadas a tus necesidades empresariales.",
  },
  {
    icon: FaTools,
    title: "Mantenimiento de Sistemas",
    content:
      "Ofrecemos servicios de mantenimiento preventivo y correctivo para tus sistemas.",
  },
  {
    icon: FaGear,
    title: "Configuración y Soporte Técnico",
    content:
      "Brindamos soporte continuo para garantizar el correcto funcionamiento de los sistemas y resolver cualquier inconveniente en el menor tiempo posible.",
  },
  {
    icon: FaUsers,
    title: "Capacitación para Usuarios",
    content:
      "Capacitamos a los equipos de trabajo para que aprovechen al máximo las herramientas implementadas, mejorando su eficiencia y productividad.",
  },
  {
    icon: FaTasks,
    title: "Automatización de Procesos",
    content:
      "Diseñamos soluciones que permiten automatizar flujos de trabajo, reduciendo tiempos operativos y minimizando errores en la gestión.",
  },
  {
    icon: RiCustomerService2Fill,
    title: "Asesoramiento Personalizado",
    content:
      "Nuestras soluciones están diseñadas para crecer junto con su empresa, permitiendo incorporar nuevas funcionalidades según sus requerimientos.",
  },
  {
    icon: FaDatabase,
    title: "Recuperación de Datos",
    content:
      "Contamos con herramientas especializadas para recuperar información en caso de pérdida de datos, garantizando la continuidad de sus operaciones.",
  },
  {
    icon: FaComputer,
    title: "Service y Actualización de Hardware",
    content:
      "Ofrecemos servicios de mantenimiento preventivo y correctivo para tus sistemas.",
  },
  {
    icon: FaLaptopCode,
    title: "Diseño de Páginas Web",
    content:
      "Diseñamos y desarrollamos sitios web a medida, adaptados a las necesidades de tu empresa y optimizados para mejorar la experiencia de usuario.",
  },
];
