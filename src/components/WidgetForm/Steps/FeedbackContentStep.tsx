import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackTypeContentStepProps {
    feedbackType: FeedbackType,
    onFeedbackRestartRequested: () => void,
    onFeedbackSent: () => void
};

export function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent
}: FeedbackTypeContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState<string>("");

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    const handleSubmitFeedback = async (e: FormEvent) => {
        e.preventDefault();

        console.log({
            screenshot,
            comment
        });

        onFeedbackSent()
    }

    return (
        <>
            <header>
                <button
                    type="button"
                    className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton />
            </header>

            <form className="my-4 w-full" onSubmit={(e) => handleSubmitFeedback(e)}>
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] rounded text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo..."
                    onChange={(e) => setComment(e.target.value)}
                />

                <footer className="flex gap-[10px] mt-2">
                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />

                    <button
                        type="submit"
                        className="p-2 bg-brand-500 rounded border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                        disabled={comment.length === 0}
                    >
                        Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    )
}