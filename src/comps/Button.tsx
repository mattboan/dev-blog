import "../css/button.css";

export interface ButtonProps {
    onClick?: Function;
    children: React.ReactNode;
    full_width?: boolean;
    delete?: boolean;
}

/**
 * Comp for quickly creating buttons
 */
export const Button = (props: ButtonProps) => {
    return (
        <div className={`${props?.full_width && "btn-full-width"} btn-wrapper ${props?.delete && "btn-remove"}`}>
            <button onClick={() => props?.onClick && props.onClick()}>{props.children}</button>
        </div>
    );
};
