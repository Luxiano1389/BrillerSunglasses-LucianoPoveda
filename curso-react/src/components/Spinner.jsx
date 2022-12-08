import React from "react";

const Spinner = () => {
    return (
        <div class="d-flex justify-content-center align-items-center">
            <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;