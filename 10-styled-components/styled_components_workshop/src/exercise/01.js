import { useState } from "react";
// ✅ remember to import the styled-components library!
// ✅ create two components using styled-components: a div and a button
// ✅ use the inline styles from the elements below to create the CSS rules for your components
// 📃 https://styled-components.com/docs/basics#getting-started

export default function App() {
  const [count, setCount] = useState(0);

  // ✅ remove the style prop from the div and the button
  // ✅ replace the JSX elements with your styled components
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        display: "grid",
        placeContent: "center",
        gap: "16px",
        background: "lightgreen",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.15)",
      }}
    >
      <button
        onClick={() => setCount(count => count + 1)}
        style={{
          background: "orange",
          padding: "1rem",
          fontSize: "1em",
          border: "2px solid green",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Clicks: {count}
      </button>
      <button
        onClick={() => setCount(count => count + 1)}
        style={{
          background: "orange",
          padding: "1rem",
          fontSize: "1em",
          border: "2px solid green",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Clicks: {count}
      </button>
    </div>
  );
}
