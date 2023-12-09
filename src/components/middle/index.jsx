import React, { useState } from 'react'
import Barchart from './Barchart'
import Linechart from './lineChart'
import Piechart from './piechart'
import data from '../../../../data'
const index = () => {
    const [inputValue, setInputValue] = useState('');

    const newdata = data.filter(item => {
        // if (item.title.includes(inputValue) && inputValue != '') {
        //     return true
        // }
        // else return false
        return item.title.toLowerCase().includes(inputValue.toLowerCase()) && inputValue != ''
    })
    return (
        <>
            <section className=" flex-1 flex flex-col place-content-between items-center gap-2 p-5">
                <button className=" relative border">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" absolute top-1"
                    >
                        <path
                            d="M20.3 20.3C19.9134 20.6866 19.2866 20.6866 18.9 20.3L14.6989 16.0989C13.9025 15.3025 12.635 15.2695 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.2695 12.635 15.3025 13.9025 16.0989 14.6989L20.3 18.9C20.6866 19.2866 20.6866 19.9134 20.3 20.3ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
                            fill="#88888C"
                        />
                    </svg>

                    <input
                        type="text"
                        placeholder="rechercher un produit"
                        className=" pl-10 rounded-lg h-8"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </button>
                <p className=" px-10 flex gap-1 flex-wrap">
                    {
                        newdata.map(item => {
                            return <h1 className='bg-slate-100 p-2'>{item.title}</h1>
                        })
                    }
                </p>
                <div className=" bg-gray-100 w-[90%] h-1/2 flex flex-col items-center place-content-around">
                    <p>retours par wilayas</p>
                    <div className=" h-[90%] w-[100%] bg-[#F2F2F7]">
                        <Barchart />
                    </div>
                </div>
                <section className=" w-[90%] h-1/2 flex gap-2 items-center">
                    <div className=" h-[90%] w-1/2 pt-6 bg-[#F2F2F7]">
                        <Piechart />
                    </div>
                    <div className=" h-[90%] w-1/2 bg-[#F2F2F7]">
                        <Linechart />
                    </div>
                </section>
            </section>
        </>
    )
}

export default index
