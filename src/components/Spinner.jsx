import { LuLoader2 } from "react-icons/lu";

const Spinner = ({ classes }) => (
  <LuLoader2 className={`h-8 w-8 animate-spin ${classes} text-slate-300`} />
);

export default Spinner;