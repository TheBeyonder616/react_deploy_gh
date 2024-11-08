const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 className="heading-primary">{title}</h1>
    </header>
  );
};

// Header.defaultProps = {
//   title: "Default Title",
// };
export default Header;
