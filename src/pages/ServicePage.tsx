import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { servicesData } from "@/data/servicesData";
import { useParams, Navigate } from "react-router-dom";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !servicesData[slug]) {
    return <Navigate to="/" replace />;
  }
  
  return <ServicePageTemplate data={servicesData[slug]} />;
}
