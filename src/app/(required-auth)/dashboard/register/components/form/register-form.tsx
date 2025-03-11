import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from "../../schema/register-schema"

export function RegisterForm() {
   const form = useForm<z.infer<typeof registerSchema>>({
      resolver: zodResolver(registerSchema)
   })

   function onSubmit() {
      console.log("lo")
   }

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <section className="grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-12 mt-10 gap-5">
               <div className="col-span-2 w-full rounded-sm border border-gray-200 shadow-sm bg-[#e1e9f3] ">
                  <h3 className="p-3 font-bold text-xl text-[#00043C] bg-[#C6DAF3]">Geral</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-3">
                     <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel className="text-[#00043C]">Nome</FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="Nome da empresa"
                                    className="bg-white"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />


                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>E-mail</FormLabel>
                              <FormControl>
                                 <Input className="bg-white text-[#00043C]" placeholder="email@empresa.com" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="cnpj"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>CNPJ</FormLabel>
                              <FormControl>
                                 <Input className="bg-white text-[#00043C]" placeholder="00.000.000/0000-00" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Telefone</FormLabel>
                              <FormControl>
                                 <Input className="bg-white text-[#00043C]" placeholder="(00) 00000-0000" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="trading_name"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Nome Fantasia</FormLabel>
                              <FormControl>
                                 <Input className="bg-white text-[#00043C]" placeholder="Nome Fantasia" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="social_reason"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Razão Social</FormLabel>
                              <FormControl>
                                 <Input className="bg-white text-[#00043C]" placeholder="Razão Social" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="cnae"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>CNAE</FormLabel>
                              <FormControl>
                                 <Input className="bg-white text-[#00043C]" placeholder="00.00-0-00" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="invoicing"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Faturamento</FormLabel>
                              <FormControl>
                                 <Input className="bg-white text-[#00043C]" placeholder="R$ 0,00" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="company_length"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Tamanho da empresa</FormLabel>
                              <FormControl>
                                 <Input className="bg-white text-[#00043C]" placeholder="Número de funcionários" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                           <FormItem className="col-span-3">
                              <FormLabel>Descrição</FormLabel>
                              <FormControl>
                                 <Textarea
                                    placeholder="Descreva brevemente sua empresa..."
                                    className="min-h-[100px] bg-white text-[#00043C]"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  </div>
               </div>

               <div className="w-full rounded-sm border-gray-200 shadow-sm">
                  <h3 className="p-3 font-bold text-xl  text-[#00043C] bg-[#C6DAF3]">Endereço</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 bg-[#e1e9f3]">
                     <FormField
                        control={form.control}
                        name="zip_code"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>CEP</FormLabel>
                              <FormControl>
                                 <Input className="bg-white text-[#00043C]" placeholder="00000-000" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                           <FormItem className="col-span-2">
                              <FormLabel>Logradouro</FormLabel>
                              <FormControl>
                                 <Input className="bg-white text-[#00043C]" placeholder="Rua, Avenida, etc." {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="number"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Número</FormLabel>
                              <FormControl>
                                 <Input className="bg-white text-[#00043C]" placeholder="123" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="complement"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Complemento</FormLabel>
                              <FormControl>
                                 <Input className="bg-white text-[#00043C]" placeholder="Apto, Sala, etc. " {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="neighborhood"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Bairro</FormLabel>
                              <FormControl>
                                 <Input className="bg-white text-[#00043C]" placeholder="Bairro" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Cidade</FormLabel>
                              <FormControl>
                                 <Input className="bg-white text-[#00043C]" placeholder="Cidade" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Estado</FormLabel>
                              <FormControl>
                                 <Input className="bg-white text-[#00043C]" placeholder="UF" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>País</FormLabel>
                              <FormControl>
                                 <Input className="bg-white text-[#00043C]" placeholder="Brasil" defaultValue="Brasil" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  </div>
               </div>
            </section>
            <footer className="flex justify-between items-center px-12 py-6 mt-8 ">
               <button
                  type="button"
                  className="px-6 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-400 transition-colors disabled:bg-blue-300 disabled:hover:bg-none"
                  disabled={true}
                  onClick={() => console.log("Voltar")}
               >
                  Voltar
               </button>
               <div className="flex gap-4">
                  <button
                     type="submit"
                     className="px-6 py-2 bg-blue-600 border border-[#055AD7] rounded-md text-white hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                     Prosseguir
                  </button>
               </div>
            </footer>
         </form>
      </Form>
   )
}