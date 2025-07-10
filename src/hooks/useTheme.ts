import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const useThemeState = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return (saved as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    // Remove both classes first
    root.classList.remove('light', 'dark');
    body.classList.remove('light', 'dark');
    
    // Add the current theme class
    root.classList.add(theme);
    body.classList.add(theme);
    
    // Force apply theme to all elements
    const applyThemeToElement = (element: Element) => {
      element.classList.remove('light', 'dark');
      element.classList.add(theme);
    };
    
    // Apply to all existing elements
    document.querySelectorAll('*').forEach(applyThemeToElement);
    
    // Watch for new elements (CopilotKit components)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            applyThemeToElement(node as Element);
            (node as Element).querySelectorAll('*').forEach(applyThemeToElement);
          }
        });
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
    
    return () => observer.disconnect();
  }, [theme]);

  return { theme, toggleTheme };
};
