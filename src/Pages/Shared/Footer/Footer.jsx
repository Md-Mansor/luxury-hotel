import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer justify-around p-10 bg-teal-100 text-base font-medium text-black-content">
                {/* <nav>
                    <header className="footer-title">Services</header>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav> */}
                <nav>
                    <header className="footer-title">Company</header>
                    <Link to="/about" className="link link-hover">About us</Link>
                    <Link to="/contact" className="link link-hover">Contact</Link>
                    <Link to="/jobs" className="link link-hover">Jobs</Link>
                    <Link to="/press" className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <Link to="/terms" className="link link-hover">Terms of use</Link>
                    <Link to="/policy" className="link link-hover">Privacy policy</Link>
                    <Link to="/cookies" className="link link-hover">Cookie policy</Link>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;