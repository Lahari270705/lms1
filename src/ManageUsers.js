import React, { useState } from 'react';

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', role: 'Student' },
    { id: 2, name: 'Bob', role: 'Instructor' },
  ]);
  const [newUser, setNewUser] = useState({ name: '', role: '' });

  const handleAddUser = () => {
    if (newUser.name && newUser.role) {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
      setNewUser({ name: '', role: '' });
    } else {
      alert('Please provide valid user details');
    }
  };

  const handleRemoveUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>Manage Users</h1>
      <h2>Current Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role}{' '}
            <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Add New User</h2>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <select
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
      >
        <option value="">Select Role</option>
        <option value="Student">Student</option>
        <option value="Instructor">Instructor</option>
        <option value="Admin">Admin</option>
      </select>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default ManageUsers;
