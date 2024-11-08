const Footer = ({ length }) => {
  const item = (length) => {
    return length > 1 ? "Items" : "item";
  };

  return (
    <footer className="footer">
      <p className="heading-p">
        {length} List {item(length)}
      </p>
    </footer>
  );
};

export default Footer;
