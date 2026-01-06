import { useSearchParams, useNavigate } from "react-router-dom";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";
import { Button } from "@/components/ui/button";

type Tab = "login" | "register";

export default function AuthTabs({
  defaultTab = "login",
}: {
  defaultTab?: Tab;
}) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const tab = (searchParams.get("tab") as Tab) || defaultTab;
  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto">
        <h3 className="font-bold text-center uppercase mb-6">
          Welcome to Bandage WORLD
        </h3>

        <div className="flex  items-center justify-center mb-6">
          <Button
            className={`border-b-2 border-border rounded-none ${
              tab === "login"
                ? "border-foreground "
                : "text-second-text border-border border-r-2"
            }`}
            onClick={() => navigate(`?tab=login`, { replace: true })}
            variant="ghost"
          >
            Sign in
          </Button>
          <Button
            className={`border-b-2 rounded-none ${
              tab === "register"
                ? "border-foreground"
                : "text-second-text border-border border-l-2"
            }`}
            onClick={() => navigate(`?tab=register`, { replace: true })}
            variant="ghost"
          >
            Register
          </Button>
        </div>

        <div className=" p-4 bg-background">
          {tab === "login" ? <SignInForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
}
