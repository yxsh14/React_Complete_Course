import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'




function App() {
  
  const [Amount, setAmount] = useState(0) 
  const [From, setFrom] = useState("usd")
  const [To, setTo] = useState("inr")
  const [convertedAmount, setconvertedAmount] = useState(0);
  const currencyInfo=useCurrencyInfo(From)
  const options=Object.keys(currencyInfo)
  console.log(options);
  const swap=()=>{
    setFrom(To);
    setTo(From);
    setconvertedAmount(Amount);
    setAmount(convertedAmount);
  }
  const convert=()=>{
    setconvertedAmount(Amount*currencyInfo[To])
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/closeup-hands-holding-cash_53876-144221.jpg?w=996&t=st=1707583617~exp=1707584217~hmac=e84717922172f57a4efa179b06962c2d447f820c138a09429bcbbb097f414363')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()

                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={Amount}
                            currencyOption={options}
                            onCurrencyChange={(currency)=>setAmount(Amount)}
                            selectCurrency={From}
                            onAmountChange={(amount)=>setAmount(amount)}

                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            amountDisable
                            onCurrencyChange={(currency)=>setTo(currency)}
                            currencyOption={options}
                            
                            

                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {From.toUpperCase()} to {To.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
)
}

export default App
