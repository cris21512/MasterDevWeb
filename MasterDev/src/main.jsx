import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client'
import ReactLenis from 'lenis/react'
import 'lenis/dist/lenis.css'
import App from './App.jsx'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_es from './locales/es/global.json'
import global_en from './locales/en/global.json'



i18next.init({
  interpolation: {escapeValue: false},
  lng: "en", // default language
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    <ReactLenis
      root
      options={{
        duration: 1.5,
        easing: t => 1 - Math.pow(1 - t, 3),
        smoothTouch: true
      }}
    >
    </ReactLenis>
    </I18nextProvider>
  </StrictMode>
)
