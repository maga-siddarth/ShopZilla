import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import productCategory from '../helpers/productCategory'
import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay'

const CategoryProduct = () => {

    const params = useParams()
    const [data,setData]= useState([])
    const [loading,setLoading] = useState(false)

    const fetchData = async() =>{
      const response = await fetch()

      const dataResponse = await response.json()
      setData(dataResponse?.data || [] )
      console.log(dataResponse)
    }
   
    //{params?.categoryName}

  return (
    <div className='container mx-auto p-4'>
        {/**Desktop Version */}
        <div className='hidden lg:grid grid-cols-[200px,1fr] '>
          {/**Left Side */}
          <div className='bg-white p-2 min-h-[calc(100vh-120px)] overflow-y-scroll'>

            {/**Sort By */}
                <div className=''>
                  <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Sort by</h3>

                  <form className='text-sm flex flex-col gap-2 py-2'>
                    <div className='flex items-center gap-3'>
                      <input type='radio' name='sortBy' />
                      <label>Price - Low to High</label>
                    </div>

                    <div className='flex items-center gap-3'>
                      <input type='radio' name='sortBy' />
                      <label>Price - High to Low </label>
                    </div>
                    
                  </form>
                </div>


                {/**Filter By */}
                <div className=''>
                  <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Category</h3>

                  <form className='text-sm flex flex-col gap-2 py-2'>
                    {
                      productCategory.map((categoryName,index)=>{
                        return (
                          <div className='flex items-center gap-3'>
                            <input type='checkbox' name={"category"} id={categoryName.value}/>

                            <label htmlFor={categoryName?.value}>{categoryName?.label}</label>
                          </div>
                        )
                      })
                    }
                    
                  </form>
                </div>

          </div>

           {/**Right Side Display Product */}
           <div>
                {
                  params?.categoryName && (
                    <CategoryWiseProductDisplay category={params?.categoryName} heading={"Recommended Product"} />
                  )
                  
                }
            </div>
        </div>
    </div>
  )
}

export default CategoryProduct