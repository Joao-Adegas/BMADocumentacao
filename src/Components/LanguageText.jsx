// LanguageText.jsx
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    title: "B.M.A.",
    subtitle: "Complete and practical training, facilitated learning",
    overviewTitle: "Overview",
    overviewText: "B.M.A, the Mechatronics Learning Bench, came from the need of the ETS to have an integrated mechatronic environment in one place, in order to create a learning platform that was educational and practical.",
    card1: "INTEGRATED ENVIRONMENT",
    card2: "LEARNING PLATFORM",
    card3: "COMPLETE TRAINING",
    card4: "ADAPTABLE SYSTEM",
    advantagesTitle: "Advantages",
    advantagesText: "Our bench, being modular and relatively simple, has enormous adaptability, and can be molded for the most diverse exercises, which facilitates the fulfillment of simple activities to the most complex and difficult demands, whether they are for beginner students or already trained professionals.",
    benchTitle: "Resources",
    benchText: "Our bench features mechanical, electrical, pneumatic, and automation systems. We use a Rexroth PLC to control our bench.",
    team: "Team"
  },
  pt: {
    title: "B.M.A.",
    subtitle: "Formação completa e prática, aprendizagem facilitada",
    overviewTitle: "Visão Geral",
    overviewText: "A B.M.A, Bancada Mecatrônica de Aprendizagem, veio da necessidade da ETS de ter um ambiente mecatrônico integrado em um único lugar, de modo a criar uma plataforma de aprendizado que fosse didática e prática.",
    card1: "AMBIENTE INTEGRADO",
    card2: "PLATAFORMA APRENDIZAGEM",
    card3: "TREINAMENTO COMPLETO",
    card4: "SISTEMA ADAPTÁVEL",
    advantagesTitle: "Vantagens",
    advantagesText: "Nossa bancada, por ser modular e relativamente simples, possui uma enorme adaptabilidade, podendo ser moldada para os mais diversos exercícios, o que facilita o cumprimento de atividades simples às demandas mais complexas e difíceis, sejam elas para alunos iniciantes ou já treinados profissionais.",
    benchTitle: "Recursos",
    benchText: "Nossa bancada conta com sistemas mecânicos, elétricos, pneumáticos e de automação. Utilizamos um CLP Rexroth para controlar nossa bancada.",
    team: "Integrantes"
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const text = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, text }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
