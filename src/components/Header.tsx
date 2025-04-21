import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-center space-x-3">
          <Shield className="h-8 w-8" />
          <h1 className="text-center">Киберзащита для старшего поколения</h1>
        </div>
        <p className="text-center mt-2 text-lg max-w-2xl mx-auto">
          Проект повышения уровня финансовой киберграмотности для людей старше 60 лет
        </p>
      </div>
    </header>
  );
};

export default Header;
