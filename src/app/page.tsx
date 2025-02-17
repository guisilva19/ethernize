"use client";
import React, { useState } from "react";
import {
  Instagram,
  MapPin,
  Clock,
  Phone,
  Mail,
  Music2,
  Users,
  Award,
  Menu,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5577991320762", "_blank"); // Replace with actual number
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/ethernize.cerimonial", "_blank"); // Replace with actual handle
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#324528]/5">
      {/* Header */}
      <header className="bg-[#324528] text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img
            src="https://i.ibb.co/9SxnJrh/ethernize.png"
            alt="Ethernize Logo"
            className="h-12 md:h-16"
          />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:text-[#324528]/80">
              Sobre
            </a>
            <a href="#services" className="hover:text-[#324528]/80">
              Serviços
            </a>
            <a href="#contact" className="hover:text-[#324528]/80">
              Contato
            </a>
            <div className="flex gap-3">
              <button
                onClick={handleInstagramClick}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Instagram size={20} />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <FaWhatsapp size={20} />
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } bg-[#324528] border-t border-white/10`}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="#about"
              onClick={closeMenu}
              className="hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
            >
              Sobre
            </a>
            <a
              href="#services"
              onClick={closeMenu}
              className="hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
            >
              Serviços
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
            >
              Contato
            </a>
            <div className="flex gap-3 mt-2">
              <button
                onClick={() => {
                  handleInstagramClick();
                  closeMenu();
                }}
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Instagram size={24} />
              </button>
              <button
                onClick={() => {
                  handleWhatsAppClick();
                  closeMenu();
                }}
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <FaWhatsapp size={24} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <div
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Eternize momentos especiais com música
              </h1>
              <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-200">
                Transformando seu evento cerimonial em memórias inesquecíveis
                através da música
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full sm:w-auto bg-[#324528] text-white px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#324528]/90 transition-colors"
                >
                  <FaWhatsapp size={20} />
                  Solicite um orçamento
                </button>
                <button
                  onClick={handleInstagramClick}
                  className="w-full sm:w-auto bg-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white/30 transition-colors"
                >
                  <Instagram size={20} />
                  Siga nosso trabalho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Music2,
                title: "Músicos Profissionais",
                description: "Equipe altamente qualificada e experiente",
              },
              {
                icon: Users,
                title: "Atendimento Personalizado",
                description: "Planejamento detalhado para seu evento",
              },
              {
                icon: Award,
                title: "Excelência Musical",
                description: "Qualidade e compromisso em cada apresentação",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-[#324528]/5 transition-colors"
              >
                <feature.icon size={40} className="text-[#324528] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#324528]">
            Nossos Serviços
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
            Oferecemos uma experiência musical única e memorável para todos os
            tipos de eventos cerimoniais
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cerimônias de Casamento",
                description:
                  "Música personalizada para cada momento especial da sua cerimônia, desde a entrada até a saída dos noivos.",
                image:
                  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3",
              },
              {
                title: "Eventos Corporativos",
                description:
                  "Trilha sonora elegante e profissional para suas reuniões, premiações e eventos empresariais.",
                image:
                  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3",
              },
              {
                title: "Celebrações Especiais",
                description:
                  "Apresentações musicais para formaturas, bodas e outros momentos memoráveis.",
                image:
                  "https://images.unsplash.com/photo-1448907503123-67254d59ca4f?ixlib=rb-4.0.3",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={handleWhatsAppClick}
                      className="bg-[#324528] text-white px-6 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                    >
                      <FaWhatsapp size={18} />
                      Consultar
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#324528]">
              Sobre a Ethernize
            </h2>
            <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg">
              Somos uma equipe apaixonada por música, especializada em criar
              momentos únicos e emocionantes em eventos cerimoniais. Com anos de
              experiência e um repertório diversificado, garantimos a trilha
              sonora perfeita para cada momento do seu evento.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
              Nossa missão é eternizar seus momentos especiais através da
              música, criando memórias que durarão para sempre.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleInstagramClick}
                className="w-full sm:w-auto bg-[#324528] text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#324528]/90 transition-colors"
              >
                <Instagram size={20} />
                Conheça nosso trabalho
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto bg-[#324528]/10 text-[#324528] px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#324528]/20 transition-colors"
              >
                <FaWhatsapp size={20} />
                Fale conosco
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#324528] text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Entre em Contato
          </h2>
          <p className="text-center text-gray-200 mb-8 md:mb-12 max-w-2xl mx-auto">
            Estamos prontos para tornar seu evento ainda mais especial. Entre em
            contato e vamos conversar sobre seu projeto.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-4 group hover:bg-white/10 p-4 rounded-lg transition-colors cursor-pointer">
                <MapPin className="flex-shrink-0 group-hover:text-[#324528]" />
                <p>Rua Exemplo, 123 - Cidade, Estado</p>
              </div>
              <div className="flex items-center gap-4 group hover:bg-white/10 p-4 rounded-lg transition-colors cursor-pointer">
                <Clock className="flex-shrink-0 group-hover:text-[#324528]" />
                <p>Atendimento: Segunda a Sábado</p>
              </div>
              <div
                className="flex items-center gap-4 group hover:bg-white/10 p-4 rounded-lg transition-colors cursor-pointer"
                onClick={handleWhatsAppClick}
              >
                <Phone className="flex-shrink-0 group-hover:text-[#324528]" />
                <p>+55 (00) 0000-0000</p>
              </div>
              <div className="flex items-center gap-4 group hover:bg-white/10 p-4 rounded-lg transition-colors cursor-pointer">
                <Mail className="flex-shrink-0 group-hover:text-[#324528]" />
                <p>contato@ethernize.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 justify-center items-center md:items-end">
              <button
                onClick={handleInstagramClick}
                className="bg-white text-[#324528] px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-3 hover:bg-gray-100 transition-colors w-full md:w-auto justify-center"
              >
                <Instagram size={24} />
                Siga no Instagram
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-white text-[#324528] px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-3 hover:bg-gray-100 transition-colors w-full md:w-auto justify-center"
              >
                <FaWhatsapp size={24} />
                Fale no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#324528]/10 py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#324528] text-center md:text-left">
              &copy; 2024 Ethernize. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleInstagramClick}
                className="text-[#324528] hover:text-[#324528]/70 transition-colors"
              >
                <Instagram size={24} />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="text-[#324528] hover:text-[#324528]/70 transition-colors"
              >
                <FaWhatsapp size={24} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
