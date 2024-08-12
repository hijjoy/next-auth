"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const Profile = () => {
  const { data } = useSession();

  return (
    <>
      {data?.user ? (
        <div>
          <div className="flex mt-5">
            <Image
              src={data?.user?.image || "/profile.webp"}
              width={50}
              height={50}
              alt=""
              className="w-[50px] h-[50px] rounded-[50%] mr-2"
            />
            <span className="flex flex-col">
              <p>{data?.user?.username}</p>
              <p className="text-sm">{data?.user?.name}</p>
            </span>
          </div>
        </div>
      ) : (
        <div>로그인하러가 ~ </div>
      )}
    </>
  );
};

export default Profile;
