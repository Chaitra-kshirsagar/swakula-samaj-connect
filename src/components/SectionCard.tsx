import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
  id?: string;
  className?: string;
}

const SectionCard = ({ title, children, id, className = "" }: SectionCardProps) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="container mx-auto px-6">
        <Card className="max-w-6xl mx-auto bg-white shadow-card border-border/50">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {title}
            </CardTitle>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </CardHeader>
          <CardContent className="prose max-w-none text-text-primary leading-relaxed">
            {children}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SectionCard;