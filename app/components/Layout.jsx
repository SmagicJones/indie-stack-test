import Aside from "./Aside";

export default function Layout({ children }) {
  return (
    <main>
      <main>{children}</main>
    </main>
  );
}
