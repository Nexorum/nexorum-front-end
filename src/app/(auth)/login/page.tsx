import { LoginForm } from "@/app/login/components/login-form";
import Image from "next/image";


export default function Page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              {/* <GalleryVerticalEnd className="size-4" /> */}
            </div>
            NEXUROM LOGO HERE
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="  bg-gradient-to-r to-blue-500 from-blue-700 mx-2 my-2 rounded-2xl flex items-center justify-center">
        <Image
          src={"/svg/eclipse-login.svg"}
          alt=""
          width={700}
          height={700}
        />
      </div>
    </div>
  );
}