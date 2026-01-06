import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function SignInForm() {
  return (
    <form className="max-w-md mx-auto space-y-4">
      <p className="text-center text-second-text">Enter your email and password to login.</p>
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

      <div className="flex  justify-end">
        <Link className="underline" to="#">
          Forgot password?
        </Link>
      </div>
      <Button type="submit" className="w-full">
        Sign in
      </Button>
    </form>
  );
}
