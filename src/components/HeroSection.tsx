import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="mb-4">О проекте</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Наш проект направлен на повышение осведомленности пенсионеров о современных
            угрозах информационной безопасности и предотвращение финансовых потерь
            от действий злоумышленников.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 my-8">
          <Button
            size="lg"
            className="text-base"
            onClick={() => document.getElementById("threats")?.scrollIntoView({ behavior: "smooth" })}
          >
            Узнать об угрозах
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base"
            onClick={() => document.getElementById("recommendations")?.scrollIntoView({ behavior: "smooth" })}
          >
            Рекомендации по защите
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
