import { useState } from "react";
import NavBar from "../NavBar";

const AssignTechnicalStaff =()=>{
    const location = "/manager/assign_technicalstaff"
    const [selectedTechnicalStaff, setSelectedTechnicalStaff] = useState()
    const [selectedSlot, setSelectedSlot] = useState()
    const [showAssign, setShowAssign] = useState(false)
    const handleCloseAssign =()=>{
        setSelectedSlot(0)
        setSelectedTechnicalStaff(0)
        setShowAssign(false)
    }
    const formatCurrency = (amount) => {
        return amount.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
    }
    return(
    <div className="relative h-auto">
             <NavBar location={location} />
             <div className={`relative top-[110px] w-full h-auto  bg-gray-200  font-arial ${showAssign && "brightness-75" }`}>
                <h1 className="p-5 text-center font-bold text-2xl"> Xe chưa được sửa</h1>       
                    <div className="relative overflow-auto w-[80%] mx-auto rounded-lg shadow-2xl">
                        <table className="w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr >
                                    <th scope="col" className="px-6 py-3">
                                        Mã xe nhận
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tên xe
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                       Tên khách hàng
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Thời gian nhận
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tình trạng hỏng
                                    </th>                                  
                                </tr>
                            </thead>
                            <tbody >
                                {[1,2,3,4,5,6,7,8,9,10,11].map((index)=>
                                    <tr key={index} 
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-slate-200 active:bg-slate-300"
                                        onClick={()=>setShowAssign(true)}
                                    >
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            XS0{index}
                                        </th>
                                        <td className="px-6 py-4">
                                            Lamborghini Aventador
                                        </td>
                                        <td className="px-6 py-4">
                                            Nguyễn Thanh Hoàng {index}
                                        </td>
                                        <td className="px-6 py-4">
                                            31/10/2023
                                        </td>
                                        <td className="px-6 py-4">
                                            Xe nổ lốp
                                        </td>
                                    </tr>            
                                )}                                          
                            </tbody>
                        </table>
                    </div>                            
             </div>
             <div className={`${showAssign ? "fixed":"hidden"}  h-[80%] w-[90%] bg-slate-200 top-36 left-[50%] translate-x-[-50%] rounded-md shadow-2xl grid grid-cols-2 grid-flow-col`} >
                <div className=" bg-white m-3 mr-1 rounded-xl">
                    <h1 className="text-center text-2xl font-bold mt-5"> Thông tin xe sửa</h1>
                    <div className="mx-5 text-20 mt-5">
                        <span className="border-b-2 inline-block w-full border-b-blue-200"> Tên khách hàng: <span className="font-bold">Nguyễn Thanh Hoàng</span><br/></span>
                        <span className="border-b-2 inline-block w-full border-b-blue-200"> Tên xe: <span className="font-bold">Lamborghini Aventador</span><br/></span>
                        <span className="border-b-2 inline-block w-full border-b-blue-200"> Biển số: <span className="font-bold">15A-46065</span><br/></span>
                        <span className="border-b-2 inline-block w-full border-b-blue-200"> Ngày tiếp nhận: <span className="font-bold">31/10/2023</span> <br/></span>
                        <span className="border-b-2 inline-block w-full border-b-blue-200"> Tổng tiền: <span className="font-bold">{formatCurrency(1500000)}</span> <br/></span>
                    </div>
                    <div className="grid grid-rows-2 h-[55%]"> 
                        <div>
                            <h2 className="text-center text-lg"> Dịch vụ sử dụng</h2>
                            <div className="overflow-y-auto max-h-[100px]">
                                <table className=" w-[90%] text-sm text-left text-gray-500 mx-auto ">
                                    <thead className="text-xs text-gray-700 uppercase bg-slate-200">
                                        <tr >
                                            <th scope="col" className="px-6 py-3 rounded-l-lg">
                                                        Mã dịch vụ
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                        Tên
                                            </th>
                                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                                        Giá
                                            </th>
                                        </tr>
                                    </thead>
                                        <tbody >
                                            {[1].map((index) =>
                                                <tr key={index} className="bg-slate-100">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white rounded-l-lg">
                                                        DV01
                                                    </th>
                                                    <td className="px-6 py-4">
                                                            Thay bánh xe sau
                                                    </td>
                                                    <td className="px-6 py-4 rounded-r-lg">
                                                            {formatCurrency(500000)}
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-center text-lg"> Linh kiện sử dụng</h2>
                            <div className="overflow-y-auto max-h-[145px]">
                                <table className="w-[90%] mx-auto text-sm text-left text-gray-500 ">
                                    <thead className="text-xs text-gray-700 uppercase bg-slate-200">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 rounded-l-lg">
                                                Mã linh kiện
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Tên
                                            </th>
                                            <th scope="col" className="px-6 py-3 ">
                                                Giá
                                            </th>                                    
                                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                                Số lượng
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="max-h-[30px]">
                                        {[1].map((index) =>
                                            <tr key={index} className="bg-slate-100">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white rounded-l-lg">
                                                    LK01
                                                </th>
                                                <td className="px-6 py-4">
                                                    Bánh xe
                                                </td>
                                                <td className="px-6 py-4">
                                                    {formatCurrency(500000)}
                                                </td>
                                                <td className="px-6 py-4 rounded-r-lg">
                                                    <input className="bg-slate-100 w-9 focus:outline-none" type="number" defaultValue={2} min={1}/>
                                                </td>                                        
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white m-3 ml-1 rounded-xl grid grid-rows-7">
                    <div className="row-span-3">
                        <div>
                            <h2 className="text-center text-lg mt-5 font-bold"> Nhân viên có thể tiếp nhận sửa</h2>
                            <div className="overflow-y-auto max-h-[160px] mt-5">
                                <table className=" w-[90%] text-sm text-left text-gray-500 mx-auto ">
                                    <thead className="text-xs text-gray-700 uppercase bg-slate-200">
                                        <tr >
                                            <th scope="col" className="px-6 py-3 rounded-l-lg">
                                                        Mã nhân viên
                                            </th>
                                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                                        Tên nhân viên
                                            </th>
                                        </tr>
                                    </thead>
                                        <tbody >
                                            {[1,2,3].map((index) =>
                                                <tr key={index} 
                                                    className={`${selectedTechnicalStaff===index ? "bg-slate-500 text-white" : "bg-slate-100"} cursor-pointer`}
                                                    onClick={()=>setSelectedTechnicalStaff(index)}
                                                >
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white rounded-l-lg">
                                                        NV0{index}
                                                    </th>
                                                    <td className="px-6 py-4 rounded-r-lg">
                                                        Nguyễn Thanh Hoàng {index}
                                                    </td>
                                                 
                                                </tr>
                                            )}
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-3">
                    <div>
                            <h2 className="text-center text-lg mt-5 font-bold"> Slot còn trống</h2>
                            <div className="overflow-y-auto max-h-[160px] mt-5">
                                <table className=" w-[90%] text-sm text-left text-gray-500 mx-auto ">
                                    <thead className="text-xs text-gray-700 uppercase bg-slate-200">
                                        <tr >
                                            <th scope="col" className="px-6 py-3 rounded-l-lg">
                                                        Mã Slot
                                            </th>
                                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                                        Slot 
                                            </th>
                                        </tr>
                                    </thead>
                                        <tbody >
                                            {[1,2,3,4,5,6,7,8,9].map((index) =>
                                                <tr key={index} 
                                                    className={`${selectedSlot===index ? "bg-slate-500 text-white" : "bg-slate-100"} cursor-pointer`}
                                                    onClick={()=>setSelectedSlot(index)}
                                                >
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white rounded-l-lg">
                                                        SL0{index}
                                                    </th>
                                                    <td className="px-6 py-4 rounded-r-lg">
                                                        Số {index}
                                                    </td>                                                   
                                                </tr>                                             
                                            )}
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-1">                     
                        <button className="float-right mr-14 h-[70%] p-3 rounded-xl text-white bg-blue-600 hover:bg-blue-800 active:bg-blue-900">PHÂN CÔNG</button>
                        <button className="float-right p-3 h-[70%] mr-5 rounded-lg border text-blue-600 border-blue-600"
                                onClick={handleCloseAssign}
                        > 
                            Hủy bỏ
                        </button>                  
                                            
                    </div>    
                </div>
            </div>    
        </div>
    )
}
export default AssignTechnicalStaff;