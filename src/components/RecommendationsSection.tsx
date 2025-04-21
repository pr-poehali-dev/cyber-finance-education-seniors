import { AlertCircle, Lock, Bell, ShieldCheck, CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const recommendations = [
  {
    id: 1,
    icon: <AlertCircle className="h-8 w-8 text-secondary" />,
    title: "Проверяйте подлинность сообщений",
    tips: [
      "Не открывайте вложения писем от незнакомых отправителей.",
      "Никогда не передавайте личные данные (пароли, коды подтверждения) по телефону или электронной почте."
    ]
  },
  {
    id: 2,
    icon: <Bell className="h-8 w-8 text-secondary" />,
    title: "Остерегайтесь телефонных звонков",
    tips: [
      "Если вам позвонили сотрудники банка или полиции — положите трубку и перезвоните самостоятельно в официальные службы.",
      "Запишите номера официальных телефонов организаций, которым вы доверяете."
    ]
  },
  {
    id: 3,
    icon: <Lock className="h-8 w-8 text-secondary" />,
    title: "Используйте надежные пароли",
    tips: [
      "Регулярно меняйте пароли на банковских картах и сервисах онлайн-банкинга.",
      "Установите двухфакторную аутентификацию везде, где это возможно."
    ]
  },
  {
    id: 4,
    icon: <ShieldCheck className="h-8 w-8 text-secondary" />,
    title: "Будьте осторожны в соцсетях",
    tips: [
      "Убедитесь, что аккаунт вашего друга действительно принадлежит этому человеку, прежде чем совершать финансовые операции.",
      "Настройте настройки приватности, ограничив доступ посторонних лиц к вашим личным данным."
    ]
  },
  {
    id: 5,
    icon: <CreditCard className="h-8 w-8 text-secondary" />,
    title: "Покупки в проверенных магазинах",
    tips: [
      "Совершайте покупки только на известных сайтах, имеющих положительные отзывы пользователей.",
      "Проверяйте наличие SSL-сертификата сайта (иконка замка рядом с адресом)."
    ]
  }
];

const RecommendationsSection = () => {
  return (
    <section id="recommendations" className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-center mb-10">Рекомендации для предотвращения рисков</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((rec) => (
            <Card key={rec.id} className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                {rec.icon}
                <CardTitle className="text-xl">{rec.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {rec.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
