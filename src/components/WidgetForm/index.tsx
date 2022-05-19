import { CloseButton } from "../CloseButton";

import bugUrl from "../../assets/bug.svg";
import ideaUrl from "../../assets/idea.svg";
import ThoughtUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "problema",
    image: {
      src: bugUrl,
      alt: "Bugs"
    }
  },
  IDEA: {
    title: "ideia",
    image: {
      src: ideaUrl,
      alt: "Ideias"
    }
  },
  OTHER: {
    title: "outro",
    image: {
      src: ThoughtUrl,
      alt: "Outros"
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setfeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleFeedbackRestart() {
    setFeedbackSent(false)
    setfeedbackType(null)
  }

  return (
    <div 
    className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
    >
    {feedbackSent ? (
        <FeedbackSucessStep onFeedbackRestarting={handleFeedbackRestart}/>
      ) : (
      <>
        {!feedbackType ? 
        <FeedbackTypeStep onChangeFeedback={setfeedbackType} />
        :(
          <FeedbackContentStep 
            feedbackType={feedbackType}
            onFeedbackRestarting={handleFeedbackRestart}
            onFeedbackSent={() => setFeedbackSent(true)}
          />
        )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
      Feito com ♥ pela <a className="underline underline-offset-2" href="#">Rocketseat</a>
      </footer>
    </div>
  )
}