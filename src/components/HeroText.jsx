// src/components/HeroText.jsx
import smile from "../assets/svgs/smile.svg"
import CurveLine from "../SvgComponents/CurveLine";

export default function HeroText() {
    return (
        <div className="px-2"> {/* Added slight horizontal padding to prevent text from touching screen edges */}
            {/* Added responsive text sizes */}
            <h1 className="text-white flex justify-center items-center text-center text-4xl sm:text-5xl lg:text-7xl xl:text-[60px] leading-12 relative flex-wrap gap-x-3 gap-y-1">
                {/* Made smile emoji position and size responsive */}
                <img src={smile} className="absolute -top-5 sm:-top-15 w-14 h-14 sm:w-20 sm:h-20 -rotate-12 left-4 sm:left-10 md:left-32 lg:left-60 xl:left-100" alt="" />
                <span className="man font-semibold">we partner with</span>
                <span className="italic">talent</span>
                {/* <span className="font-extrabold">for</span> */}
                <span className="font-medium relative">
                    we produce{" "}
                    <span className="relative shadow-font text-[#F9D405] font-semibold">
                        experiences
                        {/* Adjusted underline position for different text sizes */}
                        <CurveLine color={"#fff"} className="absolute -translate-x-1/2 left-1/2 top-1 sm:top-7" width={"112%"} />
                    </span>
                </span>
            </h1>
        </div>
    );
}
