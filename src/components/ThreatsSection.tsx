import { Mail, Phone, Users, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const threats = [
  {
    id: 1,
    icon: <Mail className="h-8 w-8 text-destructive" />,
    title: "Фишинговые атаки",
    description: "Письма якобы от банков, государственных служб или крупных компаний с просьбой подтвердить личные данные или перевести деньги.",
    consequences: "Утечка персональных данных, кража денег со счетов, потеря доверия к финансовым учреждениям."
  },
  {
    id: 2,
    icon: <Phone className="h-8 w-8 text-destructive" />,
    title: "Телефонное мошенничество",
    description: "Мошенники звонят, представляясь сотрудниками банка или правоохранительных органов, сообщая о подозрительных операциях.",
    consequences: "Кража денежных средств путем передачи паролей, кодов подтверждения и личной информации."
  },
  {
    id: 3,
    icon: <Users className="h-8 w-8 text-destructive" />,
    title: "Социальные сети и мессенджеры",
    description: "Злоумышленники создают фейковые аккаунты близких людей и просят финансовой помощи или личные данные.",
    consequences: "Передача личных данных третьим лицам, денежные переводы неизвестным адресатам."
  },
  {
    id: 4,
    icon: <ShoppingCart className="h-8 w-8 text-destructive" />,
    title: "Интернет-магазины и сервисы онлайн-платежей",
    description: "Поддельные сайты интернет-магазинов и платформ оплаты услуг, предлагающие товары по привлекательным ценам с требованием предоплаты.",
    consequences: "Потеря финансов, утрата уверенности в интернет-сервисах, отказ от покупок товаров онлайн."
  }
];

const ThreatsSection = () => {
  return (
    <section id="threats" className="py-12 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-center mb-10">Основные киберугрозы для пожилых людей</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {threats.map((threat) => (
            <Card key={threat.id} className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                {threat.icon}
                <div>
                  <CardTitle>{threat.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{threat.description}</p>
                <CardDescription>
                  <strong>Последствия:</strong> {threat.consequences}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreatsSection;
