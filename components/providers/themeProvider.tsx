'use client' 
import { ThemeProvider as Theme } from 'next-theme'; 
import type  { ThemeProviderProps } from 'next-themes/dist/types' 

const  ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  <Theme {...props}>
    {children}
  </Theme>
}
export default ThemeProvider;