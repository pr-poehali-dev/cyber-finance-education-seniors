import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-center mb-10">Свяжитесь с нами</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Запись на мероприятия</CardTitle>
              <CardDescription>
                Оставьте свои данные, и мы свяжемся с вами для предоставления подробной информации
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванович" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Номер телефона</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="format">Интересующий формат</Label>
                  <Input id="format" placeholder="Например: лекция, вебинар" />
                </div>
                <Button type="submit" className="w-full">Отправить заявку</Button>
              </form>
            </CardContent>
          </Card>
          
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Наши контакты</CardTitle>
              <CardDescription>
                Вы также можете связаться с нами напрямую по указанным контактам
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>info@киберзащита.рф</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </div>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Приём звонков: 9:00 - 18:00 (пн-пт)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
