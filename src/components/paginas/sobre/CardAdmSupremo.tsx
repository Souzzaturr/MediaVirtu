interface props {
    adm: adm_card;
}

interface adm_card {
    nome: string;
    link_imagem: string;
    github: string;
    ifpb_codes: string;
    linkedin: string;
}

export default function CardAdmSupremo ({ adm }: props) {
    return <>
    <div className = "card-adm-supremo">
        <img className = "adm-img" src = { adm.link_imagem } alt = "imagem-adm"/>

        <div className = "info-adm">
            <h4 className = "goldman-bold">{ adm.nome }</h4>

            <div className = "social-icon-adm">
                <a className = "adm-social-icon" href = { adm.github } target = "blank">
                    <img className = "icone-github-adm" src = "icones/social_media/icone-github.png" alt = "icon-github"/>
                </a>

                <a className = "adm-social-icon" href = { adm.linkedin } target = "blank">
                    <img className = "icone-linkedin-adm" src = "icones/social_media/icone-linkedin.png" alt = "icon-linkedin"/>
                </a>
                
                <a className = "adm-social-icon" href = { adm.ifpb_codes } target = "blank">
                    <div className = "icone-ifpb-adm">
                        <div className = "bloco-icone-ifpb bloco-icone-ifpb-redondo"></div>
                        <div className = "bloco-icone-ifpb"></div>
                        <div className = "bloco-icone-ifpb"></div>
                        <div className = "bloco-icone-ifpb"></div>
                        <div className = "bloco-icone-ifpb"></div>
                        <div className = "bloco-icone-ifpb bloco-icone-ifpb-invisivel"></div>
                        <div className = "bloco-icone-ifpb"></div>
                        <div className = "bloco-icone-ifpb"></div>
                        <div className = "bloco-icone-ifpb"></div>
                        <div className = "bloco-icone-ifpb"></div>
                        <div className = "bloco-icone-ifpb"></div>
                        <div className = "bloco-icone-ifpb bloco-icone-ifpb-invisivel"></div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    </>
}