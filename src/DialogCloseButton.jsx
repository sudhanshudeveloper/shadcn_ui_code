// DialogCloseButton.jsx
import React from "react";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogCloseButton() {
  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Integrating Shadcn UI with React.js and Vite</DialogTitle>
        <DialogDescription>
          A Step-by-Step Guide for Developers | Anyone who has this link will be
          able to view my blogs.
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center gap-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="link" className="sr-only">
            Link
          </Label>
          <Input
            id="link"
            defaultValue="https://dev.to/sudhanshudevelopers"
            readOnly
          />
        </div>
      </div>
      <DialogFooter className="sm:justify-start">
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
