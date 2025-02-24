import { ReactNode, useContext, useState, createContext } from "react";

// Interface para o contexto
interface IContextUi {
  onMenuMobile: boolean;
 setOnMenuMobile: (state: boolean) => void;
}

// Criando o contexto com valores padrão
const ContextUi = createContext<IContextUi>({
  onMenuMobile: false, // Valor padrão booleano
  setOnMenuMobile: () => {}, // Função padrão vazia
});

// Tipos para as props do Provider
type Props = {
  children: ReactNode;
};

// Provider do contexto
export const ContextUIProvider = ({ children }: Props) => {
  const [onMenuMobile, setOnMenuMobile] = useState(false);

 
  return (
    <ContextUi.Provider value={{ onMenuMobile,setOnMenuMobile }}>
      {children}
    </ContextUi.Provider>
  );
};

// Hook para consumir o contexto
export const useContextUI = () => useContext(ContextUi)
