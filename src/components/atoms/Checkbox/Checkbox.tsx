
interface CheckboxProps {
    isChecked: boolean,
    handleCheck: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({isChecked, handleCheck}) => {
    return (
        <input type="checkbox" defaultChecked={isChecked} onChange={handleCheck} />
    )
} 
    
export default Checkbox;