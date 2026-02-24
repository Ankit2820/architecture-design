// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import logo from "../assets/logo.png";
// const Navbar = () => {
//   const [active, setActive] = useState("Home");
//   const [isOpen, setIsOpen] = useState(false);

// const menuItems = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Services", path: "/services" },
//   { name: "Portfolio", path: "/portfolio" },
//   { name: "Contact", path: "/contact" },
// ];
//   return (
//     <nav className="bg-[#efe5d8] py-5 shadow-md h-24">
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

//         {/* Logo */}
//       <div className="flex items-center gap-3">
//   <img 
//     src={logo} 
//     alt="Logo"
//     className="h-12 mt-2 w-auto object-contain"
//   />
//   <h1 className="text-xl font-semibold tracking-[0.25em] text-[#4e3b2a] leading-none">
//     ADS ARCHITECTS
//   </h1>
// </div>

//         {/* Desktop Menu */}
//         {/* <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
//           {menuItems.map((item) => (
//             <li
//               key={item}
//               onClick={() => setActive(item)}
//               className={`cursor-pointer px-5 py-2 rounded-full transition ${
//                 active === item
//                   ? "bg-[#4e3b2a] text-white"
//                   : "text-gray-700 hover:text-[#4e3b2a]"
//               }`}
//             >
//               {item.toUpperCase()}
//             </li>
//           ))}
//         </ul> */}
//         <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
//   {menuItems.map((item) => (
//     <Link key={item.name} to={item.path}>
//       <li
//         onClick={() => setActive(item.name)}
//         className={`cursor-pointer px-5 py-2 rounded-full transition ${
//           active === item.name
//             ? "bg-[#4e3b2a] text-white"
//             : "text-gray-700 hover:text-[#4e3b2a]"
//         }`}
//       >
//         {item.name.toUpperCase()}
//       </li>
//     </Link>
//   ))}
// </ul>


//         {/* Desktop Search */}
//         {/* <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-48">
//           <input
//             type="text"
//             placeholder="SEARCH"
//             className="outline-none text-sm bg-transparent w-full"
//           />
//           <span className="text-gray-500 text-sm">🔍</span>
//         </div> */}

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {/* {isOpen && (
//         <div className="md:hidden px-6 pt-4 pb-6 space-y-4 bg-[#efe5d8]">
//           {menuItems.map((item) => (
//             <div
//               key={item}
//               onClick={() => {
//                 setActive(item);
//                 setIsOpen(false);
//               }}
//               className={`cursor-pointer px-4 py-2 rounded-lg ${
//                 active === item
//                   ? "bg-[#4e3b2a] text-white"
//                   : "text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       )} */}
//  {isOpen && (
//   <div className="fixed inset-0 z-50 flex">
    
//     {/* Left Side Menu */}
//     <div className="w-64 h-full bg-[#efe5d8] p-6 space-y-6 shadow-lg">
//       {menuItems.map((item) => (
//         <Link key={item.name} to={item.path}>
//           <div
//             onClick={() => {
//               setActive(item.name);
//               setIsOpen(false);
//             }}
//             className={`cursor-pointer px-4 py-2 rounded-lg ${
//               active === item.name
//                 ? "bg-[#4e3b2a] text-white"
//                 : "text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             {item.name}
//           </div>
//         </Link>
//       ))}
//     </div>

//     {/* Right Side Overlay (optional) */}
//     <div 
//       className="flex-1 bg-black/20"
//       onClick={() => setIsOpen(false)}
//     ></div>

//   </div>
 
// )}
//     </nav>
    
//   );
// };

// export default Navbar;
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id, name) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setActive(name);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#efe5d8] py-5 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
          <h1 className="text-xl font-semibold tracking-[0.25em] text-[#4e3b2a]">
            ADS ARCHITECTS
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => scrollToSection(item.id, item.name)}
              className={`cursor-pointer px-5 py-2 rounded-full transition ${
                active === item.name
                  ? "bg-[#4e3b2a] text-white"
                  : "text-gray-700 hover:text-[#4e3b2a]"
              }`}
            >
              {item.name.toUpperCase()}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#efe5d8] px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => scrollToSection(item.id, item.name)}
              className="cursor-pointer text-gray-700 hover:text-[#4e3b2a]"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
