export default function card_adm_supremo (lista_adms) {
    return lista_adms.map((adm) => `
    <div class = "card-adm-supremo">
        <img class = "adm-img" src = "${ adm.link_imagem }" alt = "imagem-adm">

        <div class = "info-adm">
            <h4 class = "goldman-bold">${ adm.nome }</h4>

            <div class = "social-icon-adm">
                <a class = "adm-social-icon" href = "${ adm.github }" target = "blank">
                    <img class = "icone-github-adm" src = "icones/social_media/icone-github.png" alt = "icon-github">
                </a>

                <a class = "adm-social-icon" href = "${ adm.linkedin }" target = "blank">
                    <img class = "icone-linkedin-adm" src = "icones/social_media/icone-linkedin.png" alt = "icon-linkedin">
                </a>
                
                <a class = "adm-social-icon" href = "${ adm.ifpb_codes }" target = "blank">
                    <div class = "icone-ifpb-adm">
                        <div class = "bloco-icone-ifpb bloco-icone-ifpb-redondo"></div>
                        <div class = "bloco-icone-ifpb"></div>
                        <div class = "bloco-icone-ifpb"></div>
                        <div class = "bloco-icone-ifpb"></div>
                        <div class = "bloco-icone-ifpb"></div>
                        <div class = "bloco-icone-ifpb bloco-icone-ifpb-invisivel"></div>
                        <div class = "bloco-icone-ifpb"></div>
                        <div class = "bloco-icone-ifpb"></div>
                        <div class = "bloco-icone-ifpb"></div>
                        <div class = "bloco-icone-ifpb"></div>
                        <div class = "bloco-icone-ifpb"></div>
                        <div class = "bloco-icone-ifpb bloco-icone-ifpb-invisivel"></div>
                    </div>
                </a>
            </div>
        </div>
    </div>`
    ).join('');
}