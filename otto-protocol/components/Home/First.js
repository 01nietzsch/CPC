import { motion } from "framer-motion";
import Arrow from "../Arrow";

function Firstsection() {
  const docsRedirect = () => {
    window.location.href = "/assets/pdf/Final Design Report.pdf";
  };

  return (
    <section className="w-full text-white h-screen" id="top">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center"
        >
          <div className="relative z-0 w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-normal font-bold">
              Enter the quest of
              <br />
              <span>Hardenability</span>
            </h1>
            <p className="my-6 text-base sm:text-lg md:text-xl">
              Chilli Powder Corp is the future of hardness testing
            </p>
            <button
              onClick={docsRedirect}
              className="inline-flex items-center justify-center w-auto py-3 px-7 bg-white border-2 border-white rounded-full text-black hover:bg-gray-200 transition duration-300"
            >
              Documentation
            </button>
          </div>
          <div className="flex justify-center w-full mt-20">
            <div
              className="cursor-pointer"
              onClick={() => {
                window.location.href = "#pilars-of-stability";
              }}
            >
              <Arrow />
              <Arrow />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Firstsection;
