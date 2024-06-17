import { motion } from "framer-motion";
import Arrow from "../Arrow";

function Firstsection() {
  const docsRedirect = () => {
    window.location.href = "/assets/pdf/Final Design Report.pdf";
  };

  return (
    <section className="w-full text-white full-heigh" id="top">
      <div className="alignContainer">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="vertical-center"
        >
          <div className="relative z-0 justify-center w-full text-center align-middle">
            <h1 className="text-5xl leading-normal text-center bold sm:text-6xl">
              Enter the quest of
              <br />
              <span>Hardenability</span>
            </h1>
            <p className="my-10 text-lg">
              Chilli Powder Corp is the future of hardness testing
            </p>
            {/* <button
              onClick={appRedirect}
              className="inline-flex content-center justify-center w-auto py-3 mr-4 text-white align-middle rounded-full px-7 bg-primary-gradient"
            >
              Launch App
            </button> */}
            <button
              onClick={docsRedirect}
              className="inline-flex justify-center align-middle content-center px-7 w-auto bg-white border-2 ml-4 border-solid border-[#ffffff] rounded-full py-3 text-black "
            >
              Documentation
            </button>
          </div>
          <div className="flex justify-center w-full pb-6 text-center mt-28">
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
