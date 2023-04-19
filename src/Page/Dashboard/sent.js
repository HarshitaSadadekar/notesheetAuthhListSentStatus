import React from 'react'
import './table.css'

import {l}  from '../../pages/Loginn';


class Sent extends React.Component{

    constructor(){
        super();
        this.state={
            data:[], data2:[]
        };
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/notesheet/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
            console.log(data)
        });
        fetch('http://127.0.0.1:8000/faculty/')
        .then(response=>response.json())
        .then((data2)=>{
            this.setState({
                data2:data2
            });
            console.log(data2)
        });
    }

 

    componentDidMount(){
        this.fetchData();
    }

 



   
    render(){
      

        const noteSheet=this.state.data;
        const noteSheet2=this.state.data2;
        const rows2=noteSheet2.map((note)=>
            <td>{note.Name}</td>
          
        );

        const rows=noteSheet.filter((note)=>note.proposal_submitted_by_1===l).map((note,i)=>
        <tr key={note.ppk}>
        <td>{note.id}</td>
        <td>{note.subject}</td>  
        {/* <td>{rows2[i]}</td>    */}
        <td>  {note.department}</td>
      <td>  {note.date_of_creation}</td>




        <td className='text-right'>
            <button className='button muted-button'>Approve</button>
        </td>
        <td className='text-center'>
            <button className='button muted-button'>Reject</button>
        </td>
        <td className='text-center'>
            <button className='button muted-button'>Review</button>
        </td>
        <td className='text-left'>
            <button className='button muted-button'>Forward</button>
        </td>
    </tr>
           
        );
        
        return (
            <div className='contain-table'>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>No.</th>
                        <th>Notesheet</th>
                        <th>Notesheet Sent to Which Email</th>
                        <th>Date</th>
                        <th colSpan={2} className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                      {rows}
                      
                    </tbody>
                </table>
            </div>
        );
    }
  
    
}


export default Sent