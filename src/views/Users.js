import React from 'react'

import { connect } from 'react-redux'

const Users = (props) => (
    <div>
        {
            props._isUsersLoading ?
                'loading'
                :
                props._users ?
                    props._users.results.map(el =>
                        <div>
                            <img src={el.picture.medium} />
                            <div>
                                {el.name.first}
                            </div>
                            {el.name.last}
                        </div>)
                    :
                    'no users'
        }
    </div>
)

const mapStateToProps = state => ({
    _users: state.fetchUsers.users,
    _isUsersLoading: state.fetchUsers.isUsersLoading
})



export default connect(mapStateToProps)(Users)