"use client";

import { useCartStore } from "@/hooks/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const { cart, counter, getCart } = useCartStore();

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-lama text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-10">
          <Link href="/">Home</Link>
          <Link href="/list?cat=all-products">All Products</Link>
          <Link href="/list?cat=bags">Bags</Link>
          <Link href="/list?cat=hoodie">Hoodie</Link>
          <Link href="/list?cat=baggy">Jeans</Link>
          <Link href="/list?cat=t-shirts">T-Shirts</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart({counter})</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
