import React, {useState,useEffect} from 'react';
import './Table.css';
import { tableData,tableHeader  } from "../../data/table";

export const Table = () => {

    const [hideHeaders, sethideHeaders] = useState([]);

    useEffect(() => {
        
        // console.log(hideHeaders);

    }, [hideHeaders])



    const toggleProperty = (property)=> {

        if(hideHeaders.includes(property)) {
            // If it includes inside hideheader{state} then remove it
            sethideHeaders(prevState => prevState.filter(x => x !== property))
        }

        // If it doesn't include, put it inside the hideHeader -> State
        if(!hideHeaders.includes(property)) {

            sethideHeaders(prevState => {
                return [
                    ...prevState,
                    property
                ]
            })
        }

        return;
    }

    const addProperty = () => {

    }

    
    
    let headerProperties = Object.entries(tableHeader).map( (headerData, index) => {

    // Providing all the properties toggle button at this function.

        return (
            <div className="table-toggle-button-properties" key={index}>

            <div>
                {headerData[1]}
            </div>

            <div>
                <label className="switch">
                <input onClick={() => toggleProperty(headerData[0])} type="checkbox" defaultChecked/>
                <span className="slider round"></span>
                </label>
            </div>

          </div>
        )
    });
    
    let header = Object.entries(tableHeader).map( (headerData, index) => {

    // Checking if hidingHeader state includes the iterating header. If it exists then skip the if block [0] means key [1] means value

    if( !hideHeaders.includes(headerData[0]))
        return <div key={index}> {headerData[1]}</div>

      return null;
    });

    // Looping through table data

    let data = tableData.map((item,index) => {

        // Looping inside of data to get header data. For e.g name -> Name , 2nd iteration status -> Status etc.

        let row = Object.keys(item).map((keyName, i) => {

            if(!hideHeaders.includes(keyName)) {
            
            return (
                <div key={i}>
                    {item[keyName]}
                </div>     
            ) }

            return null;
        })
        return (
            <div key={index} className="table-row">
                {row}
            </div>
        );

    });


  return (
<>
    {/* Overall Container of the table */}
    <div className="table">
        <div className="table-nav">
            <div>
               + Add a view
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
                <div>
                    Properties
                </div>
                <div style={{color: "#2EAADC"}}>
                    Filter
                </div>
                <div>
                    Sort
                </div>

            </div>
        </div>

        {/*Table headers*/}
        <div className="table-header">
            {header}
        </div>


        <div className="table-data">

            {/* Table ROWS */}
            {data}
            {/* Table rows Ending */}

        </div>

    </div>


    <div className="table-toggle-button">

        <div>
            {headerProperties}
        </div>

    </div>

</>
  );
};
