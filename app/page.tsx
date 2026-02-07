import Image from "next/image";
import snakeGame from "@/public/snake-game.svg";
import BackdropBlur from "./components/BackdropBlur";
import GithubProfileCodeLink from "./components/GithubProfileCodeLink";
import GreetingMessage from "./components/GreetingMessage";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-full m-auto lg:px-8 flex-row gap-36.5">
      <h1 className="sr-only">Jordan Baker</h1>
      <div className="px-6 sm:p-0 relative">
        <div className="sm:max-w-302.5 m-auto">
          <GreetingMessage />
          <GithubProfileCodeLink />
          <BackdropBlur viewport="mobile" />
        </div>
      </div>
      <div className="hidden relative lg:block">
        <Image src={snakeGame} className="z-1" alt="Snake game placeholder"></Image>
        <BackdropBlur viewport="desktop" />
      </div>
    </main>
  );
}
