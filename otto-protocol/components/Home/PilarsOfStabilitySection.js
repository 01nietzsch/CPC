function PilarsOfStabilitySection() {
  return (
    <section
      className="w-full text-white mt-24 pt-28 pb-20 sm:pt-56 sm:pb-28"
      id="pilars-of-stability"
    >
      <h2 className="leading-normal text-3xl sm:text-5xl text-center mb-12 sm:mb-28">
        Five months of work gave birth to our machine
      </h2>
      <div className="w-full flex flex-col sm:flex-row sm:justify-evenly mt-16">
        <div className="text-xl sm:text-2xl text-center mx-auto w-10/12 sm:w-1/4 mb-16">
          <h3 className="font-medium">First design</h3>
          <img
            className="w-full sm:w-5/6 mt-8 mx-auto bg-gradient-to-t from-black to-transparent"
            src="/assets/imgs/PreliminaryDesign1.jpeg"
            alt="First design"
          />
          <p className="text-base sm:text-lg my-6">
            Initially, our machine design lacked automation for loading and
            unloading powder into the crucible, relying instead on manual
            circular motion or different machine arms. We ultimately chose a
            square movement for the crucible to ensure consistent starting and
            ending positions, enhancing automation efficiency.
          </p>
        </div>

        <div className="text-xl sm:text-2xl text-center mx-auto w-10/12 sm:w-1/4 mb-16">
          <h3 className="font-medium">
            Square design to resolve the root of our problems
          </h3>
          <img
            className="w-full sm:w-5/6 mt-8 mx-auto bg-gradient-to-t from-black to-transparent"
            src="/assets/imgs/Birdseye.png"
            alt="Square design"
          />
          <p className="text-base sm:text-lg my-6">
            The square design allowed us to achieve extreme precision in the
            compression, indentation, and camera analysis steps. With this
            design, the crucible is constrained to stay in the correct position.
            Once we discovered this idea, we stuck to it.
          </p>
        </div>

        <div className="text-xl sm:text-2xl text-center mx-auto w-10/12 sm:w-1/4 mb-16">
          <h3 className="font-medium">Final design overview</h3>
          <img
            className="w-full sm:w-5/6 mt-8 mx-auto bg-gradient-to-t from-black to-transparent"
            src="/assets/imgs/machine.png"
            alt="Final design"
          />
          <p className="text-base sm:text-lg my-6">
            The final design is fully automated from loading to hardness
            analysis. Simply plug in the machine and let it take care of the
            rest for you!
          </p>
        </div>
      </div>
    </section>
  );
}

export default PilarsOfStabilitySection;
