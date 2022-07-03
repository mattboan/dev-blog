import "../css/spacer.css";

const DEF_HEIGHT = 30;

export interface Props {
    height?: number;
}

export const Spacer = (props: Props) => {
    
    return <div className="spacer" style={{
        marginTop: `${props.height || DEF_HEIGHT}px`}}
    />
};
