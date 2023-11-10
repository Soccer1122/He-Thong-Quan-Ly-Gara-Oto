import { useState } from "react";
import NavBar from "../NavBar";

const StatSalary =()=>{
    const location = "/manager/stat_salary";
    const [showSalaryInMonth, setShowSalaryInMonth] = useState(false)
    const [showPayroll, setShowPayroll] = useState(false)
    const formatCurrency = (amount) => {
        return amount.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
    }
    return(
        <div className="relative h-screen font-arial">
            <NavBar location={location}/>
            <div className={`content relative top-[110px] w-full h-[629px] flex justify-center bg-gray-200 ${showSalaryInMonth && "brightness-75" }`}>               
                <div className="w-[80%] m-5 overflow-x-auto shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-gray-500 text-center bg-white">
                        <thead className="text-xl text-gray-700 uppercase border-b">
                            <tr>
                                <th scope="col" className="px-6 py-3 border-r ">
                                    Tháng
                                </th>                                
                                <th scope="col" className="px-6 py-3">
                                    Tổng lương trong tháng
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[12,11,10,9,8,7,6,5,4,3,2,1].map((value,index)=>
                                <tr key={index} 
                                    className="border-b border-gray-200 cursor-pointer hover:bg-slate-200 active:bg-slate-300"
                                    onClick={()=>setShowSalaryInMonth(true)}
                                    >
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-r">
                                        Tháng {value}/2023
                                    </th>                              
                                    <td className="px-6 py-4">
                                        {formatCurrency(50000000+(index*123456))}
                                    </td>
                                </tr>        
                            )}                          
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={`${showSalaryInMonth?"absolute":"hidden"}  z-10 h-[80%] w-[80%] bg-white top-32 left-[50%] translate-x-[-50%] rounded-md flex items-center flex-col`}>
                <h1 className="text-xl font-bold m-5 mb-2 uppercase"> Lương của nhân viên trong tháng 12</h1>
                <div className="w-[80%] m-5 h-[80%] overflow-y-auto  bg-white p-2">                 
                        <table className="w-full text-sm text-gray-500 text-center">
                            <thead className="text-xl text-gray-700 border-b border-t">
                                <tr>
                                    <th scope="col" className="px-6 py-3 border-x ">
                                        Mã nhân viên
                                    </th>                                
                                    <th scope="col" className="px-6 py-3 border-r">
                                        Tên nhân viên
                                    </th>
                                    <th scope="col" className="px-6 py-3 border-r">
                                        Lương trong tháng
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[2,1,1,1,1,1,1,1,1,1,,1,1,1,1].map((value,index)=>
                                    <tr key={index} 
                                        className="border-b border-gray-200 cursor-pointer hover:bg-slate-200 active:bg-slate-300"
                                        onClick={()=>setShowPayroll(true)}
                                        >
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-x">
                                                NV{index+1}
                                            </th> 
                                            <td className="px-6 py-4 border-r">
                                                Nhân viên {index+1}
                                            </td>                             
                                            <td className="px-6 py-4 border-r">
                                                {formatCurrency(9000000+(index*123456))}
                                            </td>
                                    </tr>        
                                )}                           
                            </tbody>
                        </table>
                    </div>
                    <button className="rounded-xl  text-white bg-red-600 hover:bg-red-700 active:bg-red-800 m-3 p-3 " onClick={()=>setShowSalaryInMonth(false)}>Quay lại</button>           
                </div>
                <div className={`${showPayroll?"absolute":"hidden"} z-20 h-[80%] w-[80%] bg-white top-32 left-[50%] translate-x-[-50%] rounded-md `}>
                    <h1 className="text-center text-4xl font-bold m-5 uppercase" >Bảng lương</h1>
                    <div className="grid grid-rows-7 h-[86%]  ">
                        <div className="row-span-2 grid grid-cols-2  text-20">
                            <div className="flex flex-col justify-around mx-auto">
                                <span> Tên nhân viên: <span className="font-bold">Nhân viên 1</span> <br/></span>
                                <span> Số ngày làm: <span className="font-bold">26</span> <br/></span>
                                <span> Lương cứng: <span className="font-bold">{formatCurrency(7500000)}</span> <br/></span>
                                <span> Thưởng: <span className="font-bold">{formatCurrency(1500000)}</span></span>                                  
                            </div>
                            <div className="flex flex-col justify-around mx-auto">
                                <span>Chức vụ: <span className="font-bold">Nhân viên sửa chữa</span> <br/></span>
                                <span>Số ngày nghỉ: <span className="font-bold">0</span> <br/></span>
                                <span>Đạt được: <span className="font-bold">{formatCurrency(7500000)}</span></span>
                                <input className="focus:outline-none focus:border-blue-700 focus:border-b-2 border-b border-gray-400 " placeholder="Nhập tổng tiền phạt"/>
                            </div>
                        </div>
                        <div className="row-span-4 ">
                            <h2 className="text-center font-bold">Các xe đã sửa</h2>                           
                            <div className="relative max-h-[80%] overflow-auto flex justify-center">
                                <table className="w-[80%] text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Số thứ tự
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Tên xe
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Tên khách
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Mã nhiệm vụ sửa
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Tổng giá trị
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Thưởng
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[1,2,3].map((index) =>
                                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                   {index}
                                                </th>
                                                <td className="px-6 py-4">
                                                    Lamborghini Aventador
                                                </td>
                                                <td className="px-6 py-4">
                                                    Khách hàng {index}
                                                </td>
                                                <td className="px-6 py-4">
                                                    RA{index}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {formatCurrency(15000000)}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {formatCurrency(500000)}
                                                </td>
                                            </tr>      
                                        )}                                                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row-span-1 flex justify-around">
                            <span className="font-bold text-xl"> Tổng lương nhận được: {formatCurrency(9000000)}</span>
                            <div >
                                <button className="rounded-lg border text-blue-600 border-blue-600 mr-3 p-3 " onClick={()=>setShowPayroll(false)}>Quay lại</button>
                                <button className="rounded-xl text-white bg-blue-600 hover:bg-blue-800 active:bg-blue-900 ml-3 p-3">Lưu chỉnh sửa</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default StatSalary;