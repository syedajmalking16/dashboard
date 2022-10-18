function Input(props){
    const {label, onChange, value} =props;

    return <input value={value} placeholder={label} onChange={onChange} />

}

function Button (props){
    const {label, onClick} = props;
    return( <>
    <button onClick={onClick}>{label}</button>
    </>
);
}

export {Input,Button};