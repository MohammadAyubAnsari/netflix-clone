import React from "react";

interface NavbarItemProps {
  label: String;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
};
export default NavbarItem;

// const NavbarItem = () => {
//   return <div className="text-white cursor-pointer ">Home</div>;
// };

// export default NavbarItem;
