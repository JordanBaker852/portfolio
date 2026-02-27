import Image from "next/image";
import Link from "next/link";

type Props = {
    imageUrl: string,
    description: string
}

const ProjectCard = ({imageUrl, description}: Props) => {
    return (
        <div className="max-w-101.75 border border-[#1D293D] rounded-lg">
          <Image width={407} height={145} className="rounded-t-lg border-b border-b-[#1D293D]" loading="eager" src={imageUrl} alt="Portfolio site"></Image>
          <div className="p-8 bg-[#020618] rounded-b-lg">
            <p className="text-lg mb-6">{description}</p>
            <Link className="px-3 py-2.5 text-sm text-[#F8FAFC] bg-[#45556C] rounded-lg block max-w-31.25" href="https://github.com/JordanBaker852/portfolio">
              view-project
            </Link>
          </div>
        </div>
    );
};

export default ProjectCard;