import { Suspense } from "react";
import LoginForm from "@/components/auth/LoginForm";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";

export default function LoginPage() {
  return (
    <>
      <Nav />
      <Suspense fallback={<div style={{ padding: "80px", textAlign: "center" }}>Lädt …</div>}>
        <LoginForm />
      </Suspense>
      <Footer />
    </>
  );
}
