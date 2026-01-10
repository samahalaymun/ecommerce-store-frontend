import { useSearchParams, useNavigate } from "react-router-dom";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
        <Tabs
          value={tab}
          onValueChange={(v) => navigate(`?tab=${v}`, { replace: true })}
          className=" flex items-center justify-center mb-4 w-full"
        >
          <TabsList>
            <TabsTrigger value="login"> Sign in</TabsTrigger>
            <div className="w-0.5 bg-border h-full" />
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="w-full p-4 bg-background">
            <SignInForm />
          </TabsContent>
          <TabsContent value="register" className="w-full p-4 bg-background">
            <RegisterForm />
          </TabsContent>
        </Tabs>

      </div>
    </div>
  );
}
