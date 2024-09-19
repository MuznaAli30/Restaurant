import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import Appetizer from '../Menu1/Appetizer';

export default function SignatureDishes() {
  return (
    <>
      <div className="text-white flex flex-col items-center justify-center mb-44">
        <div className="text-5xl font-bold mt-44">Signature Dish</div>
        <div className="m-5 flex mb-16 flex-row items-center justify-around">
          <div className="text-[#DAA760] text-xl font-serif text-center">
            <IoRemoveOutline className="text-7xl font-extrabold" />
          </div>
          <div className=" text-[#DAA760] text-xl font-serif text-center">
            <FaAsterisk />
          </div>
          <div className="text-[#DAA760] text-xl font-serif text-center">
            <IoRemoveOutline className="text-7xl font-extrabold" />
          </div>
        </div>

        {/* menus */}
        <div className="flex flex-row gap-20 items-center justify-center">
        {/* first menu colunm */}
        <div className="flex flex-col items-start text-white">
          <div className="text-[#DAA760] text-3xl mb-5">APPETIZER</div>
          <div className="flex flex-row justify-evenly mt-10 text-2xl">

            
            <div className="mr-56">Pork Tenderloin Marinated In Yogurt</div>
            <div>$25</div>
          </div>
          <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3 "></div>
          <div className="text-gray-400">Pork / Tenderloin / Yogurt</div>


          <div className="flex flex-row justify-between w-full mt-10 text-2xl">
            <div>Grilled Pork With Preserved Lemons</div>
            <div>
            $27</div>
          </div>
          <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
          <div className="text-gray-400">Pork / Lemon / Onions</div>


          <div className="flex flex-row justify-between w-full mt-10 text-2xl">
            <div>Roasted Prawns with Coriander
            </div>
            <div>
            $18</div>
          </div>
          <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
          <div className="text-gray-400">Prawn / Coriander / Spices</div>{" "}


          <div className="flex flex-row justify-between w-full mt-10 text-2xl">
            <div>Prawn Sausage Cassaoulet</div>
            <div>$25</div>
          </div>
          <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
          <div className="text-gray-400">Prawn / Sausage / Tomato</div>{" "}


          <div className="flex flex-row justify-between w-full mt-10 text-2xl">
            <div>
            Citrus Cured Salmon​ With Honey</div>
            <div>$20</div>
          </div>
          <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
          <div className="text-gray-400">Salmon / Citrus / Honey / Spice.</div>
        </div>

        {/* second menu column */}
        <div className="flex flex-col items-start text-white">
          <div className="text-[#DAA760] text-3xl mb-5">MAIN DISH</div>


          <div className="flex flex-row justify-evenly mt-10 text-2xl">
            <div className="mr-56">Pork Tenderloin Marinated In Yogurt</div>
            <div>$25</div>
          </div>
          <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3 "></div>
          <div className="text-gray-400">Pork / Tenderloin / Yogurt</div>


          <div className="flex flex-row justify-between w-full mt-10 text-2xl">
            <div>Grilled Pork With Preserved Lemons</div>
            <div>
            $27</div>
          </div>
          <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
          <div className="text-gray-400">Pork / Lemon / Onions</div>
          <div className="text-[#DAA760] text-3xl mt-[7%]">DESERT</div>


          <div className="flex flex-row justify-between w-full mt-10 text-2xl">
            <div>Roasted Prawns with Coriander
            </div>
            <div>
            $18</div>
          </div>
          <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
          <div className="text-gray-400">Prawn / Coriander / Spices</div>{" "}


          <div className="flex flex-row justify-between w-full mt-10 text-2xl">
            <div>Prawn Sausage Cassaoulet</div>
            <div>$25</div>
          </div>
          <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
          <div className="text-gray-400">Prawn / Sausage / Tomato</div>{" "}
         
        </div>
      </div>
      </div>
      <Appetizer/>
    </>
  );
}
