import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  LayoutPanelLeft,
  Component,
  FileCode2,
  List,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
} from "lucide-react";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays a progress bar to show task completion.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "Tab panels displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "Popup that shows helpful info on hover or focus.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-wrap gap-2 w-full">
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center gap-1.5">
            <LayoutPanelLeft className="w-4 h-4" />
            Home
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    href="https://dev.to/sudhanshudevelopers"
                    className="flex flex-col justify-end h-full w-full rounded-md p-6 no-underline outline-none select-none focus:shadow-md transition"
                  >
                    <div className="mt-4 mb-2 text-lg font-semibold">
                      Sudhanshu Dev.
                    </div>
                    <p className="text-sm text-muted-foreground leading-tight">
                      Sudhanshu Developer shares web dev and software
                      engineering insights.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists, and more.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Components */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center gap-1.5">
            <Component className="w-4 h-4" />
            Components
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] gap-2 grid-cols-1 md:grid-cols-2 p-4">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Docs */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/docs" className="flex items-center gap-1.5">
              <FileCode2 className="w-4 h-4" />
              Docs
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* List */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center gap-1.5">
            <List className="w-4 h-4" />
            List
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-4 w-[250px] sm:w-[300px] p-4">
              <li className="space-y-2">
                <NavigationMenuLink asChild>
                  <a href="#" className="block">
                    <div className="font-medium">Components</div>
                    <div className="text-sm text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#" className="block">
                    <div className="font-medium">Documentation</div>
                    <div className="text-sm text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#" className="block">
                    <div className="font-medium">Blog</div>
                    <div className="text-sm text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* With Icons */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#" className="flex items-center gap-2">
                    <CircleHelpIcon className="w-4 h-4" />
                    Backlog
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#" className="flex items-center gap-2">
                    <CircleIcon className="w-4 h-4" />
                    To Do
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#" className="flex items-center gap-2">
                    <CircleCheckIcon className="w-4 h-4" />
                    Done
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// ListItem subcomponent
function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-semibold">{title}</div>
          <p className="text-sm text-muted-foreground leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
