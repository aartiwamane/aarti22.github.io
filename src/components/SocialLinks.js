import React from 'react';

export default function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
      <p> <img src="/mail.png" alt="Mail" width="20" /> : aartiwamane@gmail.com</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a href="https://github.com/aartiwamane" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="30" />
        </a>
        <a href="https://www.linkedin.com/in/aarti-wamane-5276562a6" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="30" />
        </a>
      </div>
    </div>
  );
}
