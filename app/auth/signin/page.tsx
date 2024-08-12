"use client";

import { signIn } from "next-auth/react";

const SigninPage = () => {
  return (
    <div className="flex w-full h-full justify-center">
      <button onClick={() => signIn()}>google 로그인</button>
    </div>
  );
};

export default SigninPage;
