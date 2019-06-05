import React, { useState } from "react";
import "./searchparams.css";

const SearchParams = () => {
    const [act, updateAct] = useState("");

    return (
        <div className="search-params">
            {act}
            <form>
                <label htmlFor="act">Act
                <input 
                    id="act"
                    value={act}
                    placeholder="Act"
                    onChange={e => updateAct(e.target.value)}
                />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;