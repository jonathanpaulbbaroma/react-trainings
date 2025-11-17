import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-[4.8rem]">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;
