import {
    FaFacebook,
    FaGithub,
    FaHandHoldingHeart,
    FaHandshake,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
  } from "react-icons/fa";
  import { TbBulb, TbTargetArrow } from "react-icons/tb";
  import { GiMountaintop, GiStairsGoal, GiStrongMan } from "react-icons/gi";
  import { PiBinocularsLight } from "react-icons/pi";
  import { GrAchievement } from "react-icons/gr";
  import { RiHandHeartFill } from "react-icons/ri";
  import { FaPeopleGroup } from "react-icons/fa6";
  import "aos/dist/aos.css";
  import { useEffect } from "react";
  import Aos from "aos";
  
  const About = () => {
    useEffect(() => {
      Aos.init();
    }, []);
    return (
      <div>
        <div>
  
          {/* Top image */}
  
          <div className="w-full my-20">
            <img
              className="h-80 w-full"
              src="https://i.ibb.co/y5d3vCF/art-1.jpg"
              alt="banner"
            />
          </div>
  
          {/* What does section */}
  
          <div className="bg-[#1f1f1fcf] my-16 text-white p-8 space-y-2 h-[450px] md:h-80">
  
            <div className="mb-10">
              <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
                Exploring Sculpture and Modeling Techniques
              </h1>
              <p className="text-[#ffffff93] md:w-2/4 ">
                Unlock the secrets of sculpting and modeling with our comprehensive guides and tutorials.
              </p>
            </div>
  
            <div className="grid grid-cols-2 md:grid-cols-5 ">
              <div className="flex gap-2 flex-col items-center justify-center">
                <FaHandHoldingHeart className="lg:text-5xl md:text-4xl text-3xl text-green-500" />
                <p>Clay Sculpture</p>
              </div>
              <div className="flex  gap-2 flex-col items-center justify-center">
                <TbBulb className="lg:text-5xl md:text-4xl text-3xl text-green-500" />
                <p>Stone Sculpture</p>
              </div>
              <div className="flex gap-2 flex-col items-center justify-center">
                <FaHandshake className="lg:text-5xl md:text-4xl text-3xl text-green-500" />
                <p>Metal Sculpture</p>
              </div>
              <div className="flex gap-2 flex-col items-center justify-center">
                <TbTargetArrow className="lg:text-5xl md:text-4xl text-3xl text-green-500" />
                <p>Food Carving</p>
              </div>
              <div className="flex col-span-2 md:col-span-1 gap-2 flex-col items-center justify-center">
                <GiStrongMan className="lg:text-5xl md:text-4xl text-3xl text-green-500" />
                <p>Natural Material Sculpture</p>
              </div>
            </div>
  
          </div>
  
          {/* Three card */}
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 gap-10 w-[92%] mx-auto ">
              {/* card 1 */}
            <div
              data-aos-delay="500"
              data-aos="fade-up"
              className="h-96 space-y-5  rounded-3xl p-8 shadow-2xl"
            >
              <h1 className=" flex justify-center items-center mx-auto  shadow-2xl rounded-full h-[120px] w-[120px] ">
                {" "}
                <GiMountaintop className="text-[80px]   text-green-500  " />
              </h1>
              <p className="text-3xl text-center">Clay Sculpture</p>
              <p className="text-[#000000a7] ">
                Dive into the world of clay sculpture and discover the art of shaping clay into intricate forms and figures.
              </p>
            </div>
              {/* card-2 */}
            <div
              data-aos-delay="600"
              data-aos="fade-up"
              className="h-96 space-y-5  rounded-3xl p-8 shadow-2xl"
            >
              <h1 className=" flex justify-center items-center mx-auto  shadow-2xl rounded-full h-[120px] w-[120px] ">
                {" "}
                <PiBinocularsLight className="text-[80px]   text-green-500  " />
              </h1>
              <p className="text-3xl text-center">Stone Sculpture</p>
              <p className="text-[#000000a7] ">
                Explore the ancient art of stone sculpture and learn how to transform raw stone into magnificent artworks.
              </p>
            </div>
           {/* card - 3 */}
            <div
              data-aos-delay="700"
              data-aos="fade-up"
              className="h-96 space-y-5 md:col-span-2 lg:col-span-1 rounded-3xl p-8 shadow-2xl"
            >
              <h1 className=" flex justify-center items-center mx-auto  shadow-2xl rounded-full h-[120px] w-[120px] ">
                {" "}
                <GiStairsGoal className="text-[80px]   text-green-500  " />
              </h1>
              <p className="text-3xl text-center">Metal Sculpture</p>
              <p className="text-[#000000a7] ">
                Delve into the world of metal sculpture and discover the techniques of shaping metal into stunning artworks.
              </p>
            </div>
  
          </div>
  
              {/* Sculpture and Modeling Objectives section */}
  
          <div className="w-[90%] space-y-5 mx-auto">
              {/* title */}
            <p className="text-4xl">Sculpture and Modeling Objectives</p>
            <div className="p-5 space-y-5">
  
              <div className="flex gap-5 items-center">
                <GrAchievement className="text-5xl " />
                <p>
                  Our objective is to introduce aspiring sculptors and modelers to the fundamentals and advanced techniques of sculpture and modeling through our platform.
                </p>
              </div>
  
              <div className="flex gap-5 items-center">
                <RiHandHeartFill className="text-5xl " />
                <p>
                  We aim to foster a community of artists passionate about sculpture and modeling, providing them with resources and support to hone their craft.
                </p>
              </div>
  
              <div className="flex gap-5 items-center">
                <FaPeopleGroup className="text-5xl " />
                <p>
                  Our long-term goal is to become the go-to destination for anyone interested in sculpture and modeling, offering a comprehensive hub of knowledge and inspiration.
                </p>
              </div>
  
            </div>
  
          </div>
  
          {/* Sculpture and Modeling Presence section  */}
  
          <div
            className="my-20 relative h-[700px] bg-cover p-16"
            style={{
              backgroundImage: `url(https://i.ibb.co/RSQc011/shutterstock-159890057-1.png)`,
            }}
          >
            <p className="md:text-4xl text-2xl font-light ">
              Sculpture and Modeling Presence and Position in <br /> the Art Community
            </p>
  
            <p className="bottom-0 pl-5 md:pl-0 right-20 absolute">
              Our platform aims to be the leading authority in the field of sculpture and modeling, connecting artists and enthusiasts worldwide.
            </p>
          </div>
  
              {/* Sculpture and Modeling Location section */}
  
          <div className="my-20 flex flex-col-reverse md:flex-row gap-10 w-[92%] mx-auto  ">
  
            <div className="h-96 space-y-5 md:w-2/4 w-full">
              <p className="text-4xl">Where Can You Find Us?</p>
              <p className="text-[#000000a3] ">
                Join our vibrant community of sculptors and modelers and embark on a journey of creativity and expression.
              </p>
              <p>Let’s create together!!</p>
              <p>123 Art Street, Creativityville, Artland</p>
              <div className=" text-xl flex gap-2 text-green-500 my-2">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
                <FaGithub />
                <FaYoutube />
              </div>
            </div>
            <div className="h-96 md:w-2/4 w-full">
              <img
                className="h-full w-full"
                src="https://i.ibb.co/1sxNXPg/Group.png"
                alt=""
              />
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  };
  
  export default About;
  