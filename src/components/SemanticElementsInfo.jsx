import React from 'react';

/**
 * Simple table that lists common HTML5 semantic elements and a one‑line description.
 */
export default function SemanticElementsInfo() {
  const rows = [
    { tag: 'header', description: 'Introductory content or a set of navigational links' },
    { tag: 'nav', description: 'Primary navigation block' },
    { tag: 'main', description: 'Main unique content of the page' },
    { tag: 'section', description: 'Thematic grouping of content, usually with a heading' },
    { tag: 'article', description: 'Self‑contained, reusable content (blog post, comment, etc.)' },
    { tag: 'aside', description: 'Tangential content such as sidebars, pull quotes, ads' },
    { tag: 'footer', description: 'Footer for its nearest section or the whole page' },
    { tag: 'figure', description: 'Media element with optional caption' },
    { tag: 'figcaption', description: 'Caption for a <figure>' },
    { tag: 'time', description: 'Machine‑readable date/time' },
  ];

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Common Semantic HTML Elements</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '2px solid #ddd', textAlign: 'left', padding: '0.5rem' }}>Element</th>
            <th style={{ borderBottom: '2px solid #ddd', textAlign: 'left', padding: '0.5rem' }}>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}><code>{`<${r.tag}>`}</code></td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

