import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] max-auto  w-full flex flex-1 flex-col lg:flex-row items-center justify-center p-4 gap-4">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero.svg" alt="hero" fill></Image>
      </div>
      <div className="flex flex-1 flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl text-neutral-600 max-w-[480px] font-bold">
          Learn pertice, master the language with a free online Linga
        </h1>
        <div className="flex flex-col items-center gap-y-4 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="animate-spin h-5 w-5 text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="secondary" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button
                  size="lg"
                  variant="primaryOutline"
                  className="w-full my-4"
                >
                  I have all ready have acount
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/learn">
                <Button size="lg" variant="parimary" className="w-full">
                  Start Learning
                </Button>
              </Link>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
