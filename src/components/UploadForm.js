import { useMemo, useContext } from "react";
import { Context } from "../context";
import Firestore from "../handlers/firestore";
import Storage from "../handlers/storage";

const { writeDoc } = Firestore;
const {uploadFile, downloadFile}= Storage;

 const Preview = () => {
    const {state} = useContext(Context);
    return (
         state.inputs.path && 
        <div
            className="roubded p-1 m-5"
            style= {{
                width: '30%',
                height: '300px',
                backgroundImage: `url(${ state.inputs.path})`,
                backgroundSize: 'cover',
            }}>
        </div>
    )
 }
export default function UploadForm() {

    const { dispatch, state} = useContext(Context);

    const handleOnChange = (e) => dispatch({ type:'setInputs', payload: { value: e}})


const handleOnSubmit = (e)=> {
    e.preventDefault();
    uploadFile(state.inputs).then(downloadFile).then(url => {
        writeDoc({...state.inputs, path: url}, "stocks").then(()=>{
            dispatch({type: 'setItem'})
            dispatch({type: 'collapse',payload: {bool: false}});
        })

    })

};

    const isDisabled = useMemo(()=>{
        return !!Object.values( state.inputs).some(input => !input)
    },[ state.inputs]);

    return (
        state.isCollapsed && 
      <>
        <p className="display-6 text-center mb-3">Upload Stock Image</p>
        <div className="mb-5 d-flex align-items-center justify-content-center">
          <Preview/>
          <form className="mb-2" style={{ textAlign: "left" }} onSubmit={handleOnSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="title"
                aria-describedby="text"
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-3">
              <input 
                type="file" 
                className="form-control" 
                name="file"
                onChange={handleOnChange}/>
              
            </div>
            <button
              type="submit"
              className="btn btn-success float-end"
              disabled={isDisabled}>
              Save and upload
            </button>
          </form>
        </div>
      </>
    );
  };