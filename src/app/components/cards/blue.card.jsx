function BlueCard(props) {
    const { id, prefix, suffix, icon, label1, label2 } = props;

    return (
        <div onclick={() => { alert('click me')  }} class="blue-card" style="margin-right: 40px">
            <div class="blue-card-value">
            <span>{prefix}</span>
            <span id={id}>{props.number}</span>
            <span>{suffix}</span>
            </div>
            <img alt="Ícone" src={icon ?? ''} />
            <p>
            {label1}<br />{label2}
            </p>
        </div>
    );
}
