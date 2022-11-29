import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
function Collapsible() {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    function handleOnClick() {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally 
        setExpanded(!isExpanded);
    }
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps({ onClick: handleOnClick })}>
                {isExpanded ? '^' : '⌄'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    Now you can see the hidden content. <br /><br />
                    Click again to hide...
                </div>
            </div>
        </div>
    );
}

export default Collapsible