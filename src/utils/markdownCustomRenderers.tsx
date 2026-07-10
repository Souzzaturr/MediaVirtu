import "react";

export const customRenderers = {
     // Customização de títulos
    h1: ({ ...props }) => (
      <h1 className="text-3xl font-bold my-4" {...props} />
    ),
    h2: ({ ...props }) => (
      <h2 className="text-2xl font-semibold my-3" {...props} />
    ),
    h3: ({ ...props }) => (
      <h3 className="text-xl font-medium my-2" {...props} />
    ),
    
    // Customização de parágrafos normais
    p: ({ ...props }) => (
      <p className="text-base mb-2 leading-relaxed" {...props} />
    ),
    
    // Customização de links
    a: ({ ...props }) => (
      <a 
        className="link transition-colors"
        target="_blank" 
        rel="noopener noreferrer" 
        {...props} 
      />
    ),

    // Customização de imagens
    img: ({ ...props }) => (
      <img
        className=""
        loading="lazy"
        {...props}
      />
    ),
}