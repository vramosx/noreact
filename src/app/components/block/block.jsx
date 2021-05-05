
function Block(props) {
    const { children, background, backgroundMobile, grey, halfSize, id, classname, ...otherProps } = props ?? {};

    return (
        <div id={id} class={`block ${(grey ? 'grey ' : '') + (halfSize ? 'halfSize ' : '') + (classname ?? '')}`} {...otherProps}>
            {
                background ?
                <div class="block-bg-container">
                    <img alt="Imagem de fundo" src={backgroundMobile} class="block-bg only-mobile" />
                    <img alt="Imagem de fundo" src={background} class="block-bg only-desktop" />
                </div> :
                null
            }
            {props.children}
        </div>
    )
}