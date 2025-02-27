import { LoginForm } from "@/app/login/components/login-form";


export default function page() {
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
       <div className="bg-muted relative hidden lg:block bg-gradient-to-r from-slate-300 to-slate-500">
            
            </div>
          </div>
   ); 
}