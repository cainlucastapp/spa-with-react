import './Footer.css';

function Footer() {
  //Get current year
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <p>&copy; {currentYear} Not Real Studio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;