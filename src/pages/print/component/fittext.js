import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function FitText({ texto, inicial, maxfont, erro, padding, align }) {

    const insideRef = useRef(null);
    const outsideRef = useRef(null);
    const [fontsize, setFontSize] = useState(inicial)

    useEffect(() => {
        if ((insideRef.current?.offsetHeight + erro) < outsideRef.current?.offsetHeight && fontsize < maxfont) {
            setFontSize(fontsize + 0.5)
        }
    }, [erro, fontsize, maxfont]);

    return (
        <>
            <Box
                p={padding}
                height={1}
                textAlign={align}
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
