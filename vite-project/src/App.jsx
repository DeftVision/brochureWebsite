import { Hero, About, Contact } from "./components/index.jsx";

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
