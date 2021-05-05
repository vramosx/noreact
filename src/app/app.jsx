function App(props) {
    return (<div>
        <Block grey>
            <BlueCard id="activeUsers" prefix="+" number={350} suffix=" mil" delay={600} label1="Contas" label2={props.name} />
        </Block>
    </div>)
}