import Navbar from "./Navbar";
import UploadForm from "./UploadForm";

function Layout (props) {
    return (
    <>
    <Navbar />
        <div className=" container mt-5">
        <button className='btn btn-success float-end' onClick={()=> props.toggle(!props.state.isCollapsed)}> {props.state.isCollapsed ? 'close' : 'Add'} </button>
        <div className='clearfix mb-4'></div>
            <UploadForm 
                inputs={props.state.inputs}
                isVisible={props.state.isCollapsed}
                onChange={props.onChange}
                onSubmit={props.onSubmit}/>
            { props.children}
        </div>
        
    </>
    )
};

export default Layout;