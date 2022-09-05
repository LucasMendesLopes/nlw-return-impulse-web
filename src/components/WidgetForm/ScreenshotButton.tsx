import { useState } from "react";

import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { Loading } from "../Loading";


interface ScreenshotButtonProps {
    onScreenshotTook: (screenshot: string | null) => void;
    screenshot: string | null;
}

export function ScreenshotButton({ onScreenshotTook, screenshot }: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    const handleTakeScreenshot = async () => {
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector("html")!);
        const base64 = canvas.toDataURL("img/png");

        onScreenshotTook(base64);
        setIsTakingScreenshot(false);
    };

    if (screenshot) {
        return (
            <button
                type="button"
                className="p-1 w-10 h-10 flex items-end justify-end rounded border-transparent text-zinc-400 hover:text-zinc-100 transition-colors"
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: "right, bottom",
                    backgroundSize: 180
                }}
                onClick={() => onScreenshotTook(null)}
            >
                <Trash weight="fill" />
            </button>
        )
    }

    return (
        <button
            type="button"
            className="p-2 bg-zinc-800 rounded border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 text-zinc-100 transition-colors"
            onClick={handleTakeScreenshot}
        >
            {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
        </button>
    )
}