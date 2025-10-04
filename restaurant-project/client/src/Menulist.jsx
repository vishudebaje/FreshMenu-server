import React from 'react';

function Menulist(menudata) {

    const renderList = ({ menudata }) => {
        if (menudata) {
            return menudata.map((value) => {
                return (
                    <div>
                        <div key={value.id}>
                            <img src={value.img} alt={value.name} />
                            <br />
                            <h2>Type is : {value.type}</h2>
                            <br />
                            <p>{value.description}</p>
                            <h4>rating : {value.rating}</h4>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <div>
            {renderList(menudata)}
        </div>
    )
}

export default Menulist;