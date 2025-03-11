export function Bubbles(){
   return (
      <>
         <div className="size-32 absolute -left-12 z-20 bottom-10 rounded-full bg-linear-to-b from-[#055AD7] to-[#3493FE]"></div>
         <div
            className="size-60 absolute z-0 -right-24 -bottom-10 rounded-full bg-gradient-to-t from-[#055AD7] to-[#3493FE]"
            style={{ clipPath: "inset(0 40% 0 0)" }}
         ></div>
         <div className="size-60 absolute z-0 -left-10 -bottom-28 border border-white rounded-full bg-linear-to-b from-[#055AD7] to-[#3493FE]"></div>
      </>
   )
}