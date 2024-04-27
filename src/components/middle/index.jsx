import React, { useState } from 'react'
import Barchart from './Barchart'
import Linechart from './lineChart'
import Piechart from './piechart'
import data from '../../../../data'
import Rating from './Rating'
import RatingComponent from './Rating'
const index = ({ title }) => {
    const [inputValue, setInputValue] = useState('');

    const newdata = data.filter(item => {
        // if (item.title.includes(inputValue) && inputValue != '') {
        //     return true
        // }
        // else return false
        return item.title.toLowerCase().includes(inputValue.toLowerCase()) && inputValue != ''
    })

    const { Rating } = data.filter(item => {
        return item.title === title
    })[0]
   

    return (
        <>
            <section className="  flex-1 flex flex-col place-content-between items-center gap-2 p-5">
                <button className="  relative border">
                    <input
                        type="text"
                        placeholder="rechercher un produit"
                        className=" border border-primary  pl-10 rounded-lg px-20 py-3"
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
                <div className=" bg-gray-100 p-2 w-[90%] h-1/2 flex flex-col items-center place-content-around">
                    <p className='font-Montserrat font-bold  text-black'>Sold for each Wilaya :</p>
                    <div className=" h-[90%] w-[100%] bg-[#F2F2F7]">
                        <Barchart />
                    </div>
                </div>
                <section className=" w-[90%] flex gap-2 items-center">
                    <div className=" p-4 h-full w-1/2 pt-6 bg-[#F2F2F7]">

                        <RatingComponent Rating={Rating} />
                        <div className='text-primary'>
                            <h1 className='font-Montserrat font-bold  text-black '>quantity available :</h1>
                            <p className='font-semibold'>155 unity</p>
                        </div>
                        <div>
                            <p className='font-Montserrat font-bold text-black'>average retail price : </p>
                            <p className='text-primary font-semibold'>650da</p>
                        </div>
                    </div>
                    <div className=" h-[90%] w-1/2 bg-[#F2F2F7]">
                        <h1 className='font-Montserrat font-bold  text-black'>Sold With Age</h1>
                        <Linechart />
                    </div>

                </section>


            </section >
        </>
    )
}

export default index
