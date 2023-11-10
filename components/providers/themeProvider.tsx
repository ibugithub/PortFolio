'use client' 

import { ThemeProvider as Theme } from 'next-themes'; 
import type  { ThemeProviderProps } from 'next-themes/dist/types' 

const  ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  <Theme {...props}>
    {children}
  </Theme>
}

export default ThemeProvider;