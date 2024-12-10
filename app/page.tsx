import Link from 'next/link';
import Carousel3D from './components/Carousel3D';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Carousel3D />
      <div className="text-center w-full">
        <h1 className="text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5">
          Sustainable agriculture starts here.
        </h1>
        <p className="text-[#1C160C] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          We help farmers and agribusinesses transition to regenerative practices.
        </p>
        <div className="flex justify-center">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
            <Link href="/signin">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#019863] text-[#FFFFFF] text-base font-bold leading-normal tracking-[0.015em] grow"
              >
                <span className="truncate">Log In</span>
              </button>
            </Link>
            <Link href="/signup">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#F4EFE6] text-[#1C160C] text-base font-bold leading-normal tracking-[0.015em] grow"
              >
                <span className="truncate">Sign Up</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
