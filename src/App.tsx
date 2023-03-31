import {DatePicker} from 'antd';
// import 'antd/dist/antd.css';
import {useState} from 'react';
// import moment from 'moment';


function App() {

    const [dates, setDates] = useState<any>()


    return (
        <>

            <div style={{margin:'20px 0 20px 5px'}}>


                < DatePicker
                    onChange={(values: any) => {
                        setDates(values?.toLocaleString())
                    }}
                />
            </div>
            <div>    {dates && <><b>RETURN</b> = {dates}</>}</div>
        </>
    );
}

export default App;