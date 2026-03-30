---
title: Resumes
---

# Resumes

<div class="resume-grid">

  <div class="resume-card">
    <div class="resume-card__info">
      <span class="resume-card__label">Hardware</span>
      <p class="resume-card__desc">PCB design, embedded systems, open hardware, and electronics engineering.</p>
    </div>
    <a class="resume-btn" href="https://docs.google.com/document/d/1aF1ZYINRUTcA3LMiVBZYL5ojxHYw_V1haFGfZ_ALJtM/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer">
      <span>View Resume ↗</span>
    </a>
  </div>

</div>

<style>
.resume-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.resume-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--hyphi-border);
  border-radius: 6px;
  background: var(--hyphi-panel);
}

.resume-card__label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.4rem;
  letter-spacing: .1em;
  background: linear-gradient(to right, #7b5cfa, #ff6b35);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  margin-bottom: .25rem;
}

.resume-card__desc {
  font-family: 'DM Sans', sans-serif;
  font-size: .85rem;
  color: var(--hyphi-sub);
  margin: 0;
}

.resume-btn {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  padding: .55rem 1.25rem;
  border-radius: 4px;
  font-family: 'DM Mono', monospace;
  font-size: .72rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: border-color 0.2s, box-shadow 0.2s;
  border: 1px solid rgba(123, 92, 250, 0.4);
  background: rgba(123, 92, 250, 0.08);
  color: #a899ff;
}

.resume-btn:hover {
  border-color: rgba(255, 107, 53, 0.5);
  box-shadow: 0 0 16px rgba(255, 107, 53, 0.1);
  color: #ff6b35;
}

</style>
