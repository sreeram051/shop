"use client";

import { useCartStore } from "@/hooks/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const { cart, counter, getCart } = useCartStore();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      if (menuRef.current) {
        gsap.to(menuRef.current, { y: 0, opacity: 1, display: 'flex', duration: 0.5, ease: "power3.out" });
      }
    } else {
      if (menuRef.current) {
        gsap.to(menuRef.current, {
          y: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
          onComplete: () => {
            if (menuRef.current) {
              menuRef.current.style.display = 'none';
            }
          },
        });
      }
    }
  }, [open]);

  const handleCheckout = () => {
    try {
      alert("Wix CMS has not provided Stripe payment method in India, so the checkout page has not been added.");
    } catch (error) {
      
    }
  }

  return (
    <div className="relative">
      <Image
        src="/menu-03.png"
        alt="Menu"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <Image
          src="/cross.png" 
          alt="Close"
          width={28}
          height={28}
          className="cursor-pointer absolute top-5 right-5 z-20"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        ref={menuRef}
        className="fixed bg-lama text-white left-0 top-0 w-screen h-screen flex flex-col items-center justify-center gap-8 text-xl z-10"
        style={{ display: 'none', transform: 'translateY(-100px)', opacity: 0 }}
      >
        <Link href="/"></Link>
        <Link href="/list?cat=all-products">All Products</Link>
        <Link href="/list?cat=bags">Bags</Link>
        <Link href="/list?cat=hoodie">Hoodie</Link>
        <Link href="/list?cat=baggy">Jeans</Link>
        <Link href="/list?cat=t-shirts">T-Shirts</Link>
        <Link href="/">Logout</Link>
        <button className=" px-[46px] py-[16px] text-lama border bg-white rounded-md hover:bg-white hover:text-lama  transition-all ease duration-200 " onClick={handleCheckout}>Cart({counter})</button>
      </div>
    </div>
  );
};

export default Menu;

    
    // <div className="menu-container" ref={container}>
    //   <div className="menu-bar">
    //     <div className="menu-logo">
    //       <Link href="/"></Link>
    //     </div>
    //     <div className="menu-open" onClick={toggleMenu}>
    //       <p style={{color: "#000"}}>Menu</p>
    //     </div>
    //     <div className="menu-overlay">
    //       <div className="menu-overlay-bar">
    //         <div className="menu-logo">
    //           <Link href="/">SHOP</Link>
    //         </div>
    //         <div className="menu-close" onClick={toggleMenu}>
    //           <p>Close</p>
    //         </div>
    //       </div>

    //       <div className="menu-close-icon">
    //         <p onClick={toggleMenu}>&#696CFF;</p>
    //       </div>
    //       <div className="menu-copy">
    //         <div className="menu-links">
    //           {menuLinks.map((link) => (
    //             <div className="menu-link-item" key={link.label}>
    //               <div className="menu-link-item-holder" onClick={toggleMenu}>
    //                 <Link href={link.path} className="menu-link">
    //                   {link.label}
    //                 </Link>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

