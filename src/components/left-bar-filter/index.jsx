/* eslint-disable react/no-unknown-property */
import localisation from "../../assets/localisation.svg";
import filter from "../../assets/filter.svg";
import hand from "../../assets/hand.svg";
import calender from "../../assets/calender.svg";
import pc from "../../assets/pc.svg";
import { useState } from "react";
const Leftsidebar = () => {
    const [i, seti] = useState(0);
    const navlist = [
        {
            id: 0,
            img: filter,
        },
        {
            id: 1,
            img: localisation,
        },

        {
            id: 3,
            img: calender,
        },
        {
            id: 4,
            img: pc,
        },
    ];
    return (
        <section className=" px-2 bg-[#F8F9FE] rounded-lg mt-10 py-2 h-fit  flex flex-col">
            {navlist.map((item) => {
                return (
                    <>
                        <button
                            onClick={() => {

                                seti(item.id);

                            }}
                            className={` ${item.id == i ? "bg-primary" : " bg-transparent"
                                } p-3 w-[53px] h-[53px] mx-auto rounded-lg relative transition-all duration-700 `}
                        >
                            <img src={item.img} alt="" className=" w-48" />
                            {
                                item.id == i &&
                                (
                                    i == 1 ?
                                        <select id="wilaya" name="wilaya" className=" absolute z-10 top-2 left-11 bg-primary rounded-lg text-white p-1">
                                            <option value="apple">bejaia</option>
                                            <option value="batna">batna</option>
                                            <option value="oran">oran</option>
                                            <option value="alger">alger</option>
                                        </select> : i == 2 ?
                                            <select id="wilaya" name="wilaya" className="  absolute z-10 top-2 left-11 bg-primary rounded-lg text-white p-1">
                                                <option value="homme">homme</option>
                                                <option value="femme">femme</option>


                                            </select>
                                            : i == 3 ?
                                                <select id="wilaya" name="wilaya" className="  absolute z-10 top-2 left-11 bg-primary rounded-lg text-white p-1">
                                                    <option value="age1">entre 10 et 20</option>
                                                    <option value="age2">entre 20 et 30</option>
                                                    <option value="age3">enre 30 et 40</option>
                                                    <option value="age4">superieur a 40</option>
                                                </select> : ""
                                )

                            }

                        </button>
                    </>
                );
            })}
        </section>
    );
};

export default Leftsidebar;
