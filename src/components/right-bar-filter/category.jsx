import React, { useState } from 'react';
import downIcon from '../../assets/down.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/features/products/productsSlice';
import data from '../../../../data';

const Category = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const products = data

    return (
        <li className='border py-2 px-3 rounded-lg  bg-white'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>{props.category}</h1>
                <img
                    className='w-6 h-6 cursor-pointer transition transform hover:rotate-180'
                    src={downIcon}
                    onClick={() => {
                        setIsOpen(!isOpen);
                        props.setCategoryOpen(props.category);

                    }}
                />
            </div>

            {props.isCategoryOpen === props.category && isOpen && (
                <ul className='mt-3 '>
                    {products.map((product) => {
                        return product.category === props.category ?
                            <li
                                key={product.id}
                                className='cursor-pointer text-sm p-2  rounded-md transition transform hover:scale-105 hover:bg-gray-200'
                            >
                                {product.title}
                            </li>
                            :
                            ""
                    }
                    )}
                </ul>
            )}
        </li>
    );
};

export default Category;


