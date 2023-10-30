import { useState } from "react";
import NavBar from "../NavBar";
import { AiOutlineClose } from "react-icons/ai"
import { GoSearch } from "react-icons/go"
import { RiDeleteBin6Line } from "react-icons/ri"
import {AiFillCloseSquare} from "react-icons/ai"
const RecaiveCar = () => {
    const location = "/manager/receive_car"
    const [chosenClient, setChosenClient] = useState({})
    const [showFindClient, setShowFindClient] = useState(false)
    const [showFindService, setShowFindService] = useState(false)
    const [showFindComponent, setShowFindComponent] = useState(false)
    const [listClient, setListClient] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, , 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
    const [textSearchClient, setTextSearchClient] = useState("");
    const [textSearchService, setTextSearchService] = useState("");
    const [textSearchComponent, setTextSearchComponent] = useState("");
    const handleChoseClient = () => {
        setTextSearchClient("")
        setShowFindClient(false)
    }
    const handleChoseService = () => {
        setTextSearchService("")
        setShowFindService(false)
    }
    const handleChoseComponent = () => {
        setTextSearchComponent("")
        setShowFindComponent(false)
    }
    ////////////////////////////////////////////
    const handleFindClient = (value) => {
        if (value.length !== 0) {
            if (textSearchClient.length < value.length) {
                setTextSearchClient(value)
                setShowFindClient(true)
                console.log(value)
            } else {
                setTextSearchClient(value)
            }
        } else {
            setTextSearchClient("")
            setShowFindClient(false)
        }
    }
    /////////////////////////////////////
    const handleFindComponent = (value) => {
        if (value.length !== 0) {
            if (textSearchComponent.length < value.length) {
                setTextSearchComponent(value)
                setShowFindComponent(true)
                console.log(value)
            } else {
                setTextSearchComponent(value)
            }
        } else {
            setTextSearchComponent("")
            setShowFindComponent(false)
        }
    }
    /////////////////////////////////////
    const handleFindService = (value) => {
        if (value.length !== 0) {
            if (textSearchService.length < value.length) {
                setTextSearchService(value)
                setShowFindService(true)
                console.log(value)
            } else {
                setTextSearchService(value)
            }
        } else {
            setTextSearchService("")
            setShowFindService(false)
        }
    }
    /////////////////////////////////////
    const formatCurrency = (amount) => {
        return amount.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
    }
    /////////////////////////////////////////////////////////
    const handleClose = (value) => {
            if(value==="client"){
                setShowFindClient(false)
            }
            if(value==="component"){
                setShowFindComponent(false)
            }
            if(value==="service"){
                setShowFindService(false)
            }    
    }
    return (
        <div className="relative w-full h-[739px]">
            <NavBar location={location} />
            <div className=" relative top-[110px] w-full h-[629px] grid grid-cols-3 gap-2 p-4 bg-gray-200  font-arial brightness-[0.6]">
                <div className="relative bg-white rounded-md">
                    <h1 className="m-3 font-bold"> Nhân viên tiếp nhận: <span className="absolute right-3">Thanh Hoàng</span> </h1>
                    <h2 className="m-3 font-bold"> Ngày: 23/10/2023</h2>
                    <br />
                    <h1 className="m-3 text-center text-3xl font-bold "> Thông tin khách hàng</h1>
                    <div className="relative">
                        <input className="ml-5 w-9/12 focus:outline-none focus:border-blue-700 focus:border-b-2 border-b border-gray-400" type="text" placeholder="Tìm khách hàng" value={textSearchClient} onChange={(e) => handleFindClient(e.target.value)} />
                        <button className="mx-1 h-10 w-[90px] rounded-md text-white bg-blue-600 hover:bg-blue-800 active:bg-blue-900">Thêm mới</button>
                        <div className={`absolute left-6 h-auto w-11/12 p-2 bg-white drop-shadow-2xl rounded-xl z-10 ${showFindClient || 'hidden'}`}>
                            <ul className="max-h-[350px] overflow-y-auto">
                                <AiOutlineClose className="ml-auto text-red-500 cursor-pointer" onClick={()=>handleClose("client")} />
                                {listClient.map((client,index) =>
                                    <li key={index} className="p-1 cursor-pointer hover:bg-blue-200 rounded-md" onClick={handleChoseClient}>Nguyễn Thanh Hoàng  <span className="float-right mr-3">0963847915 </span> </li>
                                )}
                            </ul>
                        </div>
                        <div className="relative top-8">
                            <div>
                                <div className="border-b-2 border-blue-200 mx-5">
                                    <label className="relative text-20"> Mã khách hàng: <label className=" float-right mr-2">KH01</label> </label>
                                </div>
                                <br />
                                <div className="border-b-2 border-blue-200 mx-5">
                                    <label className="relative text-20"> Tên khách hàng: <label className=" float-right mr-2">Nguyễn Thanh Hoàng</label> </label>
                                </div>
                                <br />
                                <div className="border-b-2 border-blue-200 mx-5">
                                    <label className="relative text-20"> Số điện thoại: <label className=" float-right mr-2">0963847915</label> </label>
                                </div>
                                <br />
                                <div className="border-b-2 border-blue-200 mx-5">
                                    <label className="block relative text-20"> Địa chỉ: <label className="block  float-right mr-2 max-w-[370px] max-h-[30px] overflow-x-auto">Nhà số 28 Tân Vũ, Tràng Cát, Hải An, Hải Phòng</label> </label>
                                </div>
                                <br />
                                <label className="relative left-5 text-20" >Ghi chú:</label>
                                <br />
                                <textarea className="relative left-5 w-11/12 min-h-[100px] max-h-[100px] overflow-y-auto p-2 pl-4 border-2 rounded-md text-20 underline" readOnly value={"Khách dễ tính"}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-white rounded-md">
                    <h1 className="text-center mt-2 font-bold text-24">Xe khách từng sửa</h1>
                    <button className="relative m-2 px-1 left-[380px] h-[36px] rounded-md text-white bg-blue-600 hover:bg-blue-800 active:bg-blue-900">Thêm mới xe</button>
                    <div className="relative min-h-[163px] max-h-[163px] overflow-y-auto">
                        <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                                        Tên xe
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Hãng xe
                                    </th>
                                    <th scope="col" className="px-6 py-3 rounded-r-lg">
                                        Biển số
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="max-h-[30px]">
                                {[1].map((index) =>
                                    <tr key={index} className="bg-white dark:bg-gray-800 cursor-pointer hover:bg-slate-100 active:bg-slate-200">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white rounded-l-xl">
                                            Lamborghini Aventador
                                        </th>
                                        <td className="px-6 py-4">
                                            Lamborghini
                                        </td>
                                        <td className="px-6 py-4 rounded-r-xl">
                                            15A-46065
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                    <div className=" relative h-[199px] max-h-[199px]">
                        <h1 className="text-center mt-2 font-bold text-24">Thông tin xe sửa</h1>
                        <div className=" ">
                            <div className="border-b-2 border-blue-200 mx-5 mt-2">
                                <label className="relative text-20"> Tên xe: <label className=" float-right mr-2">Lamborghini Aventador</label> </label>
                            </div>
                            <br />
                            <div className="border-b-2 border-blue-200 mx-5">
                                <label className="relative text-20"> Hãng xe: <label className=" float-right mr-2">Lamborghini</label> </label>
                            </div>
                            <br />
                            <div className="border-b-2 border-blue-200 mx-5">
                                <label className="relative text-20"> Biển số: <label className=" float-right mr-2">15A-46065</label> </label>
                            </div>
                        </div>
                    </div>
                    <div className="relative bottom-1 h-[17%]">
                        <label className="relative left-5 text-20" >Tình trạng xe:</label>
                        <br />
                        <textarea className="relative left-5 w-11/12 min-h-[100px] max-h-[100px] overflow-y-auto p-1 border-2 rounded-md" ></textarea>

                    </div>
                </div>
                <div className="relative bg-white rounded-md">
                    <div className="relative m-1 h-[30%] w-[98%] bg-slate-100 rounded-md border border-gray-400">
                        <GoSearch className="absolute top-6 left-10" />
                        <input className="ml-16 mt-5 w-9/12 pl-2 focus:outline-none border-2 rounded-lg border-blue-500" type="text" placeholder="Thêm dịch vụ" value={textSearchService} onChange={(e) => handleFindService(e.target.value)} />
                        <div className={`absolute left-6 h-auto w-11/12 p-2 bg-white drop-shadow-2xl rounded-xl z-10 ${showFindService || 'hidden'}`}>
                            <div className="max-h-[350px] overflow-y-auto">
                                <AiOutlineClose className="ml-auto text-red-500 cursor-pointer" onClick={()=>handleClose("service")} />
                                <table className="w-fullfont-arial text-5">
                                    <tbody>
                                        {listClient.map((client,index) =>
                                            <tr key={index}  className="p-1 cursor-pointer hover:bg-blue-200 rounded-md w-full font-normal" onClick={handleChoseService}>
                                                <th scope="col" className="px-6 py-3 rounded-l-lg font-light ">DV01 </th>
                                                <th scope="col" className="px-6 py-3 font-light">Thay bánh xe sau </th>
                                                <th scope="col" className="px-6 py-3 font-light rounded-r-lg text-blue-700"> {formatCurrency(500000)}</th>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="relative min-h-[130px] max-h-[130px] overflow-y-auto">
                            <br />
                            <table className="w-full  text-sm text-left text-gray-500 ">
                                <thead className="text-xs text-gray-700 uppercase bg-white">
                                    <tr >
                                        <th scope="col" className="px-6 py-3 rounded-l-lg">
                                            Mã dịch vụ
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Tên
                                        </th>
                                        <th scope="col" className="px-6 py-3 ">
                                            Giá
                                        </th>
                                        <th scope="col" className="px-6 py-3 rounded-r-lg">
                                            Xóa
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="max-h-[30px]">
                                    {[1].map((index) =>
                                        <tr key={index} className="bg-slate-100">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white rounded-l-lg">
                                                DV01
                                            </th>
                                            <td className="px-6 py-4">
                                                Thay bánh xe sau
                                            </td>
                                            <td className="px-6 py-4">
                                                {formatCurrency(500000)}
                                            </td>
                                            <td className="px-6 py-4 rounded-r-lg ">
                                                <div className="flex justify-center items-center">
                                                    <RiDeleteBin6Line className="text-red-500 cursor-pointer h-5 w-auto hover:text-red-600 active:text-red-700" />
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="relative m-1 h-[50%] w-[98%] bg-slate-100 rounded-md border border-gray-400">
                        <GoSearch className="absolute top-6 left-10" />
                        <input className="ml-16 mt-5 w-9/12 pl-2 focus:outline-none border-2 rounded-lg border-blue-500" type="text" placeholder="Thêm linh kiện" value={textSearchComponent} onChange={(e) => handleFindComponent(e.target.value)} />
                        <div className={`absolute left-6 h-auto w-11/12 p-2 bg-white drop-shadow-2xl rounded-xl z-10 ${showFindComponent || 'hidden'}`}>
                            <div className="max-h-[350px] overflow-y-auto">
                                <AiOutlineClose className="ml-auto text-red-500 cursor-pointer" onClick={()=>handleClose("component")} />
                                <table className="w-fullfont-arial text-5">
                                    <tbody>
                                        {listClient.map((client,index) =>
                                            <tr key={index} className="p-1 cursor-pointer hover:bg-blue-200 rounded-md w-full font-normal" onClick={handleChoseComponent}>
                                                <th scope="col" className="px-6 py-3 rounded-l-lg font-light ">LK01 </th>
                                                <th scope="col" className="px-6 py-3 font-light">Bánh xe </th>
                                                <th scope="col" className="px-6 py-3 font-light text-blue-700"> {formatCurrency(500000)}</th>
                                                <th scope="col" className="px-6 py-3 font-light rounded-r-lg">Tồn: 20 </th>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="relative min-h-[250px] max-h-[250px] overflow-y-auto">
                            <br />
                            <table className="w-full  text-sm text-left text-gray-500 ">
                                <thead className="text-xs text-gray-700 uppercase bg-white">
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
                                        <th scope="col" className="px-6 py-3 ">
                                            Số lượng
                                        </th>
                                        <th scope="col" className="px-6 py-3 rounded-r-lg">
                                            Xóa
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
                                            <td className="px-6 py-4">
                                                <input className="bg-slate-100 w-9 focus:outline-none" type="number" defaultValue={2} min={1}/>
                                            </td>
                                            <td className="px-6 py-4 rounded-r-lg ">
                                                <div className="flex justify-center items-center">
                                                    <RiDeleteBin6Line className="text-red-500 cursor-pointer h-5 w-auto hover:text-red-600 active:text-red-700" />
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="relative m-1 h-[17%] w-[98%] bg-slate-100 rounded-md ">
                        <h1 className="p-2 font-bold text-xl"> Tổng tiền: <span className="absolute right-3"> {formatCurrency(1500000)}</span> </h1>
                        <button className="absolute inset-x-3 h-14 rounded-xl text-white bg-blue-600 hover:bg-blue-800 active:bg-blue-900">THANH TOÁN</button>
                    </div>
                </div>
            </div>
            <div className={`absolute h-[75%] w-[65%] grid-rows-6 grid-flow-col 
            bg-white rounded-xl translate-x-[25%] translate-y-[-90%] shadow-2xl z-10 none ${0===1 ? 'hidden':'grid' }`}>
                <div className="w-full row-span-1 ">
                    <AiFillCloseSquare className="inline-block h-10 w-auto float-right pt-1 pr-1 text-red-500 cursor-pointer hover:text-red-600 active:text-red-800"/>
                    <br/>
                    <h1 className="block text-2xl font-bold text-center m-1"> Thêm mới khách hàng</h1>
                </div>
                <div className=" row-span-4 pl-40 text-16 font-semibold font-arial">
                    <div className="m-5 p-5">
                    <label> Tên khách hàng: </label>
                    <input className="border-b border-slate-600 focus:outline-none focus:border-blue-700 w-[60%] ml-6"/>
                    </div>
                    <div className="m-5 p-5">
                    <label> Địa chỉ: </label>
                    <input className="border-b  border-slate-600 focus:outline-none focus:border-blue-700 w-[60%] ml-24"/>                   
                    </div>
                    <div className="m-5 p-5">
                    <label> Số điện thoại: </label>
                    <input className="border-b  border-slate-600 focus:outline-none focus:border-blue-700 w-[60%] ml-12"/>
                    </div>
                    <div className="m-5 p-5">
                    <label>Mô tả:</label>
                    <input className="border-b  border-slate-600 focus:outline-none focus:border-blue-700 w-[60%] ml-28"/>
                    </div>
                </div>
                <div className="row-span-1 ml-auto pr-12">
                    <button className="m-5 mr-2 p-2 w-[100px] rounded-lg border text-blue-600 border-blue-600"> Bỏ qua</button>
                    <button className="m-5 w-[100px] p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"> Lưu</button>
                </div>
            </div>
            <div className={`absolute h-[75%] w-[65%] grid-rows-6 grid-flow-col 
            bg-white rounded-xl translate-x-[25%] translate-y-[-90%] shadow-2xl z-10 none ${1===1 ? 'hidden':'grid' }`}>
                <div className="w-full row-span-1 ">
                    <AiFillCloseSquare className="inline-block h-10 w-auto float-right pt-1 pr-1 text-red-500 cursor-pointer hover:text-red-600 active:text-red-800"/>
                    <br/>
                    <h1 className="block text-2xl font-bold text-center m-1"> Thêm mới xe của khách hàng</h1>
                </div>
                <div className=" row-span-4 pl-40 text-16 font-semibold font-arial">
                    <div className="m-5 p-5">
                    <label> Tên xe: </label>
                    <input className="border-b border-slate-600 focus:outline-none focus:border-blue-700 w-[60%] ml-[64px]"/>
                    </div>
                    <div className="m-5 p-5">
                    <label> Hãng xe: </label>
                    <input className="border-b  border-slate-600 focus:outline-none focus:border-blue-700 w-[60%] ml-[56px]"/>                   
                    </div>
                    <div className="m-5 p-5">
                    <label> Biển số xe: </label>
                    <input className="border-b  border-slate-600 focus:outline-none focus:border-blue-700 w-[60%] ml-10"/>
                    </div>
                    <div className="m-5 p-5">
                    <label>Mô tả:</label>
                    <input className="border-b  border-slate-600 focus:outline-none focus:border-blue-700 w-[60%] ml-20"/>
                    </div>
                </div>
                <div className="row-span-1 ml-auto pr-12">
                    <button className="m-5 mr-2 p-2 w-[100px] rounded-lg border text-blue-600 border-blue-600"> Bỏ qua</button>
                    <button className="m-5 w-[100px] p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"> Lưu</button>
                </div>
            </div>
        </div>
    )
}
export default RecaiveCar;