import { AppSidebar } from "@/components/app-sidebar"
import {
   SidebarInset,
   SidebarProvider,
} from "@/components/ui/sidebar"

export default function DashboardLayout({
   children,
}: {
   children: React.ReactNode
}) {

   return (
      <SidebarProvider>
         <AppSidebar />
         <SidebarInset className="rounded-2xl my-2 mr-2">
            <main>
               {children}
            </main>
         </SidebarInset>
      </SidebarProvider>
   )
}
