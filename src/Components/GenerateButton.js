import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const GenerateButton = () => {
    return (
        <div>
           <Button className="w-100 btn btn-lg btn-dark">
           <Link to="/generate"> Generate Business Plan</Link>
         
        </Button>
        </div>
    )
}

export default GenerateButton
