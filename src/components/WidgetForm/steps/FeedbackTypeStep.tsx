import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onChangeFeedback: (feedbackType: FeedbackType) => void;
}

export function FeedbackTypeStep({ onChangeFeedback }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
      { Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button 
            onClick={() => onChangeFeedback(key as FeedbackType)}
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={value.image.src} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        );
      })}
      </div>
    </>
  )
}


