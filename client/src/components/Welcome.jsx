import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder,name,type,value,handlChange }) => (
    <input 
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handlChange(e, name)}
        className="m-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
)

const Welcome = () =>{
    const connectWallet = () => {


    }

    const handleSubmit = () =>{

    }

    return(
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:5x1 text-white text-gradient py-1">
                         Dive <br /> into the World of Books 
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Explore the First Decentralized Book store.<br /> Buy and sell Books Peer-to-Peer
                    </p>
                    <button
                    type='button'
                    onClick={connectWallet}
                    className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                    >
                        <p className="text-white text-base font-semibold">Connect Wallet</p>
                    </button>

                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            P2P
                        </div>
                        <div className={commonStyles}>Savings</div>
                        <div className={`rounded-tr-2xl ${commonStyles}`}>
                            Trust
                        </div>
                        <div className={`rounded-bl-2xl ${commonStyles}`}>
                            eBook
                        </div>
                        <div className={commonStyles}>Web 3.0</div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            Audiobook  
                        </div>
                    </div>

                </div>

                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
                    <div className="flex justify-between flex-col w-full h-full">
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                <SiEthereum fontSize={21} color="#fff"/>

                            </div>
                            <BsInfoCircle fontSize={17} color="#fff" />
                        </div>
                        <div>
                            <p className="text-white font-light text-sm">
                                0xb4874b48....Wallet Address
                            </p>
                            <p className="text-white font-semibold text-lg mt-1">
                                Ethereum
                            </p>
                        </div>
                    </div>
                        
                    </div>
                    
                    <div className="p-5 sm:w-96 w-full flex flex-col jusify-start items-center blue-glassmorphism">
                        <Input placeholder='Address To' name='addressTo' type='text' handlChange={()=>{}}/>
                        <Input placeholder='Amount (ETH)' name='Amount' type='number' handlChange={()=>{}}/>
                        <Input placeholder='Keyword(Gif)' name='keyword' type='text' handlChange={()=>{}}/>
                        <Input placeholder='Enter a Message' name='message' type='text' handlChange={()=>{}}/>

                        <div className="h-[1px] w-full bg-gray-400 my-2" />
                        {false ?(
                            <Loader />
                        ) : (
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                            >
                                Send Now
                            </button>
                        )}

                    </div>
                    
                </div>

            </div>
        </div>
    );
}

export default Welcome;