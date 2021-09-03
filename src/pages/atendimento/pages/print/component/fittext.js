import { Box } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";

export default function FitText({ texto, inicial, maxfont, erro, padding }) {

    const insideRef = useRef(null);
    const outsideRef = useRef(null);
    const [fontsize, setFontSize] = useState(inicial)

    useEffect(() => {
        if ((insideRef.current?.offsetHeight + erro) < outsideRef.current?.offsetHeight && fontsize < maxfont) {
            setFontSize(fontsize + 1)
        }
    }, [erro, fontsize, maxfont]);

    return (
        <>
            <Box
                p={padding}
                height={1}
                style={{ whiteSpace: 'pre-wrap' }}
                ref={outsideRef}
            >
                <Box
                    fontSize={fontsize}
                    ref={insideRef}
                >
                    {texto}
                </Box>
            </Box>
        </>
    )
}
