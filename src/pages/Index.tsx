import { Button } from "@/components/ui/button";
import { Shield, Zap, Globe, Lock, ArrowRight, Sun, Moon, Server, Cloud } from "lucide-react";
import { useTheme } from "next-themes";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const telegramBotUrl = "https://t.me/your_vpn_bot"; // Замените на ссылку вашего бота
  const { theme, setTheme } = useTheme();

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

  const plans = [
    {
      name: "Базовый",
      period: "1 месяц",
      price: "299₽",
      features: ["Безлимитный трафик", "5 устройств", "50+ стран"],
      popular: false,
    },
    {
      name: "Оптимальный",
      period: "6 месяцев",
      price: "1499₽",
      pricePerMonth: "250₽/мес",
      features: ["Все из Базового", "10 устройств", "Приоритетная поддержка", "Эконом 16%"],
      popular: true,
    },
    {
      name: "Максимум",
      period: "12 месяцев",
      price: "2499₽",
      pricePerMonth: "208₽/мес",
      features: ["Все из Оптимального", "20 устройств", "Премиум серверы", "Эконом 30%"],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full glass dark:glass-dark border-2"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>

      {/* Hero Section with Ambience */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="ambience-red absolute inset-0 z-0" />
        
        {/* Background Elements - Servers and Clouds */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
          <Server className="absolute top-20 left-10 w-16 h-16 text-primary animate-pulse" />
          <Cloud className="absolute top-40 right-20 w-24 h-24 text-primary/50 animate-pulse delay-500" />
          <Server className="absolute bottom-40 right-32 w-12 h-12 text-primary animate-pulse delay-1000" />
          <Cloud className="absolute bottom-20 left-1/4 w-20 h-20 text-primary/30 animate-pulse delay-700" />
          <Server className="absolute top-1/3 right-10 w-14 h-14 text-primary animate-pulse delay-300" />
          <Cloud className="absolute top-1/2 left-16 w-28 h-28 text-primary/40 animate-pulse delay-1200" />
        </div>
        
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

      {/* Pricing Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Тарифные планы
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Выберите оптимальный план для ваших потребностей
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative glass dark:glass-dark border-2 hover:scale-105 transition-transform duration-300 ${
                  plan.popular ? "border-primary shadow-2xl" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-primary text-white text-sm font-bold rounded-full">
                    Популярный
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-lg">{plan.period}</CardDescription>
                </CardHeader>
                
                <CardContent className="text-center space-y-6">
                  <div>
                    <div className="text-5xl font-bold text-gradient mb-2">
                      {plan.price}
                    </div>
                    {plan.pricePerMonth && (
                      <p className="text-muted-foreground">{plan.pricePerMonth}</p>
                    )}
                  </div>
                  
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "gradient-primary text-white"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                    size="lg"
                    onClick={() => window.open(telegramBotUrl, '_blank')}
                  >
                    Выбрать план
                    <ArrowRight className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
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
