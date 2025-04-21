import { BookOpen, Users, Video, PenTool, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formats = [
  {
    id: 1,
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Информационные лекции и семинары",
    description: "Занятия с участием специалистов банков и представителей правоохранительных органов. Возможность задать вопросы и обсудить реальные случаи мошенничества."
  },
  {
    id: 2,
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Консультации экспертов",
    description: "Индивидуальные консультации для тех, кто хочет подробнее разобраться в вопросах защиты персональных данных и безопасного поведения в Интернете."
  },
  {
    id: 3,
    icon: <Video className="h-8 w-8 text-primary" />,
    title: "Мастер-классы и вебинары",
    description: "Онлайн-курсы, посвященные основным правилам безопасной работы с финансовыми инструментами в цифровом пространстве. Возможность учиться в комфортных домашних условиях."
  },
  {
    id: 4,
    icon: <PenTool className="h-8 w-8 text-primary" />,
    title: "Практические упражнения",
    description: "Специальные тренинги, позволяющие пожилым гражданам попробовать себя в роли жертвы мошенников и выработать навыки противодействия таким атакам."
  },
  {
    id: 5,
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Раздаточные материалы",
    description: "Брошюры и памятки с простыми рекомендациями и правилами финансового кибербезопасного поведения, которые распространяются среди участников программы."
  }
];

const FormatsSection = () => {
  return (
    <section id="formats" className="py-12 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-center mb-10">Форматы взаимодействия с аудиторией</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {formats.map((format) => (
            <Card key={format.id} className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                {format.icon}
                <CardTitle className="text-xl">{format.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{format.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormatsSection;
