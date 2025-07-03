import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { CardDemo } from "./CardDemo";
import { DialogCloseButton } from "./DialogCloseButton";
import { Copyright, LogIn, Sparkles } from "lucide-react";
function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col  px-4 sm:px-6 py-4">
      {/* Navigation Bar */}
      <header className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-700 pb-4 mb-6">
        <NavigationMenuDemo />

        {/* Login Dialog */}
        <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => setLoginOpen(true)}
              className="w-full sm:w-auto "
            >
              <LogIn /> Login
            </Button>
          </DialogTrigger>
          <DialogContent className="w-full max-w-sm sm:max-w-md bg-white text-black">
            <CardDemo />
          </DialogContent>
        </Dialog>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          How to Use Shadcn UI in Your React + Vite Project
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
          Building powerful UIs with React, Tailwind, and ShadCN. Explore clean
          components and elegant design systems with full customization.
        </p>

        {/* Explore Dialog Controlled Here */}
        <Dialog open={exploreOpen} onOpenChange={setExploreOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => setExploreOpen(true)}
              className="font-medium "
            >
              <Sparkles /> Explore now
            </Button>
          </DialogTrigger>

          {/* Show DialogCloseButton content here */}
          <DialogCloseButton />
        </Dialog>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-300 mt-12 py-6 text-sm text-center flex flex-col sm:flex-row items-center justify-center gap-2 text-muted-foreground">
        <div className="flex items-center gap-1">
          <Copyright className="w-4 h-4" />
          <span>{new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div>
          Designed by{" "}
          <span className="text-foreground font-semibold">Sudhanshu Dev.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
