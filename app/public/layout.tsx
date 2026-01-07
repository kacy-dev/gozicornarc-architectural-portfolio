// app/public-layout/layout.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen dark:bg-background light:bg-foreground">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
