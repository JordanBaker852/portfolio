import greenBlur from "@/public/green-background-blur.svg";
import blueBlur from "@/public/blue-background-blur.svg";
import Image from "next/image";

const BackdropBlur = () => {
    return(
        <div className="absolute inset-0 z-10 sm:hidden">
            <Image className="absolute -top-8 -left-4 blur-3xl" src={greenBlur} alt="" />
            <Image className="absolute bottom-0 -right-4 blur-3xl" src={blueBlur} alt="" />
        </div>
    );
};

export default BackdropBlur;