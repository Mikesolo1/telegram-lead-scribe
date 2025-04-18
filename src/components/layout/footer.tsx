
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <Container>
        <div className="py-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Logo />
              <p className="text-sm text-gray-600 max-w-xs">
                Полностью автоматизированная платформа для генерации лидов из Telegram-каналов с помощью ИИ.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary" aria-label="Telegram">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="mailto:info@telegramleadscribe.com" className="text-gray-400 hover:text-primary" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="tel:+78001234567" className="text-gray-400 hover:text-primary" aria-label="Phone">
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4">Платформа</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-sm text-gray-600 hover:text-primary">Возможности</a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-sm text-gray-600 hover:text-primary">Как это работает</a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-gray-600 hover:text-primary">Тарифы</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-primary">Интеграции</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4">Компания</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-primary">О нас</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-primary">Блог</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-primary">Партнерская программа</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-primary">Карьера</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4">Правовая информация</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-primary">Условия использования</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-primary">Политика конфиденциальности</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-primary">Обработка данных</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-primary">Правовая информация</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} TelegramLeadScribe. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-xs text-gray-500 hover:text-primary">Соглашение</a>
              <a href="#" className="text-xs text-gray-500 hover:text-primary">Конфиденциальность</a>
              <a href="#" className="text-xs text-gray-500 hover:text-primary">Cookies</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
