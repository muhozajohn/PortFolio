import CustomButton from "./CustomButton";

const WorkCard = ({
  image,
  name,
  type,
  link,
  isExternal,
  description,
  isButton,
}) => {
  return (
    <div className="p-2 flex h-fit flex-col gap-2 bg-color-primary-variant break-inside-avoid rounded-md">
      <div className="rounded-md flex justify-center items-center">
        <img
          className="rounded-md h-full w-full object-cover"
          src={image}
          alt={name}
        />
      </div>
      <div>
        <p className="text-slate-200 text-xs font-semibold">{name}</p>
        {description && (
          <p className="text-color-light text-xs font-medium leading-loose">
            {description}
          </p>
        )}
        {type && <p className="text-color-light text-xs font-medium">{type}</p>}
      </div>
      {isButton && (
        <CustomButton
          link={link}
          isExternal={isExternal}
          title="Live Demo"
          otherStyles="!text-xs !text-color-light"
          buttonType="button"
        />
      )}
    </div>
  );
};

export default WorkCard;
