import { Heart, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Киберзащита для старшего поколения</h3>
          </div>
          
          <p className="mt-4 text-center max-w-xl">
            Проект по повышению финансовой киберграмотности пожилых людей.
            Вместе мы можем защитить наших близких от мошенников.
          </p>
          
          <div className="mt-6 flex items-center text-sm">
            <span>Сделано с</span>
            <Heart className="h-4 w-4 mx-1 text-destructive" />
            <span>для старшего поколения</span>
          </div>
          
          <p className="mt-4 text-sm">
            © {new Date().getFullYear()} Проект финансовой киберграмотности. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
