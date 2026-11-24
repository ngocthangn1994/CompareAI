import logo from "../../assets/logo_brainbattleai.png";
import Button from "../ui/Button";
const Navbar = () => {
  const menu = [
    {
      name: "Product",
      path: "product",
    },
    {
      name: "How It Works",
      path: "howitworks",
    },
    {
      name: "FAQ",
      path: "faq",
    },
  ];
  return (
    <>
      <nav>
        <div className="flex justify-between items-center">
          <img
            className="w-50 h-auto object-contain"
            src={logo}
            alt="Brainbattle AI logo"
          />
          <div className="grid grid-cols-3 gap-5">
            {menu.map((item) => (
              <div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-5">
            <Button variant="secondary">Sign In</Button>
            <Button>Start Comparing</Button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
