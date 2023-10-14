import React from "react";


const Input = ({ label, type, name, value, onChange}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

const Button = ({ type, label, onClick }) => {
  return (
    <button type={type}  onClick={onClick} className="btn btn-primary">
      {label}
    </button>
  );
}



const Page = () => {  
    const [inputValue, setInputValue] = React.useState('');
    const [results, setResults] = React.useState('');
    const handleClick = (e) => {
        e.preventDefault();
        showResults(inputValue);
    }
    const  showResults = (values) => {
        const items = 
        setResults(items.filter(item => {
            return item.toLocaleLowerCase().includes(values.toLocaleLowerCase())
        }));
    } 
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6">
            <Input label="First Name" type="text" name="firstName" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <Button type="submit" label="Search" onClick={handleClick}/>
            <p>{JSON.stringify(results)}</p>
            </div>
        </div>
        </div>
    );
}


export default Page;