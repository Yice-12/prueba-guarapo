import "./footer.scss";

const NAME_SPACE = "footer";

export const Footer = () => {
  return (
    <div className={`${NAME_SPACE}`}>
      <div className={`${NAME_SPACE}__content`}>
        <p>Make with ❤️ for the MobProgramming team</p>
      </div>
    </div>
  );
};
