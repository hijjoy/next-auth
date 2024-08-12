"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data } = useSession();

  return (
    <div className="bg-slate-200 flex justify-between items-center px-5 h-[40px]">
      <h1>Instagram</h1>
      {data?.user ? (
        <div className="flex">
          <Image
            src={data?.user?.image || "/profile.webp"}
            width={30}
            height={30}
            alt=""
            className="w-[30px] h-[30px] rounded-[50%] mr-2"
          />
          <button onClick={() => signOut()} className="text-sm">
            로그아웃
          </button>
        </div>
      ) : (
        <Link href={"/auth/signin"} className="text-sm">
          로그인
        </Link>
      )}
    </div>
  );
};

export default Navbar;
