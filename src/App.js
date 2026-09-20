import React, { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    grade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.age || !formData.grade) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      ...formData
    };

    setStudents([...students, newStudent]);
    
    // Clear form after submission
    setFormData({ name: '', age: '', grade: '' });
  };

  const handleClear = () => {
    setFormData({ name: '', age: '', grade: '' });
  };

  const handleRemove = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>Student Entry Form</h1>
        <p className="subtitle">Add students and review the list below.</p>

        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="e.g. MS Dhoni"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                placeholder="e.g. 14"
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Grade</label>
              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
              >
                <option value="">Select grade</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
              </select>
            </div>
          </div>

          <div className="button-row">
            <button type="submit" className="btn-add">Add Student</button>
            <button type="button" className="btn-clear" onClick={handleClear}>Clear</button>
          </div>
        </form>

        <div className="list-container">
          {students.length === 0 ? (
            <div className="empty-state">
              No students added yet.
            </div>
          ) : (
            <table className="student-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Grade</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>Class {student.grade}</td>
                    <td>
                      <button 
                        className="btn-remove" 
                        onClick={() => handleRemove(student.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;