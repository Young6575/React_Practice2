import React, { useEffect } from 'react'
import TailSelect from './TailSelect'
import { useRef,useState } from 'react'
import scode from '../db/scode.json'
import SubwayBox from './SubwayBox'

export default function Subway() {
  const selv = useRef();
  const [tdata,setTdata] = useState([]);
  const [timeData,setTimeData] = useState([]);

  const getDataFetch = async() => {

    const baseurl = "https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?"
    const key = `serviceKey=${import.meta.env.VITE_DATA_API}`
    const etc = `&pageNo=1&resultType=json&controlnumber=20250723&areaIndex=${selv.current.value}`

    const url = `${baseurl}${key}${etc}`

    
    const resp = await fetch(url);
    const data = await resp.json();
    
    setTdata(data.response.body.items.item);
  }


  const handelSel = () => {
    console.log(selv.current.value);
    getDataFetch()

  }

  useEffect(()=>{
    let tm = [];
    tm = tdata.map(item => item.controlnumber);
    tm.sort();
    console.log("시간 정렬", tm);

    let tmData = [];
    tmData = tm.map(item => tdata.filter(titem => titem.controlnumber == item)[0])

    setTimeData(tmData);
  }, [tdata]);

  return (
  <div className='w-full'>
   <div className="flex justify-between items-center w-full px-4 gap-4">
      <div className="font-bold text-3xl ml-20">측정소 선택</div>
      <TailSelect selRef={selv} handelSel={handelSel}/>
    </div>
    <div className='w-full'>
        {
            timeData.map((item, idx)=>(
                <SubwayBox key={item['controlnumber']}
                            data={item}
                            idx={idx}/>
            ))


        }
    </div>
   
  </div>  

  )
}
