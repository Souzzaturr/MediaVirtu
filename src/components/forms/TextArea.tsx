import { useRef, useEffect, TextareaHTMLAttributes } from 'react';


interface textAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    value?: string,
    placeholder?: string,
    onChange?: (() => void) | ((e: any) => void),
    autoResize?: boolean,
    maxLines?: number,
}


export default function TextArea({value="", placeholder="", onChange, autoResize=true, maxLines, ...props}: textAreaProps) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const classe = "textarea " + props.className;

    useEffect(() => {
        if (textAreaRef.current && maxLines) {
            const textarea = textAreaRef.current;
            const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
            const maxHeight = maxLines * lineHeight;

            textarea.style.maxHeight = `${maxHeight}px`;
        }

    }, [maxLines])

    useEffect(() => {
        if (autoResize && textAreaRef.current) {
            const textarea = textAreaRef.current;            
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`
        }

    }, [value])
 
    return <>
        <textarea ref={textAreaRef} className={classe} value={value} placeholder={placeholder} onChange={onChange} {...props} ></textarea>
    </>
}