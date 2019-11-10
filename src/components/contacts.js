import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-body">
                        <h5 className="card-title">{contact.id}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{contact.size}</h6>
                        {/*<p class="card-text">{contact.company.catchPhrase}</p>*/}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contacts