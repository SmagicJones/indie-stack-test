import { Link } from "@remix-run/react";

export default function Aside() {
  return (
    <aside className="sidebar">
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>Is</div>
        <div>The</div>
        <div>Sidebar</div>
      </nav>
    </aside>
  );
}
