function PilarsOfStabilitySection() {
  return (
    <section
      className="w-full text-white mt-24 pt-56 pb-28"
      id="pilars-of-stability"
    >
      <h2 className="leading-normal text-5xl sm:text-5xl text-center sm:mb-28 mb-16">
        Five months of work gave birth to our machine
      </h2>
      <div className="w-full flex flex-col justify-center sm:justify-evenly mt-16 sm:flex-row">
        <div className="leading-normal text-2xl sm:text-2xl text-center mx-auto w-10/12 sm:w-1/4 medium mb-16 sm:mb-none">
          First design
          <img
            className="w-8/5 sm:w-5/2 text-center mx-auto bg-gradient-top from-black to-transparent mt-20"
            src="/assets/imgs/PreliminaryDesign1.jpeg"
            alt="pillar"
          />
          <div className="leading-normal text-lg sm:text-lg text-center my-6 thin">
            Initially, our machine design lacked automation for loading and
            unloading powder into the crucible, relying instead on manual
            circular motion or different machine arms. We ultimately chose a
            square movement for the crucible to ensure consistent starting and
            ending positions, enhancing automation efficiency.
          </div>
        </div>

        <div className="leading-normal text-2xl sm:text-2xl text-center mx-auto w-10/12 sm:w-1/4 medium mb-16 sm:mb-none">
          Square design to resolve the root of our problems
          <img
            className="w-8/5 sm:w-5/2 text-center mx-auto bg-gradient-top from-black to-transparent mt-12"
            src="/assets/imgs/Birdseye.png"
            alt="pillar"
          />
          <div className="leading-normal text-lg sm:text-lg text-center my-6 mb-6 thin">
            The square design allowed us to achieve extreme precision in the
            compression, indentation, and camera analysis steps. With this
            design, the crucible is constrained to stay in the correct position.
            Once we discovered this idea, we stuck to it.
          </div>
        </div>

        <div className="leading-normal text-2xl sm:text-2xl text-center mx-auto w-10/12 sm:w-1/4 medium mb-16 sm:mb-none">
          Final design overview
          <div className="leading-normal text-lg sm:text-lg text-center my-6 mb-6 thin">
            <img
              className="mt-4 w-2/5 text-center mx-auto sm:w-1/2 mb-10"
              src="/assets/imgs/machine.png"
              alt="pillar"
            />
            The final design is fully automated from loading to hardness
            analysis. Simply plug in the machine and let it take care of the
            rest for you!
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-evenly"></div>
    </section>
  );
}

export default PilarsOfStabilitySection;
