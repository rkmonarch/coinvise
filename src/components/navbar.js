import { BiSun, BiMoon, BiWalletAlt } from "react-icons/bi";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <>
      <nav className="w-full mx-auto py-5">
        <div className="max-w-[1080px] container flex flex-wrap justify-end space-x-5 items-center mx-auto">
          <button className="flex items-center space-x-3 border rounded-full px-10 py-3 text-[#666666] hover:text-[#1e1e1e] hover:border-[#1e1e1e] dark:text-[#605e8a] dark:border-[#605e8a] dark:hover:text-white dark:hover:border-white">
            <p>Connect Wallet</p>
            <BiWalletAlt size={20} />
          </button>
          {theme === "light" ? (
            <BiMoon
              size="25"
              onClick={switchTheme}
              className="text-[#9f9f9f] hover:cursor-pointer dark:text-[#605e8a]"
            />
          ) : (
            <BiSun
              size="20"
              onClick={switchTheme}
              className="text-[#9f9f9f] hover:cursor-pointer dark:text-[#605e8a]"
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
