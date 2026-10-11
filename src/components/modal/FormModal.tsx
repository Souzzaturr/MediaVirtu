import SimpleModal from "@/src/components/modal/SimpleModal"
import { usePopupStore } from "@/src/store/usePopupStore";
import { FormHTMLAttributes } from "react"


interface formModalProps extends FormHTMLAttributes<HTMLFormElement> {
}


export default function FormModal({...props}: formModalProps) {
    const { show, children } = usePopupStore((state) => state.modal);
    const close = usePopupStore((state) => state.closeModal);

    return <SimpleModal classeAdicionalFundo={show ? "" : " hide"} closeModalFunction={close} >
        {children}
    </SimpleModal>
}