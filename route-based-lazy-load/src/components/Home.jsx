import { useState } from 'react'
import { Link } from 'react-router-dom'
import Shell from './Shell'

function Home() {
  const [activeFeature, setActiveFeature] = useState(null)

  const features = [
    { icon: '⚡', title: 'Fast', desc: 'Lightning fast performance' },
    { icon: '🎨', title: 'Beautiful', desc: 'Stunning modern design' },
    { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security' },
  ]

  return (
    <Shell>
      <div className="page">
        <h1>Welcome Home</h1>
        <p>Experience the future of web applications with our cutting-edge React SPA powered by Vite.</p>
        
        <div className="features">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
              style={{
                transform: activeFeature === index ? 'translateY(-10px) scale(1.02)' : 'translateY(0)'
              }}
            >
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        <Link to="/contact" className="btn">Get Started</Link>
      </div>
    </Shell>
  )
}

export default Home
