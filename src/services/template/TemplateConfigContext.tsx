import React from 'react';
import type { TemplateConfig } from "./withTemplateConfig";

interface TemplateConfigProviderProps {
    children: React.ReactNode;
    value: TemplateConfig;
  }

const TemplateConfigContext = React.createContext<TemplateConfig>({});

export function TemplateProvider({ value, children }: TemplateConfigProviderProps) {
    return (
        <TemplateConfigContext.Provider value={value}>
            {children}
        </TemplateConfigContext.Provider>
    )
}

export const useTemplateContext = () => React.useContext(TemplateConfigContext);