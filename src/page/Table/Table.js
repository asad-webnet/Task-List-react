import React, {useState,useEffect} from 'react';
import './Table.css';

    var tableData = [
        {
            "name" : "Learning Node",
            "status" : "half",
            "progress" : "66",
            "haha" : "asad",
        },
        {
            "name" : "Learning React",
            "status" : "doing",
            "progress" : "55",
            "haha" : "",
        },
        {
            "name" : "Learning Js",
            "status" : "left",
            "progress" : "44",
            "haha" : "",
        },
      ]
      
      var tableHeader = {
        "name" : "Name",
        "status" : "Status",
        "progress" : "Progress",
        "Report" : "No",
      };

export const Table = () => {

    const [hideHeaders, sethideHeaders] = useState([]);

    useEffect(() => {
        
        // console.log(hideHeaders);

    }, [hideHeaders])


    {/*Table headers*/}

    const toggleProperty = (property)=> {

        if(hideHeaders.includes(property)) {
            // If it includes inside hideheader then remove it
            sethideHeaders(prevState => prevState.filter(x => x != property))
        }

        // If it doesn't include, put it inside the hideProperty State
        if(!hideHeaders.includes(property)) {
            // let newState = tempState.filter(property => )
            sethideHeaders(prevState => {
                return [
                    ...prevState,
                    property
                ]
            })
        }
    }

    
    
    let header = Object.entries(tableHeader).map( (headerData, index) => {

    // Checking if hidingHeader state includes the iterating header. If it exists then skip the if block [0] means key [1] means value

    if( !hideHeaders.includes(headerData[0]))
        return <div key={index}> {headerData[1]}</div>
    });

    // Looping through table data

    let data = tableData.map((item,index) => {

        // Looping inside of data to get header data. For e.g name -> Name , 2nd iteration status -> Status etc.

        let row = Object.keys(item).map((keyName, i) => {

            // console.log(keyName);

            if(!hideHeaders.includes(keyName)) {
            
            return (
                <div key={i}>
                    {item[keyName]}
                </div>     
            ) }
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
                Add a view
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
            <div className="table-toggle-button-properties">

                <div>
                    Name
                </div>

                <div>
                    <label className="switch">
                    <input onClick={() => toggleProperty("name")} type="checkbox"/>
                    <span className="slider round"></span>
                    </label>
                </div>

            </div>

            <div className="table-toggle-button-properties">

                <div>
                    Status
                </div>

                <div>
                    <label className="switch">
                    <input onClick={() => toggleProperty("status")} type="checkbox"/>
                    <span className="slider round"></span>
                    </label>
                </div>

            </div>


        </div>

    </div>

</>
  );
};
