import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Corrected import path
import React, { useRef } from "react";

// Register outside the component to ensure it only happens once
gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  const imageDiv = useRef(null);
  const imageRef = useRef(null )
  const imageArray = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0i5eD7gFjIar2tQ7OJDHyvxp170r5IdJww&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlaVgySUMitHD3fwSbAU_f2ifL3gqSoqW_A&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2pml7cWOM9F-LsTPeIXstzzLnos-zBnfBg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Op9YpmgXCJWFN3aNu05zEtfRkn4o39-Uvw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pM_8boEist5FGEZgzKj-5rslGq6nMmVepQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSnYvV-6i7ZI3NZBAj736x1SrAONoZeZT8GA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWC1X7-55vm_OaFDIB3QgDXG5EgQNPlilFKQ&s',
    'https://c8.alamy.com/comp/W2P8R3/indias-ms-dhoni-in-batting-action-during-the-icc-world-cup-semi-final-at-old-trafford-manchester-W2P8R3.jpg',
    'https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTIxYTkzODYwLTBlYWItMTFmMC05YzRkLWExYjFjMjMzZTcyMi5qcGc='
]
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: imageDiv.current,
      markers: true,
      start: "top 41%",
      end: "+=1000", 
      pin: true,
      onUpdate:(ele) =>{
        console.log(ele.progress);
      }
    });
  });

  return (
    <div>
      
      <div className="section-1  relative h-[200vh]">
        
        <div 
          ref={imageDiv} 
          className="bg-red-300 rounded-3xl h-[20vw] w-80 mt-96 ml-[30vw] z-0"
        >
          <img ref={imageRef} 
            // REMOVED 'fixed' here. Let GSAP handle the fixing!
            className="rounded-2xl h-full w-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFI7JhSmO0RpqvIV_5VGGz11jR5PmZLI4xlw&s"
            alt=""
          />
        </div>

        
        <div className="font-[font2] absolute top-0 left-0 w-full z-10 pointer-events-none">
          <div className="mt-[50vh]">
            <h1 className="text-[19vw] text-center uppercase leading-[17vw] pointer-events-auto">
              SEVEN7Y
              <br /> TWO
            </h1>
          </div>
          <div className="pl-[50%] mt-[20vh]">
            <p className="text-5xl w-1/2 pointer-events-auto bg-black/50 p-4">
              yukf7uiyhso fruaihgo.sjfrkj 8ldijojhiost jhlkvxbhfoxijhjhj
              hjhqwertgyhjk jhgffghjoiuyt rfghjkoiuytrfghyioiuytfghioiuyt
            </p>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="section-2 h-screen bg-zinc-900"></div>
    </div>
  );
};

export default Agence;