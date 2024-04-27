import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllCategories, getAllProducts } from '../../redux/features/products/productsSlice';
import Category from './category';
const RightBar = () => {
    const categories = ["Souris", "Chargeurs", "Flash disque"]
    const dispatch = useDispatch();
    const [isCategoryOpen, setCategoryOpen] = useState('');
    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getAllProducts());
    }, [])

    console.log("categories sid : ", categories)
    return (
        <section className='h-[70vh] w-[400px] overflow-y-scroll '>
            <h1 className='max-w-max mx-auto p-3 text-primary text-xl font-bold font-Montserrat '>Produits</h1>
            <ul className='flex flex-col gap-2'>
                {
                    categories.map((category) => {
                        return <Category  isCategoryOpen={isCategoryOpen} setCategoryOpen={setCategoryOpen} category={category} />
                    })
                }
            </ul>
        </section>
    )
}

export default RightBar
