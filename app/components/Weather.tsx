import WeatherData from "../types"


const Weather = ({main,name,weather,wind}:WeatherData) => {

  
    const fahrenheitToCelsius = (f:number)=>{
        return ((f-32)/1.8).toFixed(0)
    }

  return (
    <div>

    <div className="flex justify-between p-5 mb-[60px]">
        <div className="flex items-center justify-between w-[700px] m-auto p-5">
            <div>
                {
                    weather?.map((w)=>(

                        <>
                        <img src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`} />
                        <p className=" font-semibold text-xl text-center">{w.main}</p>
                        </>
                    ))
                }
            </div>
            <div className="text-[5rem] font-medium">
                {fahrenheitToCelsius(main.temp)}&#176;
            </div>
        </div>

    </div>
        <div className="border shadow-xl max-sm:w-[80%] md:w-[600px] m-auto  rounded-lg flex flex-col  p-2">
            <p className="text-center text-[1.5rem] pb-7 mt-6 font-medium">Weather in {name}</p>
            <div className="flex max-sm:flex-col max-sm:gap-5 p-5 text-center justify-between">
                <div>
                    <p className="text-[2rem] font-bold">{fahrenheitToCelsius(main.feels_like)}&#176;</p>
                    <p className="text-[1rem]">Feels Like</p>
                </div>
                <div>
                    <p className="text-[2rem] font-bold">{main.humidity} %</p>
                    <p className="text-[1rem]">Humidity</p>
                </div>
                <div>
                    <p className="text-[2rem] font-bold">{wind?.speed.toFixed(0)} MPH</p>
                    <p className="text-[1rem]">Winds</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather
