import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  ChevronDown,
  FileText,
  LayoutDashboard,
  StarsIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { currentUser } from "@clerk/nextjs/server";

const Header = async () => {
  await currentUser();
  return (
    <header className="fixed top-0 bg-background/80 backdrop-blur-md w-full border-b z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex justify-between items-center h-16 px-4">
        <Link href="/">LOGO</Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button>
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden md:block">Industry Insights</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <StarsIcon className="w-4 h-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href={"/resume"} className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href={"/cover-letter"}
                    className="flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href={"/preparation"}
                    className="flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant={"outline"}>Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/ "
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
