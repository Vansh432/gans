'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { Product } from '../components/Main'

export default function ListProduct() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getAllProduct() {
            try {
                const response = await axios.get('https://gansgps.com/admin/api/getallproduct');
                console.log(response.data);
                setData(response.data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        getAllProduct();
    }, []);

    return (
        <>
            <div className="grid gap-10 mt-24 mx-[120px]
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-3">
                {data.map((element, index) => (
                    <Product key={index} product={element} />
                ))}
            </div>
        </>
    );
}
