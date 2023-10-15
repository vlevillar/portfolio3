import  Footer  from "../components/general/Footer";
import  NavBar  from "../components/general/NavBar";
import "../styles/style.css";

export default function Layout () {
  return (
    <div>
      <NavBar />
      <main className="container">
        <slot />
      </main>
      <Footer />
    </div>
  );
};
