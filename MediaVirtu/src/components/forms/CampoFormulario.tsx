"use client";



interface props {
    label: {
        htmlFor?: string,
        className?: string,
        menssagem?: String
    },

    input: {
        type?: string,
        name?: string,
        id?: string,
        className?: string,
        value?: string,
        onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
        onBlur?: () => void,
        placeholder?: string
    },

    warningMessage: {
        show?: boolean,
        message?: string
    }
};



// Passar uma props contendo pelo menos: { label: {}, input: {}, warningMessage: {} };

export function CampoFormulario (props: props) {


    return <>
        <div className="campo-acesso">
            <label htmlFor = { props.label.htmlFor } className = { props.label.className } >{ props.label.menssagem }</label>

            <input type = { props.input.type } name = { props.input.name } id = { props.input.id } className = { props.input.className } value = { props.input.value } onChange = { props.input.onChange || (() => {}) } onBlur = { props.input.onBlur || (() => {}) } placeholder = { props.input.placeholder } />

            {
                props.warningMessage.show ?
                <p className = "menssagem-campo-incorreto" > { props.warningMessage.message } </p> : <></>
            }

        </div>
    </>
}