import Profile from "../components/Team/Profile";

export default function Team() {
  return (
    <>
      <h1 className="mt-56 text-white text-5xl text-center medium">Our Team</h1>
      <div className="w-full align-baseline flex  flex-wrap mt-20 mx-auto">
        <Profile name="Damaso" description="Director" img="Damaso" />
        <Profile name="Maria" description="Deputy director" img="Maria" />
        <Profile name="Petal" description="IDE Officer" img="Petal" />
        <Profile
          name="Vladimir"
          description="Chef Financial Officer"
          img="Vladimir"
        />
        <Profile name="Dai" description="Laser Cutting Engineer" img="Dai" />
        <Profile name="Adrian" description="Chief of Production" img="Adrian" />
        <Profile name="Alex" description="Chief Engineer" img="Alex" />
        <Profile name="Cat" description="Chief of automation" img="cat" />
        <Profile name="Caith" description="Sustainabiliy Officer" img="Caith" />
        <Profile
          name="Xiubyn"
          description="3D printing Engineer"
          img="Xiubyn"
        />
        <Profile name="Dehyv" description="Deputy Chief Engineer" img="Dehyv" />
      </div>
    </>
  );
}
