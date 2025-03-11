import { z } from "zod";

export const registerSchema = z.object({
   name: z.string({ required_error: "O nome é obrigatório" })
      .min(3, "O nome deve ter pelo menos 3 caracteres"),

   email: z.string({ required_error: "O e-mail é obrigatório" })
      .email("E-mail inválido"),

   phone: z.string({ required_error: "O telefone é obrigatório" })
      .min(10, "O telefone deve ter pelo menos 10 dígitos")
      .max(11, "O telefone deve ter no máximo 11 dígitos"),

   cpf: z.string({ required_error: "O CPF é obrigatório" })
      .regex(/^\d{11}$/, "CPF deve conter 11 números"),

   cnpj: z.string()
      .optional()
      .or(z.literal(""))
      .refine((cnpj) => cnpj === "" || /^\d{14}$/.test(cnpj!), "CNPJ deve conter 14 números"),

   trading_name: z.string({ required_error: "O nome fantasia é obrigatório" })
      .min(1, "O nome fantasia deve ter pelo menos 1 caractere"),

   social_reason: z.string({ required_error: "A razão social é obrigatória" })
      .min(1, "A razão social deve ter pelo menos 1 caractere"),

   company_length: z.string({ required_error: "O tamanho da empresa é obrigatório" })
      .min(1, "O tamanho da empresa é obrigatório"),

   description: z.string().optional(),

   cnae: z.coerce.string({ required_error: "O CNAE é obrigatório" })
      .min(1, "CNAE é obrigatório"),

   invoicing: z.coerce.string({ required_error: "O faturamento é obrigatório" })
      .min(1, "Faturamento é obrigatório"),

   document_expiration_date: z.string({ required_error: "A data de expiração do documento é obrigatória" })
      .refine((date) => !isNaN(Date.parse(date)), "Data inválida"),

   zip_code: z.string({ required_error: "O CEP é obrigatório" })
      .length(8, "O CEP deve conter 8 dígitos"),

   address: z.string({ required_error: "O endereço é obrigatório" })
      .min(5, "Endereço muito curto"),

   neighborhood: z.string({ required_error: "O bairro é obrigatório" })
      .min(1, "Bairro é obrigatório"),

   number: z.string({ required_error: "O número é obrigatório" })
      .min(1, "Número obrigatório"),

   complement: z.string().optional(),

   city: z.string({ required_error: "A cidade é obrigatória" })
      .min(2, "Cidade inválida"),

   state: z.string({ required_error: "O estado é obrigatório" })
      .length(2, "Estado deve ter 2 caracteres"),

   country: z.string({ required_error: "O país é obrigatório" })
      .min(1, "País inválido"),

   instagram: z.string().optional().or(z.literal("")),
   web_site: z.string().optional().or(z.literal("")),
});
