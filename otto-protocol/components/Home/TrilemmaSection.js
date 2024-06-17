import ThreeScene from "../ThreeScene";

function TrilemmaSection() {
  return (
    <section className="w-full text-white py-8 sm:py-12 md:py-28 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4 lg:px-12 xl:px-24">
        <div className="flex flex-col items-start md:items-center lg:items-start">
          <h1 className="text-2xl mb-4 lg:text-3xl xl:text-4xl">
            Fully automated
          </h1>
          <p className="text-lg mb-4 lg:text-xl xl:text-2xl">
            ⁃ All processes are automated upon pressing the ‘start’ button
            <br />⁃ Ease of repetition of experiment by unloading and refilling
            the powder
          </p>
          {/* <img className="mx-24" src="/assets/imgs/automation.png" alt="Section 1 Image" /> */}
        </div>

        <div className="flex flex-col items-start md:items-center lg:items-start">
          <h1 className="text-2xl mb-4 lg:text-3xl xl:text-4xl">
            High precision
          </h1>
          <p className="text-lg mb-4 lg:text-xl xl:text-2xl">
            ⁃ Stepper motors and linear actuators controlled by a time-delay
            function
            <br />⁃ Consistent force applied to compress and indent the powder
            <br />⁃ Exact mass of powder dispensed
          </p>
          {/* <img src="path-to-your-image-2.png" alt="Section 2 Image" /> */}
        </div>

        <div className="flex flex-col items-start md:items-center lg:items-start">
          <h1 className="text-2xl mb-4 lg:text-3xl xl:text-4xl">Sustainable</h1>
          <p className="text-lg mb-4 lg:text-xl xl:text-2xl">
            ⁃ Sustainably sourced materials like PLA and wood
            <br />⁃ Energy-efficient production processes
            <br />⁃ Safe disposal of materials
          </p>
          {/* <img src="path-to-your-image-3.png" alt="Section 3 Image" /> */}
        </div>

        <div className="flex flex-col items-start md:items-center lg:items-start">
          <h1 className="text-2xl mb-4 lg:text-3xl xl:text-4xl">
            Future improvements
          </h1>
          <p className="text-lg mb-4 lg:text-xl xl:text-2xl">
            ⁃ Retractable chains for pushers to reduce machine size
            <br />⁃ Loading dispenser placed above machine
          </p>
          {/* <img src="path-to-your-image-4.png" alt="Section 4 Image" /> */}
        </div>
      </div>
    </section>
  );
}

export default TrilemmaSection;
