import { useState } from 'react'
import { getStoredKey, setStoredKey } from '../api.js'

export default function Home({ onStart }) {
  const [apiKey, setApiKey] = useState(getStoredKey())

  function handleKeyChange(e) {
    const value = e.target.value.trim()
    setApiKey(value)
    setStoredKey(value)
  }

  return (
    <div id="home">
      <div className="home-inner">
        <div className="home-badge">AI Widget Builder</div>
        <h1 className="home-title">ALIGNED</h1>
        <p className="home-tagline">
          Answer a few questions about your phone habits. Get suggestions for widgets that could help, then build exactly what you want.
        </p>

        <div className="home-steps">
          <div className="home-step">
            <span className="home-step-num">01</span>
            <div>
              <strong>Reflect on your habits</strong>
              <p>A short questionnaire to help you think about what kind of widget would actually be useful for you.</p>
            </div>
          </div>
          <div className="home-step">
            <span className="home-step-num">02</span>
            <div>
              <strong>Review ideas, or ignore them</strong>
              <p>We'll suggest some starting points based on your answers. Use one, tweak it, or go your own way entirely.</p>
            </div>
          </div>
          <div className="home-step">
            <span className="home-step-num">03</span>
            <div>
              <strong>Build what you want</strong>
              <p>Describe or sketch your widget. You're in full control. The final result is whatever you decide to make.</p>
            </div>
          </div>
        </div>

        <label className="home-key">
          <span className="home-key-label">Your Anthropic API key</span>
          <input
            className="home-key-input"
            type="password"
            placeholder="sk-ant-…  (optional if the server has one in .env)"
            value={apiKey}
            onChange={handleKeyChange}
            autoComplete="off"
            spellCheck={false}
          />
          <span className="home-key-hint">Saved only in this browser and sent straight to your local server.</span>
        </label>

        <button className="home-start-btn" onClick={onStart}>
          Get started →
        </button>
      </div>
    </div>
  )
}
