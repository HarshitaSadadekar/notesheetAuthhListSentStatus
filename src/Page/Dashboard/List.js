import React, { useState } from 'react'
import './table.css'

import {l}  from '../../pages/Loginn';

class List extends React.Component{

    constructor(){
        super();
        this.state={
            data:[], data2:[],
           
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

    // constructor(){
    //     super();
    //     this.state={
    //         data2:[]
    //     };
    // }

   
    handleApprove(notesheetId) {
        console.log(notesheetId)
        fetch(`http://127.0.0.1:8000/notesheet/${notesheetId}/status/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: 1 
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
        })
        .catch(error => {
            console.error(error);
        });
    }


    handleRej(notesheetId) {
        console.log(notesheetId)
        fetch(`http://127.0.0.1:8000/notesheet/${notesheetId}/status/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: -1 
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
          
        })
        .catch(error => {
            console.error(error);
        });
    }

    handleRew(notesheetId) {
        console.log(notesheetId)
        fetch(`http://127.0.0.1:8000/notesheet/${notesheetId}/status/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: 2 
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
          
        })
        .catch(error => {
            console.error(error);
        });
    }

    handleFow(notesheetId) {
        console.log(notesheetId)
        fetch(`http://127.0.0.1:8000/notesheet/${notesheetId}/status/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: 3 
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
          
        })
        .catch(error => {
            console.error(error);
        });
    }
   
    render(){
     
      
        console.log(l)


        const noteSheet=this.state.data;
        const noteSheet2=this.state.data2;
        const rows2=noteSheet2.map((note)=>
            <td>{note.Name}</td>
          
        );

        const rows=noteSheet.filter((note)=>note.department===l && !note.status==1).map((note,i)=>
        
        <tr key={note.f_id}>
        <td>{note.f_id}</td>
        <td>{note.subject}</td>  
        {/* <td>{rows2[i]}</td>    */}
        <td>  {note.proposal_submitted_by_1}</td>
      <td>  {note.date_of_creation}</td>


        {/* console.log(note.id) */}

        <td className='text-right'>
            
            <button onClick={() => this.handleApprove(note.url.slice(32,34).replace('/','').trim())} className='button muted-button'>Approve</button>
        </td>
        <td className='text-center'>
            <button  onClick={() => this.handleRej(note.url.slice(32,34).replace('/','').trim())}  className='button muted-button'>Reject</button>
        </td>
        <td className='text-center'>
            <button onClick={() => this.handleRew(note.url.slice(32,34).replace('/','').trim())} className='button muted-button'>Review</button>
        </td>
        <td className='text-left'>
            <button onClick={() => this.handleFow(note.url.slice(32,34).replace('/','').trim())} className='button muted-button'>Forward</button>
        </td>
    </tr>
            // <tr key={emp.id}>
            //     <td>{emp.full_name}</td>
            //     <td>{emp.email}</td>
            //     <td>{emp.contact}</td>
            //     <td>{emp.address}</td>
            //     <td>
            //         <Link to={'update/'+emp.id} className="btn btn-info mr-2">Update</Link>
            //         <button onClick={()=>this.deleteData(emp.id)} className="btn btn-danger">Delete</button>
            //     </td>
            // </tr>
        );
        
        return (
            <div className='contain-table'>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>No.</th>
                        <th>Notesheet</th>
                        <th>Sender</th>
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


export default List