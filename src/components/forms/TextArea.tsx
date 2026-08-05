import React, { useRef, useEffect, TextareaHTMLAttributes, ReactNode } from 'react';


interface textAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    value?: string,
    placeholder?: string,
    onChange?: (() => void) | ((e: any) => void),
    autoResize?: boolean,
    maxLines?: number,
    ref?: any
}


export default function TextArea({value="", className="", placeholder="", onChange, autoResize=true, maxLines, ref, ...props}: textAreaProps) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const classe = "textarea " + className;

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

    function multipleRef(node: HTMLTextAreaElement | null) {
        textAreaRef.current = node;

        if (ref) {
            ref.current = node;
        }
    }
 
    return <>
        <textarea ref={(node) => multipleRef(node)} className={classe} value={value} placeholder={placeholder} onChange={onChange} {...props} ></textarea>
    </>
}