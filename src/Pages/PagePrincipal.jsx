import { Header } from "../Components/Header";
import { Overview } from "../Components/Overview";
import { Footer } from "../Components/Footer";
import { LanguageProvider } from "../Components/LanguageText";

export function PagePrincipal() {
    return (
        <LanguageProvider>
            <Header />
            <Overview />
            <Footer />
        </LanguageProvider>
    )
}