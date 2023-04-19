import axios from 'axios';
import React, { useState  , useEffect} from 'react'
import { useNavigate , useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import './create.css';

function Create({ faculty, setFaculty, setIsCreating }){
    // const navigate = useNavigate();
    const { id } = useParams();
    // const [f_id, setf_id] = useState('');
    const [date, setDate] = useState('');
    const [sub, setSubject] = useState('');
    const [desc, setDescription] = useState('');
    const [obj, setObjective] = useState('');
    const [details, setDetails] = useState('');
    const [school, setSchool] = useState('');
    const [depart, setDepart] = useState('');

    // const [pro_de, setpro_de] = useState('');
    const [pro_sub, set_prosub] = useState('');
    const [pro_sub1, set_prosub1] = useState('');
    const [receiver_1, setreceiver_1] = useState('');
    const [receiver_2, setreceiver_2] = useState('');
    // const [sta, set_sta] = useState('');

    const handleCreate = f => {
        f.preventDefault();
        if(!school || !receiver_1 || !receiver_2 || !date || !sub || !desc || !obj || !details){
            return Swal.fire({
                icon:'error',
                title: 'Error!',
                text: 'All fields are required',
                showConfirmButton: true
            });
        }

        // const id = faculty.length + 1;
        // const newFaculty = {
        //     id,
        //     sub,
        //     sub, //name of the sender
        //     date
        // }
        // faculty.push(newFaculty);
        // setFaculty(faculty);
        setIsCreating(false);

        Swal.fire({
            icon: 'success',
            title: 'Created',
            text: `Notesheet has been Created`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    // useEffect(() => {
    //     loadStudents();
    // }, [])




  
  
       const notesheetupdate = async () => {
          let formField = new FormData()
  
        //   formField.append('f_id',f_id)
          formField.append('date',date)
          formField.append('school',school)
          formField.append('department',depart)
          formField.append('subject',sub)
          formField.append('description',desc)
          formField.append('objective',obj)
          formField.append('proposal_details',details)
          formField.append('proposal_submitted_by',pro_sub)
          formField.append('proposal_submitted_by_1',pro_sub1)
          formField.append('receiver_1',receiver_1)
          formField.append('receiver_2',receiver_2)
        //   formField.append('Status',sta)
  
          // if(image !== null) {
          //   formField.append('image', image)
          // }
  
          await axios({
              method: 'post',
              url: `http://127.0.0.1:8000/notesheet/`,
              data: formField
          }).then(response => {
              console.log(response.data);
            //   navigate('/home');
          })
  
      }

    return (
        <div className='container'>
            <h1 class="header1">Create Notesheet</h1>
            <form onSubmit={handleCreate}>

            
                <div className='input-box'>
                    <label htmlFor='date'>Date</label>
                    <input id='date' placeholder='Enter Date' type='date' name='date' value={date} onChange={f => setDate(f.target.value)} />
                </div>
                {/* <div className='column'>
                <div className='input-box'>
                    <label htmlFor='school'>School</label>
                    <div className='select-box'>
                        <select required>
                            <option hidden>Choose an option</option>
                            <option>CSE</option>
                            <option>IT</option>
                            <option>CCE</option>
                        </select>
                    </div>
                </div>
                <div className='input-box'>
                    <label htmlFor='dept'>Department</label>
                    <div className='column'>
                    <div className='select-box'>
                        <select required>
                            <option hidden>Choose an option</option>
                            <option>CSE</option>
                            <option>CSE AI/ML</option>
                            <option>IT</option>
                            <option>DSE</option>
                            <option>CCE</option>
                        </select>
                    </div>
                    </div>
                </div>
                </div> */}
                <div className='input-box'>
                    <label htmlFor='school'>School</label>
                    <input id='school' placeholder='school' type='text' name='school' value={school} onChange={f => setSchool(f.target.value)} />
                </div>
                 
                <div className='input-box'>
                    <label htmlFor='dept'>Receivers Email</label>
                    <input id='dept' placeholder='Receivers Email' type='text' name='department' value={depart} onChange={f => setDepart(f.target.value)} />
                </div>
                <div class="input-box">
                    <label htmlFor='sub'>Subject</label>
                    <input id='sub' name='subject' value={sub} onChange={f => setSubject(f.target.value)} type="text" placeholder="Enter subject of the note sheet"/>
                </div>
                <div class="input-box">
                    <label htmlFor='desc'>Description</label>
                    <input id='desc' name='description' value={desc} onChange={f => setDescription(f.target.value)} type="text" placeholder="description" />
                </div>
                <div class="input-box">
                    <label htmlFor='obj'>Objective</label>
                    <input id='obj' name='objective' value={obj} onChange={f => setObjective(f.target.value)} type="text" placeholder="objective" />
                </div>
                <div class="input-box">
                    <label htmlFor='details'>Details</label>
                    <input id='details' name='proposal_details' value={details} onChange={f => setDetails(f.target.value)} type="text" placeholder="proposal_details" />
                </div>
                {/* <div className='column'>
                    <div className='input-box'>
                        <label> Proposal Submitted By</label>
                        <input id='convener' name='convener' type='text' placeholder='Convener 1' />
                    </div>
                    <div className='input-box'>
                        <label> Proposal Submitted By</label>
                        <input id='convener' name='convener' type='text' placeholder='Convener 2' />
                    </div>
                </div> */}
                   <div class="input-box">
                    <label htmlFor='details'>Proposal Submitted By</label>
                    <input id='details' name='proposal_submitted_by' value={pro_sub} onChange={f => set_prosub(f.target.value)} type="text" placeholder="proposal_submitted_by" />
                </div>
                <div class="input-box">
                    <label htmlFor='details'>Sender's Email</label>
                    <input id='details' name='proposal_submitted_by' value={pro_sub1} onChange={f => set_prosub1(f.target.value)} type="text" placeholder="YourEmail" />
                </div>

              
               
                <div className='input-box'>
                    <label htmlFor='receivers'>Select Authorities for Approval</label>
                    <div className='select-box'>
                        <select id='receivers' name='receiver_1' value={receiver_1} onChange={f => setreceiver_1(f.target.value)} required>
                            <option hidden>Choose an option</option>
                            <option>HoD</option>
                            <option>Director</option>
                            <option>Others</option>
                        </select>
                    </div>
                </div>
                <div className='input-box'>
                    <label htmlFor='receivers2'>Select Authorities for Approval</label>
                    <div className='select-box'>
                        <select id='receivers2' name='receiver_2' value={receiver_2} onChange={f => setreceiver_2(f.target.value)} required>
                            <option hidden>Choose an option</option>
                            <option>HoD</option>
                            <option>Director</option>
                            <option>Others</option>
                        </select>
                    </div>
                </div>
                {/* <div className='gender-box'>
                    <h3>Select Authorities for Approval</h3>
                    <div class="gender-option">
                    <input type="checkbox" name="hod" id="hod" value="hod" />
                    <label htmlFor="hod">HoD</label>
                    <input type="checkbox" name="director" id="director" value="director" />
                    <label htmlFor="director">Director</label>
                    <input type="checkbox" name="others" id="others" value="others" />
                    <label htmlFor="others">Others</label>
                    </div>
                </div> */}
            <div class="buttons">
                <input onClick={notesheetupdate} type="submit" value="Create" />
                <input className="muted-button" type="button" value="Cancel" onClick={() => setIsCreating(false)} />
            </div>
            {/* <button onClick={notesheetupdate} className="btn btn-primary btn-block">Create</button> */}

        </form>
        </div>
    );
}

export default Create