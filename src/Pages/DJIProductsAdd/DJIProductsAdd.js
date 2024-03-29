import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './DJIProductsAdd.css'

const DJIProductsAdd = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://dji-server.vercel.app/djiproducts', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully DJI Official Items')
                    reset();
                }

            })
    }
    return (
        <div className="container mx-auto px-4">
            <img className='lg:w-80 rounded-full mx-auto' src="https://i.ibb.co/NThqJKT/590-320-2x.jpg" alt="" />
            <div className='add-product pb-16 text-red-500 '>
                <h2 className='font-bold text-5xl my-5 underline'>Add DJI Official Products</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='text-2xl  text-center mb-28'>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' className='text-left ' />
                    <input {...register("description")} placeholder='Description' className='text-left ' />
                    <input type="number" {...register("price")} placeholder='Price' className='text-left ' />
                    <input {...register("img")} placeholder='Img Url' className='text-left ' />
                    <input type="submit" className='bg-green-400 rounded-xl hover:bg-green-600 text-white ' />
                </form>
            </div>
        </div>

    );
};

export default DJIProductsAdd;