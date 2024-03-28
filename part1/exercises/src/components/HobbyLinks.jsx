import React from 'react';
 
 export default function HobbyLinks(){
    let hobbyLinks =["https://www.michaels.com","https://www.amazon.com"]

    return(
        <div>
        <h2>My Hobby Links</h2>
        {/* Using map to generate <a> tags for each hobby link */}
        {hobbyLinks.map((link, index) => (
            <div key={index}>
                <a href={hobbyLinks[0]}>Michaels</a>
                <a href={hobbyLinks[1]}>Amazon</a>
            </div>
        ))}
    </div>
    )
}
