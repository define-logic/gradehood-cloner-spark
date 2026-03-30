import { useState } from "react";
import { Menu, X } from "lucide-react";

const REGISTER_URL = "https://tally.so/r/NpL8Op";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-foreground text-sm">
            G
          </div>
          <span className="font-semibold text-foreground">Gradehood</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#workshop" className="hover:text-foreground transition-colors">Workshop</a>
          <a href="#who-is-it-for" className="hover:text-foreground transition-colors">Who It's For</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>

        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Reserve Free Seat
        </a>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl px-4 py-4 space-y-3">
          <a href="#workshop" className="block text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>Workshop</a>
          <a href="#who-is-it-for" className="block text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>Who It's For</a>
          <a href="#faq" className="block text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>FAQ</a>
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium text-center" onClick={() => setMobileOpen(false)}>Reserve Free Seat</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
