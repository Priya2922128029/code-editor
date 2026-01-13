// components/TemplateDrawer.jsx
import React from 'react';
import './TemplateDrawer.css';

const templates = [
  {
    id: 1,
    name: 'Simple Landing Page',
    description: 'A responsive landing page with hero section',
    html: `<div class="landing-page">
  <nav class="navbar">
    <div class="logo">CodeFlow</div>
    <div class="nav-links">
      <a href="#">Home</a>
      <a href="#">Features</a>
      <a href="#">Contact</a>
    </div>
  </nav>
  
  <section class="hero">
    <h1>Welcome to CodeFlow Editor</h1>
    <p>Create amazing web experiences directly in your browser</p>
    <button class="cta-button">Get Started</button>
  </section>
  
  <section class="features">
    <div class="feature">
      <h3>⚡ Fast</h3>
      <p>Real-time code execution</p>
    </div>
    <div class="feature">
      <h3>🔒 Secure</h3>
      <p>Runs entirely in your browser</p>
    </div>
    <div class="feature">
      <h3>🎨 Beautiful</h3>
      <p>Modern and clean interface</p>
    </div>
  </section>
</div>`,
    css: `.landing-page {
  font-family: 'Segoe UI', system-ui, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 60px;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #667eea;
}

.hero {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  color: white;
  margin-bottom: 60px;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  animation: fadeInUp 1s ease;
}

.hero p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 30px;
  opacity: 0.9;
}

.cta-button {
  padding: 15px 40px;
  font-size: 1.1rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 40px 0;
}

.feature {
  padding: 30px;
  background: white;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.feature:hover {
  transform: translateY(-10px);
}

.feature h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #4a5568;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`,
    js: `document.querySelector('.cta-button').addEventListener('click', function() {
  this.textContent = 'Starting...';
  this.style.background = '#10b981';
  this.style.color = 'white';
  
  setTimeout(() => {
    alert('Welcome to CodeFlow Editor! Start coding now.');
    this.textContent = 'Get Started';
    this.style.background = 'white';
    this.style.color = '#667eea';
  }, 1000);
});

// Add hover effect to features
const features = document.querySelectorAll('.feature');
features.forEach(feature => {
  feature.addEventListener('mouseenter', () => {
    feature.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
  });
  
  feature.addEventListener('mouseleave', () => {
    feature.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
  });
});

console.log('Landing page loaded successfully!');`
  },
  {
    id: 2,
    name: 'Animated Clock',
    description: 'A beautiful analog clock with smooth animations',
    html: `<div class="clock-container">
  <div class="clock">
    <div class="clock-face">
      <div class="hand hour-hand"></div>
      <div class="hand minute-hand"></div>
      <div class="hand second-hand"></div>
      <div class="center-dot"></div>
    </div>
  </div>
  <div class="digital-clock">
    <span class="time">00:00:00</span>
    <span class="date">Monday, Jan 1</span>
  </div>
</div>`,
    css: `.clock-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  border-radius: 20px;
  padding: 40px;
}

.clock {
  width: 200px;
  height: 200px;
  border: 8px solid #8b5cf6;
  border-radius: 50%;
  position: relative;
  box-shadow: 
    0 0 30px rgba(139, 92, 246, 0.3),
    inset 0 0 30px rgba(139, 92, 246, 0.1);
  margin-bottom: 40px;
}

.clock-face {
  position: relative;
  width: 100%;
  height: 100%;
}

.hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform-origin: bottom;
  border-radius: 4px;
  transform: translateX(-50%);
}

.hour-hand {
  width: 6px;
  height: 40%;
  background: #cbd5e1;
  z-index: 3;
}

.minute-hand {
  width: 4px;
  height: 45%;
  background: #94a3b8;
  z-index: 2;
}

.second-hand {
  width: 2px;
  height: 48%;
  background: #ef4444;
  z-index: 1;
  box-shadow: 0 0 10px #ef4444;
}

.center-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  z-index: 4;
  box-shadow: 0 0 20px white;
}

.digital-clock {
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.time {
  display: block;
  font-size: 3rem;
  font-family: 'Fira Code', monospace;
  font-weight: 600;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.date {
  display: block;
  font-size: 1.2rem;
  color: #cbd5e1;
  font-family: 'Segoe UI', sans-serif;
}`,
    js: `function updateClock() {
  const now = new Date();
  
  // Analog clock
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;
  
  const secondDeg = (seconds * 6) + 90;
  const minuteDeg = (minutes * 6) + (seconds * 0.1) + 90;
  const hourDeg = (hours * 30) + (minutes * 0.5) + 90;
  
  document.querySelector('.second-hand').style.transform = \`translateX(-50%) rotate(\${secondDeg}deg)\`;
  document.querySelector('.minute-hand').style.transform = \`translateX(-50%) rotate(\${minuteDeg}deg)\`;
  document.querySelector('.hour-hand').style.transform = \`translateX(-50%) rotate(\${hourDeg}deg)\`;
  
  // Digital clock
  const timeString = now.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  
  const dateString = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  document.querySelector('.time').textContent = timeString;
  document.querySelector('.date').textContent = dateString;
  
  // Add glow effect every second
  if (seconds === 0) {
    document.querySelector('.clock').style.boxShadow = 
      '0 0 50px rgba(139, 92, 246, 0.5), inset 0 0 30px rgba(139, 92, 246, 0.2)';
    
    setTimeout(() => {
      document.querySelector('.clock').style.boxShadow = 
        '0 0 30px rgba(139, 92, 246, 0.3), inset 0 0 30px rgba(139, 92, 246, 0.1)';
    }, 500);
  }
}

// Initialize clock
updateClock();
setInterval(updateClock, 1000);

// Add some visual effects
const clock = document.querySelector('.clock');
clock.addEventListener('mouseenter', () => {
  clock.style.transform = 'scale(1.05)';
  clock.style.transition = 'transform 0.3s ease';
});

clock.addEventListener('mouseleave', () => {
  clock.style.transform = 'scale(1)';
});

console.log('Clock initialized! Refreshing every second...');`
  },
  {
    id: 3,
    name: 'Interactive Form',
    description: 'A modern form with real-time validation',
    html: `<div class="form-container">
  <div class="form-header">
    <h2>Join CodeFlow Community</h2>
    <p>Start your coding journey with us</p>
  </div>
  
  <form id="signupForm" class="signup-form">
    <div class="form-group">
      <label for="name">
        <span class="label-icon">👤</span>
        Full Name
      </label>
      <input type="text" id="name" placeholder="Enter your name">
      <div class="error-message"></div>
    </div>
    
    <div class="form-group">
      <label for="email">
        <span class="label-icon">📧</span>
        Email Address
      </label>
      <input type="email" id="email" placeholder="you@example.com">
      <div class="error-message"></div>
    </div>
    
    <div class="form-group">
      <label for="password">
        <span class="label-icon">🔒</span>
        Password
      </label>
      <input type="password" id="password" placeholder="Create a strong password">
      <div class="error-message"></div>
      <div class="password-strength">
        <div class="strength-bar"></div>
        <span class="strength-text">Strength: </span>
      </div>
    </div>
    
    <div class="form-group">
      <label for="skill">
        <span class="label-icon">💻</span>
        Skill Level
      </label>
      <select id="skill">
        <option value="">Select your level</option>
        <option value="beginner">👶 Beginner</option>
        <option value="intermediate">🚀 Intermediate</option>
        <option value="advanced">🏆 Advanced</option>
      </select>
      <div class="error-message"></div>
    </div>
    
    <div class="form-group checkbox-group">
      <input type="checkbox" id="terms">
      <label for="terms">
        I agree to the terms and conditions
      </label>
    </div>
    
    <button type="submit" class="submit-btn">
      <span class="btn-text">Create Account</span>
      <span class="btn-loader">⏳</span>
    </button>
    
    <div class="form-footer">
      <p>Already have an account? <a href="#">Sign in</a></p>
    </div>
  </form>
</div>`,
    css: `.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.form-header {
  text-align: center;
  margin-bottom: 40px;
}

.form-header h2 {
  font-size: 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.form-header p {
  color: #64748b;
  font-size: 1.1rem;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  color: #4a5568;
  font-size: 0.95rem;
}

.label-icon {
  font-size: 1.1rem;
}

.form-group input,
.form-group select {
  padding: 15px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Segoe UI', sans-serif;
  transition: all 0.3s;
  background: #f8fafc;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #8b5cf6;
  background: white;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

.form-group input.valid {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.05);
}

.form-group input.invalid {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.05);
}

.error-message {
  color: #ef4444;
  font-size: 0.85rem;
  min-height: 20px;
  opacity: 0;
  transition: opacity 0.3s;
}

.error-message.show {
  opacity: 1;
}

.password-strength {
  margin-top: 10px;
}

.strength-bar {
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 5px;
}

.strength-bar::after {
  content: '';
  display: block;
  height: 100%;
  width: 0%;
  background: #ef4444;
  transition: width 0.3s, background 0.3s;
}

.strength-text {
  font-size: 0.85rem;
  color: #64748b;
}

.checkbox-group {
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.checkbox-group input {
  width: 18px;
  height: 18px;
}

.checkbox-group label {
  font-weight: normal;
  cursor: pointer;
}

.submit-btn {
  padding: 18px;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
}

.submit-btn.loading {
  pointer-events: none;
}

.submit-btn.loading .btn-text {
  opacity: 0;
}

.submit-btn.loading .btn-loader {
  opacity: 1;
  animation: spin 1s linear infinite;
}

.btn-loader {
  position: absolute;
  opacity: 0;
  font-size: 1.2rem;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.form-footer {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
  color: #64748b;
}

.form-footer a {
  color: #8b5cf6;
  text-decoration: none;
  font-weight: 600;
}

.form-footer a:hover {
  text-decoration: underline;
}`,
    js: `// Form validation logic
const form = document.getElementById('signupForm');
const inputs = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  skill: document.getElementById('skill'),
  terms: document.getElementById('terms')
};

// Validation functions
function validateName() {
  const name = inputs.name.value.trim();
  const error = inputs.name.nextElementSibling;
  
  if (!name) {
    showError(inputs.name, error, 'Name is required');
    return false;
  }
  
  if (name.length < 2) {
    showError(inputs.name, error, 'Name must be at least 2 characters');
    return false;
  }
  
  showSuccess(inputs.name, error);
  return true;
}

function validateEmail() {
  const email = inputs.email.value.trim();
  const error = inputs.email.nextElementSibling;
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  
  if (!email) {
    showError(inputs.email, error, 'Email is required');
    return false;
  }
  
  if (!emailRegex.test(email)) {
    showError(inputs.email, error, 'Please enter a valid email');
    return false;
  }
  
  showSuccess(inputs.email, error);
  return true;
}

function validatePassword() {
  const password = inputs.password.value;
  const error = inputs.password.nextElementSibling;
  const strengthBar = document.querySelector('.strength-bar');
  const strengthText = document.querySelector('.strength-text');
  
  if (!password) {
    showError(inputs.password, error, 'Password is required');
    updateStrength(0, strengthBar, strengthText);
    return false;
  }
  
  let strength = 0;
  
  // Check length
  if (password.length >= 8) strength += 1;
  if (password.length >= 12) strength += 1;
  
  // Check complexity
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;
  
  updateStrength(strength, strengthBar, strengthText);
  
  if (strength < 3) {
    showError(inputs.password, error, 'Password is too weak');
    return false;
  }
  
  showSuccess(inputs.password, error);
  return true;
}

function validateSkill() {
  const skill = inputs.skill.value;
  const error = inputs.skill.nextElementSibling;
  
  if (!skill) {
    showError(inputs.skill, error, 'Please select your skill level');
    return false;
  }
  
  showSuccess(inputs.skill, error);
  return true;
}

function validateTerms() {
  if (!inputs.terms.checked) {
    alert('Please agree to the terms and conditions');
    return false;
  }
  return true;
}

// Helper functions
function showError(input, errorElement, message) {
  input.classList.add('invalid');
  input.classList.remove('valid');
  errorElement.textContent = message;
  errorElement.classList.add('show');
}

function showSuccess(input, errorElement) {
  input.classList.add('valid');
  input.classList.remove('invalid');
  errorElement.textContent = '';
  errorElement.classList.remove('show');
}

function updateStrength(strength, bar, text) {
  const colors = ['#ef4444', '#f59e0b', '#f59e0b', '#10b981', '#10b981'];
  const messages = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  
  bar.style.width = \`\${strength * 20}%\`;
  bar.style.background = colors[strength];
  text.textContent = \`Strength: \${messages[strength]}\`;
}

// Real-time validation
inputs.name.addEventListener('input', validateName);
inputs.email.addEventListener('input', validateEmail);
inputs.password.addEventListener('input', validatePassword);
inputs.skill.addEventListener('change', validateSkill);

// Form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const isValid = 
    validateName() && 
    validateEmail() && 
    validatePassword() && 
    validateSkill() && 
    validateTerms();
  
  if (isValid) {
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.classList.add('loading');
    
    // Simulate API call
    setTimeout(() => {
      submitBtn.classList.remove('loading');
      alert('Account created successfully! Welcome to CodeFlow!');
      form.reset();
      document.querySelectorAll('.valid').forEach(el => el.classList.remove('valid'));
      document.querySelector('.strength-bar').style.width = '0%';
      document.querySelector('.strength-text').textContent = 'Strength: ';
    }, 2000);
  }
});

console.log('Form validation system ready!');`
  }
];

const TemplateDrawer = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="template-drawer-overlay" onClick={onClose}>
      <div className="template-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h2 className="drawer-title">
            <span className="drawer-icon">📚</span>
            Code Templates
          </h2>
          <button className="drawer-close" onClick={onClose}>
            ✕
          </button>
        </div>
        
        <div className="drawer-description">
          <p>Choose a template to start coding instantly. All templates are ready to run!</p>
        </div>
        
        <div className="templates-grid">
          {templates.map((template) => (
            <div
              key={template.id}
              className="template-card"
              onClick={() => onSelect(template)}
            >
              <div className="template-header">
                <div className="template-icon">
                  {template.id === 1 ? '🏠' : template.id === 2 ? '🕒' : '📝'}
                </div>
                <div className="template-badge">Free</div>
              </div>
              
              <div className="template-content">
                <h3 className="template-name">{template.name}</h3>
                <p className="template-description">{template.description}</p>
                
                <div className="template-stats">
                  <div className="stat">
                    <span className="stat-icon">📏</span>
                    <span className="stat-value">{template.html.length + template.css.length + template.js.length} chars</span>
                  </div>
                  <div className="stat">
                    <span className="stat-icon">🎯</span>
                    <span className="stat-value">Ready to Run</span>
                  </div>
                </div>
              </div>
              
              <div className="template-footer">
                <button className="use-template-btn">
                  <span className="btn-icon">🚀</span>
                  Use Template
                </button>
              </div>
              
              <div className="template-hover-effect"></div>
            </div>
          ))}
        </div>
        
        <div className="drawer-footer">
          <p className="footer-note">
            💡 All templates run completely in your browser. No server required!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateDrawer;