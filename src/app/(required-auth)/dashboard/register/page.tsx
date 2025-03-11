"use client"

import { BreadCrumpTitle } from "@/components/breadcrump-title"
import { RegisterForm } from './components/form/register-form';

export default function Page() {

   return (
      <>
         <h1 className="px-4 mt-4 text-2xl text-center sm:text-left font-bold">Cadastro de empresas</h1>
         <BreadCrumpTitle />
         <header className="mt-4 px-4">
            <ul className="flex flex-col sm:flex-row items-center sm:justify-evenly gap-4 text-sm sm:text-base text-center">
               <li className="flex items-center gap-2">
                  <span className="bg-blue-600 shadow-md p-2 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-white">
                     1
                  </span>
                  <p className="text-blue-600">Informações Gerais</p>
               </li>
               <li className="hidden sm:block border-t border-dashed border-gray-400 w-16"></li>
               <li className="hidden sm:block border-t border-dashed border-gray-400 w-16"></li>
               <li className="hidden sm:block border-t border-dashed border-gray-400 w-16"></li>
               <li className="flex items-center gap-2">
                  <span className="bg-white shadow-md p-2 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-500">
                     2
                  </span>
                  <p className="text-gray-500">Detalhes da Empresa</p>
               </li>
               <li className="hidden sm:block border-t border-dashed border-gray-400 w-16"></li>
               <li className="hidden sm:block border-t border-dashed border-gray-400 w-16"></li>
               <li className="hidden sm:block border-t border-dashed border-gray-400 w-16"></li>
               <li className="flex items-center gap-2">
                  <span className="bg-white shadow-md p-2 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-500">
                     3
                  </span>
                  <p className="text-gray-500">Confirmação</p>
               </li>
            </ul>
         </header>
         <RegisterForm />
      </>
   )
}