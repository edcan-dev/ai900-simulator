import { Button } from "../ui/button";

interface Props {
  selectedOption: string | string[];
  onClick: () => void;
}

export const NextQuestionButton = ({ selectedOption, onClick }: Props) => {
  const isDisabled =
    (typeof selectedOption === "string" && selectedOption === "") ||
    (Array.isArray(selectedOption) && selectedOption.length === 0);

  return (
    <Button
      type="submit"
      size={"lg"}
      disabled={isDisabled}
      className={`bg-gradient-primary-to-accent text-foreground-secondary font-text py-6 transition-all ${
        selectedOption ? "cursor-pointer" : "cursor-not-allowed opacity-50"
      }`}
      onClick={onClick}
    >
      Siguente
    </Button>
  );
};
