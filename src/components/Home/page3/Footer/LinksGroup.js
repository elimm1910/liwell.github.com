import React from 'react';

function LinksGroup({ title, link1, link2, link3 }) {
    return (
            <div>
                <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                    {title}
                </h5>
                <ul className="list-unstyled">
                    <li>
                        <a href="#!">{link1}</a>
                    </li>
                    <li>
                        <a href="#!">{link2}</a>
                    </li>
                    <li>
                        <a href="#!">{link3}</a>
                    </li>
                </ul>
            </div>
    );
}


export default LinksGroup;