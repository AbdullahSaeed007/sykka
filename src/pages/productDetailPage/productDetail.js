import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sidebar from "../../components/sideBarComponent/sidebar";
import Navbar from "../../components/navBarComponent/navbar";
import { useNavigate } from "react-router-dom";
import "../../styles/ProductDetail.css";

// Draggable Input Types
const InputType = ({ type, label }) => {
  const [, drag] = useDrag(() => ({
    type: "input",
    item: { field_type: type, field_name: label, is_required: false },
  }));

  return (
    <div ref={drag} className="draggable-input">
      {label}
    </div>
  );
};

// Form Builder Component
const FormBuilder = ({ fields, updateField, removeField }) => {
  const navigate = useNavigate();
  const [, drop] = useDrop(() => ({
    accept: "input",
    drop: (item) => updateField(item),
  }));

  return (
    <div ref={drop} className="form-builder">
      <h3>Form Design</h3>
      {fields.length === 0 ? (
        <p className="empty-form-message">Drag and drop to create a form</p>
      ) : (
        <>
          {fields.map((field, index) => (
            <div key={index} className="form-field">
              <button
                className="delete-button"
                onClick={() => removeField(index)}
              >
                <img
                  src="/icons/bin.png"
                  alt="Remove"
                  className="delete-icon"
                />
              </button>
              <label>
                Field Name:
                <input
                  type="text"
                  value={field.field_name}
                  onChange={(e) =>
                    updateField({ ...field, field_name: e.target.value }, index)
                  }
                  placeholder="Enter field name"
                />
              </label>
              <label>
                Field Type:
                <select
                  value={field.field_type}
                  onChange={(e) =>
                    updateField({ ...field, field_type: e.target.value }, index)
                  }
                >
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                  <option value="email">Email</option>
                  <option value="checkbox">Checkbox</option>
                  <option value="radio">Radio</option>
                  <option value="date">Date</option>
                </select>
              </label>
              <label>
                Required:
                <input
                  type="checkbox"
                  checked={field.is_required}
                  onChange={(e) =>
                    updateField(
                      { ...field, is_required: e.target.checked },
                      index
                    )
                  }
                />
              </label>
            </div>
          ))}
          {/* Submit Button */}
          <button
            className="submit-button"
            onClick={() => navigate("/product-offer")}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const [fields, setFields] = useState([]);

  const updateField = (newField, index) => {
    if (index !== undefined) {
      // Update an existing field
      setFields((prevFields) => {
        const updatedFields = [...prevFields];
        updatedFields[index] = newField;
        return updatedFields;
      });
    } else {
      // Add a new field
      setFields((prevFields) => [...prevFields, newField]);
    }
  };

  const removeField = (index) => {
    setFields((prevFields) => prevFields.filter((_, i) => i !== index));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="content-wrapper">
            <div className="product-detail">
              {/* Left Side: Drag-and-Drop Options */}
              <div className="input-options">
                <h3>Input Options</h3>
                <InputType type="text" label="Text Input" />
                <InputType type="number" label="Number Input" />
                <InputType type="email" label="Email Input" />
                <InputType type="checkbox" label="Checkbox" />
                <InputType type="radio" label="Radio Button" />
                <InputType type="date" label="Date Picker" />
              </div>

              {/* Right Side: Form Builder */}
              <FormBuilder
                fields={fields}
                updateField={updateField}
                removeField={removeField}
              />
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default ProductDetail;
