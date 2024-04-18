interface CustomButtonProps {
  CustomButtonClass?: string;
  onClick: () => void;
  childern: string;
}
function CustomButton({
  CustomButtonClass,
  onClick,
  childern,
}: CustomButtonProps) {
  return (
    <button
      className={`${CustomButtonClass} p-1 w-full rounded-lg
   bg-black text-white`}
      onClick={onClick}
    >
      {childern}
    </button>
  );
}

export default CustomButton;
