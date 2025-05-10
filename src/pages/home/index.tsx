
import { About } from '../../components/about'
import { Projects } from '../../components/projects'
import { Terminal } from '../../components/terminal'
import { I18nProvider } from "@lingui/react"
import { i18n } from "@lingui/core"
import './styles.css'
import { useEffect } from 'react'
import { dynamicLoadMessages, LOCALES } from '../../i18n'

const SelectComponent = () => {
  function changeLanguage(key: keyof typeof LOCALES) {
    dynamicLoadMessages(key)
  }

  return (
    <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'end', margin: '10px', gap: '5px' }}>
      {Object.entries(LOCALES).map(([key]) => (
        <img loading="lazy"
          style={{ background: 'none', border: 'none', cursor: 'pointer', width: '40px' }}
          key={key}
          onClick={() => changeLanguage(key as keyof typeof LOCALES)}
          src={`/${key}.png`}
          alt={key}
        />
      ))}
    </div>
  )
}

const Home = () => {

  useEffect(() => {
    dynamicLoadMessages('en')
  }, [])

  return (
    <I18nProvider i18n={i18n}>
      <SelectComponent />

      <div id="page-home">
        <div className="content">
          <main>
            <Terminal />
          </main>

          <main>
            <About />
          </main>

          <main>
            <Projects />
          </main>

          <br />
          <br />
        </div>
      </div>
    </I18nProvider>
  )
}

export default Home
