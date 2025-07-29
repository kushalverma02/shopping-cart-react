import { Outlet } from "react-router";
import HeaderSection from "./Header";
import FooterSection from "./Footer";

export default function Layout({ cartCount }) {
  return (
    <>
      <HeaderSection cartCount={cartCount} />
      <main className="p-6">
        <Outlet />
      </main>
      <FooterSection />
    </>
  );
}
