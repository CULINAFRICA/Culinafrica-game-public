import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type Props = { to?: string; className?: string };

const BackButton: React.FC<Props> = ({ to, className = "" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => (to ? navigate(to) : navigate(-1))}
      className={
        "flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 shadow " +
        className
      }
      aria-label="Revenir en arrière"
    >
      <ArrowLeft size={18} />
      <span>Retour</span>
    </button>
  );
};

export default BackButton;
