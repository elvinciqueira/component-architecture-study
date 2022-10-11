import React from "react";
import type { TemplateConfig } from "./withTemplateConfig";

export interface TemplateConfigProviderProps {
  children: React.ReactNode;
  value: TemplateConfig;
}

const TemplateConfigContext = React.createContext<TemplateConfig>({});

export function TemplateConfigProvider({
  value,
  children,
}: TemplateConfigProviderProps) {
  return (
    <TemplateConfigContext.Provider value={value}>
      {children}
    </TemplateConfigContext.Provider>
  );
}

export const useTemplateConfig = () => React.useContext(TemplateConfigContext);
