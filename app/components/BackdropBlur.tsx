import greenBlurMobile from "@/public/green-mobile-background-blur.svg";
import blueBlurMobile from "@/public/blue-mobile-background-blur.svg";
import greenBlurDesktop from "@/public/green-desktop-background-blur.svg";
import blueBlurDesktop from "@/public/blue-desktop-background-blur.svg";
import Image from "next/image";

type Props = {
    viewport: "desktop" | "mobile"
};

const BackdropBlur = ({viewport}: Props) => {

    const greenBlurImg = viewport == "mobile" ? greenBlurMobile : greenBlurDesktop;
    const blueBlurImg = viewport == "mobile" ? blueBlurMobile : blueBlurDesktop;
    
    const visibility = viewport == "mobile" ? "inset-0 lg:hidden" : "-inset-30 hidden lg:block"

    return (
        <div className={`absolute ${visibility}`}>
            <Image className="absolute top-0 left-0 blur-3xl" src={greenBlurImg} alt="" />
            <Image className="absolute bottom-0 right-0 blur-3xl" src={blueBlurImg} alt="" />
        </div>
    );
};

export default BackdropBlur;