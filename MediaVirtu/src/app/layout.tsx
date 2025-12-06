import "../styles/border_rgb.css";
import "../styles/cabecalho.css";
import "../styles/barras_navegacao_lateral.css";
import "../styles/corpo_principal.css";
import "../styles/blocos.css";
import "../styles/linha_divisora.css";
import "../styles/shitpost.css";

import Cabecalho from "../components/Cabecalho";
import BarrasNavegacaoLateral from "../components/Barras_navegacao_lateral";


export const metadata = {
  title: "MediaVirtu",
  description: "Um ótimo lugar para seus posts de merda",
  viewport: "whidth = device-width, initial-scale = 1.0",
  icons: {
    icon: "/icones/MediaVirtu_icons/MediaVirtu_icon.png"
  }
};


export default function RootLayout({
  children,

}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="PT-br">
      <body className={`antialiased`}>
        <main id="corpo-principal">
          <Cabecalho/>
          <BarrasNavegacaoLateral/>

          {children}
        </main>
      </body>
    </html>
  );
}
