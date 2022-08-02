import { useState } from "react";
 import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [togglemenu, setTogglemenu] = useState(false);
  return (
    <div
      className="nav text-light justify-content-between
 align-items-center px-3
 col-xl-11 mx-auto"
    >
      <div className="col-6 col-sm-4">
        <img
          className="w-100 py-2"
          style={{ maxWidth: "200px" }}
          src="https://github.com/adrianhajdin/project_web3.0/blob/main/client/images/logo.png?raw=true"
          alt=""
        />
      </div>

      <div className=" col col-md-8 col-lg-7 d-flex ">
        <ul className="m-0 list-unstyled d-none d-md-flex col justify-content-around align-items-center">
          {["Market", "Transactions", "Services", "Wallets"].map((item, index) => {
            return (
              <li className=" fs-5 fs-4" key={item + index}>
              <a href={`#${item}`} className="text-light"> {item}</a>

              </li>
            );
          })}
        </ul>
        <div
          className="d-md-none ms-auto btnMenu"
          onClick={() => {
            togglemenu ? setTogglemenu(false) : setTogglemenu(true);
          }}
        >
          <AiOutlineMenu fontSize={35} cursor="pointer" color="#f0e8f7" />
          {togglemenu ? (
            <div className=" Togglemenu nav-bg bor-rud">
              <div className="text-end border-info p-2">
                <AiOutlineClose fontSize={35} />
              </div>
              <ul className="m-0 list-unstyled text-center">
                {["Market", "Exchange", "Services", "Wallets"].map(
                  (item, index) => {
                    return (
                      <li
                        className=" fs-5 py-3 border-top border-info"
                        key={item + index}
                      >
                        <a href={`#${item}`} className="text-light"> {item}</a>
                      
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
