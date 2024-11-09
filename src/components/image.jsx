// halaman untuk di sebelah our abilities
import ImageTransparent from "../img/removedcon.png";

export const ImageCard = () => {
  return (
    <>
      <div className="bg-slate-800 text-white shadow-xl shadow-slate-950 max-w-5xl min-h-[30rem] rounded-tr-xl rounded-br-xl flex justify-between items-center">
        <div className="max-w-md ml-6">
          <h1 className="text-4xl font-nunito font-semibold mb-5">
            We Support Fullstack Development
          </h1>
          <p>
            Our platform is dedicated to supporting fullstack development,
            covering both frontend and backend technologies. From building
            dynamic user interfaces with modern frameworks to implementing
            robust server-side logic and database management, we provide
            comprehensive resources and tools for developers to create complete
            and scalable web applications. Empowering developers to bring their
            ideas to life, all in one place.
          </p>
        </div>
        <div className="">
          <img src={ImageTransparent} alt="" className="h-96 w-96" />
        </div>
      </div>
    </>
  );
};
