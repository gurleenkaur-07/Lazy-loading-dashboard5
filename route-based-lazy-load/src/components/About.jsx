import { useState } from 'react'
import Shell from './Shell'

function About() {
  const [hoveredMember, setHoveredMember] = useState(null)

  const team = [
    { avatar: '👨‍💻', name: 'Alex Chen', role: 'Lead Developer' },
    { avatar: '👩‍🎨', name: 'Sarah Kim', role: 'UI Designer' },
    { avatar: '👨‍🔬', name: 'Mike Ross', role: 'Backend Engineer' },
  ]

  return (
    <Shell>
      <div className="page">
        <h1>About Us</h1>
        <p>
          We're a passionate team of developers and designers dedicated to creating 
          exceptional digital experiences. Our mission is to build innovative solutions 
          that make a difference.
        </p>

        <div className="team-grid">
          {team.map((member, index) => (
            <div
              key={index}
              className="team-member"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
              style={{
                transform: hoveredMember === index ? 'scale(1.15) rotate(3deg)' : 'scale(1)'
              }}
            >
              <div className="avatar">{member.avatar}</div>
              <h4>{member.name}</h4>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  )
}

export default About
