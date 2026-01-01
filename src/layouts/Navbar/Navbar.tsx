import MainNav from './MainNav';
import MobileNav from './MobileNav';
import TopBar from './TopBar';

function Navbar() {
  return (
    <header>
      {/* Desktop */}
      <div className="hidden lg:block">
        <TopBar />
        <MainNav />
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </header>
  );
}

export default Navbar
