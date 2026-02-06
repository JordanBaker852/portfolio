import BackdropBlur from "./components/BackdropBlur";
import GithubProfileCodeLink from "./components/GithubProfileCodeLink";
import GreetingMessage from "./components/GreetingMessage";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Jordan Baker</h1>
      <div className="w-full px-6 sm:p-0 sm:max-w-302.5 m-auto relative flex flex-col gap-19">
        <GreetingMessage />
        <GithubProfileCodeLink />
        <BackdropBlur />
      </div>
    </>
  );
}
