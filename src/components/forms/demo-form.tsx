import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { DialogClose } from "@/components/ui/dialog";

const formSchema = z.object({
  email: z.string().email({
    message: "Пожалуйста, введите действительный email",
  }),
  phone: z.string().optional(),
  crm: z.string().optional(),
});

const TG_TOKEN = "7969964492:AAGBBkXJyLlRFeovbv8uZr4fdmgNmuO9gXQ";
const CHAT_ID = "-7969964492";

export function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      crm: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Формируем текст для Telegram
    const text = `🤖 <b>Запрос демо с лендинга</b>
Email: <b>${values.email}</b>
Телефон: ${values.phone || "-"}
CRM: ${values.crm || "-"}`;

    try {
      await fetch(
        `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
            parse_mode: "HTML",
          }),
        }
      );
    } catch {
      // Не прерываем
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      toast({
        title: "Заявка на демо отправлена!",
        description: "Наш менеджер свяжется с вами, чтобы провести демонстрацию.",
      });

      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
      }, 1000);
    }, 1000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="ivan@example.com" {...field} />
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
              <FormLabel>Телефон (необязательно)</FormLabel>
              <FormControl>
                <Input placeholder="+7 (999) 123-45-67" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="crm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ваша CRM (необязательно)</FormLabel>
              <FormControl>
                <Input placeholder="AMO CRM, Pipedrive, и т.д." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end gap-2 pt-2">
          {isSuccess ? (
            <DialogClose asChild>
              <Button type="button" className="w-full">
                Закрыть
              </Button>
            </DialogClose>
          ) : (
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Отправка..." : "Запросить демонстрацию"}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
