import successImageUrl from "../../../assets/success.svg"
import { CloseButton } from "../../CloseButton"

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({
    onFeedbackRestartRequested
}: FeedbackSuccessStepProps) {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <img src={successImageUrl} alt="imagem de sucesso" className="w-10 h-10" />

                <span className="text-xl mt-2">Agradecemos o feedback!</span>

                <button
                    type="button"
                    className="py-2 px-6 rounded mt-6 bg-zinc-800 border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
                    onClick={onFeedbackRestartRequested}
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    )
}