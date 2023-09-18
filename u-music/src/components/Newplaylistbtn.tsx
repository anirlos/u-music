interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Newplaylistbtn: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Newplaylistbtn;
