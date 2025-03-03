'use client'

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
   SidebarInset,
   SidebarProvider,
   SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DashboardLayout({
   children,
}: {
   children: React.ReactNode
}) {
   const pathname = usePathname()
   const [params, setParams] = useState<string>("")

   useEffect(() => {
      const lastSegment = pathname.split("/").pop() || "Dashboard"
      setParams(lastSegment)
   }, [pathname])

   return (
      <SidebarProvider>
         <AppSidebar />
         <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
               <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator
                     orientation="vertical"
                     className="mr-2 data-[orientation=vertical]:h-4"
                  />
                  <Breadcrumb>
                     <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                           <BreadcrumbLink href="#">
                              Dashboard
                           </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                           <BreadcrumbPage>
                              {params === "dashboard"
                                 ? ""
                                 : params[0]?.toUpperCase() + params?.substring(1)}
                           </BreadcrumbPage>
                        </BreadcrumbItem>
                     </BreadcrumbList>
                  </Breadcrumb>
               </div>
            </header>
            {children}
         </SidebarInset>
      </SidebarProvider>
   )
}
