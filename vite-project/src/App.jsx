import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";


function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <Hero />
            <About />
            <Contact />
        </div>
    );
}

export default App;
