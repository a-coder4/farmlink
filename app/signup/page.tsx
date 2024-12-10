"use client";

import React from "react";
import { useRouter } from "next/navigation";

const App = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/homepage");
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden"
      style={{ fontFamily: "Manrope, 'Noto Sans', sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center bg-[#FFFFFF] p-4 pb-2 justify-between">
        <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12 pr-12">
          FarmLink
        </h2>
      </div>

      {/* Title */}
      <h2 className="text-[#141414] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
        Join the sustainable farming revolution
      </h2>

      {/* Input Fields */}
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <InputField placeholder="Enter your email" />
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <InputField placeholder="Create a password" />
      </div>

      {/* Social Sign-up Buttons */}
      <div className="flex justify-center">
        <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
          <SocialButton label="Sign up with Google" />
          <SocialButton label="Sign up with Facebook" />
          <SocialButton label="Sign up with Apple" isTransparent />
        </div>
      </div>

      {/* Terms and Conditions */}
      <p className="text-neutral-500 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </p>

      {/* Sign-up Button */}
      <div className="flex px-4 py-3">
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#019863] text-white text-base font-bold leading-normal tracking-[0.015em]"
          onClick={navigateToHome}
        >
          <span className="truncate">Sign Up</span>
        </button>
      </div>

      {/* Spacer */}
      <div className="h-5 bg-[#FFFFFF]"></div>
    </div>
  );
};

const InputField = ({ placeholder }: { placeholder: string }) => (
  <label className="flex flex-col min-w-40 flex-1">
    <div className="flex w-full flex-1 items-stretch rounded-xl">
      <input
        placeholder={placeholder}
        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#F4F4F4] focus:border-none h-14 placeholder:text-neutral-500 p-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
      />
      <div
        className="text-neutral-500 flex border-none bg-[#F4F4F4] items-center justify-center pr-4 rounded-r-xl border-l-0"
        data-icon="CheckCircle"
        data-size="24px"
        data-weight="regular"
      >
        <CheckCircleIcon />
      </div>
    </div>
  </label>
);

type SocialButtonProps = {
  label: string;
  isTransparent?: boolean; // Optional prop
};

const SocialButton: React.FC<SocialButtonProps> = ({ label, isTransparent = false }) => (
  <button
    className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 ${
      isTransparent ? "bg-transparent" : "bg-[#F4EFE6]"
    } text-[#141414] text-sm font-bold leading-normal tracking-[0.015em] w-full`}
  >
    <span className="truncate">{label}</span>
  </button>
);

const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
  </svg>
);

export default App;
