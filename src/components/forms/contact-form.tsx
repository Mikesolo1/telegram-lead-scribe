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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { DialogClose } from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать не менее 2 символов",
  }),
  email: z.string().email({
    message: "Пожалуйста, введите действительный email",
  }),
  company: z.string().optional(),
  message: z.string().optional(),
});

const TG_TOKEN = "7969964492:AAGBBkXJyLlRFeovbv8uZr4fdmgNmuO9gXQ";
const CHAT_ID = "-7969964492";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const text = `📨 <b>Новая заявка с лендинга</b>
Имя: <b>${values.name}</b>
Email: <b>${values.email}</b>
Компания: ${values.company || "-"}
Сообщение: ${values.message || "-"}`;

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
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input placeholder="Иван Иванов" {...field} />
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
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Компания</FormLabel>
              <FormControl>
                <Input placeholder="ООО Рога и Копыта" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Сообщение</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Расскажите, что вас интересует..."
                  className="resize-none"
                  {...field}
                />
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
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
