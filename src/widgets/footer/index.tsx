import "./styles.css";

export function Footer() {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </span>
    </footer>
  );
}
