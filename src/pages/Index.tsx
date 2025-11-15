import { Button } from "@/components/ui/button";
import { Shield, Zap, Globe, Lock, ArrowRight } from "lucide-react";

const Index = () => {
  const telegramBotUrl = "https://t.me/your_vpn_bot"; // Замените на ссылку вашего бота

  const features = [
    {
      icon: Shield,
      title: "Максимальная защита",
      description: "Военное шифрование данных для полной анонимности",
    },
    {
      icon: Zap,
      title: "Высокая скорость",
      description: "Серверы нового поколения без потери скорости",
    },
    {
      icon: Globe,
      title: "Глобальный доступ",
      description: "Серверы в 50+ странах по всему миру",
    },
    {
      icon: Lock,
      title: "Без логов",
      description: "Мы не храним данные о вашей активности",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Ambience */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="ambience-red absolute inset-0 z-0" />
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Glass Card */}
            <div className="glass dark:glass-dark rounded-3xl p-12 shadow-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Ваша приватность —{" "}
                <span className="text-gradient">наш приоритет</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Премиум VPN-сервис для безопасного и свободного интернета
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="gradient-primary text-white font-semibold text-lg px-8 py-6 rounded-xl hover:opacity-90 transition-all"
                  onClick={() => window.open(telegramBotUrl, '_blank')}
                >
                  Получить доступ
                  <ArrowRight className="ml-2" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="font-semibold text-lg px-8 py-6 rounded-xl border-2 hover:bg-accent/10"
                  onClick={() => window.open(telegramBotUrl, '_blank')}
                >
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Почему выбирают нас
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="ambience-red absolute inset-0 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass dark:glass-dark rounded-3xl p-12 md:p-16 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Начните прямо сейчас
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами в Telegram для получения персонального тарифа и подробной консультации
            </p>
            
            <Button 
              size="lg"
              className="gradient-primary text-white font-semibold text-lg px-12 py-6 rounded-xl hover:opacity-90 transition-all"
              onClick={() => window.open(telegramBotUrl, '_blank')}
            >
              Открыть Telegram бот
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground">
            © 2024 VPN Service. Ваша приватность защищена.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
