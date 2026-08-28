import { Link } from "@tanstack/react-router";
import { Bell, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/layout/Sidebar";
import { Brand } from "@/components/layout/Brand";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-card/90 px-4 backdrop-blur lg:px-6">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 border-0 p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <Sidebar onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>

      <div className="lg:hidden">
        <Brand />
      </div>

      <p className="hidden text-base font-semibold text-muted-foreground lg:block">
        Smart Agriculture Crop Disease &amp; Farm Advisory
      </p>

      <div className="ml-auto flex items-center gap-1.5">
        <Button variant="ghost" size="icon" aria-label="Notifications" asChild>
          <Link to="/notifications">
            <Bell className="size-5" />
          </Link>
        </Button>
        <Button variant="soft" size="sm" asChild>
          <Link to="/profile">
            <User className="size-4" />
            <span className="hidden sm:inline">Profile</span>
          </Link>
        </Button>
      </div>
    </header>
  );
}
