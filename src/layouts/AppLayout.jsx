import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import AppNavbar from "../components/AppNavbar";

const AppLayout = ( {products, carts, setToken} ) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="border-bottom p-3 bg-light">
        <AppHeader />
      </header>

      <nav className="border-bottom p-2 bg-white shadow-sm">
        <AppNavbar products={products} carts={carts} setToken={setToken} />
      </nav>

      <main className="flex-fill border-top border-bottom p-3 bg-body text-center">
        <Outlet />
      </main>

      <footer className="border-top p-3 bg-light">
        <AppFooter />
      </footer>
    </div>
  );
};

export default AppLayout;