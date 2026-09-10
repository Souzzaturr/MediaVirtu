import "@/src/styles/globals.css";
import "../styles/border_rgb.css";
import "../styles/cabecalho.css";
import "../styles/barras_navegacao_lateral.css";
import "../styles/blocos.css";
import "../styles/linha_divisora.css";
import "../styles/shitpost.css";
import "@/src/styles/buttons.css";
import "@/src/styles/form.css";
import "@/src/styles/popups.css";

import { SYSTEM_CONFIG } from "@/src/globals/config";

import { createClient } from "@/src/lib/supabase/server";


import Cabecalho from "../components/Cabecalho";
import { BarrasNavegacaoLateral } from "@/src/components/barrasNavegacaoLateral/BarrasNavegacaoLateral";
import { Main } from "@/src/components/Main";
import Preloader from "../components/Preloader";


export const metadata = {
  title: SYSTEM_CONFIG.name,
  description: SYSTEM_CONFIG.description,
  viewport: "whidth = device-width, initial-scale = 1.0",
  icons: {
    icon: SYSTEM_CONFIG.logoPrincipal
  }
};


export default async function RootLayout({ children, }: Readonly<{children: React.ReactNode;}>) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <html lang="PT-br" suppressHydrationWarning>
      <body className={`antialiased`}>
          <Preloader/>
          <Cabecalho/>
          <BarrasNavegacaoLateral/>
        <Main initialUser = { user } >
          {children}
        </Main>
      </body>
    </html>
  );
}
