import React from 'react';

const Footer = () => {
  return (
    <div className="d-flex flex-column">
      <row className="d-flex justify-content-center">
        <h2>Technologies Used</h2>
      </row>
      <row className="d-flex justify-content-center">
        <img src="/react-realtimedb/react-logo.png" alt="React Logo" className="logos" />
        <img src="/react-realtimedb/firebase-realtime-db-logo.png" alt="React Logo" className="logos" />
      </row>
      <row className="d-flex justify-content-center">
        <h2>View Source Code</h2>
      </row>
      <row className="d-flex justify-content-center">
        <a href="https://github.com/twhitelow1/react-realtimedb" className="d-flex justify-content-center"><img src="/react-realtimedb/github_PNG15.png" alt="React Logo" className="logos" /></a>
      </row>
    </div>
  )
}
export default Footer;