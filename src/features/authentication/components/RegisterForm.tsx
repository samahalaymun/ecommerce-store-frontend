import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function RegisterForm() {
  return (
    <form className="max-w-md mx-auto space-y-4">
      <p className="text-center text-second-text">
        Complete all sections to track your online orders and enjoy a faster
        checkout.
      </p>

      <Field>
        <FieldLabel htmlFor="name">Full name</FieldLabel>
        <Input id="name" name="name" type="text" placeholder="John Doe" />
      </Field>

      <Field>
        <FieldLabel htmlFor="email">E-mail</FieldLabel>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
        />
      </Field>

      <div>
        <Button type="submit" className="w-full">
          Create account
        </Button>
      </div>
    </form>
  );
}
